/*
* Assets Streamer
*/
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n2-c-nl.spotoption.com'),
    mysql = require('mysql'),
    through2Concurrent = require('through2-concurrent'),
    helper = require('./mysql-helper'),
    streamify = require('stream-from-array'),
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'systems_trading_signals'
    }),
    cors = require('cors');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
var assetsRates = {};
var assetTicks = {};

io.on('connection', function (socket) {
    for(var asset in assetsRates) {
        socket.emit('feed_' + assetsRates[asset].id, assetTicks[assetsRates[asset].id], assetsRates[asset].rate);
    }

    setInterval(function () {
        for(var asset in assetsRates) {
            socket.emit('feed_' + assetsRates[asset].id, assetTicks[assetsRates[asset].id], assetsRates[asset].rate);
        }
    }, 2000);
});

connection.query('SELECT * FROM assets', function(err, rows) {
    socket.on('connect', function () {
        var assets = [];
        rows.forEach(function (row) {
            assets.push('feed_asset_' + row.socket_id + '_' + row.socket_id + '_DemoSite');
            assetsRates[row.socket_id] = row;
        });

        socket.emit('add', assets);
    });

    socket.on('update', function (newRate) {
        for(var asset in newRate)
        {
            var rate = newRate[asset];

            asset = asset.split('_');
            asset = asset[3];

             if (asset && assetsRates[asset]) {
                 assetsRates[asset].rate = rate.rate;

                 var last10Minutes = new Date();
                 last10Minutes.setMinutes(Math.floor(last10Minutes.getMinutes() / 10) * 10);
                 last10Minutes.setSeconds(0);

                 assetTicks[assetsRates[asset].id] = assetTicks[assetsRates[asset].id] || {};
                 assetTicks[assetsRates[asset].id][last10Minutes.toMysqlFormat()] = assetTicks[assetsRates[asset].id][last10Minutes.toMysqlFormat()] || {};
                 var assetTick = assetTicks[assetsRates[asset].id][last10Minutes.toMysqlFormat()];

                 assetTick.live = rate.rate;
                 assetTick.close = rate.rate;
                 assetTick.high = ! assetTick.high || assetTick.high < rate.rate ? rate.rate : assetTick.high;
                 assetTick.low = ! assetTick.low || assetTick.low > rate.rate ? rate.rate : assetTick.low;

                 assetTicks[assetsRates[asset].id][last10Minutes.toMysqlFormat()] = assetTick;

                 io.emit('feed_' + assetsRates[asset].id, assetTicks[assetsRates[asset].id], assetsRates[asset].rate);
             }
        }
    });
});

getNewRates();
updateAssets();
setTimeout(updateAssets, 30000);
setInterval(getNewRates, 30000);

function getNewRates() {
    connection.query('SELECT * FROM assets_prices LIMIT 3000', function(err, rows) {
        rows.forEach(function (row) {
            assetTicks[row.asset_id] = assetTicks[row.asset_id] || {};
            assetTicks[row.asset_id][row.last_tick.toMysqlFormat()] = row;
        });
    });
}


function updateAssets() {
    var assetsRatesArr = [];
    for(var asset in assetsRates) {
        var assetRate = assetsRates[asset];

        assetsRatesArr.push({
            id: assetRate.id,
            rate: assetRate.rate,
            socket_id: assetRate.socket_id
        })
    }

    var idx = 1;
    streamify.obj(assetsRatesArr)
        .pipe(through2Concurrent.obj( {maxConcurrency: 30},
            function (chunk, enc, callback) {
                var self = this;
                idx += 1;

                connection.query('UPDATE assets SET assets.rate = ' + chunk.rate + ' WHERE assets.id = ' + chunk.id, function(err, rows) {
                    var last10Minutes = new Date();
                    last10Minutes.setMinutes(Math.floor(last10Minutes.getMinutes() / 10) * 10);
                    last10Minutes.setSeconds(0);


                    if (chunk.id == 633)
                    {
                        console.log('Updating: ' + last10Minutes.toMysqlFormat());
                    }
                    connection.query('INSERT INTO assets_prices(asset_id, high, low, open, close, live, last_tick) VALUES (' + chunk.id + ',' + chunk.rate + ',' + chunk.rate + ',' + chunk.rate + ',' + chunk.rate + ',' + chunk.rate + ',"' + last10Minutes.toMysqlFormat() + '") ON DUPLICATE KEY UPDATE live=' + chunk.rate + ', close=' + chunk.rate + ', high = IF(' + chunk.rate + ' > high, ' + chunk.rate + ', high), low = IF(' + chunk.rate + ' < low, ' + chunk.rate + ', low)', function(err, rows) {
                        callback();
                        if (idx >= assetsRatesArr.length) {
                            self.push(null);
                            setTimeout(updateAssets, 30000);
                            console.log('Settings TIMEOUT')
                        }
                    });
                });
            }));
}
/*
* Assets Streamer
*/
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n2-c-nl.spotoption.com'),
    mysql = require('mysql'),
    app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    through2Concurrent = require('through2-concurrent'),
    helper = require('./mysql-helper'),
    streamify = require('stream-from-array'),
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'systems_trading_signals'
    });


var assetsRates = {};
var assetTicks = {};
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
             }
        }
    });
});

getNewRates();
updateAssets();
setTimeout(updateAssets, 50000);
setInterval(getNewRates, 50000);

function getNewRates() {
    connection.query('SELECT * FROM assets_prices', function(err, rows) {
        rows.forEach(function (row) {
            assetTicks[row.last_tick.toMysqlFormat()] =
        })
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
        .pipe(through2Concurrent.obj( {maxConcurrency: 2},
            function (chunk, enc, callback) {
                var self = this;
                idx += 1;

                connection.query('UPDATE assets SET assets.rate = ' + chunk.rate + ' WHERE assets.id = ' + chunk.id, function(err, rows) {
                    var last10Minutes = new Date();
                    last10Minutes.setMinutes(Math.floor(last10Minutes.getMinutes() / 10) * 10);
                    last10Minutes.setSeconds(0);
                    connection.query('INSERT INTO assets_prices(asset_id, price, last_tick) VALUES (' + chunk.id + ',' + chunk.rate + ',"' + last10Minutes.toMysqlFormat() + '") ON DUPLICATE KEY UPDATE price=' + chunk.rate, function(err, rows) {
                        callback();
                        if (idx >= assetsRatesArr.length) {
                            self.push(null);
                            setTimeout(updateAssets, 2000);
                        }
                    });
                });
            }));
}
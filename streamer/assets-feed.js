/**
 * Created by roeehershko on 5/25/16.
 */
var config = require('./config');

var socket = require('./socket').getSocket(),
    mysql = require('mysql'),
    through2Concurrent = require('through2-concurrent'),
    helper = require('./mysql-helper'),
    streamify = require('stream-from-array'),
    connection = mysql.createConnection(config.mysql),
    cors = require('cors'),
    async = require('async');

var AssetFeed = function() {

    var self = this;
    this.assetsData = {};
    this.callbacks = [];
    this.dbIdsBySocketId = {};

    // Update DB Assets
    setInterval(function() {
        self.updateDB();
    }, 5000);
    socket.on('connect', function () {
        connection.query('SELECT * FROM assets', function(err, dbAssets) {
            var last24Hrs = new Date();
            last24Hrs = last24Hrs.getTime();
            last24Hrs.setDate(last24Hrs.getDate() - 1);

            connection.query('SELECT assets_prices.*, assets.socket_id FROM assets_prices INNER JOIN assets ON assets.id = assets_prices.asset_id WHERE last_tick > "' + self.roundDate(last24Hrs) + '"', function(err, assetsPrices) {
                var assets = [];
                dbAssets.forEach(function (row) {
                    self.assetsData[row.socket_id] = {};
                    assets.push('feed_asset_' + row.socket_id + '_' + row.socket_id + '_DemoSite');
                    self.dbIdsBySocketId[row.socket_id] = row.id;

                    self.emitSubscribes(row.socket_id, row.rate);
                });

                assetsPrices.forEach(function(row) {
                    self.assetsData[row.socket_id] = self.assetsData[row.socket_id] || {};
                    self.assetsData[row.socket_id][self.roundDate(row.last_tick)] = {
                        high: row.high,
                        low: row.low,
                        open: row.open,
                        close: row.close
                    };
                });


                socket.emit('add', assets);

                socket.on('update', function (newRate) {
                    for(var asset in newRate)
                    {
                        var rate = newRate[asset].rate;
                        asset = asset.split('_');
                        asset = asset[3];
                        if (asset == 91) {
                            console.log('UPDATE:' + rate);
                        }
                        var rounded = self.roundDate((new Date()).getTime());

                        if (self.assetsData[asset][rounded]) {
                            var assetTick = self.assetsData[asset][rounded];
                            self.assetsData[asset][rounded] = {
                                high: rate > assetTick.high ? rate : assetTick.high,
                                low: rate < assetTick.low ? rate : assetTick.low,
                                open: assetTick.open,
                                close: rate
                            };

                        }
                        else {
                            self.assetsData[asset][rounded] = {
                                high: rate,
                                low: rate,
                                open: rate,
                                close: rate
                            };
                        }

                        self.emitSubscribes(asset, rate);
                    }
                });
            });
        });
    });

};

AssetFeed.prototype.roundDate = function(date) {
    var last10Minutes = new Date();
    last10Minutes.setTime(date);

    last10Minutes.setMinutes(Math.floor(last10Minutes.getMinutes() / 10) * 10);
    last10Minutes.setMilliseconds(0);
    last10Minutes.setSeconds(0);

    return last10Minutes.toMysqlFormat();
};

AssetFeed.prototype.subscribe = function(callback) {
    this.callbacks.push(callback);

    for(var asset in this.dbIdsBySocketId)
    {
        if (this.assetsData[asset] && this.assetsData[asset][this.roundDate((new Date()).getTime())]) {
            callback(asset, this.assetsData[asset], this.assetsData[asset][this.roundDate((new Date()).getTime())].close)
        }
    }
};

AssetFeed.prototype.emitSubscribes = function(asset, newRate) {
    var self = this;
    self.callbacks.forEach(function (val) {
        val(asset, self.assetsData[asset], newRate);
    })
};

AssetFeed.prototype.updateDB = function() {
    var self = this;

    async.forEachOfLimit(this.assetsData, 1, function(pricesByDate, asset, callback) {
        for(var priceDate in pricesByDate)
        {
            var price = pricesByDate[priceDate];

            if (priceDate == self.roundDate((new Date()).getTime()))
            {
                connection.query('INSERT INTO assets_prices(asset_id, high, low, open, close, live, last_tick) VALUES (' + self.dbIdsBySocketId[asset] + ',' + price.high + ',' + price.low + ',' + price.open + ',' + price.close + ',' + price.close + ',"' + priceDate + '") ON DUPLICATE KEY UPDATE live=' + price.close + ', close=' + price.close + ', high = IF(' + price.close + ' > high, ' + price.close + ', high), low = IF(' + price.low + ' < low, ' + price.low + ', low)', function(err, rows) {
                    callback();
                });
            }
        }
    });
};


module.exports = AssetFeed;
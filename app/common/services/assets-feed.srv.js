/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeedService', function ($timeout) {
        var socket = io('http://52.48.242.152:8080');

        socket.emit('feed-all');

        var callbacks = {};
        socket.on('feed', function (asset, data, current) {
            data = JSON.parse(data);
            emitCallbacks(asset, data, current);
        });

        var addCallback = function (asset, callback) {
            callbacks[asset] = callbacks[asset] || [];
            callbacks[asset].push(callback);
        };

        var emitCallbacks = function (asset, data, current) {
            if (callbacks[asset] && callbacks[asset].length) {
                callbacks[asset].forEach(function(callback) {
                    callback(asset, data, current);
                    console.log(asset, data, current);
                });
            }
        };

        return {
            subscribe: function (callback) {
                var currentAsset;

                return {
                    setAsset: function (newAsset) {

                        if (currentAsset) {
                            for (var idx in callbacks[currentAsset]) {
                                var oldCallback = callbacks[currentAsset][idx];
                                if (oldCallback == callback) {
                                    delete callbacks[currentAsset][idx];
                                }
                            }
                        }

                        addCallback(newAsset, callback);
                        socket.emit('requestFeed', newAsset);
                        currentAsset = newAsset;
                    }
                }
            }
        }
    });
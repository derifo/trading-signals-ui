/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeed', function ($timeout) {
        var socket = io('http://52.48.242.152:8080');

        socket.emit('feed-all');

        var feeds = {};
        var callbacks = {};
        var feedAsset = function(asset) {
            // Validate only one feed
            if (feeds[asset]) return;

            socket.emit('add-feed', [ asset ]);
            socket.on('feed_' + asset, function (data, current) {
                data = JSON.parse(data);
                emitCallbacks(asset, data, current);
            });

            feeds[asset] = true;
        };

        var addCallback = function (asset, callback) {
            callbacks[asset] = callbacks[asset] || [];
            callbacks[asset].push(callback);
        };

        var emitCallbacks = function (asset, data, current) {
            if (callbacks[asset].length) {
                callbacks[asset].forEach(function(callback) {
                    callback(data, current);
                });
            }
        };

        return {
            subscribe: function (asset, callback) {
                feedAsset(asset);
                addCallback(asset, callback);
            }
        }
    });
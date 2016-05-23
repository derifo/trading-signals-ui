/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeed', function ($timeout) {
        var socket = io('http://localhost:8080');

        return {
            subscribe: function (asset, callback) {
                socket.on('feed_' + asset, function (data, current) {
                    callback(data, current);
                });
            }
        }
    });
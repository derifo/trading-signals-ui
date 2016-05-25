/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeed', function ($timeout) {
        var socket = io('http://52.48.242.152:8080');

        return {
            subscribe: function (asset, callback) {

                socket.on('feed_' + asset, function (data, current) {
                    console.log(data);
                    console.log(current);
                    console.log(arguments);
                    callback(JSON.parse(data), current);
                });

                socket.emit('feed-all')
            }
        }
    });
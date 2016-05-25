/**
 * Created by roee on 22/05/2016.
 */
angular.module('app.common.services')
    .service('assetFeed', ["$timeout", function ($timeout) {
        var socket = io('http://52.48.242.152:8080');

        return {
            subscribe: function (asset, callback) {

                socket.on('feed_' + asset, function (data, current) {
                    data = JSON.parse(data);
                    callback(data, current);
                });

                socket.emit('feed-all')
            }
        }
    }]);
/*
 * Assets Streamer
 */
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n2-c-nl.spotoption.com'),
    cors = require('cors');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
var AssetFeed = require('./assets-feed');
var assetFeed = new AssetFeed();

assetFeed.subscribe(function(asset, data, rate, direction) {
    io.sockets.emit('feed', asset, JSON.stringify(data), rate, direction);
});

io.on('connection', function (socket) {

    socket.on('requestFeed', function (asset) {
        var data = assetFeed.getAssetData(asset);

        socket.emit('feed', asset, JSON.stringify(data[0]), data[1], data[2]);
    });

});

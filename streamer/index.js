/*
* Assets Streamer
*/
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n2-c-nl.spotoption.com'),
    mysql = require('mysql'),
    through2Concurrent = require('through2-concurrent'),
    helper = require('./mysql-helper'),
    streamify = require('stream-from-array'),
    cors = require('cors');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
var AssetFeed = require('./assets-feed');
var assetFeed = new AssetFeed();

io.on('connection', function (socket) {

    var feeds = [];
    socket.on('add-feed', function (newFeeds) {
        newFeeds = JSON.parse(newFeeds);
        feeds = feeds.concat(newFeeds);
    });

    socket.on('feed-all', function() {
        console.log('FEEDING ALL');
        assetFeed.subscribe(function(asset, data, rate) {
            if (asset == 91) {
                console.log("Feeding");
                console.log(feeds.indexOf(parseInt(asset)));
            }
            if (feeds.indexOf(parseInt(asset)) !== -1) {
                socket.emit('feed_' + asset, JSON.stringify(data), rate);
            }
        });
    });
});


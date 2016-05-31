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

assetFeed.subscribe(function(asset, data, rate) {
    io.sockets.emit('feed_' + asset, JSON.stringify(data), rate);
});


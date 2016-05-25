/*
* Assets Streamer
*/
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n2-c-nl.spotoption.com'),
    mysql = require('mysql'),
    through2Concurrent = require('through2-concurrent'),
    helper = require('./mysql-helper'),
    streamify = require('stream-from-array'),
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'Rhershko1@',
        database : 'systems_trading_signals'
    }),
    cors = require('cors');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
var AssetFeed = require('./assets-feed');
var assetFeed = new AssetFeed();

io.on('connection', function (socket) {

    socket.on('feed-all', function() {
        assetFeed.subscribe(function(asset, data, rate) {
            socket.emit('feed_' + asset, data, rate);
        });
    });
});


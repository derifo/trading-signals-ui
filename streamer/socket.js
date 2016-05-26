/**
 * Created by roeehershko on 5/25/16.
 */
var ioClient = require('socket.io-client'),
    socket = ioClient.connect('http://sst-n1-c-nl.spotoption.com');

module.exports = {
    getSocket: function () {
        return socket
    }
};
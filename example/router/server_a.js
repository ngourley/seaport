var seaport = require('../../lib/seaport.js');
//var ports = seaport.connect('localhost', 5001);
var ports = seaport();
var net = require('net');
var stream = ports.createStream();
stream.pipe(net.connect(5001, 'localhost')).pipe(stream);

var http = require('http');

var server = http.createServer(function (req, res) {
    res.end('version 0.0.0\r\n');
});

server.listen(ports.register('http@0.0.0'));

var http = require('http');
var handler = require('./handler');

var port = 1337;

var ip = '127.0.0.1';

var server = http.createServer(handler.requestHandler);
console.log(`Server listening on ${ip}:${port}`)

server.listen(port, ip);
"use strict";

var _http = require("http");

var http = _interopRequireWildcard(_http);

var _os = require("os");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var host = '127.0.0.1';
var port = '1234';

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello there :)');
});

server.listen(port, host, function () {
    console.log('Started');
});
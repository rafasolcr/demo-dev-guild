var http = require('http');

var handleRequest = function (request, response) {
    response.writeHead(200);
    response.end('It\'s working!');
};

var demoServer = http.createServer(handleRequest);

demoServer.listen(8080);
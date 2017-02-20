var http = require('http');
var fs = require('fs');

var fsStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fsStream.pipe(res);
});
server.listen(process.argv[2]);
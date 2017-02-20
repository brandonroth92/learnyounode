var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = month < 10 ? '0' + month : month;
var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();


var dateString = year + '-' + month + '-' +  day + ' ' + hours + ':' + minutes;

var net = require('net');
var server = net.createServer(function(socket) {
    socket.end(dateString + '\n');
});
server.listen(process.argv[2]);
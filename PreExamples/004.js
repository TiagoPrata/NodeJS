// Load the 004.html page

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('004.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar!');
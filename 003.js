// If you type: http://localhost:3000/?year=2017&month=July
// Output: 2017 July

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar!');
// If you type localhost:3000/Test
// '/Test' will be printed in the browser

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
}).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar!');
// 1 - Execute: 'npm install upper-case'
// 2 - Find this module folder in: 'C:\Users\My Name\node_modules\upper-case'

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc("Hello World!"));
    res.end();
}).listen(3000);
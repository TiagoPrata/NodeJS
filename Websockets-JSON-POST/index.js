var express = require('express');
var socket = require('socket.io');
var bodyParser = require('body-parser');

// App setup
var app = express();
app.use(bodyParser.json());

// Tell express to use the body-parser middleware and to not parse extended bodies
var urlencodedParser = bodyParser.urlencoded({ extended: true })

var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Route that receives a POST request to /sms
    app.post('/', urlencodedParser, function (req, res) {
        console.log(req.body);
        io.sockets.emit('post', req.body);
        res.end('ok');
    })

});
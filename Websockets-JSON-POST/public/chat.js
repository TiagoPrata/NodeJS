// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var output = document.getElementById('output');

// Listen for events
socket.on('post', function(data){
    output.innerHTML += '<p>' + JSON.stringify(data) + '</p>';
});

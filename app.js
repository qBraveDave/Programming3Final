var express = require('express');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socket = require('socket.io-client')('http://localhost');

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.use(express.static("."));


app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });
 

io.on('connection', function (socket) {
    socket.on("send obj", function (obj) {
        fs.appendFileSync("stats.json", JSON.stringify(obj) + "\n");
        console.log(obj)
    })
});
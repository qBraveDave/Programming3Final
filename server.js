/*var express = require('express');
var app = express();
var fs = require("fs");
var server = require('http').Server(app);
var io = require('socket.io')(server);



app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.use(express.static("."));
server.listen(3000);

io.on('connection', function (socket) {
    socket.on("send obj", function (obj) {
        fs.appendFileSync("statistika.json", JSON.stringify(obj) + "\n");
    })
});*/
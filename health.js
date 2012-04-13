var express = require('express'),
    players = require('./players.js'),
    app = express.createServer(),
    io = require('socket.io').listen(app);
    
app.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
    socket.on('join', function (data) {
        players.add(data.name, function(success) {
            if (success) {
                players.all(function(players) {
                    io.sockets.emit('new',{players : players})
                })

            }
        });
    });
    socket.on('update', function(data) {
        console.log(data)
        players.update(data, function(player) {
            io.sockets.emit('update', {player: player});
        })
    })
    socket.on('remove', function(data) {
        players.remove(data, function() {})
    })
});



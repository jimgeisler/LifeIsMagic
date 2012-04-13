
var players = [];

var addPlayer = function (name, callback) {
    if (nameIsUnique(name)) {
        players.push({name : name, life : 20, poison : 0});
        callback(true);
    }
    else {
        callback(false);
    }
    
}

var nameIsUnique = function(name) {
    for (pIdx in players) {
        var player = players[pIdx];
        if (player.name == name)
            return false;
    }
    return true;
}

var getPlayers = function(callback) {
    callback(players)
}

var updatePlayer = function(p, callback) {
    for (pIdx in players) {
        var player = players[pIdx];
        if (player.name == p.name) {
            player.life = p.life;
            player.poison = p.poison;
            callback(player)
        }
    }
}

var removePlayer = function(name, callback) {
    for (pIdx in players) {
        var player = players[pIdx];
        if (player.name == name){}
            
    }
    callback();
}

module.exports.add = addPlayer;
module.exports.all = getPlayers;
module.exports.update = updatePlayer;
module.exports.remove = removePlayer;
var GameMode = require('./gamemodes');


var runMaster = false;
var runGame = false;
var mode;
runMaster = true;
runGame = true;
mode = new GameMode.FFA();


if (runMaster) {
    // Initialize the master server
    var MasterServer = require('./MasterServer');
    var master = new MasterServer(80);
    master.start();
}

if (runGame) {
    // Initialize the game server
    var GameServer = require('./GameServer');
    var game = new GameServer(443,mode);
    game.start();
}

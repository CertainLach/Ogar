var runMaster = false;
var runGame = true;
var mode;
var GameMode = require('./gamemodes');
mode = new GameMode.FFA();
var GameServer = require('./GameServer');
var game = new GameServer(443,mode);
game.start();

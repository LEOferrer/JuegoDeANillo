var w = 800;
var h = 400;
var basicGame;
var bgAudio;
var game;
var player;
var playGame;
var nxt;
game = new Phaser.Game(w, h, Phaser.CANVAS, '');
game.state.add('Menu', Menu);
game.state.start('Menu');
game.state.add('playGame', playGame);
game.state.add('Game');
game.state.add('sound');
game.state.add('about');
game.state.add('level2');
game.state.add('level3');
game.state.add('level4');
game.state.add('level5');

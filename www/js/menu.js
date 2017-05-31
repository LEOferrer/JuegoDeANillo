var Menu = {

    preload : function() {
        game.load.image('bg', 'img/background.jpg');
		game.load.image('cover', 'img/cover.png');
        game.load.image('start','img/startbutton.png');
        game.load.image('exit','img/exitButton.png');
        
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	game.add.image(0, 0, 'cover');
             game.add.button(550,300, 'start', this.startGame, this);
             exit = game.add.button(130,300,"exit");
    },

    startGame: function () {

        // Change the state to the actual game.
        game.state.start('Game');

    }


};
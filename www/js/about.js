var about = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
        game.load.image("bak","img/home.png");
		game.load.image("joy","img/joy.png");
		game.load.image("leo","img/leo.png");
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	bak = game.add.button(10,10,"bak",balik);
    
	leo = game.add.image(60,100, 'leo');
	leo.scale.x = 0.1;
	leo.scale.y = 0.1;

    game.add.text(60,280,'Leo A. Ferrer\nIII-BS IT\nStudent From:\nPangasinan State University\nlingayen Campus',{fill:"white",font:"20px stencil"});
	joy = game.add.image(460,100, 'joy');
	joy.scale.x = 0.5;
	joy.scale.y = 0.5;
	game.add.text(460,280,'Joyful John M. Merin\nIII-BS IT\nStudent From:\nPangasinan State University\nlingayen Campus',{fill:"white",font:"20px stencil"});

		}

};
function balik(){
		game.state.add("Game" ,Game, true);
		console.log("x");
		
	}
game.state.add("about" ,about, false);
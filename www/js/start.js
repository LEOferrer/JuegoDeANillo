var Game = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            //game.scale.pageAlignHorizontally = true;
            // game.scale.pageAlignVertically = true;

            game.load.image("bg", 'img/background.jpg');
            //game.load.audio("bgMusic", 'music/24k.mp3');
            game.load.image("start",'img/play.png');
            game.load.image("sound",'img/soundButton.png');
            game.load.image("about",'img/about.png');
            game.load.image("exit",'img/exitButton.png');
     

},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.image(0, 0, 'bg'); 
            // bgAudio = game.add.audio("bgMusic");
            // bgAudio.play();
             game.add.button(350, 20, 'start', process.play);
              sounds = game.add.button(350,120,"sound",process.sound);
              about = game.add.button(350,220,"about",process.about);
              exit= game.add.button(350,320,"exit",uwi);
        },

// startGame: function () {
//   game.state.start('playGame');
//     }
};// game.state.add("playGame" ,playGame, false);

function uwi(){
	window.location.href=window.location.href;
}
// function Exit()
// {
// {exit.frame=1}  
// setTimeout(function(){
    
// exit.frame=0;
// },500);

// }





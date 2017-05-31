var level5 ={

	preload:function() {game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
		game.load.image("background","img/background.jpg");
		game.load.image("platform","img/plat.png");
		game.load.image("back","img/back.png");
		game.load.image("retry","img/retry.png");
		game.load.image("bullet","img/stick1.png");
		game.load.image("next","img/nxt.png");
		game.load.image("dulo","img/dulo.png");
		game.load.image("tres","img/level5.png");
		game.load.image("bak","img/home.png");
		game.load.spritesheet("player","img/sprite1.png",192,231);
		game.load.spritesheet("ring","img/ring.png",38,72);
		
	},

	create:function	() {
	game.world.setBounds(0,0,1500,0);
		game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
		game.physics.startSystem(Phaser.Physics.ARCADE);
		platform1 = game.add.sprite(690,45,"platform");
		game.physics.arcade.enable(platform1);
		platform1.body.immovable = true;
		
		platform = game.add.sprite(690,240,"platform");
		game.physics.arcade.enable(platform);
		platform.body.immovable = true;
		
		dulo = game.add.sprite(950,10,"dulo");
		game.physics.arcade.enable(dulo);
		dulo.body.collideWorldBounds = true;
		dulo.body.immovable = true;
		game.add.image(0,0,"background");
		
		game.add.image(350,0,"tres");

	
		bak = game.add.button(10,10,"bak",balik);
		
		pindot = game.add.button(600,300,"button",eto);
		pindot.scale.x = 0.3;
		pindot.scale.y = 0.3;
		
		bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(1, "bullet");
        
		player = game.add.sprite(100,200,"player");
		
		game.physics.arcade.enable(player);
    	player.body.collideWorldBounds = true;
    	player.scale.y = 0.9;
		player.scale.x = 0.9;

		
		ring = game.add.sprite(700,80,"ring");
		game.physics.arcade.enable(ring);
		ring.body.collideWorldBounds = true;
		ring.body.velocity.y = 330;
		ring.body.gravity.y = 50;
		ring.body.bounce.y = 1;

		gameOverText = game.add.text((w/2)-205,h/2-50,'',{fill:"white",font:"40px Broadway"});

		
	},

	update:function() {
		game.physics.arcade.collide(platform,ring);
		game.physics.arcade.collide(platform1,ring);
		game.physics.arcade.overlap(bullets,dulo,sapul4);
		game.physics.arcade.overlap(bullets,back,tama4);
		},

	 //audioLoop:function(time){
	 //		setInterval(function(){
	 //			bgMusic.play();
	 //		},100000);
		
	};
	function eto(){
		fireBullet();
	dada();}
	function fireBullet()
{
    //if (game.time.now > bulletTime)
        //{
           bullet = bullets.getFirstExists(false);
            
            if (bullet)
                {
                    bullet.reset(player.position.x + 40, player.position.y + 5);
                    bullet.body.velocity.x = 300;
					bullet.scale.x = 0.5;
					bullet.scale.y = 0.5;
                   // bulletTime = game.time.now + 200;
                }
           // }
        }
		function sapul4(bullet,ring)
{
	gameOverText.text = "YOU MISSED THE RING\n         GAME OVER!";
   nxt = game.add.button(350,300,"retry",retry4);
    
        }
		
		function tama4(back,bullets)
{
	bullets.kill();
	nxt = game.add.button(600,30,"next",process.start4);
    
        }
		function retry4()
{
	game.state.add("level5" ,level5, true);
 
        }
		
	
	game.state.add("level5" ,level5, false);
	

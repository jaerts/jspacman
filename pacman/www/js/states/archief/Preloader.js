
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	init: function () {
		this.preloadBar = null;
		this.ready = false;
	},

	preload: function () {
		this.time.advancedTiming = true;
		//	These are the assets we loaded in Boot.js				
		this.preloadBar = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloaderBar');		
		this.preloadBar.anchor.setTo(0.5);

		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	You can find all of these assets in the Phaser Examples repository

		this.load.image('starfield', 'assets/images/starfield.png');
		this.load.image('maze', 'assets/images/maze.png');
		this.load.image('dot', 'assets/images/dot.png');
		this.load.image('powerdot', 'assets/images/powerdot.png');
		this.load.image('ghostC', 'assets/images/clyde-down1.png');
		this.load.image('ghostB', 'assets/images/blinky-down1.png');
		this.load.image('ghostP', 'assets/images/pinky-down1.png');
		this.load.image('ghostI', 'assets/images/inky-down1.png');	
		this.load.image('finger', 'assets/images/fingerprint.png');
		
		this.load.spritesheet('blinky', 'assets/images/blinky.png', 28, 28, 10);
		this.load.spritesheet('pinky', 'assets/images/pinky.png', 28, 28, 10);
		this.load.spritesheet('inky', 'assets/images/inky.png', 28, 28, 10);
		this.load.spritesheet('clyde', 'assets/images/clyde.png', 28, 28, 10);
		
		this.load.spritesheet('pacman', 'assets/images/pacman.png', 28, 28, 10);
		//this.load.image('pacman', 'assets/images/pacman-halfopen-d2.png');
		
		// navigation sprites
		this.load.image('left', 'assets/images/left.png');
		this.load.image('right', 'assets/images/right.png');
		this.load.image('up', 'assets/images/up.png');
		this.load.image('down', 'assets/images/down.png');
		
		
		
		
		
		
	/*	this.load.image('2x4', 'assets/images/2x4.png');
		this.load.image('2x5', 'assets/images/2x5.png');
		this.load.image('3x4', 'assets/images/3x4.png');
		this.load.image('3x5', 'assets/images/3x5.png');
		this.load.image('border', 'assets/images/border.png');
		this.load.image('corner', 'assets/images/corner.png');
		this.load.image('h5x4', 'assets/images/h5x4.png');
		this.load.image('home', 'assets/images/home.png');
		this.load.image('i3x4', 'assets/images/i3x4.png');
		this.load.image('i3x5', 'assets/images/i3x5.png');
		this.load.image('t5x8', 'assets/images/t5x8.png');
		this.load.image('t5x10', 'assets/images/t5x10.png'); */
		
		
		
		
		

		// Audio track Attribution (menu sci-fi 1.ogg, CC 3.0)
		// Alexandr-Zhelanov: https://soundcloud.com/alexandr-zhelanov 
		this.load.audio('bgm', ['assets/audio/menusci-fi1.ogg', 'assets/audio/menusci-fi1.mp3']);

	},

	create: function () {


		//this.state.start('MainMenu');


	},
	update: function () {

		if (this.cache.isSoundDecoded('bgm') && this.ready == false) {
			this.ready = true;
			this.state.start('MainMenu');

		}
	}

};

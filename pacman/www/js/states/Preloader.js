
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
		//this.load.image('ghostC', 'assets/images/clyde-down1.png');
		//this.load.image('ghostB', 'assets/images/blinky-down1.png');
		//this.load.image('ghostP', 'assets/images/pinky-down1.png');
		//this.load.image('ghostI', 'assets/images/inky-down1.png');	
		this.load.image('finger', 'assets/images/fingerprint.png');
        
        this.load.image('sound', 'assets/images/sound.png');	
		this.load.image('music', 'assets/images/music.png');
		
		this.load.spritesheet('blinky', 'assets/images/blinky.png', 28, 28, 16);
		this.load.spritesheet('pinky', 'assets/images/pinky.png', 28, 28, 16);
		this.load.spritesheet('inky', 'assets/images/inky.png', 28, 28, 16);
		this.load.spritesheet('clyde', 'assets/images/clyde.png', 28, 28, 16);
		
		this.load.spritesheet('pacman', 'assets/images/pacman.png', 28, 28, 8);
        this.load.spritesheet('pacmandeath', 'assets/images/pacmandeath.png', 30, 18, 11);
        this.load.spritesheet('fruit', 'assets/images/fruit.png', 22, 22, 18);//this.load.image('pacman', 'assets/images/pacman-halfopen-d2.png');
		
		// navigation sprites
		this.load.image('left', 'assets/images/left.png');
		this.load.image('right', 'assets/images/right.png');
		this.load.image('up', 'assets/images/up.png');
		this.load.image('down', 'assets/images/down.png');
		
		
		// background music
		this.load.audio('bgm', ['assets/audio/30192_erh_string-1-loop.ogg', 'assets/audio/30192_erh_string-1-loop.mp3']);
	    this.load.audio('gbgm', ['assets/audio/240376_edtijo_happy-8bit-pixel-adenture.ogg', 'assets/audio/240376_edtijo_happy-8bit-pixel-adenture.mp3']);
        
        // sound effects
        this.load.audio('s_doteat', ['assets/audio/466556_danieldouch_little-blip.ogg', 'assets/audio/66556_danieldouch_little-blip.mp3']);
        this.load.audio('s_levelup', ['assets/audio/453035_akelley6_level-up.ogg', 'assets/audio/453035_akelley6_level-up.mp3']);
        this.load.audio('s_dead', ['assets/audio/406113_daleonfire_dead.ogg', 'assets/audio/406113_daleonfire_dead.mp3']);
        this.load.audio('s_powerdot', ['assets/audio/336928_sacha-rush_blip3.ogg', 'assets/audio/336928_sacha-rush_blip3.mp3']);
        
        // beeb for countdown
        // chrunch for eat ghost
        // eat fruit
        // better powerpill sound
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

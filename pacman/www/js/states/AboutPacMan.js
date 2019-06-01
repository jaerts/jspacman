
BasicGame.AboutPacMan = function (game) {

};

BasicGame.AboutPacMan.prototype = {

	create: function () {
		this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'starfield');

		var textpm = this.add.text(this.game.width * 0.5, 30, 'About PAC MAN', {font: '42px Arial', fill: '#fff', align: 'center'});
		textpm.anchor.set(0.5);

        var text10 = this.add.text(this.game.width * 0.5, 90, 'Game music and sound effects', {font: '20px Arial', fill: '#ff0', align: 'center'});
		text10.anchor.set(0.5);
        
        
        var text = this.add.text(this.game.width * 0.5, this.game.height - 45, 'Tab anywhere to return', {font: '18px Arial', fill: '#ff0', align: 'center'});
		text.anchor.set(0.5);
    
		this.input.onDown.add(this.backToMainMenu, this);
		// tijdelijk direct doorstarten
		//this.startGame();
	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.

		this.bg.width = width;
		this.bg.height = height;


	},

	backToMainMenu: function () {
		this.state.start("MainMenu");
	}

};

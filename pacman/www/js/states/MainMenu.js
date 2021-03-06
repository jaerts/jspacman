
BasicGame.MainMenu = function (game) {

	this.bg;
	this.music = null;

};


BasicGame.MainMenu.prototype = {

	create: function () {

		this.music = this.add.audio('bgm');
        this.music.loop = true;
        
        var intromusic = true;
        if (localStorage.getItem('gamemusic')) {
            intromusic = JSON.parse(localStorage.getItem('gamemusic'))
        } else {
            intromusic = true;
        }
        
        if (intromusic) {
            this.music.play();
        }
        
//		this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'starfield');
		this.bg = this.add.tileSprite(this.game.width/2, this.game.height/2, this.game.height * 1.2, this.game.height * 1.2, 'starfield');
        this.bg.anchor.setTo(0.5, 0.5);

        
		var textpm = this.add.text(this.game.width * 0.5, 30, '~~ PAC MAN ~~', {
            font: '42px Arial', fill: '#fff', align: 'center'});
		textpm.anchor.set(0.5);
		textpm.anchor.set(0.5);
        var textpm2 = this.add.text(this.game.width * 0.5-2, 30-2, '~~ PAC MAN ~~', {
            font: '42px Arial', fill: '#f00', align: 'center'});
		textpm2.anchor.set(0.5);

        var tabtext = 80;
        var text = this.add.text(this.game.width * 0.5, this.game.height - tabtext, 'Tab anywhere to start', { font: '18px Arial', fill: '#ff0', align: 'center'});
		text.anchor.set(0.5);

        
        fruitimage = this.add.sprite(30, this.game.height - tabtext - 5, 'fruit');	
        var schaal = this.game.width / 338;
        fruitimage.height = 20 * schaal;
        fruitimage.width = 20 * schaal;
        fruitimage.anchor.setTo(0.5, 0.5);
        fruitimage.alpha = 1;
        fruitimage.animations.add('all', [0,1,2,3,4,5,6,7], 1, true);
        fruitimage.animations.play('all');
        
        fruitimage2 = this.add.sprite(this.game.width - 30, this.game.height - tabtext - 5, 'fruit');	
        fruitimage2.height = 20 * schaal;
        fruitimage2.width = 20 * schaal;
        fruitimage2.anchor.setTo(0.5, 0.5);
        fruitimage2.alpha = 1;
        fruitimage2.animations.add('all', [4,5,6,7,0,1,2,3], 1, true);
        fruitimage2.animations.play('all');
        
        
        if (localStorage.getItem('highsscore')) {
            BasicGame.highScore = JSON.parse(localStorage.getItem('highsscore'))
        } else {
            BasicGame.highScore = [
                "0000010-Galaxian",
                "0002000-Melon",
                "0003000-Apple",
                "0004000-Orange",
                "0005000-Strawberry",
                "0006000-Cherry",
                "0007000-Clyde",
                "0008000-Inky",
                "0009000-Pinky",
                "0010000-Blinky"];
                localStorage.setItem('highsscore', JSON.stringify(BasicGame.highScore));
        }
        var text10 = this.add.text(this.game.width * 0.5, 90, 'THE 10 BEST PLAYERS', {
            font: '20px Arial', fill: '#ff0', align: 'center'});
		text10.anchor.set(0.5);
       
        var textRank = this.add.text(this.game.width * 0.15, 115, 'RANK', {
            font: '18px Arial', fill: '#ff0', align: 'center'});
		textRank.anchor.set(0.5);
       
         var textScore = this.add.text(this.game.width * 0.4, 115, 'SCORE', {
            font: '18px Arial', fill: '#ff0', align: 'center'});
		textScore.anchor.set(0.5);
        
         var textPlayer = this.add.text(this.game.width * 0.65, 115, 'PLAYER', {
            font: '18px Arial', fill: '#ff0', align: 'center'});
        textPlayer.anchor.set(0, 0.5);   
        
        BasicGame.highScore.sort();
        BasicGame.highScore.reverse();
        
        for (i=0; i<10; i++)
        {
            score = BasicGame.highScore[i].split('-')[0];
            player = BasicGame.highScore[i].split('-')[1];
            
            textR = this.add.text(this.game.width * 0.15, 145 + (this.game.height/18) * i, i+1, {
                font: '20px Arial', fill: '#fff', align: 'center'});
		    textR.anchor.set(0.5);
            
            textS = this.add.text(this.game.width * 0.4, 145 + (this.game.height/18) * i, score, {
                font: '20px Arial', fill: '#fff', align: 'center'});
		    textS.anchor.set(0.5);
            
            textP = this.add.text(this.game.width * 0.65, 145 + (this.game.height/18) * i, player, {
            font: '18px Arial', fill: '#fff', align: 'center'});
            textP.anchor.set(0, 0.5);
        }
        
        var abouttext = this.add.text(this.game.width * 0.5, this.game.height - 45, 'About this app', {
            font: '18px Arial', fill: '#ff0', align: 'center'});
		abouttext.anchor.set(0.5);
        abouttext.inputEnabled = true;
        abouttext.events.onInputDown.add(this.gotoAbout, this);
        var underline = this.game.add.graphics(abouttext.left, abouttext.bottom - 7);

        // Specify the line (size, color)
        underline.lineStyle(2, 0xE21838);
        // Location to start drawing the line (x, y)
        underline.moveTo(0, 0);
        // Draw a line the width of objectText's string
        underline.lineTo(abouttext.width, 0);
        
        //text.inputEnabled = true;
        //text.events.onInputDown.add(this.startGame, this);
		this.input.onDown.add(this.startGame, this);

		// tijdelijk direct doorstarten
		//this.startGame();
	},

	update: function () {

		//	Do some nice funky main menu effect here
       this.bg.angle -= 0.03;
	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.

		this.bg.width = width;
		this.bg.height = height;
	},

	startGame: function () {
		this.music.stop();
		this.state.start("Game");
	},
    gotoAbout: function () {
		this.state.start("AboutPacMan");
	}

};

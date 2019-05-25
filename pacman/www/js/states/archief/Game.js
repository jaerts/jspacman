
BasicGame.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.
};

function createLevelInfo(){
	BasicGame.levelInfo = [
		{ fruit: "Cherry", FruitPoint: 100, GhostBlueTime:6, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Strawberry", FruitPoint: 300, GhostBlueTime:5, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Orange", FruitPoint: 500, GhostBlueTime:4, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Orange", FruitPoint: 500, GhostBlueTime:3, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Apple", FruitPoint: 700, GhostBlueTime:2, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Apple", FruitPoint: 700, GhostBlueTime:5, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Melon", FruitPoint: 1000, GhostBlueTime:2, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Melon", FruitPoint: 1000, GhostBlueTime:2, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Galaxian", FruitPoint: 2000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Galaxian", FruitPoint: 2000, GhostBlueTime:5, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Bell", FruitPoint: 3000, GhostBlueTime:2, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Bell", FruitPoint: 3000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:3, FlashesBeforEndOFBlue: 5 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:0, FlashesBeforEndOFBlue: 0 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:1, FlashesBeforEndOFBlue: 3 },
		{ fruit: "Key", FruitPoint: 5000, GhostBlueTime:0, FlashesBeforEndOFBlue: 0 }
	];
}

function createMaze() {
	BasicGame.Grid = [];
	BasicGame.Grid.push(['100101','101001','101001','101001','101001','100001','101001','101001','101001','101001','101001','110001','111100','111100','100101','101001','101001','101001','101001','101001','100001','101001','101001','101001','101001','110001']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','010101','11110','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['010110','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010110']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['000101','101001','101001','101001','101001','000001','101001','101001','100001','101001','101001','001001','101001','101001','001001','101001','101001','100001','101001','101001','000001','101001','101001','101001','101001','010001']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['001101','101001','101001','101001','101001','010001','111100','111100','001101','101001','101001','110001','111100','111100','100101','101001','101001','011001','111100','111100','000101','101001','101001','101001','101001','011001']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010100','111100','111100','010100','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010100','111100','111100','010100','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','100100','101000','101000','001000','101000','101000','001000','101000','101000','110000','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','011100','011100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','100100','101100','011100','011100','111000','110000','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['101000','101000','101000','101000','101000','000001','101000','101000','010000','111100','000100','011100','011100','011100','011100','010000','111100','000100','101000','101000','000001','101000','101000','101000','101000','101000']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','001100','001000','001000','001000','001000','011000','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','000100','101000','101000','101000','101000','101000','101000','101000','101000','010000','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	BasicGame.Grid.push(['100101','101001','101001','101001','101001','000001','101001','101001','001001','101001','101001','110001','111100','111100','100101','101001','101001','001001','101001','101001','000001','101001','101001','101001','101001','110001']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['010110','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010110']);
	BasicGame.Grid.push(['001101','101001','110001','111100','111100','000101','101001','101001','100001','101001','101001','001001','101000','101000','001001','101001','101001','100001','101001','101001','010001','111100','111100','100101','101001','011001']);
	BasicGame.Grid.push(['111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100']);
	BasicGame.Grid.push(['111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100']);
	BasicGame.Grid.push(['100101','101001','001001','101001','101001','011001','111100','111100','001101','101001','101001','110001','111100','111100','100101','101001','101001','011001','111100','111100','001101','101001','101001','001001','101001','110001']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101']);
	BasicGame.Grid.push(['001101','101001','101001','101001','101001','101001','101001','101001','101001','101001','101001','001001','101001','101001','001001','101001','101001','101001','101001','101001','101001','101001','101001','101001','101001','011001']);

	BasicGame.Dots = [];
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
	BasicGame.Dots.push(new Array());
}

function initGhosts() {
	BasicGame.ghost = [];
	
	BasicGame.ghost.push({
		x: 11,
		y: 13,
		orgx: 11,
		orgy: 13,
		//col: color(232, 76, 76),
		//orgcol: color(232, 76, 76),
		direction: "",
		speed: 0.8,
		orgspeed: 0.8,
		bluespeed: 0.4,
		walking: false,
		orgwalkMode: "hunting", // was hunting
		walkMode: "hunting" // was hunting
	});
	
	BasicGame.ghost.push({
		x: 12,
		y: 13,
		orgx: 12,
		orgy: 13,
		direction: "",
		speed: 0.85,
		orgspeed: 0.85,
		bluespeed: 0.45,
		walking: false,
		orgwalkMode: "random",
		walkMode: "random"
	});
	
	BasicGame.ghost.push({
		x: 13,
		y: 13,
		orgx: 13,
		orgy: 13,
		direction: "",
		speed: 0.9,
		orgspeed: 0.9,
		bluespeed: 0.5,
		walking: false,
		orgwalkMode: "random",
		walkMode: "random"
	});
	
	BasicGame.ghost.push({
		x: 13,
		y: 13,
		orgx: 13,
		orgy: 13,
		direction: "",
		speed: 0.9,
		orgspeed: 0.9,
		bluespeed: 0.5,
		walking: false,
		orgwalkMode: "random",
		walkMode: "random"	
	});
}

function tweenTint(obj, startColor, endColor, time) {  
	var colorBlend = {step: 0};    
	var colorTween = game.add.tween(colorBlend).to({step: 100}, time);        
		colorTween.onUpdateCallback(
		function() {      
			obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);       
		});   
		obj.tint = startColor;            
		colorTween.start();
}

function onDotsReady(){
	BasicGame.DotsCreate -= 1;
	if (BasicGame.DotsCreate ==0)
	{
		BasicGame.state = "MAIN GAME";
	}
}

function onMazeReady() {
		//var celX = game.world.width/28;
		//var celY = game.world.height/31;				
		//var schaal = game.world.width / 338;
				
		var dot;
    	for (var i = 0; i<26; i++) // xx
		{
			for (var j = 0; j<29; j++) // yy
			{
				if (BasicGame.Grid[j][i].substr(5,1) === "1")
				{
					BasicGame.DotsCreate += 1;
					//dot	= this.add.sprite((i+2) * celX, (j+2) * celY, 'dot');
					
					//Phaser.Easing.Sinusoidal.InOut
					// Phaser.Easing.Cubic.Out
					//Phaser.Easing.Cubic.InOut
					//dot	= this.add.sprite(400 - Math.floor(Math.random() * 800), 400 - Math.floor(Math.random() * 800), 'dot');
					dot	= this.add.sprite((i+1) * BasicGame.celX, -(j+1) * BasicGame.celY, 'dot');
					dot.height = 4 * BasicGame.schaal;
					dot.width = 4 * BasicGame.schaal;
					dot.anchor.setTo(0.5, 0.5);
					BasicGame.Dots[j].push(dot);
					tween = game.add.tween(dot).to( {x:BasicGame.celX / 2 + (i+1) * BasicGame.celX, y: BasicGame.infoGap + BasicGame.celY / 2 + (j+1) * BasicGame.celY}, 300 + Math.floor(Math.random() * 1200), Phaser.Easing.Exponential.Out, true);
					tween.onComplete.add(onDotsReady, this);
				}
				else if (BasicGame.Grid[j][i].substr(4,1) === "1")
				{					
					dot	= this.add.sprite(BasicGame.celX / 2 + (i+1) * BasicGame.celX, BasicGame.infoGap + BasicGame.celY / 2 + (j+1) * BasicGame.celY, 'powerdot');
					dot.anchor.setTo(0.5, 0.5);
					BasicGame.Dots[j].push(dot);
					dot.height = 8 * BasicGame.schaal;
					dot.width = 8 * BasicGame.schaal;
				}
				else
				{
					// elke plek is bezet. dus net zoveel objecten als grid groot is
					BasicGame.Dots[j].push("");
				}
			}
		}

}

var drawGhost = function(ghostNr){
	//var celX = game.world.width/28;
	//var celY = game.world.height/31;				
	//var schaal = game.world.width/338;
	
    var i = ghostNr;
	if (BasicGame.ghost[i].walkMode === "death")
	{
		//teken alleen de oogjes van de spook
		/*fill(255, 255, 255);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		fill(0, 0, 0);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);
		*/
	}
	else
	{
		// hier een funtie van maken om ook death en fleeing (blue en flash af)
		if (BasicGame.ghost[i].direction === "R") {	BasicGame.ghost[i].gimage.animations.play('right');}
		if (BasicGame.ghost[i].direction === "L") {	BasicGame.ghost[i].gimage.animations.play('left');}
		if (BasicGame.ghost[i].direction === "U") {	BasicGame.ghost[i].gimage.animations.play('up');}
		if (BasicGame.ghost[i].direction === "D") {	BasicGame.ghost[i].gimage.animations.play('down');}
		BasicGame.ghost[i].gimage.x  = BasicGame.celX / 2 + ((BasicGame.ghost[i].x +1) + BasicGame.ghost[i].stepsX/12) * BasicGame.celX  ;
		BasicGame.ghost[i].gimage.y  = BasicGame.infoGap + BasicGame.celY / 2 + ((BasicGame.ghost[i].y +1) + BasicGame.ghost[i].stepsY/12) * BasicGame.celY ;
	}
};
var calculateDirectionOptionsGhost = function(ghostNr){
    var directions = "URDL";
    var directionOptions = "";
    var block = BasicGame.Grid[BasicGame.ghost[ghostNr].y][BasicGame.ghost[ghostNr].x];
    for(var wall=0; wall<4; wall++)
    {
        if (block.substr(wall,1) !== "1") 
        {
            directionOptions = directionOptions + directions.substr(wall,1);
        }
    }
    
	// QQQ
	 // if (directionOptions.length > 2)
	 // {
	//	
	//	  var x = 1;
	 // }  
	  
    //spook mag niet terug lopen
    if (directionOptions.length > 1)
    {
        if (BasicGame.ghost[ghostNr].direction === "R") 
        { 
            directionOptions = directionOptions.replace("L","");
        }
        else if (BasicGame.ghost[ghostNr].direction === "L") 
        { 
            directionOptions = directionOptions.replace("R","");
        }
        else if (BasicGame.ghost[ghostNr].direction === "U") 
        { 
            directionOptions = directionOptions.replace("D","");
        }
        else if (BasicGame.ghost[ghostNr].direction === "D") 
        { 
            directionOptions = directionOptions.replace("U","");
        }
    }
    return directionOptions;
};

var fleeingGhost = function(directions,ghostNr){
    if (BasicGame.pacmanY > BasicGame.ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (BasicGame.pacmanY < BasicGame.ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
    else if (BasicGame.pacmanX < BasicGame.ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (BasicGame.pacmanX > BasicGame.ghost[ghostNr].x && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(Math.floor(Math.random() * directions.length),1);
    }
};
var huntingGhost = function(directions, ghostNr){
    if (BasicGame.pacmanY < BasicGame.ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (BasicGame.pacmanY > BasicGame.ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
    else if (BasicGame.pacmanX > BasicGame.ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (BasicGame.pacmanX < BasicGame.ghost[ghostNr].x && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(Math.floor(Math.random() * directions.length),1);
    }
};
var deadGhost = function(directions, ghostNr){
	//eerst y dan x
	if (BasicGame.deathGhostHomeY < BasicGame.ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (BasicGame.deathGhostHomeY > BasicGame.ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
	else if (BasicGame.deathGhostHomeX > BasicGame.ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (BasicGame.deathGhostHomeX < BasicGame.ghost[ghostNr].yx && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(Math.floor(Math.random() * directions.length),1);
    }
};
var keyGhost = function(ghostNr){
    var directionOptions = calculateDirectionOptionsGhost(ghostNr);
    
    if (BasicGame.ghost[ghostNr].walkMode === "random")
    {
		
        BasicGame.ghost[ghostNr].direction = directionOptions.substr(Math.floor(Math.random() * directionOptions.length),1);
		if (directionOptions.length > 1)
		{
			 //console.log(directionOptions);
			 //console.log(directionOptions.length);
			 //console.log(Math.floor(Math.random() * directionOptions.length) + 1);
			 //console.log(BasicGame.ghost[ghostNr].direction);
		}
    }
    else if (BasicGame.ghost[ghostNr].walkMode === "hunting")
    {
		BasicGame.ghost[ghostNr].direction = huntingGhost(directionOptions, ghostNr);
    }
    else if (BasicGame.ghost[ghostNr].walkMode === "fleeing")
    {
        BasicGame.ghost[ghostNr].direction = fleeingGhost(directionOptions, ghostNr);
    } 
	else if (BasicGame.ghost[ghostNr].walkMode === "death")
    {
        BasicGame.ghost[ghostNr].direction = deadGhost(directionOptions, ghostNr);
    }
    
    BasicGame.ghost[ghostNr].stepsX = 0;
    BasicGame.ghost[ghostNr].stepsY = 0;
    BasicGame.ghost[ghostNr].walking = true;
};
var moveGhost = function(ghostNr){
        if (BasicGame.ghost[ghostNr].direction === "R")
        {
            BasicGame.ghost[ghostNr].stepsX+=BasicGame.ghost[ghostNr].speed;
        }
        else if (BasicGame.ghost[ghostNr].direction === "L")
        {
            BasicGame.ghost[ghostNr].stepsX-=BasicGame.ghost[ghostNr].speed;
        }
        else if (BasicGame.ghost[ghostNr].direction === "U")
        {
            BasicGame.ghost[ghostNr].stepsY-=BasicGame.ghost[ghostNr].speed;
        }
        else if (BasicGame.ghost[ghostNr].direction === "D")
        {
            BasicGame.ghost[ghostNr].stepsY+=BasicGame.ghost[ghostNr].speed;
        }
};
var walkGhosts = function(){
	for (var xx=0; xx<4; xx++) 
	{
		walkGhost(xx);
	}
}

var walkGhost = function(ghostNr){
    //als deze spook loopt
	
	BasicGame.ghost[ghostNr].gimage.bringToTop();
    if (BasicGame.ghost[ghostNr].walking)
    {
        moveGhost(ghostNr);
        drawGhost(ghostNr);
        if (Math.abs(BasicGame.ghost[ghostNr].stepsX) >= 12 || Math.abs(BasicGame.ghost[ghostNr].stepsY) >= 12)
        {
            BasicGame.ghost[ghostNr].walking = false;
            if (BasicGame.ghost[ghostNr].direction === "R")
            {
                BasicGame.ghost[ghostNr].x++;
                if (BasicGame.ghost[ghostNr].x === 26)
                {
                    BasicGame.ghost[ghostNr].x = 0;
                }
            }
            else if (BasicGame.ghost[ghostNr].direction === "L")
            {
                BasicGame.ghost[ghostNr].x--;
                if (BasicGame.ghost[ghostNr].x === -1)
                {
                    BasicGame.ghost[ghostNr].x = 25;
                }
            }
            else if (BasicGame.ghost[ghostNr].direction === "U")
            {
                BasicGame.ghost[ghostNr].y--;
            }
            else if (BasicGame.ghost[ghostNr].direction === "D")
            {
                BasicGame.ghost[ghostNr].y++;
            }
        }
		/* //tijdens "click to start" lopen de ghosts ook over het scherm
		if (state !== "CLICK TO START")
		{
			hitTest(BasicGame.ghostNr);
		} */
    }
    else
    {
		if (BasicGame.ghost[ghostNr].walkMode === "death")
		{ /*
			if ((BasicGame.ghost[ghostNr].x === deathGhostHomeX) && (BasicGame.ghost[ghostNr].y ===deathGhostHomeY)) 
			{
				BasicGame.ghost[ghostNr].x = 12;
				BasicGame.ghost[ghostNr].y = 13;
				BasicGame.ghost[ghostNr].col = ghost[ghostNr].orgcol;
				BasicGame.ghost[ghostNr].speed = ghost[ghostNr].orgspeed;
				BasicGame.ghost[ghostNr].walkMode = ghost[ghostNr].orgwalkMode;
			} */
		}
        //als walking === false -> nieuwe richting bepalen
        BasicGame.ghost[ghostNr].stepsX = 0;
        BasicGame.ghost[ghostNr].stepsY = 0;
        keyGhost(ghostNr);
        drawGhost(ghostNr); 
    }
};

// bepaal de input van de gebruiker
var getKey = function(){
    //als deze spook loopt
	
	// alleen de onderste 100 pixels gebruiker voor de input
	var y =  game.input.y;

	BasicGame.maxY = game.world.height
	if (y < BasicGame.maxY - BasicGame.FingerPrintSpace )
	{
		y = BasicGame.maxY - BasicGame.FingerPrintSpace ;
	}
	
	BasicGame.finger.x = game.input.x;
	BasicGame.finger.y = y;
	
	
	// bepaal afstanden tot controles
	
	
	var distUp = Math.sqrt(Math.pow((BasicGame.finger.x - BasicGame.up.x), 2) + Math.pow((BasicGame.finger.y - BasicGame.up.y), 2));
	var shortest = distUp;
	var x = BasicGame.up;
	BasicGame.nextDirection = "U";
	
	var distDown = Math.sqrt(Math.pow((BasicGame.finger.x - BasicGame.down.x), 2) + Math.pow((BasicGame.finger.y - BasicGame.down.y), 2));
	if (distDown < shortest) {
		x = BasicGame.down;
		var shortest = distDown;
		BasicGame.nextDirection = "D";
	}
	var distLeft = Math.sqrt(Math.pow((BasicGame.finger.x - BasicGame.left.x), 2) + Math.pow((BasicGame.finger.y - BasicGame.left.y), 2));
	if (distLeft < shortest) {
		x = BasicGame.left;
		var shortest = distLeft;
		BasicGame.nextDirection = "L";
	}

	var distRight = Math.sqrt(Math.pow((BasicGame.finger.x - BasicGame.right.x), 2) + Math.pow((BasicGame.finger.y - BasicGame.right.y), 2));
	if (distRight < shortest) {
		x = BasicGame.right;
		var shortest = distRight;
		BasicGame.nextDirection = "R";
	}
	
	BasicGame.left.alpha = 0.3;
	BasicGame.right.alpha = 0.3;
	BasicGame.up.alpha = 0.3;
	BasicGame.down.alpha = 0.3;
	
	// next direction
	x.alpha = 1;
	//console.log(BasicGame.nextDirection);
}

var drawPacmanSteps = function(step){
    if (BasicGame.direction === "R")
    {
        BasicGame.pacman.x = BasicGame.celX / 2 + ((BasicGame.pacmanX +1) + step/12) * BasicGame.celX  ; //step + 50 + BasicGame.pacmanX*12;
		BasicGame.pacman.y = BasicGame.infoGap + BasicGame.celY / 2 + (BasicGame.pacmanY +1) * BasicGame.celY ;	
    }
    else if (BasicGame.direction === "L")
    {
        BasicGame.pacman.x = BasicGame.celX / 2 + ((BasicGame.pacmanX +1) - step/12) * BasicGame.celX; //-step + 50 + BasicGame.pacmanX*12;
		BasicGame.pacman.y = BasicGame.infoGap + BasicGame.celY / 2 + (BasicGame.pacmanY +1) * BasicGame.celY ;	
//32 + BasicGame.pacmanY*12;
    }
    else if (BasicGame.direction === "U")
    {
	    BasicGame.pacman.x = BasicGame.celX / 2 + (BasicGame.pacmanX +1) * BasicGame.celX;
		BasicGame.pacman.y = BasicGame.infoGap + BasicGame.celY / 2 + ((BasicGame.pacmanY +1) - step/12) * BasicGame.celY ;	//-step + 32 + BasicGame.pacmanY*12;
    }
    else if (BasicGame.direction === "D")
    {
        BasicGame.pacman.x = BasicGame.celX / 2 + (BasicGame.pacmanX +1) * BasicGame.celX;
		BasicGame.pacman.y = BasicGame.infoGap + BasicGame.celY / 2 + ((BasicGame.pacmanY +1) + step/12) * BasicGame.celY ;	
    }
    else
    {
        BasicGame.pacman.x = step + 50 + BasicGame.pacmanX*12;
		BasicGame.pacman.y = 32 + BasicGame.pacmanY*12;
    }
};

var keepOnWalking = function(){
    if (BasicGame.direction === "R")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(1,1) !== "1")
        {
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            BasicGame.walking = false;
            BasicGame.steps = 0;
        }
    }
    else if (BasicGame.direction === "L")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(3,1) !== "1")
        {
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            BasicGame.walking = false;
            BasicGame.steps = 0;
        }
    }
    else if (BasicGame.direction === "U")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(0,1) !== "1")
        {
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            BasicGame.walking = false;
            BasicGame.steps = 0;
        }
    }
    else if (BasicGame.direction === "D")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(2,1) !== "1")
        {
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            BasicGame.walking = false;
            BasicGame.steps = 0;
        }
    }
};

var switchDirection = function(){
    if (BasicGame.nextDirection === "R")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(1,1) !== "1")
        {
            BasicGame.direction = BasicGame.nextDirection;
			BasicGame.pacman.animations.play('right');
            BasicGame.nextDirection = "";
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (BasicGame.nextDirection === "L")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(3,1) !== "1")
        {
            BasicGame.direction = BasicGame.nextDirection;
			BasicGame.pacman.animations.play('left');
            BasicGame.nextDirection = "";
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (BasicGame.nextDirection === "U")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(0,1) !== "1")
        {
            BasicGame.direction = BasicGame.nextDirection;
			BasicGame.pacman.animations.play('up');
            BasicGame.nextDirection = "";
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (BasicGame.nextDirection === "D")
    {
        if(BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(2,1) !== "1")
        {
            BasicGame.direction = BasicGame.nextDirection;
			BasicGame.pacman.animations.play('down');
            BasicGame.nextDirection = "";
            BasicGame.walking = true;
            BasicGame.steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
};

var getNextDirection = function(){
    if (BasicGame.nextDirection === "")
    {
        keepOnWalking();
    }
    else
    {
       switchDirection();
    }
};

var stepIntoNextGridCoordinate = function(){
    if (BasicGame.direction === "R")
    {
        BasicGame.pacmanX++;
        if (BasicGame.pacmanX === 26)
        {
            BasicGame.pacmanX = 0;
        }
    }
    else if (BasicGame.direction === "L")
    {
        BasicGame.pacmanX--;
        if (BasicGame.pacmanX === -1)
        {
            BasicGame.pacmanX = 25;
        }
    }
    else if (BasicGame.direction === "U")
    {
        BasicGame.pacmanY--;
    }
    else if (BasicGame.direction === "D")
    {
        BasicGame.pacmanY++;
    }
};

//score voor een extra leven
var addScore = function(aantal) {
	var scoreNa = BasicGame.score + aantal;
	
	if (Math.floor(BasicGame.score / BasicGame.extraLive) !== Math.floor(scoreNa / BasicGame.extraLive))
	{
		BasicGame.lives++;
	}
	BasicGame.score = scoreNa;
};


var setHuntingmode = function(){
	if (BasicGame.level-1>18 || BasicGame.levelInfo[Math.min(BasicGame.level-1, 18)].GhostBlueTime===0)
	{
		// als level>19 of GhostBlueTime=0 dan geen Pacman Hunting
	}
	else
	{
		//maximale snelheid bereikt bij level 18
		var timerHunting =  BasicGame.levelInfo[Math.min(BasicGame.level-1, 18)].GhostBlueTime;
		game.time.events.add(Phaser.Timer.SECOND * timerHunting, resetHuntingmode, this);
		BasicGame.ghostscore = 200;
		BasicGame.state = "PACMAN HUNTING";
		for (var i=0;i<BasicGame.ghost.length;i++)
			{
				BasicGame.ghost[i].gimage.tint = 0x0000ff
				BasicGame.ghost[i].speed = BasicGame.ghost[i].bluespeed;
				BasicGame.ghost[i].walkMode = "fleeing";
				
			}
	}
};

var resetHuntingmode = function(){
	BasicGame.state = "MAIN GAME";
	for (var i=0;i<4;i++)
        {	
			// reset alleen wanneer de spook niet dood is
			if (BasicGame.ghost[i].walkMode !== "death")
			{
				// set normal XXX
				BasicGame.ghost[i].gimage.tint = 0xffffff
				BasicGame.ghost[i].speed = BasicGame.ghost[i].orgspeed;
				BasicGame.ghost[i].walkMode = BasicGame.ghost[i].orgwalkMode;
			}
        }
};

var walk = function(){
    if (BasicGame.walking)
    {
        drawPacmanSteps(BasicGame.steps);
        BasicGame.steps++;
        if (BasicGame.steps === 12)
        {	
			console.log(BasicGame.walking);
            BasicGame.walking = false;
            stepIntoNextGridCoordinate(); // ZZZ

            //if (ShowFruit === true && pacmanX === FruitX && pacmanY === FruitY)
            //{
            //    addScore(levelInfo[Math.min(level-1, 18)].FruitPoint);	
			//	ShowFruit = false;				
            //}
            if (BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(5,1) === "1")
            {
                BasicGame.dotCount--;
			//	if (BasicGame.dotCount === 200 || BasicGame.dotCount === 100)
			//	{
					//BasicGame.ShowFruit = true;
					//BasicGame.FruitTimer = BasicGame.gameSpeed * 10; // 10 seconden
			//	}
                addScore(10);
				BasicGame.Dots[BasicGame.pacmanY][BasicGame.pacmanX].alpha = 0.2;
                BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX] = BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(0,5) + "0";
            }
            if (BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(4,1) === "1")
            {
                BasicGame.dotCount50--;
                addScore(50);
				BasicGame.Dots[BasicGame.pacmanY][BasicGame.pacmanX].alpha = 0.2;
                BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX] = BasicGame.Grid[BasicGame.pacmanY][BasicGame.pacmanX].substr(0,4) + "00";
				setHuntingmode();
            }
        }
        
    }
    else
    {
        getNextDirection(); 
        drawPacmanSteps(0);
    }
};

var setScore = function(){
	scoretext.text = BasicGame.score;  
	statetext.text = BasicGame.state;
}

// text vars
var scoretext;
var statetext;

BasicGame.Game.prototype = {

	create: function () {
		BasicGame.state = "GAME INIT";
		// bepaal de hoogte van het schermem grid	
		BasicGame.FingerPrintSpace = 0.3 * game.world.height;
		
		// reserveer 100 voor ruimte onder en of boven het grid, was 100. nu 0.4 x height
		BasicGame.SapceAroundGrid = 0.3 * game.world.height;
		// ruimte boven grid
		BasicGame.infoGap = 0;
		BasicGame.maxY = game.world.height - BasicGame.SapceAroundGrid ; // 374
		BasicGame.maxX = game.world.width; //338
			
		BasicGame.celX = BasicGame.maxX/28;
		BasicGame.celY = BasicGame.maxY/31;				
		BasicGame.schaal = BasicGame.maxX / 338;
		BasicGame.DotsCreate = 0;

		BasicGame.pacmanX = 12;
		BasicGame.pacmanY = 22;
		BasicGame.walking = false;
		BasicGame.direction = "";
		BasicGame.nextDirection = "";
		BasicGame.steps = 0;
		BasicGame.dotCount = 240;
		BasicGame.dotCount50 = 4;
		BasicGame.score = 0;
		BasicGame.ghostscore = 200;
		BasicGame.lives = 3;
		BasicGame.level = 1;
		
		BasicGame.extraLive = 10000;
		
		BasicGame.deathGhostHomeX = 13;
		BasicGame.deathGhostHomeY = 10;
		
		var style = { font: "11px Arial", fill: "#ffffff", align: "left" };
		scoretext = game.add.text(BasicGame.celX, BasicGame.celY * 18, BasicGame.score, style);
		game.add.text(BasicGame.celX, BasicGame.celY * 17, "Score:", style);
		
		statetext = game.add.text(23 * BasicGame.celX, BasicGame.celY * 18, BasicGame.state, style);
		game.add.text(23 * BasicGame.celX, BasicGame.celY * 17, "State:", style);

		var dot;	
		createLevelInfo();
		createMaze();

		// vanaf hier wordt BasicGame.infoGap gebruikt om de ruimte boven het grid te creeren. dus even naar 0
		mazesprite = this.add.sprite(BasicGame.maxX / 2, BasicGame.infoGap + BasicGame.maxY / 2, 'maze'); //c OK		
		mazesprite.angle = 180;
		mazesprite.width = 0; 
		mazesprite.height = 0;
		mazesprite.anchor.setTo(0.5, 0.5);
		tween = game.add.tween(mazesprite).to( {angle:0, width: BasicGame.maxX, height: BasicGame.maxY }, 3000, Phaser.Easing.Cubic.In, true);
			
		 //	When it completes it will call this function
		tween.onComplete.add(onMazeReady, this);	
		
		initGhosts();
		//var schaal = game.world.width / 338;
		
		// init pacman
		BasicGame.pacman = this.add.sprite( BasicGame.celX / 2 + (BasicGame.pacmanX +1) * BasicGame.celX, BasicGame.infoGap + BasicGame.celY / 2 + (BasicGame.pacmanY +1) * BasicGame.celY, 'pacman');		
		BasicGame.pacman.animations.add('up', [0,1], 8, true);
		BasicGame.pacman.animations.add('down', [2,3], 8, true);
		BasicGame.pacman.animations.add('left', [4,5], 8, true);
		BasicGame.pacman.animations.add('right', [6,7], 8, true);
		BasicGame.pacman.animations.play('left');
		BasicGame.pacman.anchor.setTo(0.5, 0.5);
		BasicGame.pacman.alpha = 1;
		BasicGame.pacman.height = 16 * BasicGame.schaal;
		BasicGame.pacman.width = 16 * BasicGame.schaal;
		BasicGame.pacman.bringToTop();
		
		// init ghost 4x
		var ghost1 = this.add.sprite(0,0, 'blinky');
		ghost1.animations.add('up', [0,1], 4, true);
		ghost1.animations.add('down', [2,3], 4, true);
		ghost1.animations.add('left', [4,5], 4, true);
		ghost1.animations.add('right', [6,7], 4, true);
		ghost1.animations.play('up');
		ghost1.bringToTop();
		ghost1.anchor.setTo(0.5, 0.5);
		ghost1.height = 16 * BasicGame.schaal;
		ghost1.width = 16 * BasicGame.schaal;
		BasicGame.ghost[0].gimage = ghost1;
	
		var ghost2 = this.add.sprite(0,0, 'inky');
		ghost2.animations.add('up', [0,1], 4, true);
		ghost2.animations.add('down', [2,3], 4, true);
		ghost2.animations.add('left', [4,5], 4, true);
		ghost2.animations.add('right', [6,7], 4, true);
		ghost2.animations.play('up');
		ghost2.bringToTop();
		ghost2.anchor.setTo(0.5, 0.5);
		ghost2.height = 16 * BasicGame.schaal;
		ghost2.width = 16 * BasicGame.schaal;
		BasicGame.ghost[1].gimage = ghost2;
		
		var ghost3 = this.add.sprite(0,0, 'pinky');
		ghost3.animations.add('up', [0,1], 4, true);
		ghost3.animations.add('down', [2,3], 4, true);
		ghost3.animations.add('left', [4,5], 4, true);
		ghost3.animations.add('right', [6,7], 4, true);
		ghost3.animations.play('up');
		ghost3.bringToTop();
		ghost3.anchor.setTo(0.5, 0.5);
		ghost3.height = 16 * BasicGame.schaal;
		ghost3.width = 16 * BasicGame.schaal;
		BasicGame.ghost[2].gimage = ghost3;
		
		var ghost4 = this.add.sprite(0,0, 'clyde');
		ghost4.animations.add('up', [0,1], 4, true);
		ghost4.animations.add('down', [2,3], 4, true);
		ghost4.animations.add('left', [4,5], 4, true);
		ghost4.animations.add('right', [6,7], 4, true);
		ghost4.animations.play('up');
		ghost4.bringToTop();
		ghost4.anchor.setTo(0.5, 0.5);
		ghost4.height = 16 * BasicGame.schaal;
		ghost4.width = 16 * BasicGame.schaal;
		BasicGame.ghost[3].gimage = ghost4;
		
		// init fingerprint
		BasicGame.finger = this.add.sprite(BasicGame.maxX / 2, BasicGame.maxY + BasicGame.FingerPrintSpace / 2, 'finger');
		BasicGame.finger.anchor.setTo(0.5, 0.5);
		BasicGame.finger.alpha = 0.5;
		BasicGame.finger.height = 35 * BasicGame.schaal;
		BasicGame.finger.width = 25 * BasicGame.schaal;
		BasicGame.finger.sendToBack();
		
				
		// init nav controls
		var navSize = 50;
		BasicGame.up = this.add.sprite(BasicGame.maxX / 2, BasicGame.maxY + BasicGame.FingerPrintSpace / 6, 'up');
		BasicGame.up.anchor.setTo(0.5, 0.5);
		BasicGame.up.alpha = 0.3;
		BasicGame.up.height = navSize * BasicGame.schaal;
		BasicGame.up.width = navSize * BasicGame.schaal;
		BasicGame.up.sendToBack();
		
		BasicGame.down = this.add.sprite(BasicGame.maxX / 2, BasicGame.maxY + BasicGame.FingerPrintSpace / 6 * 5, 'down');
		BasicGame.down.anchor.setTo(0.5, 0.5);
		BasicGame.down.alpha = 0.3;
		BasicGame.down.height = navSize * BasicGame.schaal;
		BasicGame.down.width = navSize * BasicGame.schaal;
		BasicGame.down.sendToBack();
		
		BasicGame.left = this.add.sprite(BasicGame.maxX / 6 * 2, BasicGame.maxY + BasicGame.FingerPrintSpace / 2, 'left');
		BasicGame.left.anchor.setTo(0.5, 0.5);
		BasicGame.left.alpha = 0.3;
		BasicGame.left.height = navSize * BasicGame.schaal;
		BasicGame.left.width = navSize * BasicGame.schaal;
		BasicGame.left.sendToBack();
		
		BasicGame.right = this.add.sprite(BasicGame.maxX / 6 * 4, BasicGame.maxY + BasicGame.FingerPrintSpace / 2, 'right');
		BasicGame.right.anchor.setTo(0.5, 0.5);
		BasicGame.right.alpha = 0.3;
		BasicGame.right.height = navSize * BasicGame.schaal;
		BasicGame.right.width = navSize * BasicGame.schaal;
		BasicGame.right.sendToBack();


	},
	update: function () {
		
		if (BasicGame.state == "MAIN GAME" || BasicGame.state == "PACMAN HUNTING") {
			getKey ();
			walkGhosts();		
			walk();
			setScore();
		}

	},
render: function () {
	 game.debug.text('FPS: ' + game.time.fps || 'FPS: -- ', 40, 40, "#00ff00");
	 	
},
	quitGame: function (pointer) {

		//	Here you should destroy anything you no longer need.
		//	Stop music, delete sprites, purge caches, free resources, all that good stuff.

		//	Then let's go back to the main menu.
		this.state.start('MainMenu');

	}

};

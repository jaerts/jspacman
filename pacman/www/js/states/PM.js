<script src="processing.js"></script>
<script type="text/processing" data-processing-target="mycanvas">
//----------------------------------------------------
//Pokémon fight
//---------------------------------------------------
void setup() {
  size(400, 400);
}
var Apple = { 
	Height: 17, 
	Width: 15, 
	PixelsColors: ['x','009600','00db00','00db00','00db00','00db00','x','009600','00db00','x','x','x','x','x','x',
'x','005e00','008e00','00db00','00db00','00db00','005200','00b000','00db00','520000','520000','520000','x','x','x',
'x','x','x','00db00','00db00','00db00','00db00','00db00','00db00','db0000','db0000','db0000','x','x','x',
'x','960000','db0000','db0000','db0000','db0000','00db00','964400','db0000','db0000','db0000','db0000','db0000','520000','x',
'440000','ab0000','db0404','db4444','db1515','db0000','449600','ab2f00','db0000','db0000','db0000','db0000','db0000','7c0000','440000',
'db0000','db0000','db0d0d','dbdbdb','db4444','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db9696','dbcdcd','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db9696','dbcdcd','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db9696','dbcdcd','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db0909','db0c0c','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000',
'x','9a0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','5a0000','x',
'x','960000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','520000','x',
'x','960000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','520000','x',
'x','x','270000','db0000','db0000','db0000','x','x','x','db0000','db0000','db0000','x','x','x',
'x','x','x','b10000','b10000','b10000','x','x','x','b10000','b10000','b10000','x','x','x']};
var Bell = { 
	Height: 17, 
	Width: 15, 
	PixelsColors: ['x','x','x','x','x','x','4c4c00','929200','929200','x','x','x','x','x','x',
'x','x','x','x','282800','3a3a00','a7a76e','bbbb54','bbbb00','7b7b00','6e6e00','525200','x','x','x',
'x','x','x','4c4c00','adad00','dbdb00','dbdbdb','dbdb96','dbdb00','dbdb00','c4c400','929200','x','x','x',
'x','x','4c4c00','c6c600','dbdb52','dbdbdb','dbdbdb','dbdb96','dbdb00','929200','929200','929200','4d4d00','363600','x',
'x','181800','bbbb00','dbdb7b','dbdb9f','dbdbdb','dbdbdb','dbdb96','dbdb00','929200','929200','929200','4d4d00','363600','x',
'x','1f1f00','dbdb00','dbdbdb','dbdbdb','dbdbdb','dbdbdb','dbdb96','dbdb00','929200','929200','929200','4d4d00','363600','x',
'x','1f1f00','dbdb00','dbdbdb','dbdbdb','dbdbdb','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'x','1f1f00','dbdb00','dbdbdb','dbdbb1','dbdb6d','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'x','1f1f00','dbdb00','dbdbdb','dbdb88','dbdb00','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'x','1f1f00','dbdb00','dbdbdb','dbdb88','dbdb00','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'x','1f1f00','dbdb00','dbdb7b','dbdb4c','dbdb00','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'x','1f1f00','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','c4c400','929200','929200','7b7b00','494900','494900','363600','x',
'969600','c6c600','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','929200','929200','929200','929200','929200','929200',
'7b7b00','7b7b00','7b7b00','7b7b00','7b7b00','7b7b00','bbbb00','bbbb00','bbbb00','525200','525200','525200','525200','525200','525200',
'x','x','x','x','x','x','929200','929200','929200','x','x','x','x','x','x',
'x','x','x','x','x','x','929200','929200','929200','x','x','x','x','x','x',
'x','x','x','x','x','x','5b5b00','5b5b00','5b5b00','x','x','x','x','x','x']};
var Cherry = { 
	Height: 17, 
	Width: 17, 
	PixelsColors: ['x','x','x','x','x','x','x','x','x','x','x','db4900','db4900','db4900','db4900','x','x',
'x','x','x','x','x','x','x','x','x','x','872d00','db4900','x','x','x','x','x',
'x','x','x','x','x','x','x','x','x','b13b00','db4900','db4900','x','x','x','x','x',
'x','x','x','x','x','x','x','x','db4900','db4900','db4900','db4900','x','x','x','x','x',
'x','x','x','x','x','x','x','8d2f00','db4900','x','x','db4900','x','x','x','x','x',
'x','x','x','x','x','x','bf3f00','db4900','db4900','x','x','db4900','x','x','x','x','x',
'x','x','x','x','x','db4900','x','x','x','x','x','db4900','db4900','bf3f00','x','x','x',
'x','x','x','x','822b00','db4900','x','x','x','x','x','x','c64200','bf3f00','x','x','x',
'x','x','x','bf3f00','db4900','db4900','x','x','x','x','x','x','b13b00','bf3f00','x','x','x',
'x','x','db0000','db0000','db0000','db0000','x','x','x','x','x','db0000','db0000','db0000','db0000','x','x',
'x','x','db0000','db0000','db0000','db0000','x','x','x','x','x','db0000','db0000','db0000','db0000','x','x',
'cd0000','db0000','db0000','db0000','db0000','db0000','db0000','b10000','x','b10000','db0000','db0000','db0000','db0000','db0000','db0000','bf0000',
'cd0000','db3636','dbdbdb','db1b1b','db0000','db0000','db0000','b10000','x','b10000','db1b1b','dbdbdb','db2929','db0000','db0000','db0000','bf0000',
'cd0000','db1e1e','db7b7b','db0f0f','db0000','db0000','db0000','b10000','x','b10000','db0f0f','db7b7b','db1717','db0000','db0000','db0000','bf0000',
'cd0000','db0000','db0000','db0000','db0000','db0000','db0000','b10000','x','b10000','db0000','db0000','db0000','db0000','db0000','db0000','bf0000',
'x','x','db0000','db0000','db0000','db0000','x','x','x','x','x','db0000','db0000','db0000','db0000','x','x',
'x','x','880000','880000','880000','880000','x','x','x','x','x','880000','880000','880000','880000','x','x']};
var Galaxian = { 
	Height: 17, 
	Width: 17, 
	PixelsColors: ['246dff','0f2f6f','x','x','x','x','x','6d0000','db0000','x','x','x','x','x','x','246dff','143d8f',
'246dff','0f2f6f','x','x','x','x','520000','960000','db0000','520000','290000','x','x','x','x','246dff','143d8f',
'246dff','0f2f6f','x','x','x','x','db0000','db0000','db0000','db0000','6d0000','x','x','x','x','246dff','143d8f',
'246dff','8aaa6f','dbdb00','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db5f00','dbdb00','246dff','143d8f',
'246dff','6a979c','a1b84f','db4400','db4400','db4400','db0000','db2200','db4400','db0000','db2200','db4400','db4400','c17722','a1b84f','246dff','143d8f',
'246dff','246dff','246dff','dbdb00','dbdb00','dbdb00','db0000','db6d00','dbdb00','db0000','db6d00','dbdb00','dbdb00','8aaa6f','246dff','246dff','143d8f',
'246dff','246dff','246dff','246dff','7fa47f','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','dbdb00','246dff','246dff','246dff','246dff','143d8f',
'184aaf','1f5edc','246dff','246dff','6292a7','a1b84f','dbdb00','dbdb00','dbdb00','dbdb00','bec927','a1b84f','246dff','246dff','246dff','184aaf','0d2a62',
'x','143d8f','246dff','246dff','246dff','246dff','dbdb00','dbdb00','dbdb00','dbdb00','7fa47f','246dff','246dff','246dff','246dff','x','x',
'x','x','x','246dff','246dff','246dff','2f73ef','85a777','dbdb00','2f73ef','2970f7','246dff','246dff','154096','x','x','x',
'x','x','x','1b51bf','1f5fdf','246dff','1b51bf','7b965f','dbdb00','1b51bf','1f5fdf','246dff','1b51bf','0f2d6b','x','x','x',
'x','x','x','x','12367f','246dff','x','6d6d00','dbdb00','x','12367f','246dff','x','x','x','x','x',
'x','x','x','x','x','x','x','6d6d00','dbdb00','x','x','x','x','x','x','x','x',
'x','x','x','x','x','x','x','6d6d00','dbdb00','x','x','x','x','x','x','x','x',
'x','x','x','x','x','x','x','6d6d00','dbdb00','x','x','x','x','x','x','x','x',
'x','x','x','x','x','x','x','6d6d00','dbdb00','x','x','x','x','x','x','x','x',
'x','x','x','x','x','x','x','585800','b1b100','x','x','x','x','x','x','x','x']};
var Key = { 
	Height: 18, 
	Width: 15, 
	PixelsColors: ['x','x','x','246dff','1696f1','00dbdb','00dbdb','00dbdb','00dbdb','00dbdb','0bb8e6','246dff','x','x','x',
'x','x','x','1696f1','0eb0e9','00dbdb','008888','008888','008888','00dbdb','07c5e2','1696f1','x','x','x',
'x','x','x','00dbdb','00dbdb','00dbdb','x','x','x','00dbdb','00dbdb','00dbdb','x','x','x',
'x','x','x','00dbdb','00dbdb','00dbdb','x','x','x','00dbdb','00dbdb','00dbdb','x','x','x',
'x','x','x','009696','00b0b0','00dbdb','004444','004444','004444','00dbdb','00c5c5','009696','x','x','x',
'x','x','x','x','005252','00dbdb','00dbdb','00dbdb','00dbdb','00dbdb','009696','x','x','x','x',
'x','x','x','x','x','x','dbdbdb','dbdbdb','dbdbdb','x','x','x','x','x','x',
'x','x','x','x','x','x','dbdbdb','c5c5c5','969696','444444','2f2f2f','x','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','969696','x','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','d6d6d6','cdcdcd','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','c9c9c9','a4a4a4','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','969696','x','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','d6d6d6','cdcdcd','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','c9c9c9','a4a4a4','x','x','x',
'x','x','x','x','x','x','dbdbdb','969696','x','dbdbdb','969696','x','x','x','x',
'x','x','x','x','x','x','1b1b1b','4e4e4e','bfbfbf','1b1b1b','x','x','x','x','x',
'x','x','x','x','x','x','x','373737','b1b1b1','x','x','x','x','x','x',
'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x']};
var Melon = { 
	Height: 17, 
	Width: 14, 
	PixelsColors: ['x','x','x','db4900','db4900','db4900','db4900','db4900','db4900','db4900','6d2400','x','x','x',
'x','x','x','5f1f00','5f1f00','5f1f00','5f1f00','9d3400','db4900','5f1f00','2f0f00','x','x','x',
'x','x','x','x','x','x','x','6d2400','db4900','x','x','x','x','x',
'x','x','x','00db00','249200','494900','494900','494900','494900','494900','494900','494900','x','x',
'x','004500','007b00','298800','249200','1f9b00','1f9b00','347200','494900','1f9b00','1f9b00','1f9b00','292900','x',
'x','007b00','00db00','494900','249200','00db00','00db00','249200','494900','00db00','00db00','00db00','494900','292900',
'494900','494900','494900','494900','249200','00db00','00db00','249200','494900','00db00','00db00','00db00','494900','292900',
'494900','347200','249200','249200','249200','249200','249200','366d00','494900','249200','249200','249200','494900','292900',
'494900','1f9b00','00db00','00db00','249200','494900','494900','494900','494900','494900','494900','494900','494900','292900',
'494900','1f9b00','00db00','00db00','249200','494900','00db00','00db00','00db00','494900','249200','00db00','00db00','007b00',
'494900','1f9b00','00db00','1f9b00','347200','494900','00db00','00db00','00db00','494900','249200','00db00','00db00','007b00',
'494900','1f9b00','00db00','494900','494900','494900','00db00','00db00','00db00','494900','249200','00db00','00db00','007b00',
'x','292900','494900','00db00','00db00','00db00','494900','494900','494900','494900','249200','00db00','494900','292900',
'x','292900','494900','00db00','00db00','00db00','494900','396800','298800','298800','249200','1f9b00','292900','x',
'x','292900','494900','00db00','00db00','00db00','494900','249200','00db00','00db00','249200','494900','x','x',
'x','x','x','494900','494900','494900','494900','249200','00db00','00db00','006d00','x','x','x',
'x','x','x','2d2d00','2d2d00','2d2d00','2d2d00','165b00','008800','008800','004400','x','x','x']};
var Orange = { 
	Height: 17, 
	Width: 15, 
	PixelsColors: ['x','x','x','x','x','x','x','009600','00db00','00db00','00db00','00db00','x','x','x',
'x','x','x','x','x','x','007b00','00bd00','00db00','00db00','008e00','005f00','x','x','x',
'x','x','x','x','x','x','00db00','00db00','00db00','00db00','005200','x','x','x','x',
'x','x','x','db4900','db4900','db4900','000000','009600','00db00','000000','882d00','db4900','x','x','x',
'x','541c00','812b00','db4900','db4900','db4900','7b2900','7b6a00','7b8800','7b2900','b73d00','db4900','7b2900','2e0f00','x',
'x','963200','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','521b00','x',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900',
'x','963200','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','521b00','x',
'x','963200','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','521b00','x',
'x','963200','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','db4900','521b00','x',
'x','x','x','x','963200','db4900','db4900','db4900','db4900','db4900','521b00','x','x','x','x',
'x','x','x','x','5e1f00','882d00','882d00','882d00','882d00','882d00','331100','x','x','x','x']};
var Strawberry = { 
	Height: 17, 
	Width: 15, 
	PixelsColors: ['x','x','x','00db00','00db00','00b100','x','x','x','00db00','00db00','00bf00','x','x','x',
'x','x','x','008800','008800','007e00','005200','005200','005800','008800','008800','x','x','x','x',
'x','x','x','x','x','002900','00db00','00db00','00bf00','x','x','x','x','x','x',
'x','x','290000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','bf0000','x','x','x',
'x','3b0000','600000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','c80000','x','x','x',
'x','bf0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','x','x',
'db0000','db0000','db2900','dbdb00','db1b00','db0000','db0000','dbb100','dbbf00','db0000','db0000','db0000','db0000','db0000','bf0000',
'db0000','db0000','db1c00','db9600','db1200','db0000','db0000','db7a00','db8300','db0000','db3700','db3b00','db0000','db0000','bf0000',
'db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','db0000','dbb100','dbbf00','db0000','db0000','bf0000',
'db0000','db0000','db0000','db0000','db0000','db2600','dbcd00','db2600','db0000','db0000','db0b00','db0b00','db0000','db0000','bf0000',
'a40000','d40000','db0a00','db3600','db0600','db1e00','dba400','db1e00','db0600','db3600','db0a00','db0000','db0000','b10000','8f0000',
'x','bf0000','db2900','dbdb00','db1b00','db0000','db0000','db0000','db1b00','dbdb00','db2900','db0000','db0000','x','x',
'x','bf0000','db0200','db0d00','db0100','db0000','db0000','db0000','db0100','db0d00','db0200','db0000','db0000','x','x',
'x','8f0000','ae0000','db0000','db0000','db0a00','db3600','db0a00','db0000','db0000','db0000','d40000','a40000','x','x',
'x','x','x','db0000','db0000','db2900','dbdb00','db2900','db0000','db0000','db0000','bf0000','x','x','x',
'x','x','x','x','x','x','db1b00','db0500','c30000','x','x','x','x','x','x',
'x','x','x','x','x','x','b10000','b10000','9b0000','x','x','x','x','x','x']};

//snelheid hoger dan eerst, 75 voor een beter game verloop
var gameSpeedBase =75;
var gameSpeed =75;

frameRate(gameSpeed);
var state = "CLICK TO START";

var col = color(28,28,220);
var pacmanX = 12;
var pacmanY = 22;
var walking = false;
var direction = "";
var nextDirection = "";
var steps = 0;
//score voor extra levens
var extraLive = 10000;

//voor start volgende level
var getReadyTimer = 0;

var gameOverTimer = 0;

var dotCount = 240;
var dotCount50 = 4;
var Grid = [];

//voor hunting en death ghost
var timerDeath = 0;
var deathGhostHomeX = 13;
var deathGhostHomeY = 10;
var timerHunting = 0;
var FruitX = 12;
var FruitY = 16;
var ShowFruit = false;
var FruitTimer = 0;
var highScoreLastAdd = -1;

var ghostscore = 200;
var lives = 3;
var level = 1;
var score = 0;

// keboard
var row = ["1234567890-+","QWERTYUIOP[]", "ASDFGHJKL:'\\", "!ZXCVBNM,. ?", "=@&|_()??^?="];
var keyx = 31;
var keyy = 35;
var keyCaps = false;
var keychoosen = "";
var highscorename = "";
var tmpScore = 0;

var highScore = [
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

var levelInfo = [
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

var ghost = [
{
    x: 11,
    y: 13,
	orgx: 11,
    orgy: 13,
    col: color(232, 76, 76),
    orgcol: color(232, 76, 76),
	direction: "",
    speed: 0.8,
	orgspeed: 0.8,
	bluespeed: 0.4,
    walking: false,
    orgwalkMode: "hunting",
	walkMode: "hunting"
},
{
    x: 12,
    y: 13,
	orgx: 12,
    orgy: 13,
    col: color(0, 238, 255),
    orgcol: color(0, 238, 255),
	direction: "",
    speed: 0.85,
	orgspeed: 0.85,
	bluespeed: 0.45,
    walking: false,
	orgwalkMode: "random",
    walkMode: "random"
},
{
    x: 13,
    y: 13,
	orgx: 13,
    orgy: 13,
    col: color(247, 118, 223),
    orgcol: color(247, 118, 223),
	direction: "",
    speed: 0.9,
	orgspeed: 0.9,
	bluespeed: 0.5,
    walking: false,
	orgwalkMode: "random",
    walkMode: "random"
},
{
    x: 13,
    y: 13,
	orgx: 13,
    orgy: 13,
    col: color(255, 209, 5),
	orgcol: color(255, 209, 5),
	direction: "",
    speed: 0.9,
	orgspeed: 0.9,
	bluespeed: 0.5,
    walking: false,
	orgwalkMode: "random",
    walkMode: "random"
}];

var setHuntingmode = function(){
	if (level-1>18 || levelInfo[Math.min(level-1, 18)].GhostBlueTime===0)
	{
		// als level>19 of GhostBlueTime=0 dan geen Pacman Hunting
	}
	else
	{
		//maximale snelheid bereikt bij level 18
		timerHunting =  gameSpeed * levelInfo[Math.min(level-1, 18)].GhostBlueTime;
		ghostscore = 200;
		state = "PACMAN HUNTING";
		for (var i=0;i<ghost.length;i++)
			{
				ghost[i].col = color(0, 50, 255);
				ghost[i].speed = ghost[i].bluespeed;
				ghost[i].walkMode = "fleeing";
			}
	}
};

var resetHuntingmode = function(){
	state = "MAIN GAME";
	for (var i=0;i<4;i++)
        {	
			// reset alleen wanneer de spook niet dood is
			if (ghost[i].walkMode !== "death")
			{
				ghost[i].col = ghost[i].orgcol;
				ghost[i].speed = ghost[i].orgspeed;
				ghost[i].walkMode = ghost[i].orgwalkMode;
			}
        }
};



//init function voor volgende level
var initLevel = function()
{
	dotCount = 240;
	dotCount50 = 4;
	ShowFruit = false;
	FruitTimer = 0;
	ghostscore = 200;
	pacmanX = 12;
	pacmanY = 22;
	walking = false;
	direction = "";
	nextDirection = "";
	steps = 0;
	timerHunting = 0;
	resetHuntingmode();
	for (var i=0;i<ghost.length;i++)
	{
		ghost[i].x = ghost[i].orgx;
		ghost[i].y = ghost[i].orgy;
	}
	
	Grid = [];
	Grid.push(['100101','101001','101001','101001','101001','100001','101001','101001','101001','101001','101001','110001','111100','111100','100101','101001','101001','101001','101001','101001','100001','101001','101001','101001','101001','110001']);
	Grid.push(['010101','111100','111100','111100','111100','010101','11110','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	Grid.push(['010110','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010110']);
	Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	Grid.push(['000101','101001','101001','101001','101001','000001','101001','101001','100001','101001','101001','001001','101001','101001','001001','101001','101001','100001','101001','101001','000001','101001','101001','101001','101001','010001']);
	Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','010101']);
	Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','010101']);
	Grid.push(['001101','101001','101001','101001','101001','010001','111100','111100','001101','101001','101001','110001','111100','111100','100101','101001','101001','011001','111100','111100','000101','101001','101001','101001','101001','011001']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010100','111100','111100','010100','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010100','111100','111100','010100','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','100100','101000','101000','001000','101000','101000','001000','101000','101000','110000','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','011100','011100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','100100','101100','011100','011100','111000','110000','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['101000','101000','101000','101000','101000','000001','101000','101000','010000','111100','000100','011100','011100','011100','011100','010000','111100','000100','101000','101000','000001','101000','101000','101000','101000','101000']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','001100','001000','001000','001000','001000','011000','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','000100','101000','101000','101000','101000','101000','101000','101000','101000','010000','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['111100','111100','111100','111100','111100','010101','111100','111100','010100','111100','111100','111100','111100','111100','111100','111100','111100','010100','111100','111100','010101','111100','111100','111100','111100','111100']);
	Grid.push(['100101','101001','101001','101001','101001','000001','101001','101001','001001','101001','101001','110001','111100','111100','100101','101001','101001','001001','101001','101001','000001','101001','101001','101001','101001','110001']);
	Grid.push(['010101','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010101']);
	Grid.push(['010110','111100','111100','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','010101','111100','111100','111100','111100','010110']);
	Grid.push(['001101','101001','110001','111100','111100','000101','101001','101001','100001','101001','101001','001001','101000','101000','001001','101001','101001','100001','101001','101001','010001','111100','111100','100101','101001','011001']);
	Grid.push(['111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100']);
	Grid.push(['111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','010101','111100','111100']);
	Grid.push(['100101','101001','001001','101001','101001','011001','111100','111100','001101','101001','101001','110001','111100','111100','100101','101001','101001','011001','111100','111100','001101','101001','101001','001001','101001','110001']);
	Grid.push(['010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101']);
	Grid.push(['010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101','111100','111100','010101','111100','111100','111100','111100','111100','111100','111100','111100','111100','111100','010101']);
	Grid.push(['001101','101001','101001','101001','101001','101001','101001','101001','101001','101001','101001','001001','101001','101001','001001','101001','101001','101001','101001','101001','101001','101001','101001','101001','101001','011001']);

	//BROLPD: Boven Rechts Onder Links Power Dot
	//1 = (muur) aanwezig
	//0 = (muur) afwezig
	state = "GET READY";
	getReadyTimer = gameSpeed * 3; // 3 seconden
};

var initGame = function (){
	initLevel();
	lives = 3;
	level = 1;
	score = 0;
};


var processHighScoreCharacter = function() {
	//"?^?"
		if (keychoosen === "?")
		{
			highscorename = highscorename.slice(0, -1);
		}
		else if (keychoosen === "?")
		{
			highscorename = "";
		}
		else if (keychoosen === "^")
		{
			keyCaps = !keyCaps;
		}
		else if (keychoosen === "?")
		{
			highScore[highScoreLastAdd-1] = highScore[highScoreLastAdd-1].replace('Joke Smit', highscorename);	
			state = "CLICK TO START";
		}
		else
		{
			highscorename += keychoosen;
		}
};



//score voor een extra leven
var addScore = function(aantal) {
	var scoreNa = score + aantal;
	
	if (Math.floor(score / extraLive) !== Math.floor(scoreNa / extraLive))
	{
		lives++;
	}
	score = scoreNa;
};

var hitTest = function(ghostNr){
    var dx = (12*ghost[ghostNr].x + 50) - (12*pacmanX + 50);
    var dy = (12*ghost[ghostNr].y + 32) - (12*pacmanY + 32);
	
    if (sqrt((dx*dx)+(dy*dy))<10)
    {

		if (state === "PACMAN HUNTING")
		{
			//alleen punten wanneer de spook nog niet dood is
			//anders blijft de score oplopen
			if (ghost[ghostNr].walkMode !== "death") 
			{
				addScore(ghostscore);
				ghostscore = ghostscore * 2;
				ghost[ghostNr].walkMode = "death";
				ghost[ghostNr].speed = 4;			
			}
		}
		else
		{	
			//wanneer de spook na zijn dood onderweg is naar zijn beginpunt
			//in dit geval passeren pacman en de ghost elkaar gewoon
			if (ghost[ghostNr].walkMode !== "death")
			{
				state = "PACMANDEATH";
			}
		}
    }
};
var pacmanDeath = function(){
    ghost[0].x = 11;
    ghost[0].y = 13;
    ghost[1].x = 12;
    ghost[1].y = 13;
    ghost[2].x = 13;
    ghost[2].y = 13;
    ghost[3].x = 14;
    ghost[3].y = 13;
    ghost[0].direction = "U";
    ghost[1].direction = "U";
    ghost[2].direction = "U";
    ghost[3].direction = "U";
    
    noStroke();
    fill(230, 255, 0);
    if (timerDeath <10)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 300, 600);
    }
    else if (timerDeath < 20)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 330, 570);
    }
    else if (timerDeath < 30)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 360, 540);
    }
    else if (timerDeath < 40)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 390, 510);
    }
     else if (timerDeath < 50)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 420, 480);
    }
     else if (timerDeath < 60)
    {
        arc(50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 450, 450);
    }
    else if (timerDeath === 80)
    {
        pacmanX = 12;
        pacmanY = 22;
        walking = false;
        lives = lives -1;
        direction = "";
        timerDeath = 0;
		state = "GET READY";
		getReadyTimer = gameSpeed * 3; // 3 seconden
    }
};
var pacmanLives = function(){
    noStroke();
	fill(255, 255, 0);
    if (lives > 0 )
    {
		for (var i=0; i<lives; i++)
		{
			arc(11, 280 - (i*17), 12, 12, 30, 330);
		}
	}
    else
    {
        gameOverTimer = gameSpeed * 3;
        state = "GAME OVER";
    }
};

var drawPacmanSteps = function(step){
    fill(230, 255, 0);
    noStroke();
    if (direction === "R")
    {
        arc(step + 50 + pacmanX*12, 32 +pacmanY*12, 12, 12, 30, 330);
    }
    else if (direction === "L")
    {
        arc(-step + 50 + pacmanX*12, 32 + pacmanY*12, 12, 12, 210, 510);
    }
    else if (direction === "U")
    {
        arc(50 + pacmanX*12,- step + 32 + pacmanY*12, 12, 12, 300, 600);
    }
    else if (direction === "D")
    {
        arc(50 + pacmanX*12,step + 32 + pacmanY*12, 12, 12, 120, 420);
    }
    else
    {
        //wanneer direction === ""
        //dit is alleen aan het begin van het spel
        arc(50 + pacmanX*12, 32 +pacmanY * 12, 12, 12, 30, 330);
    }
};
var drawGhost = function(ghostNr){
    var i = ghostNr;
	if (ghost[i].walkMode === "death")
	{
		//teken alleen de oogjes van de spook
		fill(255, 255, 255);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		fill(0, 0, 0);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);

	}
	else
	{
		noStroke();
		fill(ghost[i].col);
		noStroke();
		
		arc(12*ghost[i].x +2.5+ghost[i].stepsX + (4*12), 12 *ghost[i].y -5+ ghost[i].stepsY + (3*12), 11, 11, 180, 360);
		rect((12 *ghost[i].x -3)+ ghost[i].stepsX + (4*12), 12 *ghost[i].y -6+ ghost[i].stepsY + (3*12), 11, 4.4);
		arc((12 *ghost[i].x +7.8)+ ghost[i].stepsX + (4*12), 12 *ghost[i].y -2+ ghost[i].stepsY + (3*12), 5.5, 9.3, 70, 200);
		arc((12 *ghost[i].x -3)+ ghost[i].stepsX + (4*12), 12 *ghost[i].y -2+ ghost[i].stepsY + (3*12), 5.5, 9.3, 340, 470);
		triangle((12 *ghost[i].x +1)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -2+ ghost[i].stepsY + (3*12),(12 *ghost[i].x +6)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -2+ ghost[i].stepsY + (3*12),(12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y +4+ ghost[i].stepsY + (3*12));
		triangle((12 *ghost[i].x -2)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -2+ ghost[i].stepsY + (3*12),(12 *ghost[i].x +3)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -2+ ghost[i].stepsY + (3*12),(12 *ghost[i].x +1)+ ghost[i].stepsX + (4*12),12 *ghost[i].y +4+ ghost[i].stepsY + (3*12));
		fill(255, 255, 255);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.5+ ghost[i].stepsY + (3*12),3.8,3.8);
		fill(0, 0, 0);
		ellipse((12 *ghost[i].x +0)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);
		ellipse((12 *ghost[i].x +4)+ ghost[i].stepsX + (4*12),12 *ghost[i].y -5.8+ ghost[i].stepsY + (3*12),1.8,1.8);
	}
};

var keyProcessing = function(){
    if (keyPressed&& keyCode === RIGHT)
    {
        nextDirection = "R";
    }
    else if (keyPressed&& keyCode === LEFT)
    {
        nextDirection = "L";
    }
    else if (keyPressed&& keyCode === UP)
    {
        nextDirection = "U";
    }
    else if (keyPressed&& keyCode === DOWN)
    {
        nextDirection = "D";
    }
};
var stepIntoNextGridCoordinate = function(){
    if (direction === "R")
    {
        pacmanX++;
        if (pacmanX === 26)
        {
            pacmanX = 0;
        }
    }
    else if (direction === "L")
    {
        pacmanX--;
        if (pacmanX === -1)
        {
            pacmanX = 25;
        }
    }
    else if (direction === "U")
    {
        pacmanY--;
    }
    else if (direction === "D")
    {
        pacmanY++;
    }
};
var keepOnWalking = function(){
    if (direction === "R")
    {
        if(Grid[pacmanY][pacmanX].substr(1,1) !== "1")
        {
            walking = true;
            steps = 0;
        }
        else
        {
            walking = false;
            steps = 0;
        }
    }
    else if (direction === "L")
    {
        if(Grid[pacmanY][pacmanX].substr(3,1) !== "1")
        {
            walking = true;
            steps = 0;
        }
        else
        {
            walking = false;
            steps = 0;
        }
    }
    else if (direction === "U")
    {
        if(Grid[pacmanY][pacmanX].substr(0,1) !== "1")
        {
            walking = true;
            steps = 0;
        }
        else
        {
            walking = false;
            steps = 0;
        }
    }
    else if (direction === "D")
    {
        if(Grid[pacmanY][pacmanX].substr(2,1) !== "1")
        {
            walking = true;
            steps = 0;
        }
        else
        {
            walking = false;
            steps = 0;
        }
    }
};
var switchDirection = function(){

    if (nextDirection === "R")
    {
        if(Grid[pacmanY][pacmanX].substr(1,1) !== "1")
        {
            direction = nextDirection;
            nextDirection = "";
            walking = true;
            steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (nextDirection === "L")
    {
        if(Grid[pacmanY][pacmanX].substr(3,1) !== "1")
        {
            direction = nextDirection;
            nextDirection = "";
            walking = true;
            steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (nextDirection === "U")
    {
        if(Grid[pacmanY][pacmanX].substr(0,1) !== "1")
        {
            direction = nextDirection;
            nextDirection = "";
            walking = true;
            steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
    else if (nextDirection === "D")
    {
        if(Grid[pacmanY][pacmanX].substr(2,1) !== "1")
        {
            direction = nextDirection;
            nextDirection = "";
            walking = true;
            steps = 0;
        }
        else
        {
            keepOnWalking();
        }
    }
};
var getNextDirection = function(){
    if (nextDirection === "")
    {
        keepOnWalking();
    }
    else
    {
        switchDirection();
    }
};

var walk = function(){
    if (walking)
    {
        drawPacmanSteps(steps);
        steps++;
        if (steps === 12)
        {
            walking = false;
            stepIntoNextGridCoordinate();

            if (ShowFruit === true && pacmanX === FruitX && pacmanY === FruitY)
            {
                addScore(levelInfo[Math.min(level-1, 18)].FruitPoint);	
				ShowFruit = false;				
            }
            if (Grid[pacmanY][pacmanX].substr(5,1) === "1")
            {
                dotCount--;
				if (dotCount === 200 || dotCount === 100)
				{
					ShowFruit = true;
					FruitTimer = gameSpeed * 10; // 10 seconden
				}
                addScore(10);
                Grid[pacmanY][pacmanX] = Grid[pacmanY][pacmanX].substr(0,5) + "0";
            }
            if (Grid[pacmanY][pacmanX].substr(4,1) === "1")
            {
                dotCount50--;
                addScore(50);
                Grid[pacmanY][pacmanX] = Grid[pacmanY][pacmanX].substr(0,4) + "00";
				setHuntingmode();
            }
        }
        
    }
    else
    {
        getNextDirection();
        fill(230, 255, 0);
        noStroke();
        drawPacmanSteps(0);
    }
};


var calculateDirectionOptionsGhostWithWalkBack = function(ghostNr){
    var directions = "URDL";
    var directionOptions = "";
    var block = Grid[ghost[ghostNr].y][ghost[ghostNr].x];
    for(var wall=0; wall<4; wall++)
    {
        if (block.substr(wall,1) !== "1") 
        {
            directionOptions = directionOptions + directions.substr(wall,1);
        }
    }  
    return directionOptions;
};

var calculateDirectionOptionsGhost = function(ghostNr){
    var directions = "URDL";
    var directionOptions = "";
    var block = Grid[ghost[ghostNr].y][ghost[ghostNr].x];
    for(var wall=0; wall<4; wall++)
    {
        if (block.substr(wall,1) !== "1") 
        {
            directionOptions = directionOptions + directions.substr(wall,1);
        }
    }
    
    //spook mag niet terug lopen
    if (directionOptions.length > 1)
    {
        if (ghost[ghostNr].direction === "R") 
        { 
            directionOptions = directionOptions.replace("L","");
        }
        else if (ghost[ghostNr].direction === "L") 
        { 
            directionOptions = directionOptions.replace("R","");
        }
        else if (ghost[ghostNr].direction === "U") 
        { 
            directionOptions = directionOptions.replace("D","");
        }
        else if (ghost[ghostNr].direction === "D") 
        { 
            directionOptions = directionOptions.replace("U","");
        }
    }
    return directionOptions;
};
var fleeingGhost = function(directions,ghostNr){
    if (pacmanY > ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (pacmanY < ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
    else if (pacmanX < ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (pacmanX > ghost[ghostNr].x && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(floor(random(0,directions.length)),1);
    }
};
var huntingGhost = function(directions, ghostNr){
    if (pacmanY < ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (pacmanY > ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
    else if (pacmanX > ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (pacmanX < ghost[ghostNr].x && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(floor(random(0,directions.length)),1);
    }
};
var deadGhost = function(directions, ghostNr){
	//eerst y dan x
	if (deathGhostHomeY < ghost[ghostNr].y && directions.includes("U"))
    {
        return "U";
    }
    else if (deathGhostHomeY > ghost[ghostNr].y && directions.includes("D"))
    {
        return "D";
    }
	else if (deathGhostHomeX > ghost[ghostNr].x && directions.includes("R"))
    {
       return "R";
    }
    else if (deathGhostHomeX < ghost[ghostNr].yx && directions.includes("L"))
    {
        return "L";
    }
    else
    {
        return directions.substr(floor(random(0,directions.length)),1);
    }
};
var keyGhost = function(ghostNr){
    var directionOptions = calculateDirectionOptionsGhost(ghostNr);
    
    if (ghost[ghostNr].walkMode === "random")
    {
        ghost[ghostNr].direction = directionOptions.substr(floor(random(0,directionOptions.length)),1);
    }
    else if (ghost[ghostNr].walkMode === "hunting")
    {
        ghost[ghostNr].direction = huntingGhost(directionOptions, ghostNr);
    }
    else if (ghost[ghostNr].walkMode === "fleeing")
    {
        ghost[ghostNr].direction = fleeingGhost(directionOptions, ghostNr);
    } 
	else if (ghost[ghostNr].walkMode === "death")
    {
        ghost[ghostNr].direction = deadGhost(directionOptions, ghostNr);
    }
    
    ghost[ghostNr].stepsX = 0;
    ghost[ghostNr].stepsY = 0;
    ghost[ghostNr].walking = true;
};
var moveGhost = function(ghostNr){
        if (ghost[ghostNr].direction === "R")
        {
            ghost[ghostNr].stepsX+=ghost[ghostNr].speed;
        }
        else if (ghost[ghostNr].direction === "L")
        {
            ghost[ghostNr].stepsX-=ghost[ghostNr].speed;
        }
        else if (ghost[ghostNr].direction === "U")
        {
            ghost[ghostNr].stepsY-=ghost[ghostNr].speed;
        }
        else if (ghost[ghostNr].direction === "D")
        {
            ghost[ghostNr].stepsY+=ghost[ghostNr].speed;
        }
};
var walkGhost = function(ghostNr){
    //als deze spook loopt
    if (ghost[ghostNr].walking)
    {
        moveGhost(ghostNr);
        drawGhost(ghostNr);
        if (abs(ghost[ghostNr].stepsX) >= 12 || abs(ghost[ghostNr].stepsY) >= 12)
        {
            ghost[ghostNr].walking = false;
            if (ghost[ghostNr].direction === "R")
            {
                ghost[ghostNr].x++;
                if (ghost[ghostNr].x === 26)
                {
                    ghost[ghostNr].x = 0;
                }
            }
            else if (ghost[ghostNr].direction === "L")
            {
                ghost[ghostNr].x--;
                if (ghost[ghostNr].x === -1)
                {
                    ghost[ghostNr].x = 25;
                }
            }
            else if (ghost[ghostNr].direction === "U")
            {
                ghost[ghostNr].y--;
            }
            else if (ghost[ghostNr].direction === "D")
            {
                ghost[ghostNr].y++;
            }
        }
		//tijdens "click to start" lopen de ghosts ook over het scherm
		if (state !== "CLICK TO START")
		{
			hitTest(ghostNr);
		}
    }
    else
    {
		if (ghost[ghostNr].walkMode === "death")
		{
			if ((ghost[ghostNr].x === deathGhostHomeX) && (ghost[ghostNr].y ===deathGhostHomeY)) 
			{
				ghost[ghostNr].x = 12;
				ghost[ghostNr].y = 13;
				ghost[ghostNr].col = ghost[ghostNr].orgcol;
				ghost[ghostNr].speed = ghost[ghostNr].orgspeed;
				ghost[ghostNr].walkMode = ghost[ghostNr].orgwalkMode;
			}
		}
        //als walking === false -> nieuwe richting bepalen
        ghost[ghostNr].stepsX = 0;
        ghost[ghostNr].stepsY = 0;
        keyGhost(ghostNr);
        drawGhost(ghostNr); 
    }
};
var ghostLoop = function(){
    for (var i=0;i<ghost.length;i++)
        {
            walkGhost(i);
        }
};

var rooster = function(){
    for(var x = 0; x < 26; x++)
    {   
        for(var y = 0; y < 29; y++)
        {
            noFill();
            strokeWeight(1);
            stroke(255, 255, 255,40);
            rect(44 + x * 12, 26 + y * 12, 12, 12);
        }
    }
};
var pacmanBoard = function(){
    strokeWeight(3);
    //boven
    noFill();
    stroke(col);
    rect(37, 19, 325, 361, 8);
    rect(32, 14, 335, 371, 13);
    
    //midden
    fill(0, 0, 0);
    stroke(col);
    rect(20, 128, 78, 48, 13);
    rect(20, 200, 78, 48, 13);
    rect(301, 128, 78, 48, 13);
    rect(301, 200, 78, 48, 13);
    
    noFill();
    stroke(col);
    rect(25, 133, 68, 38, 8);
    rect(25, 205, 68, 38, 8);
    rect(306, 133, 68, 38, 8);
    rect(306, 205, 68, 38, 8);
    
    noStroke();
    fill(0, 0, 0);
    rect(16, 126, 15, 125);
    rect(369, 126, 15, 125);
    rect(34, 126, 2, 5);
    rect(34, 174, 2, 5);
    rect(34, 198, 2, 5);
    rect(34, 246, 2, 5);
    rect(364, 126, 2, 5);
    rect(364, 174, 2, 5);
    rect(364, 198, 2, 5);
    rect(364, 246, 2, 5);
    
    noFill();
    stroke(col);
    rect(34, 175, 0, 5);
    rect(34, 196, 0, 5);
    rect(365, 175, 0, 5);
    rect(365, 196, 0, 5);
    
    noStroke();
    fill(0, 0, 0);
    rect(30,115,25,21);
    rect(30,240,25,21);
    rect(350,115,25,21);
    rect(350,240,25,21);
    noFill();
    stroke(col);
    rect(32, 102, 37, 31, 13);
    rect(37, 107, 27, 21, 8);
    rect(32, 243, 37, 31, 13);
    rect(37, 248, 27, 21, 8);
    rect(330, 102, 37, 31, 13);
    rect(335, 107, 27, 21, 8);
    rect(330, 243, 37, 31, 13);
    rect(335, 248, 27, 21, 8);
    
    noStroke();
    fill(0, 0, 0);
    rect(39, 85, 40, 42, 8);
    rect(39, 250, 40, 42, 8);
    rect(321, 85, 40, 42, 8);
    rect(321, 250, 40, 42, 8);
    rect(34,102,2,12);
    rect(34,262,2,12);
    rect(364,102,2,12);
    rect(364,262,2,12);
    rect(60,130,11,2);
    rect(60,245,11,2);
    rect(331,130,11,2);
    rect(331,245,11,2);
    rect(30,178,12,21);
    rect(358,178,12,21);
    
    //helemaal bovenaan, linksonder en rechtsonder outline
    noFill();
    stroke(col);
    rect(193, 14, 13, 54, 8);
    rect(32, 307, 30, 14, 8);
    rect(337, 307, 30, 14, 8);
    
    noStroke();
    fill(0, 0, 0);
    rect(190,16,19,2);
    rect(195,17,10,11);
    rect(34,307,2,16);
    rect(364,307,2,16);
    rect(36,309,3,11);
    rect(361,309,3,11);
    
    //box midden
    noFill();
    stroke(col);
    rect(158, 164, 84, 48);
    rect(163, 169, 74, 38);
    noStroke();
    fill(0, 0, 0);
    rect(186, 162, 28, 10);
    
    // 1e en 2e rechthoek linksboven
    noFill();
    stroke(col);
    rect(61, 43, 37, 25, 8);
    rect(122, 43, 48, 25, 8);
    //3e, 4e rechtsboven
    noFill();
    stroke(col);
    rect(230, 43, 48, 25, 8);
    rect(301, 43, 37, 25, 8);
    //5e, 9e
    noFill();
    stroke(col);
    rect(61, 91, 37, 14, 8);
    rect(301, 91, 37, 14, 8);
    //6e, 8e
    stroke(col);
    rect(128, 127, 42 ,14, 8);
    rect(121, 91, 14, 85, 8);
    rect(230, 127, 42 ,14, 8);
    rect(265, 91, 14, 85, 8);
    noStroke();
    fill(0, 0, 0);
    rect(125, 129, 20, 11);
    rect(123, 125, 11, 20);
    rect(257, 129, 20, 11);
    rect(267, 125, 11, 20);
    //7e
    noFill();
    stroke(col);
    rect(158, 91, 84, 14, 8);
    rect(193, 100, 14, 40, 8);
    noStroke();
    fill(0, 0, 0);
    rect(195, 95, 11, 20);
    rect(191, 93, 20, 11);
    //11e
    noFill();
    stroke(col);
    rect(158, 235, 84, 14, 8);
    rect(193, 244, 14, 40, 8);
    noStroke();
    fill(0, 0, 0);
    rect(195, 239, 11, 20);
    rect(191, 237, 20, 11);
    //10e, 12e
    noFill();
    stroke(col);
    rect(121, 200, 14, 48, 8);
    rect(265, 200, 14, 48, 8);
    //13e, 16e
    noFill();
    stroke(col);
    rect(61, 271, 37, 14, 8);
    rect(85, 271, 14, 48, 8);
    rect(301, 271, 37, 14, 8);
    rect(301, 271, 14, 48, 8);
    noStroke();
    fill(0, 0, 0);
    rect(78, 273, 20, 11, 11);
    rect(87, 281, 11, 20);
    rect(303, 273, 20, 11, 11);
    rect(303, 281, 11, 20);
    //14e, 15e
    noFill();
    stroke(col);
    rect(122, 271, 48, 14, 8);
    rect(230, 271, 48, 14, 8);
    //18e
    noFill();
    stroke(col);
    rect(158, 307, 84, 14, 8);
    rect(193, 316, 14, 40, 8);
    noStroke();
    fill(0, 0, 0);
    rect(195, 311, 11, 20);
    rect(191, 309, 20, 11);
    //17e, 19e
    noFill();
    stroke(col);
    rect(61, 343, 109, 14, 8);
    rect(230, 343, 109, 14, 8);
    rect(121, 307, 14, 48, 8);
    rect(265, 307, 14, 48, 8);
    noStroke();
    fill(0, 0, 0);
    rect(123, 330, 11, 20);
    rect(118, 345, 20, 11);
    rect(267, 330, 11, 20);
    rect(264, 345, 20, 11);
};
var pacman10pt = function(){
    for (var y = 0; y<29;y++)
    {
        for (var x = 0; x<26;x++)
        {
            var posy = y*12;
            var posx = x*12;
            fill(255, 255, 255);
            if (Grid[y][x].substr(5,1) === "1")
            {
                noStroke();
                fill(251, 255, 0);
                ellipse(posx+50, posy+32,3,3);
            }
            else if (Grid[y][x].substr(4,1) === "1")
            {
                noStroke();
                fill(241, 169, 242);
                ellipse(posx+50, posy+32,8,8);
            }
        }
    }
};
var information = function(){
    noStroke();
    textFont(createFont("Arial Black"), 15);
    fill(224, 102, 255, 190);
    text("L\nE\nV\nE\nL", 380, 25);
    text(level, 380, 138);

    
    fill(0, 255, 34, 190);
    textFont(createFont("Arial Black"), 14);
    text("P\nO\nI\nN\nT\nS", 5, 25);
    text(score, 5, 155);
    
    fill(255, 255, 0);
    textFont(createFont("Arial Black"), 14);
	// ZZZ: andere pos voor meer levens
    text("L\nI\nV\nE\nS", 5, 305);
    
    
    textFont(createFont("Arial Bold"), 12);
    fill(251, 255, 0, 190);
    ellipse(318, 152, 3, 3);
    text("x " + dotCount, 325, 147, 50, 60);
    fill(241, 169, 242, 190);
    ellipse(319, 225, 8, 8);
    text("x " + dotCount50, 328, 220, 50, 60);
};

var colorChange = function(){
    noStroke();
    //roze
    fill(255, 0, 251);
    rect(379,250,10,10);
    //lichtblauw
    fill(0, 175, 250);
    rect(379,270,10,10);
    //donkerblauw
    fill(28, 28, 220);
    rect(379,290,10,10);
    //groen
    fill(4, 255, 0);
    rect(379,310,10,10);
    //geel
    fill(251, 255, 0);
    rect(379,330,10,10);
    //oranje
    fill(255, 157, 0);
    rect(379,350,10,10);
    //rood
    fill(255, 0, 0);
    rect(379,370,10,10);
};
var colorChangeHoover = function(){
    noFill();
    stroke(0, 0, 0);
    strokeWeight(4);
    if (mouseX>379 && mouseX<389 && mouseY>250 && mouseY<260)
    {
        rect(379,250,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>270 && mouseY<280)
    {
        rect(379,270,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>290 && mouseY<300)
    {
        rect(379,290,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>310 && mouseY<320)
    {
        rect(379,310,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>330 && mouseY<340)
    {
        rect(379,330,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>350 && mouseY<360)
    {
        rect(379,350,10,10);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>370 && mouseY<380)
    {
        rect(379,370,10,10);
    }
};

mouseClicked = function(){
    if ( state === "CLICK TO START")
	{
		//init om de spoken naar hun beginplaats te krijgen
	    initLevel();
		state = "GET READY";
    }
	else if (state === "GET NAME")
	{
		processHighScoreCharacter();
	}
    else if (mouseX>379 && mouseX<389 && mouseY>250 && mouseY<260)
    {
        col = color(255, 0 , 251);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>270 && mouseY<280)
    {
        col = color(0, 175, 250);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>290 && mouseY<300)
    {
        col = color(28, 28, 220);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>310 && mouseY<320)
    {
        col = color(4, 255, 0);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>330 && mouseY<340)
    {
        col = color(251, 255, 0);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>350 && mouseY<360)
    {
        col = color(255, 157, 0);
    }
    else if (mouseX>379 && mouseX<389 && mouseY>370 && mouseY<380)
    {
        col = color(255, 0, 0);
    }
};

//spoken na een bepaalde tijd blauw en wit knipperen
var ghostBlink = function() {
	if (timerHunting < gameSpeed * levelInfo[Math.min(level-1, 18)].FlashesBeforEndOFBlue / 2)
	{
		//berekening om oneven en even te gebruiken voor de kleur
		var teller = Math.floor((6 * timerHunting * 1.0) / gameSpeed);
		var kleur = (teller % 2);
		for (var i=0;i<ghost.length;i++)
		{	
			//reset alleen als de spook niet dood is
			if (ghost[i].walkMode === "fleeing")
			{
				if (kleur === 1)
				{
					ghost[i].col =  color(255, 255, 255); // wit
				}
				else
				{
					ghost[i].col =  color(0, 50, 255); // blue
				}
			}
		}
	}
};

//hexadecimale kleurcodes omrekenen in rgb
var hexToRgb = function(hex) {
    var col;
    if (hex === 'x')
    {
        col=color(0, 224, 0, 0);
    }
    else
    {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;		

            col=color(r, g, b);
    }
    return col;
};


//in points tekenen
var drawPoint = function(fruit, posx, posy, colortint){
    strokeWeight(1);
    var kleurteller = 0;

    for (var y=0; y<fruit.Height; y+=1)
    {   
        for (var x=0; x<fruit.Width; x+=1)
        {
            stroke(hexToRgb(fruit.PixelsColors[kleurteller]));
            point(posx + x, posy + y);
            kleurteller++;
        }
    }
};

var drawFruit = function(){
	FruitTimer--;
	if (FruitTimer === 0)
	{
		ShowFruit = false;
	} 
	
	if (ShowFruit)
	{
		if (levelInfo[Math.min(level-1, 18)].fruit === "Cherry")
		{ 
			drawPoint(Cherry, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Strawberry")
		{ 
			drawPoint(Strawberry, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Orange")
		{ 
			drawPoint(Orange, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Apple")
		{ 
			drawPoint(Apple, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Melon")
		{ 
			drawPoint(Melon, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Galaxian")
		{ 
			drawPoint(Galaxian, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Bell")
		{ 
			drawPoint(Bell, 12*FruitX+50, 12*FruitY+25); 
		}
		else if (levelInfo[Math.min(level-1, 18)].fruit === "Key")
		{
			drawPoint(Key, 12*FruitX+50, 12*FruitY+25); 
		} 
	}
};

//highscore bijwerken
var updateHighScore = function(){
	if (score >0)
	{
		highScoreLastAdd = -1;
		var scoreTekst = ("000000000" + score).slice(-7) + " " + "Joke Smit";
		highScore.push(scoreTekst);
		tmpScore = score;
		score = 0; // zodat het maar een keer gebeurd
		initGame();
		
		// hoog naar laag
		highScore.sort();
		highScore.reverse();
		
		var posOnLijst = highScore.indexOf(scoreTekst);
		posOnLijst = posOnLijst + 1;
		
		//highScore.reverse();	
		//<=10 dan kom je op de lijst
		if (posOnLijst <= 10)
		{
			highScoreLastAdd = posOnLijst;
			state = "GET NAME";
		}
		else
		{	
			state = "CLICK TO START";	
		}
		//highScore.sort();
	}	
};

var drawHighScoreTabel = function(){
	fill(255, 255, 0);
	textFont(createFont("Arial Bold"), 14);
	text("THE 10 BEST PLAYERS", 120, 105);
	text("RANK   SCORE         PLAYER", 100, 120);
	//hoog naar laag
	highScore.sort();
	highScore.reverse();
	for (var i=0; i<10; i++)
	{	
		fill(255, 255, 255);
		if (i === highScoreLastAdd-1)
		{
			fill(255, 255, 0);
		}
		var scoretext = highScore[i];
		var score = scoretext.substring(0, 7);
		var naam = scoretext.substring(8,255);
		text((i+1), 100, 150 + 20 * i);
		text(score, 155, 150 + 20 * i);
		text(naam, 235, 150 + 20 * i);
	}
};

var keyboardHoover = function(){
   
    strokeWeight(2);
	var keyboardy = 220; //24;
	
	row[0] = row[0].toLowerCase();
	row[1] = row[1].toLowerCase();
	row[2] = row[2].toLowerCase();
	row[3] = row[3].toLowerCase();
	row[4] = row[4].toLowerCase();	
	if (keyCaps)
	{
		row[0] = row[0].toUpperCase();
		row[1] = row[1].toUpperCase();
		row[2] = row[2].toUpperCase();
		row[3] = row[3].toUpperCase();
		row[4] = row[4].toUpperCase();	
	}
	
	var c = Math.floor((mouseX - 15) / 31);
	var r = Math.floor((mouseY - keyboardy) / 35);
	
	keychoosen = "";
    if (c>=0 && c<12 && r>=0 && r<row.length)
    {	
		noFill();
		var character = row[r].substr(c, 1);
		if (character !== "=")
		{				
			fill(100, 255, 255);
			text(character, 20 + c*keyx, keyboardy + 21  + r * keyy);
			stroke(40, 157, 255);
			noFill();
			rect(c * keyx + 15, r * keyy+ keyboardy, 26, 26, 5);
			keychoosen = character;
		}
    }
};


var drawKeyboard = function(){
	textFont(createFont("Arial"), 20);
	strokeWeight(2);
	
	textFont(createFont("Arial Bold"), 50);
	fill(255, 255, 255);
	text("~~ PAC MAN ~~", 12, 52);
	fill(255, 0, 0);
	text("~~ PAC MAN ~~", 10, 50);
	
	textFont(createFont("Arial Bold"), 15);	
	fill(255, 255, 0);
	text("Rank #" + highScoreLastAdd + ", with score " + tmpScore + " !!!", 100, 105);
	
	textFont(createFont("Arial Bold"), 20);	
	fill(255, 255, 255);
	text(" ENTER YOUR 'HALL OF FAME'-NAME", 10, 140);

	
	var keyboardy = 220; //24;
	for (var r=0; r<row.length; r++)
	{   
		for (var c=0; c<row[r].length; c++)
		{
			var character = row[r].substr(c, 1);
			
			if (character !== "=")
			{
				stroke(100, 100, 100);
				fill(40, 40, 40);
				rect(c * 31 + 15, r * 35 + keyboardy, 26, 26, 5);
			}
			//special characters del clear caps enter
			if ("??^?".includes(character))
			{
				fill(255, 12, 0);
				text(character, 20 + c*keyx, keyboardy + 21 + r * keyy);
			}
			else if (character !== "=")
			{	fill(255, 255, 0);
				text(character, 20 + c*keyx, keyboardy + 21 + r * keyy);
			}
		}
	}
};

//alleen de eerste keer
initGame();
state = "CLICK TO START";

draw = function() {
    background(0, 0, 0);
	
	if (state === "GET NAME")
	{
		drawKeyboard();
		keyboardHoover();
		textFont(createFont("Arial"), 20);
		text(highscorename + "_", 20, 200);
	}
	else if (state !== "CLICK TO START")
	{
		pacmanBoard();
		pacman10pt();
		information();
		colorChange();
		colorChangeHoover();

		pacmanLives();
		drawFruit();
		keyProcessing();
    }
	//get ready to start
	if (state === "CLICK TO START")
	{
		drawHighScoreTabel();
		textFont(createFont("Arial Bold"), 50);
		fill(255, 255, 255);
		text("~~ PAC MAN ~~", 12, 52);
		fill(255, 0, 0);
		text("~~ PAC MAN ~~", 10, 50);
		
		textFont(createFont("Arial Bold"), 20);	
		fill(255, 255, 0);
		text(" click on screen to start game... ", 50, 380);
		
		drawPoint(Cherry, 30, 365); 
		drawPoint(Strawberry, 355, 365); 
		
		// draw spoken terwijl wachten op start-click
		ghostLoop();
	}
	//get ready voor elk level
	else if (state === "GET READY")
	{   fill(255, 0, 0);
        textFont(createFont("Arial Bold"), 20);
        text("Get Ready " + (Math.floor(getReadyTimer / gameSpeed) + 1), 145, 232);

		getReadyTimer--; //  
		if (getReadyTimer === 0)
		{	
			// aan het begin van het level de gameSpeed een beetje opvoeren
			gameSpeed = gameSpeedBase + level;
			frameRate(gameSpeed);
			state ="MAIN GAME";
        }
	}
	//aftellen tto normal mode
	if (state === "PACMAN HUNTING")
	{
		timerHunting--; // bepaald hoelang pacman hunting. afh van level 
		ghostBlink();
		if (timerHunting === 0)
		{
			resetHuntingmode();
		}
	}	
    if (state === "MAIN GAME")
    {
        ghostLoop();
        walk();
    }
	else if (state === "PACMAN HUNTING")
    {
        ghostLoop();
        walk();
    }
    else if (state === "PACMANDEATH")
    {
        timerDeath++;
		pacmanDeath();
		ShowFruit = false;		
    }
    else if (state === "GAME OVER")
    {
	debugger;
        gameOverTimer--;
        fill(255, 0, 0);
        textFont(createFont("Arial Bold"), 50);
        text("GAME OVER", 50, 207);
        if (gameOverTimer === 0)
        {
		    updateHighScore();
        }
            textSize(12);
        fill(255, 0, 0);
        text(gameOverTimer, 20, 20);
        text(state, 20, 40);
    }

};
</script>

<canvas id="mycanvas" width="400" height="400"></canvas>
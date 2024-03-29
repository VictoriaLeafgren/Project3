var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x504064});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
//var world

//Create all of the sprites
var button1 = PIXI.Texture.fromImage("button.png");
var button2 = PIXI.Texture.fromImage("button.png");
var button3 = PIXI.Texture.fromImage("button.png");
var button4 = PIXI.Texture.fromImage("button.png");
var button5 = PIXI.Texture.fromImage("button.png");
var button6 = PIXI.Texture.fromImage("button.png");
var button7 = PIXI.Texture.fromImage("button.png");
var button8 = PIXI.Texture.fromImage("button.png");
var start_button = PIXI.Texture.fromImage("button.png");
var credits_button = PIXI.Texture.fromImage("button.png");
var frog = PIXI.Texture.fromImage("frog.png");
var pumpkin = PIXI.Texture.fromImage("pumpkin.png");
var pumpkin1 = PIXI.Texture.fromImage("pumpkin1.png");
var pumpkin2 = PIXI.Texture.fromImage("pumpkin2.png");
var pumpkin3 = PIXI.Texture.fromImage("pumpkin3.png");
var pumpkin4 = PIXI.Texture.fromImage("pumpkin4.png");
var ghost_texture = PIXI.Texture.fromImage("ghost.png");
var start = PIXI.Texture.fromImage("start.png");
var credits = PIXI.Texture.fromImage("credits.png");
var vampire = PIXI.Texture.fromImage("vampire.png");
var witch = PIXI.Texture.fromImage("witch.png");
var skeleton1 = PIXI.Texture.fromImage("skeleton1.png");
var skeleton2 = PIXI.Texture.fromImage("skeleton2.png");
var skeleton3 = PIXI.Texture.fromImage("skeleton3.png");
var skeleton4 = PIXI.Texture.fromImage("skeleton4.png");
var skeleton5 = PIXI.Texture.fromImage("skeleton5.png");
var skeleton6 = PIXI.Texture.fromImage("skeleton6.png");
var candyBlue= PIXI.Texture.fromImage("blue_candy.png");
var candyGreen = PIXI.Texture.fromImage("green_candy.png");
var candyPink = PIXI.Texture.fromImage("pink_candy.png");
var candyRed = PIXI.Texture.fromImage("red_candy.png");
var vampire_text= PIXI.Texture.fromImage("vampire_text.png");
var pumpkin_text = PIXI.Texture.fromImage("pumpkin_text.png");
var witch_text = PIXI.Texture.fromImage("witch_text.png");
var frog_text = PIXI.Texture.fromImage("frogText.png");
var skeleton_text = PIXI.Texture.fromImage("skeleton_text.png");
var blue_end = PIXI.Texture.fromImage("blue_end.png");
var green_end = PIXI.Texture.fromImage("green_end.png");
var pink_end = PIXI.Texture.fromImage("pink_end.png");
var red_end = PIXI.Texture.fromImage("red_end.png");


var button1 = new PIXI.Sprite(button1);
var button2 = new PIXI.Sprite(button2);
var button3 = new PIXI.Sprite(button3);
var button4 = new PIXI.Sprite(button4);
var button8 = new PIXI.Sprite(button8);
var ghost = new PIXI.Sprite(ghost_texture);
var frog = new PIXI.Sprite(frog);
var pumpkin = new PIXI.Sprite(pumpkin);
var pumpkin1 = new PIXI.Sprite(pumpkin1);
var pumpkin2 = new PIXI.Sprite(pumpkin2);
var pumpkin3 = new PIXI.Sprite(pumpkin3);
var pumpkin4 = new PIXI.Sprite(pumpkin4);

var vampire = new PIXI.Sprite(vampire);
var witch = new PIXI.Sprite(witch);
var skeleton1 = new PIXI.Sprite(skeleton1);
var skeleton2 = new PIXI.Sprite(skeleton2);
var skeleton3 = new PIXI.Sprite(skeleton3);
var skeleton4 = new PIXI.Sprite(skeleton4);
var skeleton5 = new PIXI.Sprite(skeleton5);
var skeleton6 = new PIXI.Sprite(skeleton6);
var start = new PIXI.Sprite(start);
var start_button = new PIXI.Sprite(start_button);
var credits_button = new PIXI.Sprite(credits_button);
var credits = new PIXI.Sprite(credits);
var candyBlue = new PIXI.Sprite(candyBlue);
var candyGreen = new PIXI.Sprite(candyGreen);
var candyPink = new PIXI.Sprite(candyPink);
var candyRed = new PIXI.Sprite(candyRed);
var vampire_text = new PIXI.Sprite(vampire_text);
var pumpkin_text = new PIXI.Sprite(pumpkin_text);
var witch_text = new PIXI.Sprite(witch_text);
var skeleton_text = new PIXI.Sprite(skeleton_text);
var frog_text = new PIXI.Sprite(frog_text);
var blue_end = new PIXI.Sprite(blue_end);
var green_end = new PIXI.Sprite(green_end);
var pink_end = new PIXI.Sprite(pink_end);
var red_end = new PIXI.Sprite(red_end);


//placements
button1.position.x = 60;
button1.position.y = 70;

button2.position.x = 310;
button2.position.y = 80;

button3.position.x = 40;
button3.position.y = 290;

button4.position.x = 350;
button4.position.y = 300;

button8.position.x = 200;
button8.position.y = 250;

start_button.position.x = 310;
start_button.position.y = 190;

credits_button.position.x = 360;
credits_button.position.y = 240;

start.position.x = 0;
start.position.y = 0;

credits.position.x = 0;
credits.position.y = 0;

skeleton1.position.x = 350;
skeleton1.position.y = 350;

witch.position.x = 40;
witch.position.y = 320;

vampire.position.x = 310;
vampire.position.y = 20;

pumpkin.position.x = 60;
pumpkin.position.y = 30;


frog.position.x = 200;
frog.position.y = 200;

candyBlue.position.x = 130;
candyBlue.position.y = 150;

candyGreen.position.x = 180;
candyGreen.position.y = 150;

candyPink.position.x = 230;
candyPink.position.y = 150;

candyRed.position.x = 280;
candyRed.position.y = 150;

ghost.position.x = 170;
ghost.position.y = 150;

pumpkin_text.position.x = 0;
pumpkin_text.y = 267;

vampire_text.position.x = 0;
vampire_text.position.y = 267;

witch_text.position.x = 0;
witch_text.position.y = 0;

skeleton_text.position.x = 0;
skeleton_text.y = 0;

frog_text.position.x = 0;
frog_text.position.y = 0;

red_end.position.x = 0;
red_end.y = 0;

blue_end.position.x = 0;
blue_end.y = 0;

pink_end.position.x = 0;
pink_end.y = 0;

green_end.position.x = 0;
green_end.y = 0;

//Add sprites to stage
stage.addChild(button1);
stage.addChild(vampire);
stage.addChild(witch);
//stage.addChild(skeleton1);
stage.addChild(pumpkin);
stage.addChild(candyBlue);
stage.addChild(candyGreen);
stage.addChild(candyPink);
stage.addChild(candyRed);
stage.addChild(frog);
stage.addChild(button1);
stage.addChild(button2);
stage.addChild(button3);
stage.addChild(button4);
stage.addChild(button8);
stage.addChild(start);
stage.addChild(start_button);
stage.addChild(credits_button);
stage.addChild(ghost);
stage.addChild(pumpkin_text);
stage.addChild(vampire_text);
stage.addChild(skeleton_text);
stage.addChild(witch_text);
stage.addChild(frog_text);


//make text invisible at start
vampire_text.visible = false;
pumpkin_text.visible = false;
witch_text.visible = false;
skeleton_text.visible = false;
frog_text.visible = false;

//flag indicating if ghost started game.
var has_started = false;

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

//spritesheet
PIXI.loader
	.add("assets.json")
	.load(ready)
		
function ready(){
	var frames = [];
	for (var i=1; i<=4; i++) {
		frames.push(PIXI.Texture.fromFrame('pumpkin' + i + '.png'));
	}
	pumpkin = new PIXI.extras.MovieClip(frames);
	pumpkin.scale.x = 1;
	pumpkin.scale.y = 1;
	pumpkin.position.x = 30;
	pumpkin.position.y = 30;
	pumpkin.animationSpeed = 0.1;
	pumpkin.play();
	stage.addChild(pumpkin);
	
	var frames = [];
	for (var i=1; i<=4; i++) {
		frames.push(PIXI.Texture.fromFrame('skeleton' + i + '.png'));
	}
	skeleton = new PIXI.extras.MovieClip(frames);
	skeleton.scale.x = 1;
	skeleton.scale.y = 1;
	skeleton.position.x = 350;
	skeleton.position.y = 350;
	skeleton.animationSpeed = 0.1;
	skeleton.play();
	stage.addChild(skeleton);
}	




PIXI.loader
	.add("spooky.mp3")
	.load(music)

var spooky_song;
function music(){
	spooky_song = PIXI.audioManager.getAudio("spooky.mp3");
}





//handles all keyboard events.
function EventHandler(e) {

  if (e.keyCode == 87) { // W key
    ghost.position.y -= 10;
    spooky_song.play();
  }

  if (e.keyCode == 83) { // S key
    ghost.position.y += 10;
    spooky_song.play();
  }

  if (e.keyCode == 65) { // A key
    ghost.position.x -= 10;
    spooky_song.play();
  }

  if (e.keyCode == 68) { // D key
    ghost.position.x += 10;
    spooky_song.play();
  }
	//starts the game, makes Title and menu disappear, increases vampire and witch size.
	if((ghost.position.y == start_button.position.y) && (ghost.position.x == start_button.position.x) && has_started == false){
		start.visible = false;
		start_button.visible = false;
		credits_button.visible = false;
		has_started = true;


		
	}
	//shows credits
	if((ghost.position.y == credits_button.position.y) && (ghost.position.x == credits_button.position.x) && has_started == false){
		stage.addChild(credits);		
	}
	//displays frog text
	if((ghost.position.y == button8.position.y) && (ghost.position.x == button8.position.x) && has_started == true){
		frog_text.visible = true;		
	}
	//displays pumpkin text
	if((ghost.position.y == button1.position.y) && (ghost.position.x == button1.position.x) && has_started == true){
		pumpkin_text.visible = true;		
	}
	//displays vampire text
	if((ghost.position.y == button2.position.y) && (ghost.position.x == button2.position.x) && has_started == true){
		vampire_text.visible = true;	
	}
	//displays witch text
	if((ghost.position.y == button3.position.y) && (ghost.position.x == button3.position.x) && has_started == true){
		witch_text.visible = true;		
	}
	//displays skeleton1 text
	if((ghost.position.y == button4.position.y) && (ghost.position.x == button4.position.x) && has_started == true){
		skeleton_text.visible = true;		
	}
	//Displays ending when choosing blue candy
	if((ghost.position.y == candyBlue.position.y) && (ghost.position.x == candyBlue.position.x) && has_started == true){
		stage.addChild(blue_end);		
	}
	//Displays ending when choosing green candy
	if((ghost.position.y == candyGreen.position.y) && (ghost.position.x == candyGreen.x) && has_started == true){
		stage.addChild(green_end);
	}
	//displays ending when choosing pink candy
	if((ghost.position.y == candyPink.position.y) && (ghost.position.x == candyPink.position.x) && has_started == true){
		stage.addChild(pink_end);	
	}
	//displays ending when choosing red candy
	if((ghost.position.y == candyRed.position.y) && (ghost.position.x == candyRed.position.x) && has_started == true){
		stage.addChild(red_end);		
	}
	//makes witch text disappear when not standing on button
	if(!(ghost.position.y == button8.position.y) || !(ghost.position.x == button8.position.x)){
		frog_text.visible = false;		
	}
	//makes pumpkin text disappear when not standing on button
	if(!(ghost.position.y == button1.position.y) || !(ghost.position.x == button1.position.x)){
		pumpkin_text.visible = false;	
	}
	//makes vampire text disappear when not standing on button
	if(!(ghost.position.y == button2.position.y) || !(ghost.position.x == button2.position.x)){
		vampire_text.visible = false;		
	}
	//makes witch text disappear when not standing on button
	if(!(ghost.position.y == button3.position.y) || !(ghost.position.x == button3.position.x)){
		witch_text.visible = false;		
	}
	//makes skeleton1 text disappear when not standing on button
	if(!(ghost.position.y == button4.position.y) || !(ghost.position.x == button4.position.x)){
		skeleton_text.visible = false;
		
	}
}

//makes ghost run to a random location, uses tweening
function mouseHandler(e) {
  var new_x = Math.round(Math.floor(Math.random() * 380) /10) * 10;
  var new_y = Math.round(Math.floor(Math.random() * 380) /10) * 10;
  createjs.Tween.get(ghost.position).to({x: new_x, y: new_y}, 1000, createjs.Ease.bounceOut);
}

ghost.interactive = true;
ghost.on('mousedown', mouseHandler);


document.addEventListener('keydown', EventHandler);

function animate() {
	requestAnimationFrame(animate);
	renderer.render(stage);
}
animate();

/*

// Keyup events end movement
window.addEventListener("keyup", function onKeyUp(e) {
  e.preventDefault();
  if (!ghost) return;
  ghost.direction = MOVE_NONE;
});

PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add('map_json', 'map.json')
  .add('tileset', 'tileset.png')
  .add('ghost', 'ghost.png')
  .load(ready);

function ready() {
  var tu = new TileUtilities(PIXI);
  world = tu.makeTiledWorld("map_json", "tileset.png");
  stage.addChild(world);

  var ghost = world.getObject("ghost");
  
  ghost = new PIXI.Sprite(PIXI.loader.resources.ghost.texture);
  ghost.x = ghost.x;
  ghost.y = ghost.y;
  ghost.anchor.x = 0.0;
  ghost.anchor.y = 1.0;

  // Find the entity layer
  var entity_layer = world.getObject("Entities");
  entity_layer.addChild(ghost);

  ghost.direction = MOVE_NONE;
  ghost.moving = false;
  animate();
}
*/

function update_camera() {
  stage.x = -ghost.x*GAME_SCALE + GAME_WIDTH/2 - ghost.width/2*GAME_SCALE;
  stage.y = -ghost.y*GAME_SCALE + GAME_HEIGHT/2 + ghost.height/2*GAME_SCALE;
  stage.x = -Math.max(0, Math.min(world.worldWidth*GAME_SCALE - GAME_WIDTH, -stage.x));
  stage.y = -Math.max(0, Math.min(world.worldHeight*GAME_SCALE - GAME_HEIGHT, -stage.y));
}

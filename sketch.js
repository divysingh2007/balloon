var canvas,backgroundImage;
var gameState=0;
var playerCount;
var position,database;
function preload(){
  backgroundImage=loadImage("");
}
function setup() {
  createCanvas(800,400);
  database=firebase.database();
  var balloon=createSprite(400, 200, 50, 50);
}

function draw() {
  background();  
   if(keyisdown(LEFT_ARROW)){
     balloon.x=balloon.x-10;
   }
   if(keyisdown(RIGHT_ARROW)){
    balloon.x=balloon.x+10;
  }
  if(keyisdown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  if(keyisdown(DOWN_ARROW)){
    balloon.y=balloon.y+10;
  }
  drawSprites();
}
var steve;

function preload(){
steveimg=loadImage("steve.jpg")
stevewalkimg=loadImage("steve walking.jpg")


}
function setup() {
  createCanvas(800,400);
  steve=createSprite(400, 200, 50, 50);
  steve.addImage(steveimg)
}

function draw() {
  background(255,255,255);  
  if (KeyWentDown(UP_ARROW)){
steve.addImage(stevewalkimg)
  }
  drawSprites();
}
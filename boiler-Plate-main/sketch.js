var crewAni,crew;
var arrowG,arrow,arrowImg;
var jumpS,levelS,deathS;
var reset,gameOver,resetImg,gameOverImg,ground,backg,back;
function preload(){
//jumpS=loadSound("jump.wav");
//levelS=loadSound("level.wav");
//deathS=loadSound("death.wav");
crewAni=loadAnimation("crew1.png","crew2.png","crew3.png");
arrowImg=loadImage("arrow.png");
resetImg=loadImage("restart.png");
gameOverImg=loadImage("gameOver.png");
//ground=loadImage("ground2.png");
backg=loadImage("background.jpg");
}

function setup() {
	createCanvas(1350, 650);
  back=createSprite(675,325,1350,650);
  back.addImage(backg);
  back.scale=1.35
  back.velocityX=-6; 
  crew=createSprite(100,520,10,10);
  crew.addAnimation("run",crewAni);
  crew.scale=0.6;
  reset=createSprite(10,10,10,10);
  reset.addImage(resetImg);
  gameOver=createSprite(10,30,10,10);
  gameOver.addImage(gameOverImg);
  arrowG=createGroup();
  wall1=createSprite(650,650,1450,1);
  wall2=createSprite(650,0,1450,1);
}


function draw() {
  background(0);
  if(back.x<10){
    back.x=back.width/2;
  }
  if(keyDown(UP_ARROW)){
    crew.y-=5;
  }
  if(keyDown(DOWN_ARROW)){
    crew.y+=5;
  }

  spawnArrows();

  crew.collide(wall1);
  crew.collide(wall2);  

 drawSprites();
}
function spawnArrows(){
  if(frameCount%100===0){
  arrow=createSprite(1350,random(10,640),10,10);
  arrow.addImage("arrow",arrowImg);
  arrow.velocityX=-16;
  arrow.scale=1.4;
  arrowG.add(arrow);
  }
}




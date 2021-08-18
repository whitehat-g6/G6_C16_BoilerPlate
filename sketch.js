//boilerplate
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;

var score;

var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound
//
function preload(){

  
  groundImage = loadImage("ground.png");
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
  
  restartImg = loadImage("restart.png")//project?
  gameOverImg = loadImage("gameOver.png")

  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  
}

function setup() {
  createCanvas(600, 200);

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
 
}

function draw() {
  //setting the background
  background(255);
  //displaying score
  text("Score: ", 500,50);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    

    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles on the ground
  
  
  drawSprites();
}



function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 == 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //adjust the depth
  
    
    //adding cloud to the group
    cloudsGroup.add(cloud);
  }
}


var PLAY = 1;
var END = 0;
var gameState = PLAY;
var fg,og;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,350);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.15;
  
  ground = createSprite(200,380,400,20);
  fg = new Group();
  og = new Group();
}


function draw() {
background("lightblue");
  
 if(gameState === PLAY) {
   
 
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  if( keyDown ("space")) {
    monkey.velocityY = -6;
  }
  monkey.velocityY = monkey.velocityY+0.8;
 
  spawnFruits();
  spawnObstacles();
   if(monkey.isTouching(fg)){
     fg.destroyEach();
   }
   else{
     if(monkey.isTouching(og)){
       og.setVelocityXEach(0);
       fg.setVelocityXEach(0);
     
     gameState = END;
       og.setLifetimeEach(-1);
   }
 }
 }
   monkey.collide(ground);
    drawSprites();
  
}
function spawnFruits() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,220));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   fg.add(banana);
    
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var o1 = createSprite(600,350,40,10);
   //o1.y = Math.round(random(600,320));
    o1.addImage(obstacleImage);
    o1.scale = 0.2;
    o1.velocityX = -3;
    
     //assign lifetime to the variable
    o1.lifetime = 200;
    
    
    //add each cloud to the group
  og.add(o1);
  }
}







var monkey , monkey_running,ground
var banana ,bananaImage, stone, stoneImage
var FoodGroup, stoneGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 600);  

    monkey =createSprite(50,551,10,10)   
    monkey.addAnimation("running", monkey_running);
    monkey.scale=0.15
    
    ground = createSprite(300,580,600,10);
  ground.x = ground.width /2;
  ground.velocityX=-3
  
  
 bananasGroup=new Group() 
 stoneGroup=new Group() 
  
  
}


function draw() {
background("lightgreen") 
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
 if(keyDown("space")) {
        monkey.velocityY = -12;
    } 
  monkey.velocityY = monkey.velocityY + 0.8
  
 spawnstone()
 spawnbanana() 
 monkey.collide(ground) 
 drawSprites() 
 
}
function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(300,500));
    banana.addImage(bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 334;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //adding banana to the group
   bananasGroup.add(banana);
    }
}

function spawnstone() {
  //write code here to spawn the stone
  if (frameCount % 160 === 0) {
    stone= createSprite(600,550,40,10);
    stone.addImage(stoneImage);
    stone.scale = 0.15;
    stone.velocityX = -3;
  
    
    //adding cloud to the group
   stoneGroup.add(stone);
    }
}






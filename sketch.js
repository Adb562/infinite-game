var kid, monster, street;
var ground, invisibleGround, groundImage;



var o1,o2,o3,o4,o5,o6
var newImage;

var score = 0

function preload(){
  kid = loadImage("kid1.jpg")
  
  groundImage = loadImage("street.jpg");
  groundImage.scale = 0 

  
 o1 = loadImage("monster1.png")
 o2 = loadImage("monster2.jpg")
 o3 = loadImage("monster3.png")
 o4 = loadImage("monster4.png")
 o5 = loadImage("monster5.jpg")
 o6 = loadImage("monster6.png")
 o1.scale = 0.1
 o2.scale = 0.1
 o3.scale = 0.1
 o4.scale = 0.1
 o5.scale = 0.1
 o6.scale = 0.1
}

function setup() {
  createCanvas(800, 200);

  kid = createSprite(50,160,20,50);
  kid.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text ("score :"+score,500,50)
  score = score+ Math.round(frameCount % 60)
  
  if(keyDown("space")&& kid.y >= 100) {
    kid.velocityY = -10;
  }
  
  kid.velocityY = kid.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  kid.collide(invisibleGround);
  
  

  
  spawnObsticles()
  drawSprites();
}



function spawnObsticles(){
if(frameCount % 60 === 0){
  var obsticle = createSprite(600,165,10,40)
  obsticle.velocityX = -3
  var ran = Math.round(random(1,6))
  switch(ran){
    case 1: obsticle.addImage(o1)
    break; 
    case 2: obsticle.addImage(o2)
    break; 
    case 3: obsticle.addImage(o3)
    break; 
    case 4: obsticle.addImage(o4)
    break; 
    case 5: obsticle.addImage(o5)
    break; 
    case 6: obsticle.addImage(o6)
    break; 
    default:
    break; 



  }
  obsticle.scale = 0.5
  obsticle.lifetime = 200
}
}


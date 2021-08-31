var garden,rabbit;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg =  loadImage("apple.png");
  leaveImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  if(keyDown("left")&& rabbit.x >= 100) {
    rabbit.velocityX=-7;
  }
  if(keyDown("right")&& rabbit.x >= 100){
    rabbit.velocityX=7;
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites= Math.round(random(1,2));

  if (frameCount%80==0){
   if (select_sprites=== 1){
     createApples();
   }
   else{
     createLeaves();
   }
  }

  drawSprites();
}

function createApples(){

  apples = createSprite(random(50,350),40,10,10);
  apples.addImage(appleImg);
  apples.scale = 0.1;
  apples.velocityY=4;
  
   apples.lifetime = 134;

}

function createLeaves(){

 leaves = createSprite(random(50,350),40,10,10);
 leaves.addImage(leaveImg);
 leaves.scale = 0.1;
 leaves.velocityY=4;
  
 leaves.lifetime = 134;
}
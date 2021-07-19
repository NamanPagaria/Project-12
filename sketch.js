var garden,rabbit;
var gardenImg,rabbitImg;
var apples,applesImg;
var leaves,leavesImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leavesImg =loadImage("orangeLeaf.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createLeaves();
  drawSprites();
}

function createApples(){
  if(frameCount %  80 === 0){
  apples=createSprite(40,10,10);
  apples.addImage(applesImg);
  apples.x=Math.round(random(50,350))
  apples.scale=0.05;
  apples.velocityY=3;
  apples.lifetime=135
  }
}
  function createLeaves(){
    if(frameCount % 80 === 0){
    leaves=createSprite(40,10,10);
    leaves.addImage(leavesImg);
    leaves.x= Math.round(random(50,350))
    leaves.scale=0.05;
    leaves.velocityY=3;
    leaves.lifetime=135

  }
}
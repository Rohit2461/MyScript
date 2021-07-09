
var fixedRect, movingRect;
var gameObject1, gameObject2;
var myRect;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";

 // gameObject1= createSprite(300,200,50,50);
  //gameObject1.shapeColor="green";

  gameObject2= createSprite(500,200,50,50);
  gameObject2.shapeColor="green";

  myRect=createSprite(50,400,50,50);
  myRect.shapeColor="white";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else if (isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="blue";
    gameObject2.shapeColor="blue";
   
  }

else {
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
   // gameObject1.shapeColor="green";
    gameObject2.shapeColor="green";
  }
 
 myRect.velocityX=5;
 

 if(myRect.x>1200){
   myRect.x=50;
   
 }

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




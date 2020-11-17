var ball,ballimg,paddle,paddleimg,bgimg,bg;
var edges;

function preload() {
  ballimg  = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
  bgimg = loadImage("39.jpg")
}

function setup() {
createCanvas(400,400);


bg = createSprite (200,200,400,400);
bg.addImage(bgimg);
  
paddle = createSprite (370,200,20,100);
paddle.addImage(paddleimg);
  
ball = createSprite (30,200,10,10);
ball.addImage(ballimg);
ball.velocityX = 3;
ball.velocityY = 3;
  
edges= createEdgeSprites();
}

function draw() {
background("white");

paddle.y= mouseY;  
  
ball.bounceOff(edges[3]);
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]); 
ball.bounceOff(paddle);

  
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY = 3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
  paddle.velocitY = -3;
  }
  
  if(ball.isTouching(edges[1]))
{
  ball.velocity = 0;
}
  
  drawSprites();
  
}




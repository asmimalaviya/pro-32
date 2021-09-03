function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

ball.show() ;
blower.show();
blowermouth.show();

drawSprites();
}

function createButton() {
  Button=createButton("click to blow");
  Button.position(width/2,height-100);
  Button.class("blowButton");
  Button. mousePressed(blow) ;

}

function blow() {
  Matter.Body.applyForce(ball,body ,{x:0,y:0} , {x:0,y:0.05})
}

function mousePressed() {
  blow()
}

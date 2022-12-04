let ground;
let lander;
var lander_img;
var bg_img;
var fuel =100;
var lander_crash;
var lander_land;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  Lander_right_thrust=loadAnimation("right_thruster_1.png","right_thruster_2.png");
  lander_left_thrust=loadAnimation("left_thruster_1.png","left_thruster_2.png");
  thrust=loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  bg_img = loadImage("bg.png");
  lander_crash=loadAnimation("crash1.png","crash2.png","crash3.png");
  lander_land=loadAnimation("landing1.png","landing2.png","landing_3.png");
  thrust.playing=true;
  thurst.looping=false;
  lander_left_thrust.looping=false;
  Lander_right_thrust.looping=false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  timer=1500;
  thrust.frameDelay=5;
  lander_left_thrust.frameDelay=5;
  Lander_right_thrust.frameDelay=5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  
  ground=createSprite(500,690,1000,20)

 
  lander.addAnimation("thrusting",thrust)
  lander.addAnimation("left",Lander_right_thrust)
  lander.addAnimation("right",lander_left_thrust)
  lander.addAnimation("normal",lander_img)
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  text("Fuel:"+fuel,800,25);
  text("Horizontal Velocity:"+round(vx),800,50);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;
  drawSprites();
}

function keyPressed(){

  if(keyCode===UP_ARROW){
  upward_thrust();
  lander.changeAnimation("thrusting")
  thrust.nextFrame();
  }

  if(keyCode===RIGHT_ARROW){
    right_thrust();
    lander.changeAnimation("right")
    thrut.nextFrame();
  }
  if(keyCode===LEFT_ARROW){
    left_thrust();
    lander.changeAnimation("left")
    thrust.nextFrame();
  }
}

function upward_thrust(){
vy=-1
fuel-=1
}

function right_thrust(){
  vx=+1
  fuel-=1
}

function left_thrust(){
  vx=-1
  fuel-=1
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var slingShot;
var ball;
var backgroundImg;
var score=0;

function preload(){
  getBackgroundImage();
}

function setup() {
  createCanvas(1600,400);
  engine=Engine.create();
  world=engine.world;

ground1=new Ground(800,350,600,20);

box1=new Box(640,310,80,60);
box2=new Box(720,310,80,60);
box3=new Box(800,310,80,60);
box4=new Box(880,310,80,60);
box5=new Box(960,310,80,60);
box6=new Box(680,250,80,60);
box7=new Box(760,250,80,60);
box8=new Box(840,250,80,60);
box9=new Box(920,250,80,60);
box10=new Box(720,190,80,60);
box11=new Box(800,190,80,60);
box12=new Box(880,190,80,60);
box13=new Box(760,130,80,60);
box14=new Box(840,130,80,60);
box15=new Box(800,70,80,60);

ball=new Ball(300,200,30);

slingShot=new SlingShot(ball.body,{x:300,y:200});


}

function draw() {
  Engine.update(engine);  
  if(backgroundImg)
  background(backgroundImg);

  ground1.display(); 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();


box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();

ball.display();

slingShot.display();

text("SCORE:"+score,1050,40);

keyPressed();

  drawSprites();
}

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();


function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingShot.attach(ball.body,{x:200,y:100});
  }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);

  if(hour>=6 && hour<=19){
    bg="bg.png";
  }
else
bg="bg2.jpg";

backgroundImg=loadImage(bg);
}











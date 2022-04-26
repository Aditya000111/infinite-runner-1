const Engine = Matter.Engine;
const World = Matter.World;
 const Bodies = Matter.Bodies;
var Engine1,world; 

var ball;
var Box1;
var Ground1;

function setup() {
  createCanvas(800,400);
  Engine1 = Engine.create()
 world = Engine1.world;
 var options = {
   isStatic:true
 }

var ball_options = {
  restitution:2
}


 ball = Bodies.rectangle(400,205,50,50, ball_options);
World.add(world,ball);
Box1 = new Box(200,205,50,50);
Ground1 = new Ground(400,390,800,20);

}

function draw() {
  background(0);  
  Engine.update(Engine1);
  rectMode(CENTER);
  Box1.display();
  Ground1.display();
  rect(ball.position.x, ball.position.y,50,50)
}
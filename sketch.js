const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var particles = [];
var plinkos = [];



















function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,790,width,20)

}

function draw() {
  background(255,255,255);  
for (var j = 40;j<=width;j = j+50){

  plinkos.push(new Plinko(j,75));
}
for (var j = 15; j<=width-10; j=j+50)
plinkos.push(new Plinko(j,175));
}
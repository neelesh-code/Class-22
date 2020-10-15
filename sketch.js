const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var ball;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;


  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(myworld,ground);


  var ball_options ={

    restitution: 2.0
  }




  ball = Bodies.circle(200,200,20, ball_options);
  World.add(myworld,ball);

  console.log(ball);


  
}

function draw() {
  background(0); 
  Engine.update(myengine);
  rectMode(CENTER);
  
  fill("green");
  rect(ground.position.x,ground.position.y,400,10);
  
  ellipseMode(RADIUS);
  fill("yellow")
  ellipse(ball.position.x, ball.position.y, 20,20);
  
}
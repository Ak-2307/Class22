//creating name spaces so we dont have to type matter. bla bla bla
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var _engine;
var _world;
var _body;
var ball;

function setup() {
  createCanvas(800,400);
  //creating an engine
  _engine = Engine.create();
  //creating a world in the engine
  _world = _engine.world;
  //setting the properties for the recangle
  var objProp= {
    isStatic: true
  }
   //setting the properties for the ball/circle
  var ballProp= {
    restitution: 1
  }
  //creating the physics bodies
 _body = Bodies.rectangle(400,350,800,50,objProp);
  ball =  Bodies.circle(200,200,40,ballProp);
  //adding bodies to the world
World.add(_world,ball);
 World.add(_world,_body);
 //console.log(ball);

//createSprite(400, 200, 50, 50);
}

function draw() {
  //updating the engine 
  Engine.update(_engine);
background(255,255,255);  
rectMode(CENTER);
//displaying the objects
rect(_body.position.x,_body.position.y,800,50);
ellipseMode(CENTER);
ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
}



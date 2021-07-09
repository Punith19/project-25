
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(900,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed() {

	if(keyCode ===  UP_ARROW){
	
	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:50,y:-100});
	}
	
	}
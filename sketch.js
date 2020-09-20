
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
    
	ground = new Ground(400,400,800,20);
	paper = new Paper(100,0);
    dustbin1 = createSprite(510,330,20,100);
	dustbin1.shapeColor=color("purple");
	dustbin2 = createSprite(600,380,200,20);
	dustbin2.shapeColor=color("purple");
	dustbin3 = createSprite(690,330,20,100);
	dustbin3.shapeColor=color("purple");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  drawSprites();
  
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



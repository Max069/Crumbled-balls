
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Ronbun(100,600,10);

	ground = new Setchi(400,680,800,20);

	leftSide = new Gomibako(550,620,20,100);
	bottomSide = new Gomibako(610,660,100,20);
	rightSide = new Gomibako(670,620,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  keyPressed()

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottomSide.display();
  rightSide.display();


  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position, {x:4,y: 5});
	}
}



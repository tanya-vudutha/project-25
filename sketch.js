
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, paper1;
var dustbin1, dustbin2, dustbin3, dustbin;
var dustbinimage;

function preload(){
	dustbinimage = loadImage("dustbin.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100, 600, 30);

	ground1 = new Ground(400, 680, 800, 20);

	dustbin = createSprite(639,588,70,70); 
	dustbin.addImage("dust",dustbinimage); 
	dustbin.scale=0.5;

	dustbin1 = new Dustbin(689,620,20,90);
	dustbin2 = new Dustbin(659,660,40,20);
	dustbin3 = new Dustbin(589,620,20,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  //keyPressed();
  
  ground1.display();
  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:140,y:-140});

	}
}




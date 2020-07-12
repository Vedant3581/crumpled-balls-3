const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var paper,dustbin,walls;
var launcher;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	 
	ground = new Ground(400,680,800,20);
	paper = new Paper(100,300);
	
	
	basewall = new Walls(600, 670, 200, 20);

	leftwall = new Walls(700, 550, 20, 250);

	rightwall = new Walls(500, 550, 20, 250);
		
	dustbin = new Dustbin(600,550,220,250);

	launcher = new Launcher(paper.body,{x:100, y:400});

	
	
	
}
function draw() {
	background("red");
	Engine.update(engine);
	ground.display();
	dustbin.display();
	/* basewall.display();
	leftwall.display();
	rightwall.display(); */
	launcher.display();
	paper.display();
	
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   launcher.fly();
}




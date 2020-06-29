const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var paper,dustbin, ground;


function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin = new Dustbin(500, 550, 300, 50);

	paper = new Paper(100,500);

	launcher = new Launcher(paper,{x:200, y:50});

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 590, width, 10 , {isStatic:true} );
	 World.add(world, ground);	

	 var Options = {
		 bodyA: paper.body,
		 bodyB: constrainedlauncher.body,
		 stiffness:0.004,
		 length:10
	 }
	

}

function draw(){
	background("black");
	Engine.update(engine);
	dustbin.display();
	paper.display();
	launcher.display;
	Constraint.display;
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x :50 ,y:-50});
	}
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   rope.fly()
}




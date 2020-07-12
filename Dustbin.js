class Dustbin {
    constructor(x, y, width, height) {
      /* var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body); */
    this.width = width;
    this.height = height;
    this.x=x;
    this.y=y;
    this.image = loadImage("sprites/dustbingreen.png");
      
    }
    display(){
      imageMode(CENTER);
      image(this.image, this.x, this.y,this.width,this.height);
      
    }
  }    
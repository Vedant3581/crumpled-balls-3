class Paper extends BaseClass{
    constructor(x, y, width, height) {
      super(100,600,40,40);
      this.image = loadImage("sprites/paper.png");
    }    

    display(){
      super.display();
    }
    fly() {
      this.chain.bodyA=null;
   }
}
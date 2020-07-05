class Ball {
  constructor(x,y) {
    var options ={
        restitution:0.01,
        density:1
       }
    this.body=Bodies.rectangle(x,y,30,30,options);
    this.width=30;
    this.height=30;
    this.image = loadImage("assets/paper.png");

    World.add(world,this.body);
  }

  display() {
    var pos=this.body.position;
    
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,30,30);
    pop();
  }
}

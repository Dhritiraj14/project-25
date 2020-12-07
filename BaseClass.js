class BaseClass{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':8
        }
        this.y=y;
        this.x=x;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
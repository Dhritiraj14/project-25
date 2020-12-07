class Paper{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:8
        }
    this.y=y;
    this.x=x;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r/2,options);
    this.image=loadImage("paper.png")
    this.scale=0.05
    World.add(world,this.body);
    
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(0);
        fill("pink");
        ellipse(0,0,this.r,this.r);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width,this.height);
        pop()
    }
    
    }
var dustbinIMG, dustbinSprite, paperSprite,paperIMG;
var paperBody,ground
var bin1,bin2,bin3
var paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinIMG=loadImage("dustbin.png")
	paperIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	

	/*paperSprite=createSprite(20,600, 10,10);
	paperSprite.addImage(paperIMG)
	paperSprite.scale=0.2*/

	dustbinSprite=createSprite(800, 520, 10,10);
	dustbinSprite.addImage(dustbinIMG)
     dustbinSprite.scale=0.7

	
	engine = Engine.create();
	world = engine.world;

	
	


	
	
	bin1 = new Bin(800,620,175,50)
	bin2 = new Bin(705,545,40,200)
	bin3 = new Bin(890,545,50,200);
	ground = new Ground(0,650,7000,10);
	paper1 = new Paper(20,400,90);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
  Engine.update(engine);
  
  ground.display();
 paper1.display();
  fill("yellow");
  bin1.display();
  bin2.display();
  bin3.display();
 //paperSprite.x= paper1.positionX 
	//paperSprite.y= paper1.positionY
  keyPressed();
  
  

  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-180})
	}
}





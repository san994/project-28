
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

;
var score = 0;

function preload()
{
	
   boyImage = loadImage("boy.png");
   

}

function setup() {
	createCanvas(900, 500);
 
  
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	 
	

    tree = new Tree(700,300,400,400);

	 mango1 = new Mango(700,300);
	 mango2 = new Mango(700,200);
	 mango3 = new Mango(750,250);
	 mango4 = new Mango(600,300);
    mango5 = new Mango(850,250);
    mango6 = new Mango(650,150);
	 mango7 = new Mango(550,250);
     
   stone = new Stone(200,400);

	hand = new Launcher(stone.body,{x:150,y:400});

   ground = new Ground(400,500,1500,20);
	 
	 
   Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  
  background("lightBlue");

  textSize(24)
  text(" the mango you hit : - " + score,300,50);
  
  ground.display();

  tree.display();
   
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  imageMode(CENTER) 
  image(boyImage,200,450,200,200);

  stone.display();
 
  detectCollision(stone,mango1)
  
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}

function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
   hand.fly();
}

function detectCollision(lstone,lmango){

mpos = lmango.body.position;
spos = lstone.body.position;

var distance = dist(mpos.x,mpos.y,spos.x,spos.y);
if(distance<=lmango.radius+lstone.radius){

 Matter.Body.setStatic(lmango.body,false);
 score = score +2

}

}

function keyPressed(){

if(keyCode === 32){

Matter.Body.setPosition(stone.body,{x:200,y:400});
hand.attach(stone.body);
   
}

}


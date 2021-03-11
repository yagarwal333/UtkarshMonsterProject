
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 400);
  engine = Engine.create();
	world = engine.world;
  // create sprites here
  
  box1=new Box(330,235,30,40)

box2=new Box(360,235,30,40)

box3=new Box(390,235,30,40)

box4=new Box(420,235,30,40)

box5=new Box(450,235,30,40);

box6=new Box(360,195,30,40)

box7=new Box(390,195,30,40)

box8=new Box(420,195,30,40)

box9=new Box(390,155,30,40)
platform=new Ground(200,400,600,5)
hero=new Hero(400,3,100,100)
rope1=new Fly(hero.body,{x:100,y:465});


monster=new Monster(380,200,100,100);


Engine.run(engine)
}

function draw() {
  rectMode(CENTER)
  background("white");
stroke(15)
fill("red")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  rope1.display();
  hero.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


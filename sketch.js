const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero1,monster1,rope1,ground1;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(600, 600, 1200, 20);

  hero1 = new hero(400,800,250);
  rope1 = new rope(hero1.body, { x: 500, y: 50 });
  monster1 = new monster(1100,550,300);

  box1 = new box(600, 100, 70, 70);
  box2 = new box(600, 135, 70, 70)
  box3 = new box(600, 170, 70, 70)
  box4 = new box(600, 205, 70, 70)
  box5 = new box(600, 240, 70, 70)
  box6 = new box(600, 275, 70, 70)
  box7 = new box(600, 310, 70, 70)
  box8 = new box(700, 100, 70, 70)
  box9 = new box(700, 135, 70, 70)
  box10 = new box(700, 170, 70, 70)
  box11 = new box(700, 205, 70, 70)
  box12 = new box(700, 240, 70, 70)
  box13 = new box(700, 275, 70, 70)
  box14 = new box(800, 100, 70, 70)
  box15 = new box(800, 135, 70, 70)
  box16 = new box(800, 170, 70, 70)
  box17 = new box(800, 205, 70, 70)
  box18 = new box(800, 240, 70, 70)
  box19 = new box(800, 275, 70, 70)
  box20 = new box(800, 310, 70, 70)
  box21 = new box(800, 345, 70, 70)
  box22 = new box(900, 100, 70, 70);
  box23 = new box(900, 100, 70, 70);
  box24 = new box(900, 100, 70, 70);
  box25 = new box(900, 100, 70, 70);
  box26 = new box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  hero1.display();
  rope1.display();
  monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero1.body, { x:mouseX, y:mouseY})
}

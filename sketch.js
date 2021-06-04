const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Base, ball, wreck;
var Box11, Box12, Box13, Box14, Box15;
var Box21, Box22, Box23, Box24;
var Box31, Box32, Box33;
var Box41, Box42;
var Box51;
function setup(){
    createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    Base = new Ground(300, 590, 1500, 20);

   

  //  Box11 = new Box( 150, 350, 50, 50)
    //Box12 = new Box( 200, 350, 50, 50)
    //Box13 = new Box( 250, 350, 50, 50)
    //Box14 = new Box( 300, 350, 50, 50)
    //Box15 = new Box( 350, 350, 50, 50)

    //Box21 = new Box( 175, 300, 50, 50)
    //Box22 = new Box( 225, 300, 50, 50)
    //Box23 = new Box( 275, 300, 50, 50)
    //Box24 = new Box( 325, 300, 50, 50)

    //Box31 = new Box( 200, 250, 50, 50)
    //Box32 = new Box( 250, 250, 50, 50)
    //Box33 = new Box( 300, 250, 50, 50)

    //Box41 = new Box( 225, 200, 50, 50)
    //Box42 = new Box( 275, 200, 50, 50)

    //Box51 = new Box( 250, 150, 50, 50)
    ball = new Ball(200, 200, 80, 80);
    

    wreck = new Rope(ball.body,{x:200, y:50});
}

function draw(){
    background("black")
    Engine.update(engine);

    Base.display();
  wreck.display();   
ball.display();
    //Box11.display();
    //Box12.display();
   // Box13.display();
    //Box14.display();
   // Box15.display();

   // Box21.display();
   // Box22.display();
   // Box23.display();
   // Box24.display();

   // Box31.display();
   // Box32.display();
  //  Box33.display();

   // Box41.display();
   // Box42.display();
    
   // Box51.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}





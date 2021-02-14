const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){

    createCanvas(1200,500);

   engine = Engine.create();
   world = engine.world;

   ground1 = new Ground(500,450,700,10);

}

function draw(){

    background(0);

    Engine.update(engine);

    ground1.display();

}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10)
    stand2 = new Ground(700,200,200,10)
    polygon = new Polygon(50,200,20)
    slingshot = new Slingshot(polygon.body,{x:100,y:200})

    b1= new Block(300,275,30,40)
    b2= new Block(330,275,30,40)
    b3= new Block(360,275,30,40)
    b4= new Block(390,275,30,40)
    b5= new Block(420,275,30,40)
    b6= new Block(450,275,30,40)
    b7= new Block(480,275,30,40)
    b8= new Block(330,235,30,40)
    b9= new Block(360,235,30,40)
    b10= new Block(390,235,30,40)
    b11= new Block(420,235,30,40)
    b12= new Block(450,235,30,40)
    b13= new Block(360,195,30,40)
    b14= new Block(390,195,30,40)
    b15= new Block(420,195,30,40)
    b16= new Block(390,155,30,40)

    c1 = new Block(640,175,30,40)
    c2 = new Block(670,175,30,40)
    c3 = new Block(700,175,30,40)
    c4 = new Block(730,175,30,40)
    c5 = new Block(760,175,30,40)
    c6 = new Block(670,135,30,40)
    c7 = new Block(700,135,30,40)
    c8 = new Block(730,135,30,40)
    c9 = new Block(700,95,30,40)


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display()
    stand1.display()
    stand2.display()
    polygon.display()
    slingshot.display()

    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()

    fill("yellow")
    c1.display()
    c2.display()
    c3.display()
    c4.display()
    c5.display()
    c6.display()
    c7.display()
    c8.display()
    c9.display()
}

function mouseDragged (){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y: mouseY})
}
function mouseReleased (){
    slingShot.fly()
}
  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;
  const Render = Matter.Render;
  const Constraint = Matter.Constraint;

  var engine, world;
  var ground1, ground2;
  var sling;
  var polygon,polygonImg;

  function preload()
  {
  polygonImg=loadImage("polygon.png");
  }

  function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(650, 500, 400, 20);
  ground2 = new Ground(980, 250, 220, 20);
  
  polygon = Bodies.circle(50, 200, 30);
  World.add(world, polygon);

  sling = new SlingShot(this.polygon, {x: 100, y: 200});
  
  box1 = new Box(500,465,50,50);
  box2 = new Box(550,465,50,50);
  box3 = new Box(600,465,50,50);
  box4 = new Box(650,465,50,50);
  box5 = new Box(700,465,50,50);
  box6 = new Box(750,465,50,50);
  box7 = new Box(800,465,50,50);
  box8 = new Box(550,415,50,50);
  box9 = new Box(600,415,50,50);
  box10 = new Box(650,415,50,50);
  box11 = new Box(700,415,50,50);
  box12 = new Box(750,415,50,50);
  box13 = new Box(600,365,50,50);
  box14 = new Box(650,365,50,50);
  box15 = new Box(700,365,50,50);
  box16 = new Box(650,315,50,50);
  box17 = new Box(900,200,40,40);
  box18 = new Box(940,200,40,40);
  box19 = new Box(980,200,40,40);
  box20 = new Box(1020,200,40,40);
  box21 = new Box(1060,200,40,40);
  box22 = new Box(940,150,40,40);
  box23 = new Box(980,150,40,40);
  box24 = new Box(1020,150,40,40);
  box25 = new Box(980,100,40,40);
  
  Engine.run(engine);
  
  }
  function draw() {
  background("skyBlue");
  
  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  
  fill("green");
  textSize(20);
  text("1.Drag the polygon to destroy the boxes.",50,30);
  textSize(20);
  text("2.Press 'Space key' to get second Chance to Play.",50 ,60);

  ground1.display();
  ground2.display();

  fill("purple")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  fill("blue")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  fill("red")
  box13.display();
  box14.display();
  box15.display();
  
  fill("green")
  box16.display();
  
  fill("purple")
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  fill("brown")
  box22.display();
  box23.display();
  box24.display();
  
  fill("orange")
  box25.display();

  sling.display();
  }

  function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }

  function mouseReleased(){
  sling.fly();
  }

  function keyPressed(){
  if(keyCode===32){
  sling.attach(this.polygon);
  }
  }

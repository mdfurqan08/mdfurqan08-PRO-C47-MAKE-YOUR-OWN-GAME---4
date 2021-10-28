
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg;
var playerImg;
var player;
var engineImg,batteryImg,oilImg,fuelImg,carImg,metalImg;
var engine,battery,oil,fuel,car,steeringWheel,speed;
var wheelImg,speedImg,ground;
var metal;
var metalGroup;
var wall;
var parts = 6;

function preload()
{
	backImg = loadImage("assets/1.jpg");
	playerImg = loadImage("assets/2.png");
  engineImg = loadImage("assets/5.png");
  batteryImg = loadImage("assets/7.png");
  oilImg = loadImage("assets/8.png");
  fuelImg = loadImage("assets/9.png");
  carImg = loadImage("assets/10.png");
  metalImg = loadImage("assets/3.png");
  wheelImg = loadImage("assets/4.png");
  speedImg = loadImage("assets/6.png");


}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
player = createSprite(100,200,50,50);
player.addImage(playerImg);
player.scale = 0.4
//player.debug = true
   player.setCollider("rectangle",20,0,180,456)
ground = new Ground(0, height - 2, width * 2, 1);
//
wall = createSprite(1,5,10,1080);
wall.visible = false;
//
engine = createSprite(500,500,50,50);
engine.addImage(engineImg);
engine.scale = 0.3;
engine.velocityX = -3;
//engine.debug = true
engine.setCollider("rectangle",2,0,400,300)
//
battery = createSprite(900,300,50,50);
battery.addImage(batteryImg);
battery.scale = 0.3;
battery.velocityX = -3;
//battery.debug = true;
battery.setCollider("rectangle",2,0,400,300)
//
fuel = createSprite(800,400,50,50);
fuel.addImage(fuelImg);
fuel.scale = 0.3;
fuel.velocityX = -3;
fuel.debug = true;
fuel.setCollider("rectangle",2,0,200,250)
//
oil = createSprite(300,200,50,50);
oil.addImage(oilImg);
oil.scale = 0.3;
oil.velocityX = -3;
oil.debug = true;
oil.setCollider("rectangle",2,0,300,300)
//
steeringWheel = createSprite(450,300,50,50);
steeringWheel.addImage(wheelImg);
steeringWheel.scale = 0.2;
steeringWheel.velocityX = -3;
steeringWheel.debug = true;
steeringWheel.setCollider("rectangle",2,0,400,400)
//
speed = createSprite(750,300,50,50);
speed.addImage(speedImg);
speed.scale = 0.5;
speed.velocityX = -3;
speed.debug = true;
speed.setCollider("rectangle",2,0,200,150)
//*//*//

metalGroup= new Group();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  textSize(30);
fill("black");
text("parts to be Collected :"+parts,100,50);
//
  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
//
if(metalGroup.isTouching(player)){
  for(var i=0;i<metalGroup.length;i++){     
       
    if(metalGroup[i].isTouching(player)){
         metalGroup[i].destroy()}}  
}
//
if(metalGroup.isTouching(wall)){
  for(var i=0;i<metalGroup.length;i++){     
       
    if(metalGroup[i].isTouching(wall)){
         metalGroup[i].destroy()}}  
}
//
if(engine.isTouching(wall)){
  engine.x = random(500,1100);
  engine.y = random(100,500)

}
if(engine.isTouching(player)){
  engine.destroy();
  parts = parts -1;
}
//
if(battery.isTouching(wall)){
  battery.x = random(500,1100);
  battery.y = random(100,500)

}
if(battery.isTouching(player)){
  battery.destroy();
  parts = parts -1;
}
//
if(fuel.isTouching(wall)){
  fuel.x = random(500,1100);
  fuel.y = random(100,500)

}
if(fuel.isTouching(player)){
  fuel.destroy();
  parts = parts -1;
}
//
if(oil.isTouching(wall)){
  oil.x = random(500,1100);
  oil.y = random(100,500)

}
if(oil.isTouching(player)){
  oil.destroy();
  parts = parts -1;
}
//
if(steeringWheel.isTouching(wall)){
  steeringWheel.x = random(500,1100);
  steeringWheel.y = random(100,500)

}
if(steeringWheel.isTouching(player)){
  steeringWheel .destroy();
  parts = parts -1;
}
//
if(speed.isTouching(wall)){
  speed.x = random(500,1100);
  speed.y = random(100,500)

}
if(speed.isTouching(player)){
  speed.destroy();
  parts = parts -1;
}
//
  ground.display();
  Metall();
  drawSprites();
 
}
///
function Metall(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    metal = createSprite(random(500,1100),random(100,500),40,40)

    metal.addImage(metalImg)
    metal.scale = 0.3
    metal.velocityX = -3
    metal.debug = true
   metal.setCollider("rectangle",0,0,300,300)
   
    metal.lifetime = 400
   metalGroup.add(metal)
  }

}



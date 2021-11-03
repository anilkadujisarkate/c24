const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var playerArrows = [];


function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  arrowimge = loadImage("./assets/arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );
}

function draw() {
  if(keyCode===32){
playerArrow.shoot(playerArcher.body.angle)
  }

  background(backgroundImg);

  

  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  playerArcher.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}

shoot (ArcherAngle) 

  archerAngle +=90;
  this.velocity = p5.vector.fromAngle(archerAngle * (3.14/180));
  this.velocity.mult(0.5);

Matter.Body.setvelocity(this.body,{
x: this.velocity.x * (180/3.14),
y: this.velocity.y * (180/3.14)
})

function Released(){
  if (keyReleased===space){
    var arrow = new arrow(arrow , arrow.y);
    arrow.trajectory = [];
    Matter.Body.setangle(arrow.body, arrow.angle);
    arrow.push(arrow);
  }
}
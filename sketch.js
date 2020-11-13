const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight = 250;

function setup() {
  createCanvas(480, 700);
  engine = Engine.create();
  world = engine.world;
  
 for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
 for (var j = 30; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

 for (var j = 50; j <=width-5; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

 for (var j = 30; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-5; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }
 
  wall1 = createSprite(240,695,1000,10);
  wall1.shapeColor = color("brown");

  //wall2 = createSprite(240,5,1000,10);
  //wall2.shapeColor = color("brown");

  wall3 = createSprite(5,350,10,1000);
  wall3.shapeColor = color("brown");

  wall4 = createSprite(475,350,10,1000);
  wall4.shapeColor = color("brown");

  ground = new Ground(240,688);
}
function draw(){
  background("black");
  ground.display();
  

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }
 
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }
  
  if(frameCount % 90 === 0 ){
    particles.push(new Particle(random(50,430),10,10))
  }

  for(var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  
  drawSprites();

}


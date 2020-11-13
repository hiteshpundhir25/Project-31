class Ground{

    constructor(x,y){
        var ground_options={
            isStatic : true
          }
          this.x = x;
          this.y = y;
          this.ground = Bodies.rectangle(this.x,this.y,1100,10,ground_options)
          World.add(world,this.ground);
          
    }
    display(){
        noStroke();
        fill("white");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1100,10);
    }
  }
class BaseClass {
    constructor(x, y, width, height, angle) {
        var options = {
          friction:1.0,
          density:1.0,
          restitution:0.4
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 80;
        this.height = 60;
        
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        
        rectMode(CENTER);
      rect(0,0, this.width, this.height);
        pop();
      }
}
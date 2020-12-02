class Particle {
    constructor(x,y) {
      var options = {
          isStatic: true
          
      }
      this.body = Bodies.circle(x,y,15,options);
     this.radius = 15
     this.color = color(random(0,255))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(tpos.x,pos.y)
      rotate (this.body.angle)
      ellipseMode(CENTER);

      ellipse(0,0, this.radius, this.radius);
   pop();
    }
  };
class Bob {
    constructor(x,y) {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'frictionAir':0.0,
          'slop':1,
          'inertia':Infinity
      }
      this.body = Bodies.circle(x,y,50, options);
      this.x = x;
      this.y = y;
      this.r = 50;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
     fill("yellow");
     ellipseMode(CENTER);
     ellipse(0,0,this.r,this.r); 
     
      pop();
    }
  }
  
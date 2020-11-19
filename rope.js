class Rope {

    constructor(body1,body2,offsetX){
        this.offsetX = offsetX;
        //this.offsetY = offsetY;

        var options = {

            bodyA:body1,
            bodyB:body2,
            pointB:{x:offsetX, y:0},
            length:220,
            angularStiffness:1.0,
            stiffness:1.0
        }

        this.offsetX = offsetX;

        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);

    }
}
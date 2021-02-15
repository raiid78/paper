class ball{
    constructor(x, y, r, angle){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("paper.png");
        this.image.scale = 1.5;

        World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
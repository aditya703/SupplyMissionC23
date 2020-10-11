class BowWall{
constructor(x, y, width, height){

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world, this.body);
}
display(){
    rectMode(CENTER);
    fill("red");
    stroke("red");
    rect(this.x, this.y, this.width, this.height);
}
}
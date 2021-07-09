class Paper {

constructor(){

    var options={
  isStatic:false,
  restitution:0.3,
  friction:0,
  density:1.2
}
this.body= Bodies.circle(250,540,20,options);
this.width = 33;
this.image = loadImage("paper.png");
World.add(world,this.body);

}

display(){

var pos = this.body.position;
var angle = this.body.angle;
push();
fill("white");
translate(pos.x,pos.y);
rotate(angle);
imageMode(CENTER);
image(this.image,0,0,55,55);
pop();


}

}
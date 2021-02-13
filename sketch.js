var hrAngle, minAngle, secAngle;

function setup() {
  createCanvas(800,400);


  angleMode(DEGREES);
}

function draw() {
  background("black");  

  hr = hour();
min = minute();
sec = second();

  secAngle = map(sec,0,60,0,360);
  hrAngle = map(hr,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  translate(400,200);
  rotate(-90)

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,2,251);
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  push();
  rotate(minAngle);
  stroke(10, 248, 3);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,300,300,0,secAngle);
  
  stroke(10,248,3);
  arc(0,0,280,280,0,minAngle);

  stroke(0,2,251);
  arc(0,0,260,260,0,hrAngle);
}
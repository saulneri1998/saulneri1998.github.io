var dots;
var a;
var b;
var c;
var d;
//var e;
var newDot;
var distr;

function setup() {
  frameRate(100);
  let myCanvas = createCanvas(700, 500);
  myCanvas.parent("myContainer");
  //a = createVector(50, 50);
  a = createVector(350, 50);
  b = createVector(50, 450);
  c = createVector(650, 450);
  //e = createVector(850, 50);
  d = createVector(random(0, width), random(0, height));

  dots = new Array();
  dots.push(d);

  distr = 1 / 2;
}

function draw() {
  background(51);

  fill(255);
  textStyle(BOLD);
  textSize(25);
  strokeWeight(0);
  text("A", a.x + 10, a.y);
  text("B", b.x - 30, b.y);
  text("C", c.x + 10, c.y);
  //text("E", e.x + 10, e.y);
  text("Dots: " + dots.length, 15, 30);

  stroke(50, 200, 50);
  strokeWeight(10);
  point(a.x, a.y);
  point(b.x, b.y);
  point(c.x, c.y);
  //point(e.x, e.y);

  strokeWeight(4);
  stroke(200, 100, 100);
  for (i = 0; i < dots.length; i++) {
    point(dots[i].x, dots[i].y);
  }

  //r = random([1, 2, 3, 4]);
  r = random([1, 2, 3]);
  if (r == 1) {
    newDot = createVector(
      (dots[dots.length - 1].x + a.x) * distr,
      (dots[dots.length - 1].y + a.y) * distr
    );
  } else if (r == 2) {
    newDot = createVector(
      (dots[dots.length - 1].x + b.x) * distr,
      (dots[dots.length - 1].y + b.y) * distr
    );
  } else if (r == 3) {
    newDot = createVector(
      (dots[dots.length - 1].x + c.x) * distr,
      (dots[dots.length - 1].y + c.y) * distr
    );
  } else {
    //newDot = createVector((dots[dots.length - 1].x + e.x) * distr, (dots[dots.length - 1].y + e.y) * distr);
  }

  dots.push(newDot);
}

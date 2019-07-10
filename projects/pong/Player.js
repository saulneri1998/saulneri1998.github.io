class Player {
  constructor() {
    this.dy = 8;
    this.dx = 0;
    this.l = 50;
    this.a = 15;

    this.loc = createVector(950, height/2);
    this.vel = createVector(this.dx, this.dy);
  }

  show() {
    noStroke();
    fill(80, 80, 200);
    rect(this.loc.x, this.loc.y, this.a, 2*this.l);
  }

  move(dir) {
    if (dir == "up") {
      this.vel.set(this.dx, -this.dy);
    } else if (dir == "down") {
      this.vel.set(this.dx, this.dy);
    } else {
      this.vel.set(0, 0);
    }
    this.loc.add(this.vel);
  }
}

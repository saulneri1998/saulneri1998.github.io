class Enemy {

  constructor() {
    this.dy = 8;
    this.dx = 0;
    this.l = 50;
    this.a = 15;

    this.loc = createVector(50, height/2);
    this.vel = createVector(this.dx, this.dy);
  }


  show() {
    noStroke();
    fill(80, 80, 200);
    rect(this.loc.x, this.loc.y, this.a, 2*this.l);
  }

  move(b) {
    this.loc.add(this.vel);
    if(b.loc.x < width*0.5) {
      if (this.loc.y < b.loc.y) {
        this.vel.set(this.dx, this.dy);
      } else {
        this.vel.set(this.dx, -this.dy);
      }
    } else {
      this.vel.set(0, 0)
    }
  }
}

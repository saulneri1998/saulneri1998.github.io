class Ball {
  constructor() {
    this.dx = 4;
    this.dy = 3;
    this.loc = createVector(width/2, height/2);
    this.vel = createVector(-this.dx, -this.dy);
    this.r = 10;
  }

  show() {
      noStroke();
      fill(250, 80, 80);
      ellipse(this.loc.x, this.loc.y, this.r, this.r);
  }

  update() {
      this.loc.add(this.vel);
  }

  bounce(p) {
      if(this.loc.y <= 0 || this.loc.y >= height) {
          this.vel.y *= -1;
      }

      if(this.loc.y < p.loc.y + p.l && this.loc.y > p.loc.y - p.l) {
          if(this.loc.x < p.loc.x + p.a && this.loc.x > p.loc.x - p.a) {
              this.vel.x *= -1;
              this.vel.y = this.changeRandVel(this.vel.y);
          }
      }
  }

  changeRandVel(vel) {
    let randDir = random([-1, 1]);
    if(vel < 0) {
      vel = (vel - 1) * randDir;
    } else {
      vel = (vel + 1) * randDir;
    }

    return vel;
  }

  restart(s) {
      this.loc.set(width/2, random(0, height));
      var v = random([-1, 1]);
      if (s == 1) {
          this.vel.set(this.dx, this.dy*v);
      } else {
          this.vel.set(-this.dx, this.dy*v);
      }
  }
}

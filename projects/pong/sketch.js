let ball;
let enemy;
let player;
let myScore;
let against;

function setup() {
  let canv = createCanvas(1000, 700);
  canv.parent("myContainer");
  rectMode(CENTER);

  ball = new Ball();
  enemy = new Enemy();
  player = new Player();
  myScore = against = 0;
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(5);
  line(width / 2, 0, width / 2, height);
  textSize(40);
  fill(255, 255, 255);
  text(against, width / 2 - 100, 50);
  text(myScore, width / 2 + 100, 50);

  ball.show();
  ball.update();
  enemy.show();
  enemy.move(ball);
  player.show();
  movePlayer();

  if (ball.loc.x < width / 2) {
    ball.bounce(enemy);
  } else {
    ball.bounce(player);
  }

  if (ball.loc.x < 50 - enemy.a) {
    myScore++;
    ball.restart(1);
  } else if (ball.loc.x > 950 + player.a) {
    against++;
    ball.restart(2);
  }
}

function movePlayer() {
  let dir = "none";
  if (keyIsPressed === true) {
    if (keyIsDown(UP_ARROW)) {
      dir = "up";
    } else if (keyIsDown(DOWN_ARROW)) {
      dir = "down";
    }
  } else {
    dir = "stop";
  }
  player.move(dir);
}

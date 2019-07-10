var iMax = 45;
var jMax = 45;
var board = new Array();

function setup() {
  frameRate(5);
  let canv = createCanvas(901, 901);
  canv.parent("myContainer");
  for (i = 0; i < iMax; i++) {
    board[i] = new Array();
    for (j = 0; j < jMax; j++) {
      board[i][j] = new Cell(false, j * 20, i * 20);
    }
  }

  noLoop();
}

function draw() {
  background(51);

  for (i = 0; i < iMax; i++) {
    for (j = 0; j < jMax; j++) {
      board[i][j].update();
      board[i][j].show();
    }
  }

  for (i = 0; i < iMax; i++) {
    for (j = 0; j < jMax; j++) {
      board[i][j].changeState(checkNeighbours(i, j));
      //print(checkNeighbours(i, j));
    }
  }

  print(frameCount);
}
function mouseDragged() {
  var x = floor(mouseX / 20);
  var y = floor(mouseY / 20);
  //print(x, y);
  if (keyIsDown(SHIFT)) {
    board[y][x].alive = false;
    board[y][x].nextAlive = false;
  } else {
    board[y][x].alive = true;
    board[y][x].nextAlive = true;
  }

  board[y][x].show();
}

function mousePressed() {
  var x = floor(mouseX / 20);
  var y = floor(mouseY / 20);
  //print(x, y);
  if (board[y][x].alive) {
    board[y][x].alive = false;
    board[y][x].nextAlive = false;
  } else {
    board[y][x].alive = true;
    board[y][x].nextAlive = true;
  }

  board[y][x].show();
}

function keyTyped() {
  if (key === "s") {
    loop();
  } else if (key === "p") {
    noLoop();
  }
}

function checkNeighbours(i, j) {
  var n = 0;
  //print(i, j);

  if (i >= 0 && j + 1 < jMax) {
    if (board[i][j + 1].alive == true) {
      n++;
    }
  }
  if (i + 1 < iMax && j >= 0) {
    if (board[i + 1][j].alive == true) {
      n++;
    }
  }
  if (i + 1 < iMax && j + 1 < jMax) {
    if (board[i + 1][j + 1].alive == true) {
      n++;
    }
  }
  if (i - 1 >= 0 && j >= 0) {
    if (board[i - 1][j].alive == true) {
      n++;
    }
  }
  if (i - 1 >= 0 && j + 1 < jMax) {
    if (board[i - 1][j + 1].alive == true) {
      n++;
    }
  }
  if (i >= 0 && j - 1 >= 0) {
    if (board[i][j - 1].alive == true) {
      n++;
    }
  }
  if (i + 1 < iMax && j - 1 >= 0) {
    if (board[i + 1][j - 1].alive == true) {
      n++;
    }
  }
  if (i - 1 >= 0 && j - 1 >= 0) {
    if (board[i - 1][j - 1].alive == true) {
      n++;
    }
  }
  //print(board[i][j].alive, n);
  return n;
}

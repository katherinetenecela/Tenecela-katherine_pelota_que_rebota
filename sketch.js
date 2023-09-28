let posX, posY, diam, rad;
let esp = 34;
let margen = 30;
let piso;
let velY = 5;
let gravity = 0.2;
let friction = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = 100;
  rectMode(CENTER);
  esp = 34;
  piso = windowHeight - margen - esp / 2;
  frameRate(10);
  diam = 50;
  rad = diam / 2;
}

function draw() {
  background(0, 200, 150, 70);
  noStroke();

  posY += velY;

  if (posY > piso - rad) {
    velY *= -1;
  }
  fill(255);
  circle(posX, posY, diam);

  fill(255, 0, 0);
  rect(windowWidth * 0.5, windowHeight - margen, windowWidth * 0.8, esp);
}

let posX;
let posY;
let vel;
let diam;
let rad;
let esp;
let margen;
let piso;
let acel;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = (random(10, 225, 10), windowWidth / 2);
  posY = (random(10, 225), windowHeight * 0.2);
  rectMode(CENTER);
  diam = random(10, 50);
  rad = diam / 2;
  esp = 50;
  margen = 40;
  piso = windowHeight - margen - esp / 2;
  vel = 0;
  acel = 0.98;
  //frameRate(10);
}

function draw() {
  background(0, 20, 10);

  actualizar();

  noStroke();
  fill(200, 250, 10);
  circle(posX, posY, 90);
  fill(10, random(10, 200), 0);
  rect(windowWidth / 2, windowHeight - margen, windowWidth, esp);
}

function actualizar() {
  vel += acel;
  posY += vel;

  if (posY > piso - rad) {
    print("ya");
    vel *= -1;
    posY += vel;
  }
}

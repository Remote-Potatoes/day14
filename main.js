const game = new Game();

function draw() {
  game.draw();
}

function setup() {
  game.setup();
}

function keyPressed() {
  game.keyPressed();
}

function preload() {
  // here we will need to load our assets
  bgImage = loadImage("./assets/wide.jpg");
  theViking = loadImage("./assets/character-right.png");
}

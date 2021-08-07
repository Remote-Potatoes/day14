class Obstacle {
  constructor() {
    this.width = random(50, 150);
    this.height = random(25, 50);
    this.x = CANVAS_WIDTH + this.width;
    this.y = 70;
  }

  draw() {
    this.x -= 5;
    rect(this.x, this.y, this.width, this.height);
  }
}

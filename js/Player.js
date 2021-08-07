class Player {
  constructor() {
    this.y = 0;
    this.x = CANVAS_WIDTH / 8;
    this.height = 50;
    this.width = 50;
    this.velocity = 0;
  }

  jump() {
    this.y -= 15;
    this.velocity -= 5;
  }

  draw() {
    this.velocity += GRAVITY;
    this.y += this.velocity;

    image(theViking, this.x, this.y, this.width, this.height);

    if (this.y >= this.floor) {
      this.y = this.floor;
      this.velocity = 0;
    }
  }

  get floor() {
    return 250 - this.height;
  }
}

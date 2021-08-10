class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
  }

  preload() {
    this.levels = [bgImage, bgImage2];
  }

  draw(gameLevel) {
    const level = gameLevel % this.levels.length;
    this.x -= 3;
    // P5 Function (image, xValue, yValue, widthValue, heightValue)
    // Image number 1
    image(this.levels[level], this.x, this.y, this.width, this.height);
    image(
      this.levels[level],
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}

class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
  }
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  draw() {
    clear();
    this.background.draw();
    this.player.draw();

    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacle());
    }

    this.obstacles.forEach((obstacle, index) => {
      obstacle.draw();
      // if (obstacle.x + obstacle.width < 0) {
      //   this.obstacles.splice(index, 1);
      // }
      if (obstacle.x < -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  keyPressed() {
    if (keyCode === SPACE_BAR) {
      this.player.jump();
    }
  }
}

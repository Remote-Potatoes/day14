class Game {
  constructor() {
    this.background = new Background();
    this.obstacles = [];
    this.player = new Player();
    this.level = 0;
  }
  setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  }

  preload() {
    this.background.preload();
  }

  draw() {
    clear();
    this.background.draw(this.level);
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
      this.level++;
    }
  }
}

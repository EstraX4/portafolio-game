class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };

    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 64;
    this.height = 64;
    this.sides = {
      bottom: this.position.y + this.height,
    };
    this.gravity = 1;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.sides.bottom = this.position.y + this.height;

    if (this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += 1;
      this.sides.bottom = this.position.y + this.height;
    } else this.velocity.y = 0;
  }
}

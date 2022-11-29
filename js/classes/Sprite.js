class Sprite {
  constructor({ position, imageSrc, frameRate = 1}) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.loaded = true;
      this.width = this.image.width;
      this.height = this.image.height / this.frameRate;
    };
    this.image.src = imageSrc;
    this.loaded = false;
    this.frameRate = frameRate;
  }
  draw() {
    if (!this.loaded) return;
    const cropbox = {
      position: {
        x: 0,
        y: 0,
      },
      width: this.width,
      height: this.height,
    };
    c.drawImage(
      this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }
}

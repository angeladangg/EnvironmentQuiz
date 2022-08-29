class Windmill {
  constructor(speed, animation, x, y) {
    this.animation = animation;
    this.speed = speed;
    this.index = 0;
    this.x = x;
    this.y = y;
  }
  animate() {
    this.index += this.speed;
  }
  show() {
    image(animation[int(this.index % 6)], this.x, this.y);
  }
}

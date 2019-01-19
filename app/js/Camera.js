import Scene from './Scene.js';

class Camera extends Scene {
  constructor(screen, controls, x, y, scene) {
    super(screen, controls);
    this.x = x;
    this.y = y;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.scene = scene;
    this.xLeftSide = Math.floor(this.w*0.4);
    this.xRightSide = Math.floor(this.w*0.6);
    this.yDownSide = Math.floor(this.h*0.4);
    this.yUpSide = Math.floor(this.h*0.6);
    console.log(this);
  }

  update (time) {
    if (this.scene.player.x - this.x < this.xLeftSide) {
      this.x = this.scene.player.x - this.xLeftSide;
    }

    if (this.scene.player.x - this.x > this.xRightSide) {
      this.x = this.scene.player.x - this.xRightSide;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > this.w) this.x = this.w;

    if (this.scene.player.y - this.y < this.yDownSide) {
      this.y = this.scene.player.y - this.yDownSide;
    }

    if (this.scene.player.y - this.y > this.yUpSide) {
      this.y = this.scene.player.y - this.yUpSide;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > this.w) this.x = this.w;

    if (this.y < 0) this.y = 0;
    if (this.y > this.w) this.y = this.w;
  }
}

export default Camera;

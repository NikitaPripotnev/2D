import Scene from './Scene.js';

class Camera extends Scene {
  constructor(screen, controls, x, y, scene) {
    super(screen, controls);
    this.x = x;
    this.y = y;
    this.w = 640;
    this.h = 640;
    this.scene = scene;
  }

  update (time) {
    if (this.scene.player.x - this.x < 200) {
      this.x = this.scene.player.x - 200;
    }

    if (this.scene.player.x - this.x > 440) {
      this.x = this.scene.player.x - 440;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > 640) this.x = 640;

    if (this.scene.player.y - this.y < 200) {
      this.y = this.scene.player.y - 200;
    }

    if (this.scene.player.y - this.y > 440) {
      this.y = this.scene.player.y - 440;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > 640) this.x = 640;

    if (this.y < 0) this.y = 0;
    if (this.y > 640) this.y = 640;
  }
}

export default Camera;

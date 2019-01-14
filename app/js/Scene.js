class Scene {
  constructor(screen, controls) {
    this.canvas = screen.canvas;
    this.ctx = this.canvas.getContext('2d');
    this.controls = controls;
    this.imgs = screen.imgs;
  }
}

export default Scene;

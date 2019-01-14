import Scene from './Scene.js';

class Win extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
  }
  render (time) {
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '22px Georgia';
    this.ctx.fillText('You won!', 50, 70);
    return 'win';
  };
}

export default Win;

import Scene from './Scene.js';

class Win extends Scene {
  constructor(screen, controls, level) {
    super(screen, controls);
    this.level = level;
  }
  render(time) {
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = '26px Georgia';
    this.ctx.fillText(
      'Level ' + this.level + ' is comleted!',
      this.canvas.width / 2 - 40,
      this.canvas.height / 2 - 20
    );
    return 'win';
  }
}

export default Win;

import Scene from './Scene.js';

class Menu extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
    this.offset = this.canvas.width / 2 - 320;
    console.log( this.offset, this.canvas.width, 'in menu width: offset and canvasw');
  }
  render(time) {
    this.ctx.drawImage(this.imgs['title'], this.offset, 0);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '26px Arial';
    this.ctx.fillText('Нажмите пробел', this.offset + 200, 600);
    if (this.controls.states['fire']) {
      return 'afterMenu';
    } else {
      return 'menu';
    }
  }
}

export default Menu;

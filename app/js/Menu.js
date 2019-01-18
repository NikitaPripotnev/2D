import Scene from './Scene.js';

class Menu extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
  }
  render(time) {
    this.ctx.drawImage(this.imgs['title'], 0, 0, 640, 640, 0, 0, 640, 640);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '22px Arial';
    this.ctx.fillText('Нажмите пробел', 250, 600);
    if (this.controls.states['fire']) {
      return 'afterMenu';
    } else {
      return 'menu';
    }
  }
}

export default Menu;

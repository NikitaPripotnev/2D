import Scene from './Scene.js';

class ChoosePlayer extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
    this.status = false;
    this.count = 0;
    this.x = 68;
    this.y = 208;
    this.hero = 'vova';
    this.pause = false;
    document.addEventListener('keyup', event => this.onUp(event), false);
  }
  onUp(event) {
    setTimeout(() => {
      this.pause = true;
    }, 1000);
    let state = this.controls.codes[event.keyCode];
    if (state === 'right') {
      if (this.x + 181 > 600) {
        this.x = 68;
      } else {
        this.x += 181;
      }
    }
    if (state === 'left') {
      if (this.x - 181 < 0) {
        this.x = 430;
      } else {
        this.x -= 181;
      }
    }
    if (state === 'fire' && this.pause) {
      this.status = true;
    }
    if (this.x === 68) {
      this.hero = 'vova';
    }
    if (this.x === 249) {
      this.hero = 'ilya';
    }
    if (this.x === 430) {
      this.hero = 'vova';
    }
  }
  render(time) {
    this.ctx.drawImage(
      this.imgs['choose-players'],
      0,
      0,
      640,
      640,
      0,
      0,
      640,
      640
    );
    this.ctx.drawImage(this.imgs['gold'], this.x, this.y);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '22px Arial';
    this.ctx.fillText('Нажмите пробел для выбора', 200, 600);

    if (this.status === true) {
      return 'createHero';
    } else {
      return 'choose';
    }
  }
}
export default ChoosePlayer;

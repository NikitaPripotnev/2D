import Scene from './Scene.js';
import Sound from './Sound.js';

class ChooseMenu extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
    this.status = false;
    this.count = 0;
    this.offset = this.canvas.width / 2 - 320;
    this.x = this.offset + 68;
    this.y = 208;
    this.hero = 'vova';
    this.pause = false;
    this.sound = new Sound('../assets/sounds/button10.wav');
    this.handler = (event) => {
      this.onUp(event);
    }
    document.addEventListener('keyup', this.handler, false);
  }
  onUp(event) {
    setTimeout(() => {
      this.pause = true;
    }, 600);
    this.sound.play();
    let state = this.controls.codes[event.keyCode];
    if (state === 'right') {
      if (this.x + 181 > this.offset+600) {
        this.x = this.offset + 68;
      } else {
        this.x += 181;
      }
    }
    if (state === 'left') {
      if (this.x - 181 < this.offset + 0) {
        this.x = this.offset + 430;
      } else {
        this.x -= 181;
      }
    }
    if (state === 'fire' && this.pause) {
      this.status = true;
      document.removeEventListener('keyup', this.handler, false);
    }
    if (this.x === this.offset + 68) {
      this.hero = 'vova';
    }
    if (this.x === this.offset + 249) {
      this.hero = 'ilya';
    }
    if (this.x === this.offset + 430) {
      this.hero = 'denis';
    }
  }
  render(time) {
    this.ctx.drawImage(
      this.imgs['choose-players'],
      this.offset,
      0
    );
    this.ctx.drawImage(this.imgs['gold'], this.x, this.y);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = '22px Arial';
    this.ctx.fillText('Нажмите пробел для выбора', this.offset + 200, 600);

    if (this.status === true) {
      return 'createHero';
    } else {
      return 'choose';
    }
  }
}
export default ChooseMenu;

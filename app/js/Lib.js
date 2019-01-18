import Scene from './Scene.js';
class Lib extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
    this.assets = [
      { name: 'orc', path: '../assets/orc.png' },
      { name: 'vova', path: '../assets/vova.png' },
      { name: 'ilya', path: '../assets/ilya.png' },
      { name: 'denis', path: '../assets/denis.png' },
      { name: 'sceleton', path: '../assets/sceleton.png' },
      { name: 'bg', path: '../assets/tiles.png' },
      { name: 'title', path: '../assets/title.png' },
      { name: 'gold', path: '../assets/gold.png' },
      { name: 'choose-players', path: '../assets/choose-players.png' }
    ];
    this.total = this.assets.length;
    this.loaded = 0;
    this.status = 'loading';
    this.loaded_at = 0;
    for (let i = 0; i < this.total; i++) {
      let img = new Image();
      img.onload = () => {
        this.loaded++;
      };
      img.src = this.assets[i].path;
      screen.imgs[this.assets[i].name] = img;
    }
  }

  render(time) {
    if (this.status == 'loading') {
      if (this.loaded == this.total) {
        this.status = 'loaded';
        this.loaded_at = time;
      }
      this.ctx.fillStyle = '#000000';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = '22px Georgia';
      this.ctx.fillText(`Loading ${this.loaded}/${this.total}`, 50, 70);
      return 'lib';
    }

    if (this.status == 'loaded') {
      if (time - this.loaded_at > 1000) {
        return 'menu';
      }
      return 'lib';
    }
  }
}
export default Lib;

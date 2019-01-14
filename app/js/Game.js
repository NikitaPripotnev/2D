import Scene from './Scene.js';
import Camera from './Camera.js';
import Player from './Player.js';
import Sound from './Sound.js';

class Game extends Scene {
  constructor(screen, controls) {
    super(screen, controls);
    this.camera = new Camera(screen, controls, 0, 0, this);
    this.player = new Player(100, -64, this);
    this.monster = new Player(896, 128, this);
    this.monster.type = 'monster';
    this.monster.status = 'walking';
    this.sounds = {};
    this.sounds['arrow'] = new Sound('assets/arrow.wav');
    this.sounds['sword'] = new Sound('assets/sword.wav');

    this.map = [
      [28, 28, 28, 28, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 25, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 11, 12, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 10, 0, 0, 0, 0, 13, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 20, 21, 22, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 29, 30, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 15, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 25, 0, 0, 0, 0, 0, 11, 12, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.tiles = [
      { j: 0, i: 0, walk: true }, //0 - grass
      { j: 1, i: 0, walk: false }, //1 - left top tree width
      { j: 2, i: 0, walk: false }, //2 - left top tree width
      { j: 3, i: 0, walk: false }, //3 - left top tree height
      { j: 4, i: 0, walk: false }, //4 - right top tree height
      { j: 5, i: 0, walk: false }, //5 - plant1
      { j: 6, i: 0, walk: false }, //6 - top wall
      { j: 7, i: 0, walk: false }, //7 - top wall with r end
      { j: 8, i: 0, walk: false }, //8 - top wall with l end
      { j: 9, i: 0, walk: false }, //9 - wall with r end
      { j: 0, i: 1, walk: false }, //10 - water
      { j: 1, i: 1, walk: false }, //11 - bottom-left tree width
      { j: 2, i: 1, walk: true }, //12 - bottom-right tree width
      { j: 3, i: 1, walk: false }, //13 - left tree height
      { j: 4, i: 1, walk: true }, //14 - right tree height
      { j: 5, i: 1, walk: true }, //15 - plant2
      { j: 6, i: 1, walk: true }, //16 - stairs
      { j: 7, i: 1, walk: true }, //17 - sand in grass b-r
      { j: 8, i: 1, walk: true }, //18 - sand in grass b
      { j: 9, i: 1, walk: true }, //19 - sand in grass b-l
      { j: 0, i: 2, walk: false }, //20 - left-top water
      { j: 1, i: 2, walk: false }, //21 - top water
      { j: 2, i: 2, walk: false }, //22 - right-top water
      { j: 3, i: 2, walk: true }, //23 - bottom left tree height
      { j: 4, i: 2, walk: true }, //24 - bottom right tree height
      { j: 5, i: 2, walk: true }, //25 - plant3
      { j: 6, i: 2, walk: true }, //26 - zero
      { j: 7, i: 2, walk: true }, //27 - zero
      { j: 8, i: 2, walk: true }, //28 - bridge
      { j: 0, i: 3, walk: true }, //29 - bottom-left water
      { j: 1, i: 3, walk: true }, //30 - bottom-left water
      { j: 2, i: 3, walk: true } //31 - bottom-right water
    ];

    this.arrows = [];
  }

  render_bg(time) {
    let start_col = Math.floor(this.camera.x / 64);
    let start_row = Math.floor(this.camera.y / 64);

    for (let i = start_row; i < start_row + 11; i++) {
      for (let j = start_col; j < start_col + 11; j++) {
        if (j < 20 && i < 20) {
          let tile = this.tiles[this.map[i][j]];
          this.ctx.drawImage(
            this.imgs['bg'],
            tile.j * 64,
            tile.i * 64,
            64,
            64,
            j * 64 - this.camera.x,
            i * 64 - this.camera.y,
            64,
            64
          );
        }
      }
    }
  }

  render_sprites(time) {
    this.player.update(time);
    this.monster.update(time);
    this.camera.update(time);

    //render monster
    this.ctx.drawImage(
      this.imgs['orc'],
      this.monster.j * 64,
      this.monster.i * 64,
      64,
      64,
      this.monster.x - this.camera.x,
      this.monster.y - this.camera.y,
      64,
      64
    );

    //render player
    this.ctx.drawImage(
      this.imgs['player'],
      this.player.j * 64,
      this.player.i * 64,
      64,
      64,
      this.player.x - this.camera.x,
      this.player.y - this.camera.y,
      64,
      64
    );

    //render arows
    for (let i = this.arrows.length; i > 0; i--) {
      if (this.arrows[i - 1].active === false) this.arrows.splice(i - 1, 1);
    }

    for (let i = 0; i < this.arrows.length; i++) {
      this.arrows[i].update(time);
      this.ctx.drawImage(
        this.imgs['player'],
        this.arrows[i].j * 64,
        this.arrows[i].i * 64,
        64,
        64,
        this.arrows[i].x - this.camera.x,
        this.arrows[i].y - this.camera.y,
        64,
        64
      );
    }
  }

  render(time) {
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.render_bg(time);
    this.render_sprites(time);

    if (this.monster.dead && this.player.x > 1152 && this.player.y > 1100) {
      return 'win';
    } else {
      return 'game';
    }
  }
}
export default Game;

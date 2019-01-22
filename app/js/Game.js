import Scene from './Scene.js';
import Camera from './Camera.js';
import Player from './Player.js';
import Sound from './Sound.js';
import Level1 from './levels/Level1.js';

class Game extends Scene {
  constructor(screen, controls, hero) {
    super(screen, controls);
    this.camera = new Camera(screen, controls, 0, 0, this);
    this.sizeX = Math.floor(screen.canvas.width / screen.cell);
    this.sizeY = Math.floor(screen.canvas.height / screen.cell);
    this.size_players = 64;
    this.cell = screen.cell;
    this.hero = hero;
    this.player = new Player(100, -64, this);
    this.monster = new Player(896, 128, this);
    this.monster.type = 'monster';
    this.monster.status = 'walking';
    this.sounds = {};
    this.sounds['arrow'] = new Sound('../assets/sounds/arrow.wav');
    this.sounds['sword'] = new Sound('../assets/sounds/sword.wav');
    this.level = new Level1();
    this.arrows = [];
  }

  render_bg(time) {
    let start_col = Math.floor(this.camera.x / this.cell);
    let start_row = Math.floor(this.camera.y / this.cell);
    for (let i = start_row; i < start_row + this.sizeY + 1; i++) {
      for (let j = start_col; j < start_col + this.sizeX + 1; j++) {
        if (j < this.level.map[0].length && i < this.level.map.length) {
          let tile = this.level.tiles[this.level.map[i][j]];
          this.ctx.drawImage(
            this.imgs['bg'],
            tile.j * this.cell,
            tile.i * this.cell,
            this.cell,
            this.cell,
            j * this.cell - this.camera.x,
            i * this.cell - this.camera.y,
            this.cell,
            this.cell
          );
        }
      }
    }
  }

  render_bg_overflow(time) {
    let start_col = Math.floor(this.camera.x / this.cell);
    let start_row = Math.floor(this.camera.y / this.cell);
    for (let i = start_row; i < start_row + this.sizeY + 1; i++) {
      for (let j = start_col; j < start_col + this.sizeX + 1; j++) {
        if (j < this.level.map[0].length && i < this.level.map.length) {
          let tile = this.level.tiles[this.level.map[i][j]];
          this.ctx.drawImage(
            this.imgs['bg-overflow'],
            tile.j * this.cell,
            tile.i * this.cell,
            this.cell,
            this.cell,
            j * this.cell - this.camera.x,
            i * this.cell - this.camera.y,
            this.cell,
            this.cell
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
      this.monster.j * this.size_players,
      this.monster.i * this.size_players,
      this.size_players,
      this.size_players,
      this.monster.x - this.camera.x,
      this.monster.y - this.camera.y,
      this.size_players,
      this.size_players
    );

    //render player
    this.ctx.drawImage(
      this.imgs[this.hero],
      this.player.j * this.size_players,
      this.player.i * this.size_players,
      this.size_players,
      this.size_players,
      this.player.x - this.camera.x,
      this.player.y - this.camera.y,
      this.size_players,
      this.size_players
    );

    //render arows
    for (let i = this.arrows.length; i > 0; i--) {
      if (this.arrows[i - 1].active === false) this.arrows.splice(i - 1, 1);
    }

    for (let i = 0; i < this.arrows.length; i++) {
      this.arrows[i].update(time);
      this.ctx.drawImage(
        this.imgs[this.hero],
        this.arrows[i].j * this.size_players,
        this.arrows[i].i * this.size_players,
        this.size_players,
        this.size_players,
        this.arrows[i].x - this.camera.x,
        this.arrows[i].y - this.camera.y,
        this.size_players,
        this.size_players
      );
    }
  }

  render(time) {
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.render_bg(time);
    this.render_sprites(time);
    this.render_bg_overflow(time);
    console.log('x: ' + this.player.x, 'y: ' + this.player.y);

    if (this.monster.dead && this.player.x > 1034 && this.player.y > 1142 && this.player.x < 1080 && this.player.y < 1192) {
      return 'win';
    } else {
      return 'game';
    }
  }
}
export default Game;

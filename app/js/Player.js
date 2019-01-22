import Arrow from './Arrow.js';

class Player {
  constructor(x, y, scene) {
    this.x = x;
    this.y = y;
    this.i = 0;
    this.j = 0;
    this.type = 'player';
    this.scene = scene;
    this.dead = false;
    this.lastTime = 0;
    this.speed = Math.floor(this.scene.cell * 0.07);
    this.direction = 'down';
    this.status = 'start';
    this.change_animation = true;
    this.current_animation_frame = 0;
    this.current_action = this.move_down;
    this.got_obstacle = false;
    this.offsetX1 = Math.floor(this.scene.cell * 0.3);
    this.offsetX2 = Math.floor(this.scene.cell * 0.3);
    this.offsetY1 = Math.floor(this.scene.cell * 0.8);
    this.offsetY2 = Math.floor(this.scene.cell * 0.1);
    this.sprites = {
      standing: {
        right: {
          total: 1,
          frames: [[0, 3]]
        },
        left: {
          total: 1,
          frames: [[0, 1]]
        },
        up: {
          total: 1,
          frames: [[0, 0]]
        },
        down: {
          total: 1,
          frames: [[0, 2]]
        }
      },
      walking: {
        right: {
          total: 9,
          frames: [
            [0, 11],
            [1, 11],
            [2, 11],
            [3, 11],
            [4, 11],
            [5, 11],
            [6, 11],
            [7, 11],
            [8, 11]
          ]
        },
        left: {
          total: 9,
          frames: [
            [0, 9],
            [1, 9],
            [2, 9],
            [3, 9],
            [4, 9],
            [5, 9],
            [6, 9],
            [7, 9],
            [8, 9]
          ]
        },
        up: {
          total: 9,
          frames: [
            [0, 8],
            [1, 8],
            [2, 8],
            [3, 8],
            [4, 8],
            [5, 8],
            [6, 8],
            [7, 8],
            [8, 8]
          ]
        },
        down: {
          total: 9,
          frames: [
            [0, 10],
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 10],
            [5, 10],
            [6, 10],
            [7, 10],
            [8, 10]
          ]
        }
      },
      start: {
        down: {
          total: 9,
          frames: [
            [0, 10],
            [1, 10],
            [2, 10],
            [3, 10],
            [4, 10],
            [5, 10],
            [6, 10],
            [7, 10],
            [8, 10]
          ]
        }
      },
      dead: {
        down: {
          total: 6,
          frames: [[0, 20], [1, 20], [2, 20], [3, 20], [4, 20], [5, 20]]
        }
      },
      fire: {
        right: {
          total: 13,
          frames: [
            [0, 19],
            [1, 19],
            [2, 19],
            [3, 19],
            [4, 19],
            [5, 19],
            [6, 19],
            [7, 19],
            [8, 19],
            [9, 19],
            [10, 19],
            [11, 19],
            [12, 19]
          ]
        },
        left: {
          total: 13,
          frames: [
            [0, 17],
            [1, 17],
            [2, 17],
            [3, 17],
            [4, 17],
            [5, 17],
            [6, 17],
            [7, 17],
            [8, 17],
            [9, 17],
            [10, 17],
            [11, 17],
            [12, 17]
          ]
        },
        up: {
          total: 13,
          frames: [
            [0, 16],
            [1, 16],
            [2, 16],
            [3, 16],
            [4, 16],
            [5, 16],
            [6, 16],
            [7, 16],
            [8, 16],
            [9, 16],
            [10, 16],
            [11, 16],
            [12, 16]
          ]
        },
        down: {
          total: 13,
          frames: [
            [0, 18],
            [1, 18],
            [2, 18],
            [3, 18],
            [4, 18],
            [5, 18],
            [6, 18],
            [7, 18],
            [8, 18],
            [9, 18],
            [10, 18],
            [11, 18],
            [12, 18]
          ]
        }
      },
      attack: {
        right: {
          total: 6,
          frames: [[0, 15], [1, 15], [2, 15], [3, 15], [4, 15], [5, 15]]
        },
        left: {
          total: 6,
          frames: [[0, 13], [1, 13], [2, 13], [3, 13], [4, 13], [5, 13]]
        },
        up: {
          total: 6,
          frames: [[0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [5, 12]]
        },
        down: {
          total: 6,
          frames: [[0, 14], [1, 14], [2, 14], [3, 14], [4, 14], [5, 14]]
        }
      }
    };
  }

  animate() {
    let frame = this.sprites[this.status][this.direction];

    if (this.dead) {
      return true;
    }

    if (this.change_animation) {
      this.change_animation = false;
      this.current_animation_frame = 0;
    } else {
      if (frame.total > 1) {
        this.current_animation_frame++;
        if (this.current_animation_frame + 1 == frame.total) {
          if (
            this.status == 'start' ||
            this.status == 'walking' ||
            this.status == 'attack'
          ) {
            this.current_animation_frame = 0;
          }

          if (this.status == 'dead') {
            this.current_animation_frame = 5;
            this.dead = true;
          }

          if (this.status == 'fire') {
            this.current_animation_frame = 0;
            this.set_action(this.direction, 'standing');
            this.scene.arrows.push(
              new Arrow(this.x, this.y, this.direction, this.scene)
            );
            this.scene.sounds['arrow'].play();
          }
        }
      }
    }

    this.j = frame.frames[this.current_animation_frame][0];
    this.i = frame.frames[this.current_animation_frame][1];
  }

  set_action(direction, status) {
    if (this.direction != direction) {
      this.direction = direction;
      this.change_animation = true;
    }

    if (this.status != status) {
      this.status = status;
      this.change_animation = true;
    }
  }

  is_walkable(x, y) {
    if (x < 0) {
      this.got_obstacle = true;
      return false;
    }
    if (y < 0) {
      this.got_obstacle = true;
      return false;
    }

    let x1 = x;
    let x2 = x + this.scene.cell;
    let y1 = y;
    let y2 = y + this.scene.cell;

    x1 = x1 + this.offsetX1;
    x2 = x2 - this.offsetX2;
    y1 = y1 + this.offsetY1;
    y2 = y2 - this.offsetY2;

    let j1 = Math.floor(x1 / this.scene.cell);
    let j2 = Math.floor(x2 / this.scene.cell);
    let i1 = Math.floor(y1 / this.scene.cell);
    let i2 = Math.floor(y2 / this.scene.cell);

    let walkable = true;

    for (let i = i1; i <= i2; i++) {
      for (let j = j1; j <= j2; j++) {
        if (!this.scene.level.tiles[this.scene.level.map[i][j]].walk) {
          walkable = false;
        }
      }
    }

    this.got_obstacle = !walkable;
    return walkable;
  }

  move_left() {
    this.set_action('left', 'walking');

    if (this.is_walkable(this.x - this.speed, this.y)) {
      this.x = this.x - this.speed;
      if (this.x < 0) {
        this.x = 0;
      }
    }
  }

  move_right() {
    this.set_action('right', 'walking');
    if (this.is_walkable(this.x + this.speed, this.y)) {
      this.x = this.x + this.speed;
      if (this.x > 1216) {
        this.x = 1216;
      }
    }
  }

  move_up() {
    this.set_action('up', 'walking');
    if (this.is_walkable(this.x, this.y - this.speed)) {
      this.y = this.y - this.speed;
      if (this.y < 0) {
        this.y = 0;
      }
    }
  }

  move_down() {
    this.set_action('down', 'walking');
    if (this.is_walkable(this.x, this.y + this.speed)) {
      this.y = this.y + this.speed;
      if (this.y > 1216) {
        this.y = 1216;
      }
    }
  }

  fire() {
    this.set_action(this.direction, 'fire');
  }

  attack() {
    this.set_action(this.direction, 'attack');
  }

  start() {
    if (this.y < 100) {
      this.y = this.y + this.speed;
    } else {
      this.set_action('down', 'standing');
    }
  }

  update(time) {
    this.animate();

    if (this.status == 'start') {
      this.start();
      return true;
    }

    if (this.status == 'fire') {
      return true;
    }

    if (this.status == 'dead') {
      return true;
    }

    if (this.type == 'monster') {
      return this.monster_ai_controll(time);
    }

    if (this.scene.controls.states['fire']) {
      this.fire();
      return true;
    }

    if (this.scene.controls.states['left']) {
      this.move_left();
      return true;
    }

    if (this.scene.controls.states['right']) {
      this.move_right();
      return true;
    }

    if (this.scene.controls.states['forward']) {
      this.move_up();
      return true;
    }

    if (this.scene.controls.states['backward']) {
      this.move_down();
      return true;
    }

    this.set_action(this.direction, 'standing');
  }

  monster_ai_controll(time) {
    if (
      this.scene.player.dead == false &&
      (this.scene.player.x < this.x + this.scene.cell &&
        this.scene.player.x + this.scene.cell > this.x &&
        this.scene.player.y < this.y + this.scene.cell &&
        this.scene.cell + this.scene.player.y > this.y)
    ) {
      if (this.x > this.scene.player.x) {
        this.direction = 'left';
        this.y = this.scene.player.y;
        this.x = this.scene.player.x + this.scene.cell / 2;
      } else {
        this.direction = 'right';
        this.y = this.scene.player.y;
        this.x = this.scene.player.x - this.scene.cell / 2;
      }
      this.attack();
      this.scene.sounds['sword'].play();
      this.scene.player.set_action('down', 'dead');
      return true;
    }

    if (this.got_obstacle || time - this.lastTime > 3000) {
      var actions = [
        this.move_left,
        this.move_right,
        this.move_up,
        this.move_down
      ];
      this.current_action = actions[Math.floor(Math.random() * actions.length)];
      this.lastTime = time;
    }

    this.current_action();

    return true;
  }
}

export default Player;

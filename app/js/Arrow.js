class Arrow {
  constructor(x, y, direction, scene) {
    this.active = true;
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.speed = Math.floor(this.scene.cell * 0.1);
    this.direction = direction;
    this.sprites = {
      right: [10, 0],
      left: [9, 0],
      up: [11, 0],
      down: [12, 0]
    };
    this.j = this.sprites[direction][0];
    this.i = this.sprites[direction][1];
  }

  update(time) {
    this.move();
  }

  move() {
    var new_x = this.x;
    var new_y = this.y;
    if (this.direction == 'right') new_x += this.speed;
    if (this.direction == 'left') new_x -= this.speed;
    if (this.direction == 'up') new_y -= this.speed;
    if (this.direction == 'down') new_y += this.speed;

    if (this.is_hit(new_x, new_y)) {
      this.active = false;
      return true;
    } else {
      this.x = new_x;
      this.y = new_y;
    }
  }

  is_hit(x, y) {
    let pos_x = x;
    let pos_y = y;
    if (this.direction == 'right') {
      pos_x += this.scene.cell;
      pos_y += this.scene.cell / 2;
    }
    if (this.direction == 'left') {
      pos_y += this.scene.cell / 2;
    }
    if (this.direction == 'up') {
      pos_x += this.scene.cell / 2;
    }
    if (this.direction == 'down') {
      pos_x += this.scene.cell / 2;
      pos_y += this.scene.cell;
    }

    if (pos_x < 0 || pos_x > 1280 || pos_y < 0 || pos_y > 1280) {
      return true;
    }

    let j = Math.floor(pos_x / this.scene.cell);
    let i = Math.floor(pos_y / this.scene.cell);

    if (
      pos_x > this.scene.monster.x &&
      pos_x < this.scene.monster.x + this.scene.cell &&
      pos_y > this.scene.monster.y &&
      pos_y < this.scene.monster.y + this.scene.cell
    ) {
      this.scene.monster.set_action('down', 'dead');
      return true;
    }
    return !this.scene.tiles[this.scene.map[i][j]].walk;
  }
}

export default Arrow;

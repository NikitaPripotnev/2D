class Arrow{
  constructor(x, y, direction, scene) {
    this.active = true;
    this.x = x;
    this.y = y;
    this.scene = scene;
    this.speed = 10;
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
  
  update (time) {
    this.move();
  }
  
  move () {
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
  
  is_hit (x, y) {
    let pos_x = x;
    let pos_y = y;
    if (this.direction == 'right') {
      pos_x += 64;
      pos_y += 32;
    }
    if (this.direction == 'left') {
      pos_y += 32;
    }
    if (this.direction == 'up') {
      pos_x += 32;
    }
    if (this.direction == 'down') {
      pos_x += 32;
      pos_y += 64;
    }
  
    if (pos_x < 0 || pos_x > 1280 || pos_y < 0 || pos_y > 1280) {
      return true;
    }
  
    let j = Math.floor(pos_x / 64);
    let i = Math.floor(pos_y / 64);
  
    if (
      pos_x > this.scene.monster.x &&
      pos_x < this.scene.monster.x + 64 &&
      pos_y > this.scene.monster.y &&
      pos_y < this.scene.monster.y + 64
    ) {
      this.scene.monster.set_action('down', 'dead');
      return true;
    }
    return !this.scene.tiles[this.scene.map[i][j]].walk;
  }
}

export default Arrow;

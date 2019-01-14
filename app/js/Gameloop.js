class Gameloop {
  constructor() {
    this.frame = this.frame.bind(this);
    this.lastTime = 0;
    this.callback = function() {};
  }
  start (callback) {
    this.callback = callback;
    requestAnimationFrame(this.frame);
  }
  
  frame (time) {
    if (time - this.lastTime > 30) {
      this.lastTime = time;
      this.callback(time);
    }
    requestAnimationFrame(this.frame);
  }
  
}
export default Gameloop;

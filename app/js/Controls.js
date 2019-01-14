class Controls {
  constructor() {
    this.codes = {
      37: 'left',
      39: 'right',
      38: 'forward',
      40: 'backward',
      32: 'fire'
    };
    this.states = {
      left: false,
      right: false,
      forward: false,
      backward: false,
      fire: false
    };
    document.addEventListener(
      'keydown',
      event => this.onKey(true, event),
      false
    );
    document.addEventListener(
      'keyup',
      event => this.onKey(false, event),
      false
    );
  }
  onKey(val, e) {
    console.log(val, e);
    let state = this.codes[e.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    e.preventDefault && e.preventDefault();
    e.stopPropagation && e.stopPropagation();
  }
}

export default Controls;

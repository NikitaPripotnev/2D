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
  onKey(val, event) {
    let state = this.codes[event.keyCode];
    if (typeof state === 'undefined') return;
    this.states[state] = val;
    event.preventDefault && event.preventDefault();
    event.stopPropagation && event.stopPropagation();
  }
}

export default Controls;

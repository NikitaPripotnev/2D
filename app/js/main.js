import Lib from './Lib.js';
import Controls from './Controls.js';
import Win from './Win.js';
import Game from './Game.js';
import Menu from './Menu.js';
import Gameloop from './Gameloop.js';
import ChoosePlayer from './ChooseMenu.js';

const controls = new Controls();
let screen = {};
screen.canvas = document.getElementById('screen');
screen.canvas.width = 640;
screen.canvas.height = 640;
screen.imgs = {};

let loop = new Gameloop();

let scenes = {};
scenes['lib'] = new Lib(screen, controls);
scenes['choose'] = new ChoosePlayer(screen, controls);
scenes['menu'] = new Menu(screen, controls);
scenes['win'] = new Win(screen, controls);

let current_scene = 'lib';

loop.start(function frame(time) {
  if (current_scene === 'createHero') {
    scenes['game'] = new Game(screen, controls, scenes['choose'].hero);
    current_scene = 'game';
  }
  current_scene = scenes[current_scene].render(time);
});

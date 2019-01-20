import Lib from './Lib.js';
import Sound from './Sound.js';
import Controls from './Controls.js';
import Win from './Win.js';
import Game from './Game.js';
import Menu from './Menu.js';
import Gameloop from './Gameloop.js';
import ChooseMenu from './ChooseMenu.js';

const controls = new Controls();
let screen = {};
screen.canvas = document.getElementById('screen');
screen.cell = 64;
screen.canvas.width = screen.cell*Math.floor(window.screen.width/screen.cell);
screen.canvas.height = 0.85 * screen.cell*Math.floor(window.screen.height/screen.cell);
screen.imgs = {};
console.log(screen, 'screen in main');

let loop = new Gameloop();
let scenes = {};
scenes['lib'] = new Lib(screen, controls);
let soundMenu = new Sound('../assets/sounds/menu.mp3');
soundMenu.stop();
soundMenu.play();
scenes['menu'] = new Menu(screen, controls);
scenes['win'] = new Win(screen, controls);

let current_scene = 'lib';

loop.start(function frame(time) {
  if (current_scene === 'createHero') {
    scenes['game'] = new Game(screen, controls, scenes['choose'].hero);
    current_scene = 'game';
  }
  if (current_scene === 'afterMenu') {
    soundMenu.stop();
    scenes['choose'] = new ChooseMenu(screen, controls);
    current_scene = 'choose';
  }
  current_scene = scenes[current_scene].render(time);
});

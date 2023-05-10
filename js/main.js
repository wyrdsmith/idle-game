import { Clock } from 'entities/clock.js';
import { Player } from 'entities/player.js';

var gameclock = new Clock();
var necromancer = new Player();

function start() {
  $('#start').hide();
  $('#game').show();
  gameclock.start();
}

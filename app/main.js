import Observer from './entities/observer.js';
import Clock from './entities/clock.js';
var gameclock = new Clock();

import Player from './entities/player.js';
var necromancer = new Player(gameclock);

import Enemy from './entities/enemy.js';
import enemies from './enemies/all.js';

necromancer.addFoe(new Enemy(gameclock, enemies[0]));

import Spell from './entities/spell.js';
import allSpells from './spells/all.js';

$('#gameStart').click(function () {
  $('#start').hide();
  $('#game').show();

  for (let spell in allSpells) {
    necromancer.addSpell(allSpells[spell]);
  }

  gameclock.start();
});

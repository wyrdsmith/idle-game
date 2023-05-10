import Observer from './entities/observer.js';
import Clock from './entities/clock.js';
export var gameclock = new Clock();

import Player from './entities/player.js';
export var necromancer = new Player(gameclock);

import Enemy from './entities/enemy.js';
import enemies from './enemies/all.js';

export var foe = new Enemy(gameclock, enemies[0]);

import Spell from './entities/spell.js';
import spells from './spells/all.js';

for (let spell in spells) {
  necromancer.addSpell(spells[spell]);
}

var playerStats = new Observer(gameclock, () => {
  $('#health').html(Math.round(necromancer.getHealth() * 100) / 100);
  $('#mana').html(Math.round(necromancer.getMana() * 100) / 100);
  $('#gold').html(Math.round(necromancer.getGold() * 100) / 100);
  $('#minions').html(necromancer.printMinions());
});

var enemyStats = new Observer(gameclock, () => {
  $('#enemyName').html(foe.name + ': ');
  $('#enemyHealth').html(foe.getHealth() + ' HP');
});

export function start() {
  $('#start').hide();
  $('#game').show();
  gameclock.start();
}

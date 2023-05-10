import Observer from './entities/observer.js';
import Clock from './entities/clock.js';
var gameclock = new Clock();

import Player from './entities/player.js';
var necromancer = new Player(gameclock);

import Enemy from './entities/enemy.js';
import enemies from './enemies/all.js';

necromancer.addFoe(new Enemy(gameclock, enemies[0]));

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
  $('#enemyName').html(necromancer.foe.name + ': ');
  $('#enemyHealth').html(necromancer.foe.getHealth() + ' HP');
});

$('#gameStart').click(function () {
  $('#start').hide();
  $('#game').show();

  for (let spell in necromancer.spells) {
    $('#spells').append(
      '<button class="spell" spell-name="' +
        necromancer.spells[spell].name +
        '">Cast ' +
        necromancer.spells[spell].name +
        '</button>'
    );
    $('#spells .spell[spell-name="' + spell + '"]').click(function () {
      necromancer.castSpell($(this).attr('spell-name'));
    });
  }

  $('#manaStone').click(function () {
    necromancer.modMana(1);
  });

  gameclock.start();
});

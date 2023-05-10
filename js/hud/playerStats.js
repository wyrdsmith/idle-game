var playerStats = new Observer(gameclock, () => {
  $('#health').html(Math.round(necromancer.getHealth() * 100) / 100);
  $('#mana').html(Math.round(necromancer.getMana() * 100) / 100);
  $('#gold').html(Math.round(necromancer.getGold() * 100) / 100);
  $('#minions').html(necromancer.printMinions());
});

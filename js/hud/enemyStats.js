var enemyStats = new Observer(gameclock, () => {
  $('#enemyName').html(foe.name + ': ');
  $('#enemyHealth').html(foe.getHealth() + ' HP');
});

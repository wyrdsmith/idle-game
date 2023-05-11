export default {
  target: 'foe',
  name: 'Fireball',
  type: 'Evocation',
  details:
    'Conjures a fireball and hurls it at your foe. Damage based on maximum mana.',
  manaCost: 25,
  healthCost: 0,
  goldCost: 0,
  effect: function () {
    this.caster.foe.loseHealth(this.caster.getMaxMana() / 10);
    this.caster.printFoeStats();
  },
};

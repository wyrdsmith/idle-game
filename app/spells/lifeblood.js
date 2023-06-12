export default {
  target: 'caster',
  name: 'Lifeblood',
  type: 'Evocation',
  details: 'Use the lifeblood of your enemies to heal your wounds.',
  manaCost: 10,
  healthCost: 0,
  goldCost: 0,
  effect: function () {
    this.caster.modHealth(10);
    this.caster.printStats();
  },
};

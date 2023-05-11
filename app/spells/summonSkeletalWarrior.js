import Minion from '../entities/minion.js';

export default {
  target: 'foe',
  name: 'Summon Skeletal Warrior',
  type: 'Summons',
  details:
    'Summons the lowest level of undead to fight for you. Deals damage to your enemies at a rate of 1 damage per hit.',
  manaCost: 30,
  healthCost: 10,
  effect: function () {
    this.caster.addMinion(
      new Minion({
        name: 'Skeletal Warrior',
        type: 'skeleton',
        role: 'warrior',
        resource: 'health',
        boost: 1,
      })
    );
  },
};

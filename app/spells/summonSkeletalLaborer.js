import Minion from '../entities/minion.js';

export default {
  target: 'caster',
  name: 'Summon Skeletal Laborer',
  type: 'Summons',
  details:
    'Summons the lowest level of undead to toil for you. Increases the rate of gold earned by 1 per skeletal laborer summoned.',
  manaCost: 25,
  healthCost: 5,
  effect: function () {
    this.caster.addMinion(
      new Minion({
        name: 'Skeletal Laborer',
        type: 'skeleton',
        role: 'labor',
        resource: 'gold',
        means: 'mining',
        boost: 1,
      })
    );
  },
};

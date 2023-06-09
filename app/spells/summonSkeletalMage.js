import Minion from '../entities/minion.js';

export default {
  target: 'caster',
  name: 'Summon Skeletal Mage',
  type: 'Summons',
  details:
    'Summons the lowest level of undead spellcaster to toil for you. Increases the rate of mana earned by clicking the mana stone by 1 per Skeletal Mage.',
  manaCost: 15,
  healthCost: 15,
  goldCost: 15,
  effect: function () {
    this.caster.addMinion(
      new Minion({
        name: 'Skeletal Mage',
        type: 'skeleton',
        role: 'labor',
        resource: 'mana',
        means: 'recharge',
        boost: 1,
      })
    );
  },
};

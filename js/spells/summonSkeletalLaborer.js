import Minion from '../entities/minion.js';

export default {
  target: 'caster',
  name: 'Summon Skeletal Laborer',
  details:
    'Summons the lowest level of undead to toil for you. Increases the rate of gold earned by 0.01 per skeletal laborer summoned.',
  manaCost: 25,
  healthCost: 5,
  effect: function () {
    this.caster.minions.push(
      new Minion({
        name: 'Skeletal Laborer',
        type: 'skeleton',
        role: 'labor',
        resource: 'gold',
        boost: 0.01,
      })
    );
    this.target.updateMinionGoldRegenRateBoost();
  },
};

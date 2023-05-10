export default {
  target: 'foe',
  name: 'Summon Skeletal Warrior',
  details:
    'Summons the lowest level of undead to fight for you. Deals damage to your enemies at a rate of 1 damage per hit.',
  manaCost: 30,
  healthCost: 10,
  effect: function () {
    this.caster.minions.push(
      new Minion({
        name: 'Skeletal Warrior',
        type: 'skeleton',
        role: 'warrior',
        damage: 1,
      })
    );
    this.target.updateHealthLossRate();
  },
};

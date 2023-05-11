export default class Spell {
  constructor(details) {
    this.caster = details.caster || null;
    this.target = details.target || null;
    this.name = details.name;
    this.description = details.description;
    this.manaCost = details.manaCost || 0;
    this.healthCost = details.healthCost || 0;
    this.goldCost = details.goldCost || 0;
    this.effect = details.effect;
  }

  cast() {
    if (
      this.caster.getMana() >= this.manaCost &&
      this.caster.getHealth() > this.healthCost &&
      this.caster.getGold() >= this.goldCost
    ) {
      this.caster.modMana(-1 * this.manaCost);
      this.caster.modHealth(-1 * this.healthCost);
      this.caster.modGold(-1 * this.goldCost);
      this.effect();
    }
  }

  setCaster(caster) {
    this.caster = caster;
  }

  setTarget(target) {
    this.target = target;
  }
}

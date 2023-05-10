class Spell {
	constructor(details) {
		this.caster = details.caster;
		this.target = details.target;
		this.name = details.name;
		this.description = details.description;
		this.manaCost = details.manaCost || 0;
		this.healthCost = details.healthCost || 0;
		this.effect = details.effect;
	}

	cast() {
		if (
			this.caster.getMana() >= this.manaCost &&
			this.caster.getHealth() >= this.healthCost
		) {
			this.caster.modMana(-1 * this.manaCost);
			this.caster.modHealth(-1 * this.healthCost);
			this.effect();
		}
	}
}

class Player {
	constructor() {
		this.health = 0; // The amount of health the player currently has
		this.maxHealth = 100;
		this.mana = 0; // The amount of mana the player currently has
		this.maxMana = 100;
		this.gold = 0; // The amount of gold the player currently has
		this.healthRegenRate = 1; // The amount of health per tick the player regenerates
		this.manaRegenRate = 1; // The amount of mana per tick the player regenerates
		this.goldRegenRate = 0;

		this.canRegenHealth = true;
		this.canRegenMana = true;
		this.canRegenGold = true;

		this.minions = [];
		this.minionGoldRegenRateBoost = 0;

		this.healthRegen = new Observer(() => {
			this.regenHealth();
		});
		this.manaRegen = new Observer(() => {
			this.regenMana();
		});
		this.goldRegen = new Observer(() => {
			this.regenGold();
		});
	}

	setHealth(amount) {
		this.health = amount;
	}
	getHealth() {
		return this.health;
	}
	modHealth(amount) {
		this.setHealth(this.getHealth() + amount);
	}
	regenHealth() {
		if (
			this.getCanRegenHealth() &&
			this.getHealth() < this.getMaxHealth()
		) {
			this.modHealth(this.getHealthRegenRate());
		}
	}
	setCanRegenHealth(val) {
		this.canRegenHealth = val;
	}
	getCanRegenHealth() {
		return this.canRegenHealth;
	}

	setMaxHealth(amount) {
		this.maxHealth = amount;
	}
	getMaxHealth() {
		return this.maxHealth;
	}
	modMaxHealth(amount) {
		this.setMaxHealth(this.getMaxHealth() + amount);
	}

	setMana(amount) {
		this.mana = amount;
	}
	getMana() {
		return this.mana;
	}
	modMana(amount) {
		this.setMana(this.getMana() + amount);
	}
	regenMana() {
		if (this.getCanRegenMana() && this.getMana() < this.getMaxMana()) {
			this.modMana(this.getManaRegenRate());
		}
	}
	setCanRegenMana(val) {
		this.canRegenHealth = val;
	}
	getCanRegenMana() {
		return this.canRegenMana;
	}

	setMaxMana(amount) {
		this.maxMana = amount;
	}
	getMaxMana() {
		return this.maxMana;
	}
	modMaxMana(amount) {
		this.setMaxMana(this.getMaxMana() + amount);
	}

	setGold(amount) {
		this.gold = amount;
	}
	getGold() {
		return this.gold;
	}
	modGold(amount) {
		this.setGold(this.getGold() + amount);
	}
	regenGold() {
		if (this.getCanRegenGold()) {
			this.modGold(
				this.getGoldRegenRate() + this.getMinionGoldRegenRateBoost()
			);
		}
	}
	setCanRegenGold(val) {
		this.canRegenGold = val;
	}
	getCanRegenGold() {
		return this.canRegenGold;
	}
	getMinionGoldRegenRateBoost() {
		return this.minionGoldRegenRateBoost;
	}
	setMinionGoldRegenRateBoost(amount) {
		this.minionGoldRegenRateBoost = amount;
	}
	updateMinionGoldRegenRateBoost() {
		let minions = this.minions
			? this.minions.filter(function (minion) {
					return minion.role == 'labor' && minion.resource == 'gold';
			  })
			: [];
		let boost = 0;
		if (minions.length > 0) {
			minions.map((minion) => (boost += minion.boost));
		}
		this.setMinionGoldRegenRateBoost(boost);
	}

	setHealthRegenRate(amount) {
		this.healthRegenRate = amount;
	}
	getHealthRegenRate() {
		return this.healthRegenRate;
	}
	modHealthRegenRate(amount) {
		this.setHealthRegenRate(this.getHealthRegenRate() + amount);
	}

	setManaRegenRate(amount) {
		this.manaRegen = amount;
	}
	getManaRegenRate() {
		return this.manaRegenRate;
	}
	modManaRegenRate(amount) {
		this.setManaRegenRate(this.getManaRegenRate() + amount);
	}

	setGoldRegenRate(amount) {
		this.goldRegenRate = amount;
	}
	getGoldRegenRate() {
		return this.goldRegenRate;
	}
	modGoldRegenRate(amount) {
		this.setGoldRegenRate(this.getGoldRegenRate() + amount);
	}

	getMinionCount() {
		return this.minions.length;
	}
	getMinionNames() {
		let names = [...new Set(this.minions.map((x) => x.name))];
		return names;
	}
	getMinionCountByNames() {
		let nameCounts = [];
		let names = this.getMinionNames();
		for (let name of names) {
			let c = 0;
			for (let minion of this.minions) {
				if (minion.name == name) {
					c += 1;
				}
			}
			nameCounts[name] = c;
		}
		return { names: names, nameCounts: nameCounts };
	}
	getMinionRoles() {
		let roles = [...new Set(this.minions.map((x) => x.role))];
		return roles;
	}
	getMinionCountByRoles() {
		let roleCounts = [];
		let roles = this.getMinionRoles();
		for (let role of roles) {
			let c = 0;
			for (let minion of this.minions) {
				if (minion.role == role) {
					c += 1;
				}
			}
			roleCounts[role] = c;
		}
		return { roles: roles, roleCounts: roleCounts };
	}
	printMinions() {
		let data = this.getMinionCountByNames();
		let output = '';
		for (let name of data.names) {
			output +=
				'<div class="minion">' +
				name +
				': ' +
				data.nameCounts[name] +
				'</div>';
		}
		return output;
	}
}
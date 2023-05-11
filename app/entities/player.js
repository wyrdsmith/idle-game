import Observer from './observer.js';
import Spell from './spell.js';

export default class Player {
  constructor(clock) {
    this.health = 1; // The amount of health the player currently has
    this.maxHealth = 100;
    this.mana = 0; // The amount of mana the player currently has
    this.maxMana = 100;
    this.gold = 0; // The amount of gold the player currently has
    this.healthRegenRate = 1; // The amount of health per tick the player regenerates
    this.manaRegenRate = 0; // The amount of mana per tick the player regenerates
    this.manaRechargeRate = 1; // The amount of mana earned per click of the "mana stone"
    this.goldRegenRate = 0; // The amount of gold per tick the player regenerates

    this.canRegenHealth = true;
    this.canRegenMana = true;
    this.canRegenGold = true;

    this.foe = null;
    this.updateFoeStats = null;

    this.minions = [];
    this.minionHealthRegenRateBoost = 0;
    this.minionManaRegenRateBoost = 0;
    this.minionGoldRegenRateBoost = 0;
    this.minionHealthDamageRate = 0;
    this.minionsAttackFoe = new Observer(clock, () => {
      if (this.foe) {
        this.foe.loseHealth(this.getMinionHealthDamageRate());
      }
    });

    this.spells = [];
    this.spellHealthRegenRateBoost = 0;
    this.spellManaRegenRateBoost = 0;
    this.spellGoldRegenRateBoost = 0;

    this.playerStatsContainer = $('#playerStats');
    this.playerMinionsContainer = $('#playerMinions');
    this.regen = new Observer(clock, () => {
      this.regenHealth();
      this.regenMana();
      this.regenGold();
    });
    this.updateStats = new Observer(clock, () => {
      this.printStats();
      this.printMinions();
    });
    this.manaStone = $('#manaStone');
    this.manaStone.click(() => {
      this.rechargeMana();
      this.printStats();
    });
    this.spellsContainer = $('#playerSpells');
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
  getMinionHealthRegenRateBoost() {
    return this.minionHealthRegenRateBoost;
  }
  setMinionHealthRegenRateBoost(amount) {
    this.minionHealthRegenRateBoost = amount;
  }
  getSpellHealthRegenRateBoost() {
    return this.spellHealthRegenRateBoost;
  }
  setSpellHealthRegenRateBoost(amount) {
    this.spellHealthRegenRateBoost = amount;
  }
  regenHealth() {
    if (this.getCanRegenHealth() && this.getHealth() < this.getMaxHealth()) {
      this.modHealth(
        this.getHealthRegenRate() +
          this.getMinionHealthRegenRateBoost() +
          this.getSpellHealthRegenRateBoost()
      );
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
  getMinionManaRegenRateBoost() {
    return this.minionManaRegenRateBoost;
  }
  setMinionManaRegenRateBoost(amount) {
    this.minionManaRegenRateBoost = amount;
  }
  getSpellManaRegenRateBoost() {
    return this.spellManaRegenRateBoost;
  }
  setSpellManaRegenRateBoost(amount) {
    this.spellManaRegenRateBoost = amount;
  }
  regenMana() {
    if (this.getCanRegenMana() && this.getMana() < this.getMaxMana()) {
      this.modMana(
        this.getManaRegenRate() +
          this.getMinionManaRegenRateBoost() +
          this.getSpellManaRegenRateBoost()
      );
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

  getManaRechargeRate() {
    return this.manaRechargeRate;
  }
  setManaRechargeRate(amount) {
    this.manaRechargeRate = amount;
  }
  rechargeMana() {
    if (this.canRegenMana) {
      this.modMana(this.getManaRechargeRate());
    }
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
        this.getGoldRegenRate() +
          this.getMinionGoldRegenRateBoost() +
          this.getSpellGoldRegenRateBoost()
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
  getSpellGoldRegenRateBoost() {
    return this.spellGoldRegenRateBoost;
  }
  setSpellGoldRegenRateBoost(amount) {
    this.spellGoldRegenRateBoost = amount;
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
  getMinionHealthDamageRate() {
    return this.minionHealthDamageRate;
  }
  setMinionHealthDamageRate(amount) {
    this.minionHealthDamageRate = amount;
  }
  addMinion(minion) {
    this.minions.push(minion);
    this.updateMinionRateBoosts();
    this.printMinions();
  }
  resetMinionRateBoosts() {
    this.setMinionGoldRegenRateBoost(0);
    this.setMinionManaRegenRateBoost(0);
    this.setMinionHealthRegenRateBoost(0);
    this.setMinionHealthDamageRate(0);
  }
  updateMinionRateBoosts() {
    this.resetMinionRateBoosts();
    for (let minion of this.minions) {
      this.updateMinionRateBoost(minion.role, minion.resource, minion.boost);
    }
  }
  updateMinionRateBoost(role, resource, boost) {
    switch (role) {
      case 'labor':
        switch (resource) {
          case 'health':
            this.setMinionHealthRegenRateBoost(
              this.getMinionHealthRegenRateBoost() + boost
            );
            break;
          case 'mana':
            this.setMinionManaRegenRateBoost(
              this.getMinionManaRegenRateBoost() + boost
            );
            break;
          case 'gold':
            this.setMinionGoldRegenRateBoost(
              this.getMinionGoldRegenRateBoost() + boost
            );
            break;
          default:
            break;
        }
        break;
      case 'warrior':
        switch (resource) {
          case 'health':
            this.setMinionHealthDamageRate(
              this.getMinionHealthDamageRate() + boost
            );
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  printMinions() {
    let data = this.getMinionCountByNames();
    let output = '';
    for (let name of data.names) {
      output +=
        '<div class="minion">' + name + ': ' + data.nameCounts[name] + '</div>';
    }
    this.playerMinionsContainer.html(output);
  }
  printStats() {
    let output = '';
    output +=
      '<div id="health" style="background-size:' +
      (this.health / this.maxHealth) * 100 +
      '% 100%">' +
      Math.round(this.health) +
      '/' +
      this.maxHealth +
      '</div>';
    output +=
      '<div id="mana" style="background-size:' +
      (this.mana / this.maxMana) * 100 +
      '% 100%">' +
      Math.round(this.mana) +
      '/' +
      this.maxMana +
      '</div>';
    output += '<div id="gold">' + Math.round(this.gold) + '</div>';
    this.playerStatsContainer.html(output);
  }
  printSpells() {
    let spellTypes = [];
    console.log(this.spells);
    for (let spell in this.spells) {
      if (
        spellTypes[this.spells[spell].type] == null ||
        spellTypes[this.spells[spell].type].length == 0
      ) {
        spellTypes[this.spells[spell].type] = [];
        spellTypes[this.spells[spell].type].push(
          '<h3>' + this.spells[spell].type + '</h3>'
        );
      }
      let spellButton =
        '<button class="spell" spell-name="' +
        this.spells[spell].name +
        '" title="Mana Cost: ' +
        this.spells[spell].manaCost +
        '; Health Cost: ' +
        this.spells[spell].healthCost +
        '; Gold Cost: ' +
        this.spells[spell].goldCost +
        '">Cast ' +
        this.spells[spell].name +
        '</button>';
      spellTypes[this.spells[spell].type].push(spellButton);
    }
    let output = '';
    for (let spellType in spellTypes) {
      output += '<div id="' + spellType + '" class="spellList">';
      for (let spellButton of spellTypes[spellType]) {
        output += spellButton;
      }
      output += '</div>';
    }
    this.spellsContainer.html(output);
    this.spellsContainer.children('.spell').click(($event) => {
      this.castSpell($($event.target).attr('spell-name'));
    });
  }

  addSpell(spell) {
    spell.caster = this;
    spell.target = spell.target == 'caster' ? this : this.foe;
    this.spells[spell.name] = spell;
    this.printSpells();
  }
  castSpell(spell) {
    this.spells[spell].cast();
    this.printStats();
  }

  addFoe(foe) {
    foe.target = this;
    this.foe = foe;
    this.updateFoeStats = new Observer(foe.clock, () => {
      this.printFoeStats();
    });
  }
  printFoeStats() {
    $('#enemyName').html(this.foe.name + ': ');
    $('#enemyHealth').html(this.foe.getHealth() + ' HP');
  }
}

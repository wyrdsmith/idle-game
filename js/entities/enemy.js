import Observer from '../entities/observer.js';

export default class Enemy {
  constructor(clock, enemy) {
    this.name = enemy.name;
    this.health = enemy.health;
    this.healthLossRate = 0;
    this.target = enemy.target;
    this.healthLoss = new Observer(clock, () => {
      this.loseHealth();
    });
  }

  getHealth() {
    return this.health;
  }
  modHealth(amount) {
    this.health += amount;
  }
  loseHealth() {
    this.modHealth(-1 * this.healthLossRate);
  }
  updateHealthLossRate() {
    let minions = this.target.minions
      ? this.target.minions.filter(function (minion) {
          return minion.role == 'warrior';
        })
      : [];
    let damage = 0;
    if (minions.length > 0) {
      minions.map((minion) => (damage += minion.damage));
    }
    this.modHealthLossRate(damage);
  }
  modHealthLossRate(amount) {
    this.healthLossRate += amount;
  }
}

import Observer from '../entities/observer.js';

export default class Enemy {
  constructor(clock, enemy) {
    this.clock = clock;
    this.name = enemy.name;
    this.health = enemy.health;
    this.target = enemy.target;
    this.dps = 0.01;
    this.damageIncRate = 0.01;
  }

  getHealth() {
    return this.health;
  }
  modHealth(amount) {
    this.health += amount;
  }
  loseHealth(amount) {
    this.modHealth(-1 * amount);
  }
  getDPS() {
    return this.dps;
  }
  setDPS(amount) {
    this.dps = amount;
  }
  getDamageIncRate() {
    return this.damageIncRate;
  }
  setDamageIncRate(amount) {
    this.damageIncRate = amount;
  }
  incDPS() {
    this.setDPS(this.getDPS() + this.getDamageIncRate());
  }
}

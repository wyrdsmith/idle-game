import Observer from '../entities/observer.js';

export default class Enemy {
  constructor(clock, enemy) {
    this.clock = clock;
    this.name = enemy.name;
    this.health = enemy.health;
    this.target = enemy.target;
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
}

import Spell from '../entities/spell.js';
import summonSkeletalLaborer from '../spells/summonSkeletalLaborer.js';
import summonSkeletalWarrior from '../spells/summonSkeletalWarrior.js';
import summonSkeletalMage from '../spells/summonSkeletalMage.js';
import summonSkeletalPriest from '../spells/summonSkeletalPriest.js';
import summonDraugrMage from '../spells/summonDraugrMage.js';
import fireball from '../spells/fireball.js';
import lifeblood from '../spells/lifeblood.js';

export default {
  summonSkeletalLaborer: new Spell(summonSkeletalLaborer),
  summonSkeletalWarrior: new Spell(summonSkeletalWarrior),
  summonSkeletalMage: new Spell(summonSkeletalMage),
  summonSkeletalPriest: new Spell(summonSkeletalPriest),
  summonDraugrMage: new Spell(summonDraugrMage),
  fireball: new Spell(fireball),
  lifeblood: new Spell(lifeblood),
};

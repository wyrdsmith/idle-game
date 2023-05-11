import Spell from '../entities/spell.js';
import summonSkeletalLaborer from '../spells/summonSkeletalLaborer.js';
import summonSkeletalWarrior from '../spells/summonSkeletalWarrior.js';
import summonSkeletalMage from '../spells/summonSkeletalMage.js';

export default {
  summonSkeletalLaborer: new Spell(summonSkeletalLaborer),
  summonSkeletalWarrior: new Spell(summonSkeletalWarrior),
  summonSkeletalMage: new Spell(summonSkeletalMage),
};

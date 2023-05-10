import Spell from '../entities/spell.js';
import summonSkeletalLaborer from '../spells/summonSkeletalLaborer.js';
import summonSkeletalWarrior from '../spells/summonSkeletalWarrior.js';

export default {
  'summonSkeletalLaborer': new Spell(summonSkeletalLaborer),
  'summonSkeletalWarrior': new Spell(summonSkeletalWarrior)
};
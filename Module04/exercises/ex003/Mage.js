const Character = require("./Character.js");
const Warrior = require("./Warrior.js");

class Mage extends Character {
  constructor (name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints;
  }

  attack(targetCharacter) {
    const pointsToLoose = targetCharacter.position === 'defense' ? (this.attackPoints + this.magicPoints) - (targetCharacter.defensePoints + targetCharacter.shieldPoints) : (this.attackPoints + this.magicPoints) - targetCharacter.defensePoints;
    if (pointsToLoose > 0) {
      targetCharacter.lifePoints = targetCharacter.lifePoints - pointsToLoose;
      console.log(`${this.name} has the mage class! With, ${this.attackPoints} attack points and ${this.magicPoints} magic points he/she attacks ${targetCharacter.name}, who loses ${pointsToLoose} life points!`);
      console.log('The mage is undeterred!')
      return
    }
    console.log(`${targetCharacter.name} hasn't taken any damage!`);
    return
  }

  heal(targetCharacter) {
    const pointsToHeal = this.magicPoints * 2;
    targetCharacter.lifePoints += pointsToHeal;
    console.log(`${this.name} healed ${targetCharacter.name} in ${pointsToHeal} life points!`);
  }
}

module.exports = Mage;
const Character = require("./Character.js");
const Warrior = require("./Warrior.js");

class Thief extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    super(name, lifePoints, attackPoints, defensePoints)
  }

  attack(targetCharacter) {
    const pointsToLoose = targetCharacter.position === 'defense' ? this.attackPoints - (targetCharacter.defensePoints + targetCharacter.shieldPoints) : this.attackPoints - targetCharacter.defensePoints;
    if (pointsToLoose > 0) {
      targetCharacter.lifePoints = targetCharacter.lifePoints - (pointsToLoose * 2);
      console.log(`${this.name} has the thief class, ${targetCharacter.name} took double damage for this and lost ${pointsToLoose * 2} life points!`);
      return
    }
    console.log(`${targetCharacter.name} hasn't taken any damage!`);
    return
  }
}

module.exports = Thief;
const Character = require("./Character.js")

class Warrior extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, position, shieldPoints) {
    super(name, lifePoints, attackPoints, defensePoints);

    this.shieldPoints = shieldPoints;
    this.position = position;
  }

  attack(targetCharacter) {
    if (this.position === 'attack') {
      const pointsToLoose = targetCharacter.position === 'defense' ? this.attackPoints - (targetCharacter.defensePoints + targetCharacter.shieldPoints) : this.attackPoints - targetCharacter.defensePoints;
      if (pointsToLoose > 0) {
        targetCharacter.lifePoints = targetCharacter.lifePoints - pointsToLoose;
        console.log(`${targetCharacter.name} lost ${pointsToLoose} life points!`);
        return
      }
      console.log(`${targetCharacter.name} hasn't taken any damage!`);
      return
    }
    console.log('Current position is defense! Unable to attack.')
  }

  switchPosition() {
    this.position = this.position === 'defense' ? 'attack' : 'defense';
    console.log(`Position change! Now is ${this.position}`)
  }
}

module.exports = Warrior;
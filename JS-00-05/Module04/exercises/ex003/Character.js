class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(targetCharacter) {
    const pointsToLoose = targetCharacter.position === 'defense' ? this.attackPoints - (targetCharacter.defensePoints + targetCharacter.shieldPoints) : this.attackPoints - targetCharacter.defensePoints;
    if (pointsToLoose > 0) {
      targetCharacter.lifePoints = targetCharacter.lifePoints - pointsToLoose;
      console.log(`${targetCharacter.name} lost ${pointsToLoose} life points!`);
      return
    }
    console.log(`${targetCharacter.name} hasn't taken any damage!`);
    return
  }
}

module.exports = Character;
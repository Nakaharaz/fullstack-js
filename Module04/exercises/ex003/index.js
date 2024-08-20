const Character = require("./Character.js");
const Mage = require("./Mage.js");
const Thief = require("./Thief.js");
const Warrior = require("./Warrior.js");

const black = new Character('Black', 100, 19, 15);
const sushi = new Character('Sushi', 75, 14, 8);

// Black attacks Sushi!
// black.attack(sushi)
// Sushi attacks Black!
// sushi.attack(black)

const thorfinn = new Thief('Thorffin', 50, 23, 5)

// Thorfinn, son of Thors attacks Black!
// Black took double damage because Thorfinn is a thief!
// thorfinn.attack(black)
// console.log(`Thorfinn attacks Black! Now he has ${black.lifePoints} life points!`)

const duffyDuck = new Mage('Duffy duck', 30, 5, 20, 15)

// Duffy duck attacks Sushi!
// Duffy duck is a mage, the attack force is (AP)+(MP) == 5+23
// duffyDuck.attack(sushi)
// duffyDuck.heal(black)

const kratos = new Warrior('Kratos', 150, 20, 9, 'defense', 20);
duffyDuck.attack(kratos);
kratos.switchPosition()
duffyDuck.attack(kratos);
const characters = [
  { level: 42, name: "Thrall", race: "Orc", class: "Xamã" },
  { level: 28, name: "Garrosh", race: "Orc", class: "Guerreiro" },
  { level: 35, name: "Varok", race: "Orc", class: "Guerreiro" },
  { level: 35, name: "Uther", race: "Humano", class: "Paladino" },
  { level: 26, name: "Jaina", race: "Humano", class: "Maga" },
  { level: 39, name: "Tyrande", race: "Elfo Noturno", class: "Sacerdotisa" },
  { level: 29, name: "Muradin", race: "Anão", class: "Guerreiro" },
]

// Map -> Create a new array using other array as a base

// This snippet of code replicates the funcionality of .map():

//const names = [];
// for (let i = 0; i < characters.length; i++) {
//   names.push(characters[i].name)
// }

const names = characters.map(function (character) {
  return character.name;
})

// ---------------------------------- !! --------------------------------

// Filter -> a function that filters some elements from an existing array and creates a new array as a result.

// This snippet of code replicates the funcionality of .filter():

// const orcs = [];

// for (let i = 0; i < characters.length; i++) {
//   if (characters[i].race === 'Orc') {
//     orcs.push(characters[i])
//   }
// }

const orcs = characters.filter((character) => {
  return character.race === "Orc";
})

// ---------------------------------- !! --------------------------------

// Reduce -> a function that transforms an array into something else(number, string, object)

// 13:02
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];

// Add elements to an Array -> .push()
arr.push('Enzo');

// Add elements in the start of an array -> .unshift()
arr.unshift('Enzo');

// Remove elements of an Array -> .pop()
arr.pop();

// Remove the first element of an array -> shift()
arr.shift();

// Search for an Element in an array -> .includes()
let include = arr.includes("Gandalf");

// Find out the index of an element in an array -> .indexOf()
let indexOfGandalf = arr.indexOf("Gandalf")

// Cut and concatenate an array
// Cut -> .slice() | Return a new array
const hobbits = arr.slice(0, 4);
const others = arr.slice(-4);

// Concatenate -> concat() | Return a new array
const society = hobbits.concat(others, "Boromir");
console.log(society);

// Replacement of elements
// splice() function -> 1st, where start; 2nd, how many itens exclude; 3rd, value to replace;
// The splice function returns a list of excluded elements instead a new array
// After the use of slice(), the original array will be changed
const excludedElements = society.splice(indexOfGandalf, 3, 'Galdalf! the gray');

//Iterate over the elements:
for (let i = 0; i < society.length; i++) {
  const element = society[i];
  console.log(`Element "${element}", is at ${i} position`)
}
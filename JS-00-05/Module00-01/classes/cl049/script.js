// Anonymous functions

// Functions can be a value too!!
function addition(a, b) {
  return a + b;
}

// For example: In this case, the var operation is a reference to addition
let operation = addition;

// This is an Anonymous function
operation = function (a, b) {
  return a - b;
}

helloWorld()
heyWorld()

function helloWorld() {
  console.log("Hello, World");
}

const heyWorld = function () {
  console.log("Hey, World")
}
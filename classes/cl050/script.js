//High-order functions

// This is a High-order function, because it uses a function as a parameter
function calculate(a, b, operation) {
  console.log("Performing...");
  const result = operation(a, b);
  return result
}

function addition(x, y) {
  console.log("Performing an addition");
  return x + y;
}

function showElement(element, index, array) {
  console.log({
    element,
    index,
    array
  })
}

const list = ["Enzo", "Myk", "Eduardo", "Estela"]

list.forEach((_, i, z) => console.log(list[i]));
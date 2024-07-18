let option = ''
const pi = 3.14;

function multiplicationByTwoNumbers(a, b) {
  return a * b
}

function triangleArea(base, height) {
  // base * heigth / 2
  return multiplicationByTwoNumbers(base, height) / 2;
}

function rectangleArea(base, height) {
  // base * height
  return multiplicationByTwoNumbers(base, height);
}

function squareArea(side) {
  // side²
  return multiplicationByTwoNumbers(side, side);
}

function trapeziumArea(greaterBase, smallerBase, height) {
  // ((Greater Base + Smaller Base) * height) / 2
  return multiplicationByTwoNumbers((greaterBase + smallerBase), height) / 2;
}

function circleArea(radius) {
  // pi * radius²
  return multiplicationByTwoNumbers(pi, multiplicationByTwoNumbers(radius, radius));
}

do {
  option = prompt(`
      Welcome to your personal area calculators!\n
      What do you wanna calculate now? Here are some options...\n
      1. Triangle area\n
      2. Rectangle area\n
      3. Square area\n
      4. Trapezium area\n
      5. Circle area\n
      6. Leave program
    `);
  let base;
  let height;

  switch (option) {
    case '1':
      base = parseInt(prompt('What is the size(cm) of the base of the triangle?'));
      height = parseInt(prompt('What is the height(cm) of the triangle?'));
      if (base && height) {
        alert(`The area of a triangle that have a base of size ${base} and height ${height} is ${triangleArea(base, height)}`);
      } else {
        alert("It looks like you didn't enter a valid number");
      }
      break;
    case '2':
      base = parseInt(prompt('What is the size(cm) of the base of the rectangle?'));
      height = parseInt(prompt('What is the height(cm) of the rectangle?'));
      if (base && height) {
        alert(`The area of a rectangle that have a base of size ${base} and height ${height} is ${rectangleArea(base, height)}`);
      } else {
        alert("It looks like you didn't enter a valid number");
      }
      break;
    case '3':
      let size = parseInt(prompt('What is the size(cm) of the square?'))
      if (size) {
        alert(`The area of a square that have sides of size ${size} is ${squareArea(size)}`);
      } else {
        alert("It looks like you didn't enter a valid number");
      }
      break;
    case '4':
      let greaterBase = parseInt(prompt('What is the size(cm) of the grater base of the trapezium?'))
      let smallerBase = parseInt(prompt('What is the size(cm) of the smaller base of the trapezium?'));
      height = parseInt(prompt('What is the height(cm) of the trapezium?'));
      if (greaterBase && smallerBase && height) {
        alert(`The area of a trapezium that have as grater base size ${greaterBase}, as smaller base size ${smallerBase} and height ${height} is -> ${trapeziumArea(greaterBase, smallerBase, height)}`);
      } else {
        alert("It looks like you didn't enter a valid number");
      }
      break;
    case '5':
      let radius = parseInt(prompt('What is the radius(cm) of the circle?'));
      if (radius) {
        alert(`The area of a circle that have radius ${radius} is -> ${circleArea(radius)}`);
      } else {
        alert("It looks like you didn't enter a valid number");
      }
      break;
    case '6':
      alert('Stoping the program...')
      break;

    default:
      alert("I don't undestand this...")
      break;
  }
} while (option != 6);
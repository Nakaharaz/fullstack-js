function normalSum(a, b) {
  return a + b;
}

console.log(`Normal sum: ${normalSum(2, 2)}`);

const anonymousSum = function (a, b) {
  return a + b;
}

console.log(`Anonymous sum: ${anonymousSum(2, 5)}`);

const arrowSum = (a, b) => {
  return a + b
};

console.log(`Arrow function sum: ${arrowSum(5, 6)}`);

const subtract = (a, b) => a - b;

console.log(`Subtraction: ${subtract(7, 4)}`);

const double = n => `Double of ${n} is ${n * 2}`;

console.log(double(2));

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

const startingWithP = towns.filter(town => town[0] === 'P');

console.log(startingWithP);
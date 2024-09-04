function divide(num) {
  console.log(num);
  //Base case
  if (num % 2 === 0) {
    divide(num / 2);
  } else {
    return num;
  }
}

// factorial of 5: !5 = 5 * 4 * 3 * 2 * 1 === 5 * !4
function factorial(num) {
  console.log(`Number ${num}`);
  // Base case
  if (num === 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  } else {
    console.log(`${num} * !${num - 1}`);
    return num * factorial(num - 1);
  }
}

console.log(factorial(4))
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}

console.log(sum(4, 5, 6, 7, 8, 9))
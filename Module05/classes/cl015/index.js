/* async function asyncSum(a, b) {
  return a + b;
}

async function asyncSubtract(a, b) {
  return a - b;
}

const sumResult = asyncSum(50, undefined)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult])
  .then(results => {
    console.log(results)
  })
  .catch(err => {
    console.log(err)
  })
 */

const numbers = [3, 9, 5, 2, 7, 4]

async function asyncSquare(number) {
  return number * number
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(squares => {
    console.log(squares)
  })
  .catch(err => console.log(err))
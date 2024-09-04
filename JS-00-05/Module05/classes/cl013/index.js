/* function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a + b)
      }
  })
}

function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a - b)
      }
  })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

Promise.all([sumResult, subtractResult])
  .then(results => {
    console.log(results)
  })
  .catch(err => {
    console.log(err)
  }) */

const numbers = [3, 'daosk', 5, 2, 7, 4]

function asyncSquare(number) {
  return new Promise((resolve, reject) => {
    resolve(number * number)
  })
}

Promise.all(numbers.map(number => asyncSquare(number)))
  .then(squares => {
    console.log(squares)
  })
  .catch(err => console.log(err))
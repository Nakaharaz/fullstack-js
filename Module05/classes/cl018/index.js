function waitFor(seconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1000 * seconds)
  })
}

const numbers = [10, 20, 30, 40, 50, 60]

async function execute() {
  const squares = await Promise.all(numbers.map(async (number) => {
    await waitFor(2)
    return number * number;
  }))

  console.log(squares)
}

execute()
// Promise.all(squares).then(results => console.log(results))

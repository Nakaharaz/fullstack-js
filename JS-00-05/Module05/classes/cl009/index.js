function execute() {
  // Do someting
  return new Promise((resolve, reject) => {
    if (true) {
      reject('The promise has been rejected!')
    } else {
      console.log('The promise is being executed');
      setTimeout(() => {
        console.log('Resolving the promise...')
        resolve(42)
      }, 1000 * 2);
    }
  })
}

const p = execute()

p.then((res) => {
  console.log(`The promise has been resolved! The result is: ${res}`)
}).catch((rej) => {
  console.error(`The promisse has been rejected! Reason: ${rej}`)
})
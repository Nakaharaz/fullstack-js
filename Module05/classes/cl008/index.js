// const p = new Promise((resolve, reject) => {
//   console.log('The promise is being executed');
//   setTimeout(() => {
//     if(1) {
//       reject('F')
//     }
//     console.log('Resolving the promise...')
//     resolve(true)
//   }, 1000 * 2);
// })

// console.log(p);

// setTimeout(() => {
//   console.log(p)
// }, 1000 * 3)

function execute() {
  // Do someting
  return new Promise((resolve, reject) => {
    console.log('The promise is being executed');
    setTimeout(() => {
      console.log('Resolving the promise...')
      resolve(true)
    }, 1000 * 2);
  })
}

const p = execute()

console.log(p)


setTimeout(() => {
  console.log(p)
}, 1000 * 3)
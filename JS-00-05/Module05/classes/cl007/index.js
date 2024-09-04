function step02() {
  console.log('Step 2')
}

console.log('Step 1');
step02()
console.log('Step 3')

console.log('Step 4')
setTimeout(() => {
  console.log('Step 5')
}, 1000 * 3)

console.log('Step 6')
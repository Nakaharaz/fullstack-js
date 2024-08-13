import { label, input, br, name } from './functions.js'

console.log(label({ for: 'fullname', textContent: 'Fullname' }))
console.log(input({ id: 'fullname', name: 'fullname', placeholder: 'Enter your fullname...' }))
console.log(br())
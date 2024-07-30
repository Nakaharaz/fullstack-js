let word = prompt('Welcome traveler, enter a word then I will tell you if it is a palindromes');
let reverseWord = '';

for (let i = (word.length) - 1; i >= 0; i--) {
  reverseWord += word[i]
}

if (word === reverseWord) {
  console.log(`It seems that the ${word} its a palindrome`)
} else {
  console.log(`The word ${word} is not a palindrome, the reverse word is ${reverseWord}`)
}

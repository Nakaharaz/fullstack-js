let principalNumber = parseInt(prompt('Hey, welcome to the auto multiplication table! Tell me a number then I will calculate all the multiplications from 0 to 20.'));
let multiplicationsResult = '';

for (let i = 1; i <= 20; i++) {
  let multiplication = i * principalNumber;
  let formatedSentence = `${principalNumber}x${i} = ${multiplication}\n`;

  multiplicationsResult += formatedSentence;
}

console.log(multiplicationsResult);
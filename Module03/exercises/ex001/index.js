function getNumbers() {
  const numbers = [];
  let stop = 'No';

  do {
    const number = prompt('Enter a number, if you already sent all the numbers you want to send enter "stop".');

    if (number === 'stop') {
      stop = 'stop';
      break
    };

    if (isNaN(number)) alert('This is not a number, try again!');

    if (!isNaN(number)) {
      numbers.push(parseInt(number));
    }
  } while (stop !== 'stop');

  return numbers;
}

function simpleMean(...numbers) {
  console.log(numbers);
  const sum = numbers.reduce((acc, number) => acc + number, 0);
  console.log(sum);
  const mean = sum / numbers.length;

  return mean;
}

document.getElementById('simpleArithmeticMean').addEventListener('click', () => {
  const numbers = getNumbers();
  alert(`The simple arithmetic mean of ${numbers} is ${simpleMean(...numbers)}`);
})
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

// params: [{weight: x, grade: y}]
function calcWeightedMean(...grade) {
  console.log(grade)
  let gradeSum = grade.reduce((acc, cgrade) => {
    let currentGradeMult = cgrade.weight * cgrade.grade;
    return acc + currentGradeMult;
  }, 0);
  let weightSum = grade.reduce((acc, grade) => {
    return acc + grade.weight;
  }, 0);

  return gradeSum / weightSum;
}

function calcMedian(...numbers) {

  if (numbers.length % 2 === 1) {
    const midOfArray = Math.floor(numbers.length / 2);
    alert(`The median is: ${numbers[midOfArray]}`);
    return;
  }

  const centralN1 = Math.floor((numbers.length - 1) / 2);
  const centralN2 = centralN1 + 2;

  const [n1, n2] = numbers.slice(centralN1, centralN2);

  const median = (n1 + n2) / 2;

  alert(`The median is: ${median}`);

}

function calcMode(...numbers) {
  console.log(numbers)

  let countedNumbers = numbers.reduce((acc, number) => {
    console.log('Checking... ' + number)

    let alreadyCheck = acc.filter(obj => obj.number === number);

    console.log(alreadyCheck);
    
    if (alreadyCheck === number) {
      return acc;
    }

    console.log('Validated ' + number)

    let qnt = numbers.filter((numberF) => numberF === number).length;

    console.log(qnt);

    let obj = {
      number,
      qnt
    }

    console.log({ obj })
    acc.push(obj);

    return acc;
  }, []);


  console.log(countedNumbers)
}

document.getElementById('simpleArithmeticMean').addEventListener('click', () => {
  const numbers = getNumbers();
  alert(`The simple arithmetic mean of ${numbers} is ${simpleMean(...numbers)}`);
})

document.getElementById('weightedArithmeticMean').addEventListener('click', (e) => {
  e.preventDefault();
  const gradesArray = []

  alert('Please, insert the grade and the note');
  let continueLoop = true;
  do {
    const grade = prompt('Enter the grade');
    const weight = parseInt(prompt('Enter the weight'));

    const obj = {
      grade,
      weight
    }
    console.log({ obj })
    gradesArray.push(obj);

    continueLoop = confirm('Continue adding grades?');
  } while (continueLoop);

  alert(`The weighted mean is ${calcWeightedMean(...gradesArray)}`)
});

document.getElementById('median').addEventListener('click', (e) => {
  e.preventDefault();

  const numbersList = [];
  let continueLoop = true;

  do {
    const numberToAdd = prompt('Enter a number to add in the input. If you want stop sending number enter "stop"');
    if (numberToAdd === 'stop') {
      continueLoop = false;
      break;
    }

    numbersList.push(parseInt(numberToAdd));

  } while (continueLoop);

  calcMedian(...numbersList);
})

document.getElementById('mode').addEventListener('click', (e) => {
  e.preventDefault();

  const numbersList = [];
  let continueLoop = true;

  do {
    const numberToAdd = prompt('Enter a number to add in the input. If you want stop sending number enter "stop"');

    if (numberToAdd === 'stop') {
      continueLoop = false;
      break;
    }

    numbersList.push(parseInt(numberToAdd));

  } while (continueLoop);

  calcMode(...numbersList);
})
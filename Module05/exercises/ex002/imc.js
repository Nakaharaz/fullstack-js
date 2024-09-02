function bmiCalc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight != 'number' || typeof height != 'number') {
      reject('One of the inputs is not a number')
    }

    const bmi = weight / (height ** 2);
    resolve(bmi.toFixed(2))
  })
}

function execute(weight, height) {
  console.log('The program is calculating your BMI...')

  bmiCalc(weight, height)
    .then((response) => {
      if (response >= 40) {
        console.log(`Your current BMI is ${response}, you're severely obese!`)
      }
      if (response >= 30 && response <= 39.9) {
        console.log(`Your current BMI is ${response}, you're obese class I!`)
      }
      if (response >= 25 && response <= 29.9) {
        console.log(`Your current BMI is ${response}, you're overweight!`)
      }
      if (response > 18.5 && response <= 24.9) {
        console.log(`Your current BMI is ${response}, you're normal!`)
      }
      if (response <= 18.5) {
        console.log(`Your current BMI is ${response}, you're underweight!!`)
      }

    })
    .catch((err) => {
      console.log(`Oops! Some error occour in the running. Reason: ${err}`)
    })
}


execute(77.8, 1.64)

console.log('Hello! Testing asynchronicity!')

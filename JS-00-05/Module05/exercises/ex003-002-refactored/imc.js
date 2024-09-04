async function bmiCalc(weight, height) {
  if (typeof weight != 'number' || typeof height != 'number') {
    return Promise.reject('One of the inputs is not a number')
  }

  return (weight / (height ** 2)).toFixed(2)
}

async function execute(weight, height) {
  console.log('The program is calculating your BMI...')

  try {
    const response = await bmiCalc(weight, height)

    if (response >= 40) console.log(`Your current BMI is ${response}, you're severely obese!`)
    
    if (response >= 30 && response <= 39.9) console.log(`Your current BMI is ${response}, you're obese class I!`) 
    if (response >= 25 && response <= 29.9) console.log(`Your current BMI is ${response}, you're overweight!`)
    if (response > 18.5 && response <= 24.9) console.log(`Your current BMI is ${response}, you're normal!`)
    if (response <= 18.5) console.log(`Your current BMI is ${response}, you're underweight!!`)

  } catch (err) {
    console.error(`Oops! Some error occour in the running. Reason: ${err}`)
    return
  }



}

execute(77.10, 1.64)
execute(77.10, 1.84)
execute(100, 1.90)
execute(56.6, 1.69)

console.log('Hello! Testing asynchronicity!')

let currentValue = parseInt(prompt('What is the initial value that you have?'));
let valueToManipulate = 0;
let continueWhile = true;

do {
  let opt = parseInt(prompt(`
            Welcome to you finance control! What do you wanna do now?\n
            1. Add money\n
            2. Withdraw money\n
            3. Exit and consult extract\n
            `));
  switch (opt) {
    case 1:
      valueToManipulate = parseInt(prompt('How much you want to add to your account?'));
      currentValue += valueToManipulate;
      break;
    case 2:
      valueToManipulate = parseInt(prompt('How much you want to withdraw from your account?'));
      currentValue -= valueToManipulate;
      break;
    case 3:
      alert('Logging out! Your current balance is: ' + currentValue);
      continueWhile = false
      break
    default:
      alert("Sorry, I don't understand the command. Please, try again");
      break;
  }
} while (continueWhile);

let continueWhile = true;

do {
  let option = parseInt(prompt(`
    Choose an option:\n
    1. Continue\n
    2. Continue\n
    3. Continue\n
    4. Continue\n
    5. Stop
    `))

  switch (option) {
    case 1:
      alert('Option 1 was choose! The program stay running...')
      break;
    case 2:
      alert('Option 2 was choose! The program stay running...')
      break
    case 3:
      alert('Option 3 was choose! The program stay running...')
      break
    case 4:
      alert('Option 4 was choose! The program stay running...')
      break
    case 5:
      alert('Option 5 was choose! The program will stop now...')
      continueWhile = false;
      break
  }
} while (continueWhile)

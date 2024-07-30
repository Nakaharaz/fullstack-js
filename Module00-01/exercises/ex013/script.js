let waitlist = ["Enzo", "Eduardo", "Estela"];
let option = '';

do {
  option = parseInt(prompt(`
    Welcome to the waitlist manager!\n
    Currently, the queue is: ${waitlist.toString()}
    There is some options that you can choose:\n
    1. New Patient\n
    2. Consult Patient\n
    3. Exit program.
    `))

  switch (option) {
    case 1:
      let newPatient = prompt("Please enter the name of the patient:")
      waitlist.push(`${newPatient}`)
      break;
    case 2:
      let removedPatient = waitlist.shift();
      if (removedPatient) {
        alert(`The patient ${removedPatient} has been consulted`)
      } else {
        alert('There is no patients here!')
      }
      break;

    case 3:
      alert("Stopping the application...")
      break;
    default:
      alert("Sorry, I don't undersand this, please try again...")
      break;
  }
} while (option != "3");
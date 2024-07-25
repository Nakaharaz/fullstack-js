const availableJobs = [];
let option = '';

function convertArrayToString(arr) {
  if (!arr[0]) {
    return "No job openings at the moment!";
  }
  return arr.reduce((accumulatedValue, job, i) => {
    let jobFormatted = `
    ${i + 1}°:
    ${job.title},
    Salary: ${job.salary}
    `;
    accumulatedValue.push(jobFormatted);
    return accumulatedValue;
  }, []);
}

function convertObjectToString(obj) {
  if (!obj) {
    return "Oops, an error happened here! Please, try again";
  }
  return `
    ${obj.title},
    Salary: ${obj.salary}
    `;
}

function createANewJob() {
  let newJob = {};

  newJob.title = prompt('What is the name of the job opening?');
  newJob.salary = prompt('How much you intend to pay for this job?');

  return newJob;
}

function showMenu() {
  option = prompt(`
    Welcome to JSM, what do you wanna do now?\n
    1. Show available jobs opening\n
    2. Create a new job opening\n
    3. View a job opening\n
    4. Subscribe a candidate to a job opening\n
    5. Delete a job opening\n
    6. Leave program...
    `);
}

do {
  showMenu();
  switch (option) {
    case '1':
      alert(convertArrayToString(availableJobs));
      break;
    case '2':
      const newJob = createANewJob();
      alert(convertObjectToString(newJob));
      availableJobs.push(newJob);
      console.log(availableJobs);
      break
    case '3':
      console.log(2)
      break
    case '4':
      console.log(2)
      break
    case '5':
      console.log(2)
      break
    case '6':
      alert("Closing the app...")
      break
    default:
      alert("I don't undestand this...");
      break;
  }
} while (option !== "6");
let availableJobs = [];
let option = '';

function showJobs() {
  return availableJobs.reduce((accumulatedValue, job, i) => {
    let jobFormatted = `
    ${i + 1}°:
    ${job.title},
    Description: ${job.description},
    Limit date: ${job.limitDate}
    Registered Candidates: ${job.registeredCandidates ? job.registeredCandidates.length : `No candidates yet!`}
    `;
    accumulatedValue.push(jobFormatted);
    return accumulatedValue;
  }, []);
}

function createANewJob() {

  let newJob = {
    title: prompt('What is the name of the job opening?'),
    description: prompt('Enter a description for this job opening'),
    limitDate: prompt('What is the limit date for this job opening?(mm/dd/yyyy)'),
    registeredCandidates: [],
    registerCandidate(name) {
      this.registeredCandidates.push(name);
    }
  };
  let checkValue;


  checkValue = confirm(`Confirm the information you entered?`);

  if (checkValue) {
    return newJob;
  }

  return false

}

function convertObjectToString(obj) {
  if (!obj) {
    return "Oops, an error happened here! Please, try again";
  }

  return `
    ${obj.title},
    Description: ${obj.description},
    Limit date: ${obj.limitDate},
    Registered Candidates: ${obj.registeredCandidates.length + ': ' + obj.registeredCandidates}
    `;
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
let jobIndex;

do {
  showMenu();
  switch (option) {
    case '1':
      alert(showJobs());
      break;
    case '2':
      const newJob = createANewJob();
      if (newJob) {
        alert(convertObjectToString(newJob));
        availableJobs.push(newJob);
      } else {
        alert(`Please try again!`)
      }
      break
    case '3':
      jobIndex = prompt(`What is the index of the job that you want to view?`);
      alert(convertObjectToString(availableJobs[jobIndex - 1]));
      break
    case '4':
      jobIndex = prompt(`What is the index of the job that you want to subscribe a candidate?`);

      if (availableJobs[jobIndex - 1]) {

        let candidateName = prompt("What is the candidate's name?");
        let confirmAct = confirm(`Confirm add '${candidateName}' to: ${convertObjectToString(availableJobs[jobIndex - 1])}`);

        if (confirmAct) {
          availableJobs[jobIndex - 1].registerCandidate(candidateName);
          alert(`Candidate '${candidateName}' added`);
          break
        }
        alert('Aborting mission...')
        break
      }
      alert('Job not found!');
      break
    case '5':
      jobIndex = prompt(`What is the index of the job that you want to delete?`);

      if (availableJobs[jobIndex - 1]) {
        let confirmAct = confirm(`Are you sure you want to delete: ${convertObjectToString(availableJobs[jobIndex - 1])} \n?`);

        if (confirmAct) {
          alert(`Job opening '${availableJobs[jobIndex - 1].title}' deleted.`);
          availableJobs.splice(jobIndex - 1, 1);
          break
        }

        alert('Aborting mission...')
        break
      }
      alert('Job not found!');
      break
    case '6':
      alert("Closing the app...")
      break
    default:
      alert("I don't undestand this...");
      break;
  }
} while (option !== "6");
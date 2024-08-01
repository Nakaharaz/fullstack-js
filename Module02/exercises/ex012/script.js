function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.for = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input');
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;

  return input;
}

const btnNewTech = document.getElementById('newTech')
const form = document.getElementById('devInfos');
const btnNewDev = document.getElementById('newDev')
const developers = []

let techCount = 0;

let devCount = 0;

btnNewTech.addEventListener('click', (e) => {

  const devName = document.querySelector('input[name="devName"]').value;

  const divList = document.getElementById('techList');

  const cardDiv = document.createElement('div');
  cardDiv.id = `${devName}${devCount}`
  cardDiv.className = 'techCard'

  const labelName = createLabel('Tech name:', `tech${techCount}`);

  const input = createInput(`tech${techCount}`, null, `tech${techCount}`);

  const div1 = document.createElement('div');
  div1.className = 'row'

  const labelRadio1 = createLabel('0-2 Years', 'experience1');
  const radio1 = createInput('experience1', '0-2 Years', `experience${techCount}`, 'radio');

  div1.append(radio1, labelRadio1)

  const div2 = document.createElement('div');
  div2.className = 'row'

  const labelRadio2 = createLabel('3-5 Years', 'experience2');
  const radio2 = createInput('experience2', '3-5 Years', `experience${techCount}`, 'radio');

  div2.append(radio2, labelRadio2)

  const div3 = document.createElement('div');
  div3.className = 'row'

  const labelRadio3 = createLabel('6+ Years', 'experience3');
  const radio3 = createInput('experience3', '6+ Years', `experience${techCount}`, 'radio');

  div3.append(radio3, labelRadio3)

  const deleteButton = document.createElement('button');
  deleteButton.id = `delete-${techCount}`
  deleteButton.className = 'deleteButton'
  deleteButton.type = 'button';
  deleteButton.innerText = 'Delete this technology'

  cardDiv.append(labelName, input, div1, div2, div3, deleteButton)

  divList.append(cardDiv);

  deleteButton.addEventListener('click', (e) => {
    divList.removeChild(deleteButton.parentNode)
  })

  techCount++
})

btnNewDev.addEventListener('click', (e) => {
  e.preventDefault();

  const devNameInput = document.querySelector('input[name="devName"]');
  const devName = devNameInput.value;
  const divList = document.getElementById('techList');


  const techsCount = document.querySelectorAll('div#techList>div.techCard').length;

  let technologies = []

  for (i = 0; i < techsCount; i++) {
    const techName = document.querySelector(`div#techList>div#${devName}${devCount}>input#tech${i}`).value;
    const experience = document.querySelector(`div#techList>div#${devName}${devCount}>div.row>input[name="experience${i}"]:checked`).value;
    technologies.push({
      techName,
      experience
    });
  }

  const newDev = {
    fullname: devName,
    technologies: technologies
  }

  developers.push(newDev);

  console.log(developers);
  
  devNameInput.value = "";
  
  for (i = 0; i < techsCount; i++) {
    const techCard = document.querySelector(`div#techList>div#${devName}${devCount}.techCard`);
    divList.removeChild(techCard);

  }

  devCount++
  techCount = 0;
  })
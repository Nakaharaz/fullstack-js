let currentCity;
let cities = '';

while (true) {
  currentCity = prompt("Have you ever traveled to another city? If yes, say me the name, if no, enter 'no' ")
  if(currentCity === 'no') {
    break
  } else {
    cities += `${currentCity}, `;
  }
}

console.log(cities);
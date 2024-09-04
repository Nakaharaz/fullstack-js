let pokemon = 'Charmander';

function evolve() {
  pokemon = 'Charmeleon';
}

console.log(pokemon);
evolve()
console.log(pokemon);

function createAnimal() {
  let animal = 'Cow';
}

function evaluateGrade(grade) {
  if(grade > 60) {
    var approve = true;
    let situation = "Aprove"
  } else {
    var approve = false;
    let situation = "Reproved"
  }

  console.log(grade);
  console.log(approve);
  console.log(situation);
}


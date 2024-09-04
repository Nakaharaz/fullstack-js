const usedNumbers = []

function selectAPlayer() {
  const shirtNum = document.getElementById('player-shirtnum').value;

  let isNumberUsed = usedNumbers.filter((num) => {
    return num == parseInt(shirtNum);
  })

  if (isNumberUsed.length > 0) {
    alert('This number has already been used!\nPlease, try again.')
    return;
  }

  let confirmSelect = confirm('Confirm add this player?');

  if (!confirmSelect) {
    return;
  }

  usedNumbers.push(parseInt(shirtNum));
  console.log(usedNumbers)

  const position = document.getElementById('player-position').value;
  const name = document.getElementById('player-name').value;
  const ulPlayers = document.getElementById('selected-players');

  const newLi = document.createElement('li');
  newLi.id = `player-${shirtNum}`

  const newDiv = document.createElement('div');
  newDiv.className = 'player-card'

  const nameTitle = document.createElement('h3');
  nameTitle.innerText = `Player: ${name}`;

  const compText = document.createElement('p');
  compText.innerText = `
  Postion: ${position}
  Shirt n°: ${shirtNum}
  `

  newDiv.append(nameTitle, compText);

  newLi.appendChild(newDiv);
  ulPlayers.appendChild(newLi);
}

function deselectAPlayer() {
  const numToDeselect = document.getElementById('delete-shirtnum').value;

  let isNumberUsed = usedNumbers.filter((num) => {
    return num == parseInt(numToDeselect);
  })

  if (isNumberUsed.length === 0) {
    alert("This number doesn't exist!")
    return;
  }

  let confirmDeselect = confirm('Confirm remove this player?');

  if (!confirmDeselect) {
    return;
  }

  let numberIndex = usedNumbers.indexOf(parseInt(numToDeselect));
  usedNumbers.splice(numberIndex, 1);

  const playerToDelete = document.getElementById(`player-${numToDeselect}`);
  const ul = document.getElementById('selected-players');

  ul.removeChild(playerToDelete)


}
const main = document.querySelector('main');

let playerOne = { relatedMark: 'O' };
let playerTwo = { relatedMark: 'X' };
let currentPlayer = playerOne;
let currentTurn = 0;
let vBoard = [];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function registerPlayers() {
  playerOne.name = document.getElementById('player-one').value;
  playerTwo.name = document.getElementById('player-two').value;

  const startSection = document.getElementById('game-start')
  main.removeChild(startSection)

  displayBoard()
}

function displayBoard() {

  const newSection = document.createElement('section');
  const title = document.createElement('h3');
  title.id = 'name-display'
  title.innerHTML = `${playerOne.name}'s turn, as <span class="accent${playerOne.relatedMark}">${playerOne.relatedMark}</span>`;

  newSection.appendChild(title);

  main.append(newSection, createTable());

  startGame()
}

function createTable() {

  let boardSize = 9;
  const board = document.createElement('div');
  board.id = 'board';

  for (i = 0; i < boardSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    if (i <= 2) {
      square.setAttribute('data-region', `0.${i}`)
    }
    if (i <= 5 && i > 2) {
      square.setAttribute('data-region', `1.${i - 3}`)
    }
    if (i <= 8 && i > 5) {
      square.setAttribute('data-region', `2.${i - 6}`)
    }

    board.appendChild(square);

  }

  return board
}

function startGame() {
  vBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  const squareList = document.querySelectorAll('div.square');
  const title = document.getElementById('name-display')

  title.innerHTML = `${currentPlayer.name}'s turn, as <span class="accent${currentPlayer.relatedMark}">${currentPlayer.relatedMark}</span>`;

  squareList.forEach((square) => {
    square.classList = 'square';


    square.addEventListener('click', squareClicks, square)
  })
}

function squareClicks(event) {
  const square = event.currentTarget;

  const title = document.getElementById('name-display')

  if (square.classList.contains('painted')) {
    alert('It was already clicked!')
    return
  }

  currentTurn++
  square.classList.add(currentPlayer.relatedMark, 'painted')

  let row = square.dataset.region[0];
  let col = square.dataset.region[2];
  vBoard[row][col] = currentPlayer.relatedMark;

  // if (checkWin()) {

  // }

  if (currentTurn >= 9) {
    setDraw();
    return
  }

  if (currentTurn % 2 === 0) {
    currentPlayer = playerOne;
  } else {
    currentPlayer = playerTwo;
  }

  title.innerHTML = `${currentPlayer.name}'s turn, as <span class="accent${currentPlayer.relatedMark}">${currentPlayer.relatedMark}</span>`;


}

function setDraw() {
  const squareList = document.querySelectorAll('div.square');

  squareList.forEach((square) => {
    square.removeEventListener('click', squareClicks)
  })

  alert('Draw! Try again');
}

function setWinner() {

}

document.getElementById('start-game').addEventListener('click', registerPlayers)
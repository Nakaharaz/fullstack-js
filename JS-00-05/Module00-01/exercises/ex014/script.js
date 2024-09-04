let deck = [];
let option = '';

do {
  option = parseInt(prompt(`
    Welcome to your personal playing cards!\n
    Currently, there are ${deck.length} card(s) in the deck\n
    Here are some options that you can choose:\n
    1. Add a new card to deck\n
    2. Get a card from the top\n
    3. Exit program.
    `))

  switch (option) {
    case 1:
      let newCard = prompt("Please enter the name of the card (I.e.: Ace of Spades):")
      let isAlreadyOnDeck = deck.includes(newCard);
      if (isAlreadyOnDeck) {
        alert('This card is already on the deck!')
      } else if (!isAlreadyOnDeck) {
        deck.unshift(`${newCard}`)
      };
      break;
    case 2:
      let removedCard = deck.shift();
      if (removedCard) {
        alert(`The card ${removedCard} has been removed`)
      } else {
        alert('There are no cards in the deck!')
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
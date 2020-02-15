console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
if (cardsInPlay.length === 2)	
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

checkForMatch();

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);
	console.log("user flipped " + cards[cardId]);
	console.log("user flipped " + cards[cardId]);
}

flipCard(0, 1);

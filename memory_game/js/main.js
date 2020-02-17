var cards = [
{	
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
},
];

var cardsInPlay = [];

var cardId = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
};

function flipCard(cardId) {
	cardsInPlay.push(cards[cardId].rank);
	console.log("user flipped " + cards[cardsId].rank);
	console.log(cardImage);
	console.log(suit);	
};

flipCard(1);
flipCard(2);
checkForMatch();

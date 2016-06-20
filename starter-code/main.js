console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";  //mixed order to provide a more challenging game
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

/*  if (cardOne === cardFour) {
    alert('You found a match!');
  } else if (cardTwo === cardThree) {
    alert('You found a match!');
  } else {
    alert('Sorry, try again.');
  }

*/

// find the board and set it as a variable
var board = document.getElementsById(‘game-board’);

//function to create the board
function createBoard () {
  // for loop through the card array to create card elements for the board
  for (var i=0; i<cards.length; i++) {

    // creates a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // append the card to the board
    board.appendChild(cardElement);
  }
}

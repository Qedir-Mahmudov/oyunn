/* const newgame = document.querySelector('newgame')
const Rolldice = document.querySelector('Rolldice')
const hold = document.querySelector('hold')




newgame.addEventListener("click", function(){ 
    document.getElementsByClassName("newgame").innerHTML = ;
  });
























function getRandom() {
    return Math.floor(Math.random()*6)
    
} */










/* const diceimg = document.querySelector(".diceimg") */


let scores = [0, 0]; // Player scores
let currentScore = 0; // Current score for the active player
let activePlayer = 0; // Index of the active player (0 for Player 1, 1 for Player 2)

const player1ScoreElement = document.querySelector('.player1 p');
const player2ScoreElement = document.querySelector('.player2 p');
const current1Element = document.querySelector('.curent1 p:nth-of-type(2)'); // Current for Player 1
const current2Element = document.querySelector('.right .curent1 p:nth-of-type(2)'); // Current for Player 2
const diceImage = document.querySelector('.diceimg img');

document.querySelector('.Rolldice').addEventListener('click', rollDice);
document.querySelector('.hold').addEventListener('click', hold);
document.querySelector('.newgame').addEventListener('click', newGame);

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    diceImage.src = `dice-${dice}.png`; // Make sure to have images named dice-1.png, dice-2.png, ..., dice-6.png
    currentScore += dice;

    if (dice !== 1) {
        // Update current score for active player
        updateCurrentScore();
    } else {
        // Switch players
        switchPlayer();
    }
}

function hold() {
    // Add current score to active player's total score
    scores[activePlayer] += currentScore;
    updateScores();
    // Switch players
    switchPlayer();
}

function switchPlayer() {
    currentScore = 0; // Reset current score
    activePlayer = activePlayer === 0 ? 1 : 0; // Switch to the other player
    updateCurrentScore();
}

function updateCurrentScore() {
    if (activePlayer === 0) {
        current1Element.textContent = currentScore;
    } else {
        current2Element.textContent = currentScore;
    }
}

function updateScores() {
    player1ScoreElement.textContent = scores[0];
    player2ScoreElement.textContent = scores[1];
    // Check for a winner
    if (scores[activePlayer] >= 100) {
        alert(`Player ${activePlayer + 1} wins!`);
        newGame();
    }
}

function newGame() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    updateScores();
    updateCurrentScore();
}

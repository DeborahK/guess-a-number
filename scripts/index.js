// Main code

// Find the needed elements
const guessButton = document.getElementById('guess-button');
const guessInput = document.getElementById('guess-input');
const feedbackContainer = document.getElementById('feedback');
const playAgainContainer = document.getElementById('play-again');
const playAgainButton = document.getElementById('again-button');

// Listen for button clicks
guessButton.addEventListener('click', processGuess);
playAgainButton.addEventListener('click', startGame);

// Start the game
let randomNumber = 0;
startGame();

// Supporting functions
function displayFeedback(feedbackText) {
  if (feedbackContainer) {
    feedbackContainer.innerHTML += '<br>' + feedbackText;
  }
}

function displayPlayAgain(display) {
  if (playAgainContainer) {
    if (display) {
      playAgainContainer.style.display = 'block';
    } else {
      playAgainContainer.style.display = 'none';
    }
  }
}

function generateRandomNumber(max) {
  const result = Math.floor(Math.random() * max);
  return result;
}

function processGuess() {
  let guess = '';
  let feedback = '';

  if (guessInput) {
    guess = guessInput.value;

    if (+guess === randomNumber) {
      feedback = `${guess} is correct ... You win!`;
      displayPlayAgain(true);
    } else if (guess > randomNumber) {
      feedback = `${guess} is too high`;
    } else {
      feedback = `${guess} is too low`;
    }

    displayFeedback(feedback);
  }
}

function startGame() {
  // Hide the play again button
  displayPlayAgain(false);

  // Clear the log
  if (feedbackContainer) {
    feedbackContainer.innerHTML = '';
  }

  // Clear the textbox
  if (guessInput) {
    guessInput.value = '';
  }

  // Generate a random number
  randomNumber = generateRandomNumber(20);
}

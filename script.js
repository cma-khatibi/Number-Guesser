let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random() * 9);

const compareGuesses = (userGuess, compGuess, target) => {
  if (userGuess <! 10 || userGuess >! -1) {
    alert('guess number between 0-9');
    return false;
  }
  userDistance = Math.abs(target - userGuess);
  compDistance = Math.abs(target - compGuess);
  if (userDistance > compDistance) {
    return false;
  } else if (userDistance < compDistance) {
    return true;
  }
};


const updateScore = winner => {
  winner === 'human' ? humanScore += 1 : computerScore += 1;
};

const advanceRound = () => currentRoundNumber += 1;

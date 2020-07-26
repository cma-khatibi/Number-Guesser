let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 9);
// console.log(generateTarget())
const compareGuesses = (userGuess, compGuess, target) => {
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


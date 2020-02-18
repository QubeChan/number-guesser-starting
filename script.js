let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => {
    Math.abs(num1 - num2);
};

const compareGuesses = (userGuess, compGuess, secretNum) => {
    if (userGuess <= 9 || userGuess >= 0) {
        alert("You can't go above 9 or below 0");
    }

    if (getAbsoluteDistance(userGuess - secretNum) === getAbsoluteDistance(secretNum - compGuess)) {
        return true;
    }
    else if (getAbsoluteDistance(userGuess - secretNum) < getAbsoluteDistance(secretNum - compGuess)) {
        return true;
    }
    else if (getAbsoluteDistance(userGuess - secretNum) > getAbsoluteDistance(secretNum - compGuess)) {
        return false;
    }
};

const updateScore = winner => {
    switch (winner) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
        default:
            break;
    }
};

const advanceRound = () => currentRoundNumber++;
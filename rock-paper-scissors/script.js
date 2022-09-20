// Event Listeners to get user choice
const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // Set max score to end the game
        const maxScore = 5;

        // Clean when the game ends
        let cleanResults = false;

        // Init the round
        let result = playRound(Number(choice.name), getComputerChoice());
        
        // Select the section to display results
        const results = document.querySelector('#results');

        // Create a paragraph to show the result
        const p = document.createElement('p');

        if (result === 0) {
            p.textContent = 'You win this round!';
            p.classList.toggle('result-user-wins');
            cleanResults = checkGameOver('#user-score', maxScore, 'Congratulations! You won!');
        } else if (result === 1) {
            p.textContent = 'You lose this round!';
            p.classList.toggle('result-user-loses');
            cleanResults = checkGameOver('#computer-score', maxScore, 'Oh, no! You lost!');
        } else {
            p.textContent = 'This round resulted in a draw!';
            p.classList.toggle('result-draw');
        }

        if (cleanResults) {
            document.querySelector('#results').replaceChildren();
            console.log('Game ended successfully!');
        } else {
            results.appendChild(p);
        }
    });
});

// Check if game is over and return a boolean to clean past round results
function checkGameOver(selector, maxScore, message) {
    if (increaseScore(selector, maxScore)) {
        alert(message);

        // Reset game
        return resetScores();
    }
}

// Increase score and return true if the max score have been reached
function increaseScore(selector, maxScore) {
    let score = document.querySelector(selector);
    score.textContent++;

    return Number(score.textContent) === maxScore;
}

// Reset scores to 0 and return a boolean to clean results
function resetScores() {
    document.querySelector('#user-score').textContent = '0';
    document.querySelector('#computer-score').textContent = '0';
    
    return true;
}

// Randomize computer choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Play one round
// Let's use codes:
//   0 => user wins
//   1 => computer wins
//   -1 => draw
function playRound(userSelection, computerSelection) {
    // Compare using numbers:
    //   0 => Rock
    //   1 => Paper
    //   2 => Scissors 
    if (userSelection === 0) {
        if (computerSelection === 2) {
            console.log('You Win! Rock beats Scissors');
            return 0;
        } else if (computerSelection === 1) {
            console.log('You Lose! Paper beats Rock');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else if (userSelection === 1) {
        if (computerSelection === 0) {
            console.log('You Win! Paper beats Rock');
            return 0;
        } else if (computerSelection === 2) {
            console.log('You Lose! Scissors beats Paper');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else if (userSelection === 2) {
        if (computerSelection === 1) {
            console.log('You Win! Scissors beats Paper');
            return 0;
        } else if (computerSelection === 0) {
            console.log('You Lose! Rock beats Scissors');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else {
        alert('Incorrect input! Refresh and try again');
        throw new Error('Incorrect input! Refresh and try again');
    }
}

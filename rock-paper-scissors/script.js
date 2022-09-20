// Event to get user choice
const choices = document.querySelectorAll('.choice');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // Set max score to end the game
        const maxScore = 5;

        // Clean when the game ends
        let cleanResults = false;

        // Init the round
        let result = playRound(choice.name, getComputerChoice());
        
        // Select the section to display results
        const results = document.querySelector('#results');

        // Create a paragraph to show the result
        const p = document.createElement('p');
        p.classList.add('result');

        if (result === 0) {
            p.textContent = 'You win!';
            cleanResults = checkGameOver('#user-score', maxScore, 'Congratulations! You won!');
            
        } else if (result === 1) {
            p.textContent = 'You lose!';
            cleanResults = checkGameOver('#computer-score', maxScore, 'Oh, no! You lost!');
            
        } else {
            p.textContent = 'It\'s a draw!';
        }

        if (cleanResults) {
            document.querySelector('#results').replaceChildren();
        } else {
            results.appendChild(p);
        }
    });
});

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
let getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3);
    // TODO: Change to '==='
    if (n == 0) {
        return 'rock';
    } else if (n == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Play one round
// Let's use codes:
//   0 => player wins
//   1 => computer wins
//   -1 => draw
let playRound = (playerSelection, computerSelection) => {
    // Convert to lower case
    let playerSel = playerSelection.toLowerCase();
    let computerSel = computerSelection.toLowerCase(); // Just in case
    console.log('Computer chose ' + computerSel);

    if (playerSel === 'rock') {
        if (computerSel === 'scissors') {
            console.log('You Win! Rock beats Scissors');
            return 0;
        } else if (computerSel === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else if (playerSel === 'paper') {
        if (computerSel === 'rock') {
            console.log('You Win! Paper beats Rock');
            return 0;
        } else if (computerSel === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else if (playerSel === 'scissors') {
        if (computerSel === 'paper') {
            console.log('You Win! Scissors beats Paper');
            return 0;
        } else if (computerSel === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return 1;
        } else {
            console.log('That\'s a draw!');
            return -1;
        }
    } else {
        alert('Incorrect input! Refresh and enter \'rock\', \'paper\' or \'scissors\'');
        throw new Error('Incorrect input! Enter \'rock\', \'paper\' or \'scissors\'');
    }
}

// Play a game for a number of rounds defined by the player or default to 5
let game = (promptRounds) => {
    // Convert to Number
    let rounds = promptRounds ? Number(promptRounds) : 5;

    // Check input
    if (isNaN(rounds) || rounds < 0) {
        alert('Incorrect input! Refresh and enter a positive number');
        throw new Error('Incorrect input! Enter a positive number');
    } else if (rounds === 0) {
        console.log('GG, coward!');
    } else {
        let playerScore = 0;
        let computerScore = 0;
    
        for (i = 0; i < rounds; i++) {
            let roundResult = playRound(prompt('Enter your play'), getComputerChoice());
    
            if (roundResult === 0) {
                playerScore += 1;
            } else if (roundResult === 1) {
                computerScore += 1;
            }
            // If you don't want to count draws, reset the round:
            //   else { rounds -= 1 }
        }
    
        console.log('Final score (you - computer): ' + playerScore + ' - ' + computerScore);
    
        if (playerScore > computerScore) {
            return 'You win!';
        } else if (playerScore < computerScore) {
            return 'You lose!';
        } else {
            return 'It\'s a draw!';
        }
    }
}

// Let's play!
//console.log(game(prompt('How many rounds do you wanna play?')));

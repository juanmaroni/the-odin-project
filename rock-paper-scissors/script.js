// Randomize computer choice
getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3);
    console.log('Got number ' + n);

    if (n == 0) {
        return 'Rock';
    } else if (n == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Let's use codes:
//   0 => player wins
//   1 => computer wins
//   -1 => draw
playRound = (playerSelection, computerSelection) => {
    // Convert to lower case
    let playerSel = playerSelection.toLowerCase();
    let computerSel = computerSelection.toLowerCase();

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
        console.log('Error, you probably mistyped!');
        throw new Error('Incorrect input!');
    }
}

// Play a game for a number of rounds defined by the player
game = (n_rounds) => {
    // Convert to Number
    const rounds = Number(n_rounds);

    // Check input
    if (isNaN(rounds) || rounds < 0) {
        throw new Error('Incorrect input! Enter a positive number');
    } else if (rounds === 0) {
        console.log('GG, coward!');
    } else {
        let playerScore = 0;
        let computerScore = 0;
    
        for (i = 0; i < rounds; i++) {
            let roundScore = playRound(prompt('Enter your play'), getComputerChoice());
    
            if (roundScore === 0) {
                playerScore += 1;
            } else if (roundScore === 1) {
                computerScore += 1;
            }        
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
console.log(game(prompt('How many rounds do you wanna play?')));

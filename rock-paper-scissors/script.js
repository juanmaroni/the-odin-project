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

playRound = (playerSelection, computerSelection) => {
    // Convert to lower case
    let playerSel = playerSelection.toLowerCase();
    let computerSel = computerSelection.toLowerCase();

    if (playerSel === 'rock') {
        if (computerSel === 'scissors') {
            return 'You Win! Rock beats Scissors';
        } else if (computerSel === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'That\'s a tie!';
        }
    } else if (playerSel === 'paper') {
        if (computerSel === 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSel === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'That\'s a tie!';
        }
    } else if (playerSel === 'scissors') {
        if (computerSel === 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSel === 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'That\'s a tie!';
        }
    } else {
        return 'An error, WTF!';
    }
}

const playerSelection = 'papeR';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

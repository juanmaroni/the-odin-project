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

alert(getComputerChoice());

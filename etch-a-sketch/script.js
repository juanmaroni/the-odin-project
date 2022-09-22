// Select grid
const grid = document.querySelector('#grid');

// Append squares
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        grid.appendChild(square);
    }
}

// Get squares
const lstSquares = document.querySelectorAll('.square');

// Painting while clicking
lstSquares.forEach((square) => {
    square.addEventListener('click', () => {
        square.classList.toggle('square-painted');
    });
})

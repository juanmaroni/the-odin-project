// Select grid
const grid = document.querySelector('#grid');

// Default grid on page load
generateGrid(16);

// Set grid size
const btnSetGrid = document.querySelector('#btn-set-size');
btnSetGrid.addEventListener('click', () => {
    document.querySelector('#grid').replaceChildren();
    let size = Number(prompt('Choose from 1 to 100, default is 16'));
    // If out of limits, default to 16
    generateGrid(size < 1 || size > 100 ? 16 : size);
});

// Generate a grid with a given size
function generateGrid(size) {
    for (i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        grid.appendChild(square);
    }

    // Distribute the squares
    let gridTemplateRepeat = `repeat(${size}, 20px)`;
    grid.style.gridTemplateColumns = gridTemplateRepeat;
    grid.style.gridTemplateRows = gridTemplateRepeat;

    // Add event listener for painting when a square is clicked
    const lstSquares = document.querySelectorAll('.square');
    lstSquares.forEach((square) => {
        square.addEventListener('click', () => {
            // Paint a random color
            square.style.backgroundColor = generateRgbColor();
        });
    })
}

function generateRgbColor() {
    return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

function getRandomColor() {
    return Math.floor(Math.random() * 255);
}

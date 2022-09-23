// Select grid
const grid = document.querySelector('#grid');

// Default grid on page load
generateGrid(16);

// Set grid size with button
const btnSetGrid = document.querySelector('#btn-set-size');
btnSetGrid.addEventListener('click', () => {
    let size = prompt('Choose from 1 to 100, default is 16');

    // Check input
    if (size) {
        // Delete old grid
        document.querySelector('#grid').replaceChildren();
        size = Number(size);
        // If input is not a number or is out of limits, default to 16
        generateGrid(isNaN(size) || size < 1 || size > 100 ? 16 : size);
    }
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

// Return a color property with RGB values, like 'rgb(255,255,255)'
function generateRgbColor() {
    return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

function getRandomColor() {
    return Math.floor(Math.random() * 255);
}

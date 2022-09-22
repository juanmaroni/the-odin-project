// Select grid
const grid = document.querySelector('#grid');

// Generate a grid with a given size
function generateGrid(size) {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.toggle('square');
            grid.appendChild(square);
        }
    }

    // Change grid width based on size
    grid.style.width = size * 40 + 'px';
    // Distribute the squares
    let gridTemplateRepeat = 'repeat(' + size + ', 40px)';
    grid.style.gridTemplateColumns = gridTemplateRepeat;
    grid.style.gridTemplateRows = gridTemplateRepeat;

    // Add event to paint when a square is clicked
    const lstSquares = document.querySelectorAll('.square');
    lstSquares.forEach((square) => {
    square.addEventListener('click', () => {
        square.classList.toggle('square-painted');
    });
})
}

// Default grid on page load
generateGrid(16);

// Set grid size
const btnSetGrid = document.querySelector('#btn-set-size');
btnSetGrid.addEventListener('click', () => {
    document.querySelector('#grid').replaceChildren();
    let size = Number(prompt('Set size: min 1, max 30, default 16'));
    size = size < 1 || size > 30 ? 16: size;
    
    generateGrid(size);
});

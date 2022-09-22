// Select grid
const grid = document.querySelector('#grid');

// Append squares
for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.toggle('square');
        square.textContent = i;
        grid.appendChild(square);
    }
}

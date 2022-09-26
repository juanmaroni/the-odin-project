const output = document.querySelector('#output');

// Clear button
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    clear();
});

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear() {
    output.textContent = '0';
}

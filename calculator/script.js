const output = document.querySelector('#output');

// Clear button
const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', () => {
    clear();
});

// Undo (last input) button
const btnUndo = document.querySelector('#undo');
btnUndo.addEventListener('click', () => {
    output.textContent = undo(output.textContent);
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

function undo(text) {
    if (text.length < 2) {
        return '0';
    }

    return text.substring(0, text.length - 1);
}

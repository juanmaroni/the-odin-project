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

// Print keys on screen output
const screenKeys = document.querySelectorAll('.screenkey');
screenKeys.forEach((key) => {
    key.addEventListener('click', () => {
        // If the first number is 0, replace it
        if (output.textContent === '0') {
            output.textContent = key.textContent;
        } else {
            output.textContent += key.textContent;
        }

        // Change font size to fit the screen
        if (output.textContent.length > 7) {
            setOutputFontSize(1.5);
        }
    });
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
    setOutputFontSize(3);
}

function undo(text) {
    if (text.length < 2) {
        return '0';
    }

    return text.substring(0, text.length - 1);
}

function setOutputFontSize(size) {
    output.style.fontSize = size + 'em';
}

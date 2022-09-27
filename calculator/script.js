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

// Print numbers on screen output
const numKeys = document.querySelectorAll('.num');
numKeys.forEach((key) => {
    key.addEventListener('click', () => {
        // If the first number is 0, replace it
        if (output.textContent === '0') {
            output.textContent = key.textContent;
        } else {
            output.textContent += key.textContent;
        }
    });
});

// Print dot on screen output
const dotKey = document.querySelector('#dot');
dotKey.addEventListener('click', () => {
    // If there is no dot yet
    if (output.textContent.indexOf('.') < 0) {
         output.textContent += '.';
    } else {
        console.log('There is already a dot for this number!');
    }
});

// Print operators on screen output
const opKeys = document.querySelectorAll('.op');
opKeys.forEach((key) => {
    key.addEventListener('click', () => {
        
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

function operate(screenText) {
    
}

function setOutputFontSize(size) {
    output.style.fontSize = size + 'em';
}

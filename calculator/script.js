const output = document.querySelector('#output');

let operators = [];

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
        let screenText = output.textContent;

        if (!['+', '-', 'x', '/'].includes(screenText[screenText.length - 1])) {
            operators.push(key.textContent);
            output.textContent += key.textContent;
        } else {
            console.log('There is already an operator!');
        }
    });
});

// Result
const resultKey = document.querySelector('#result');
resultKey.addEventListener('click', () => {
    output.textContent = operate(output.textContent);
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
    // Extract numbers from input
    let nums = screenText.split(/[^0-9\.]+/g);
    console.log('Operands: ' + nums);
    console.log('Operators: ' + operators);

    let result = 0;

    for (i = 0; i < nums.length - 1; i++) {
        result += selectOperation(Number(nums[i]), Number(nums[i + 1]), operators[i])
    }

    // Empty operators
    operators = [];

    console.log(result);
    return result;
}

function selectOperation(operand1, operand2, operator) {
    if (operator === '+') {
        return add(operand1, operand2);
    } else if (operator === '-') {
        return substract(operand1, operand2);
    } else if (operator === 'x') {
        return multiply(operand1, operand2);
    } else if (operator === '/') {
        return divide(operand1, operand2);
    } else {
        throw Error('Something went wrong with the operator!');
    }
}

function setOutputFontSize(size) {
    output.style.fontSize = size + 'em';
}

const output = document.querySelector('#output');

let operators = [];
let allowDot = true;

// Any key
const allKeys = document.querySelectorAll('button');
allKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
        if (output.textContent === 'Error') {
            clear();
            e.stopImmediatePropagation();
        }
    });
});

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
    if (allowDot) {
         output.textContent += '.';
         allowDot = false;
    } else {
        console.log('There is already a dot for this number!');
    }
});

// Print operators on screen output
const opKeys = document.querySelectorAll('.op');
opKeys.forEach((key) => {
    key.addEventListener('click', () => {
        let screenText = output.textContent;
        let prevInput = screenText[screenText.length - 1];
        let newInput = key.textContent;

        if ((['+', 'x', '/'].includes(prevInput) || !isNaN(prevInput)) && newInput === '-') {
            operators.push('+');
            output.textContent += '-';
        } else if (!['+', '-', 'x', '/'].includes(prevInput)) {
            operators.push(newInput);
            allowDot = true;
            output.textContent += newInput;
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

function clear() {
    output.textContent = '0';
    operators = [];
    allowDot = true;
}

function undo(text) {
    let textLastIndex = text.length - 1;
    
    if (text[textLastIndex] === '.') {
        allowDot = true;
    }

    return textLastIndex < 1 ? '0' : text.substring(0, textLastIndex);
}

function isNumber(text) {
    return text && !isNaN(text);
}

function operate(screenText) {
    // Extract numbers from input
    let nums = screenText.split(/(-?\d+\.?\d*)/g).filter(isNumber);

    console.log('Operands: ' + nums);
    console.log('Operators: ' + operators);

    let result = Number(nums[0]);

    for (i = 1; i < nums.length; i++) {
        result = selectOperation(result, Number(nums[i]), operators[i-1]);
    }

    console.log(result);

    // Empty operators
    operators = [];

    // Round to up to 2 decimal places
    if (!isNaN(result)) {
        if (result % 1 != 0) {
            allowDot = false;
        }

        return Math.round((result + Number.EPSILON) * 100) / 100;
    } else {
        return 'Error';
    }
}

function selectOperation(operand1, operand2, operator) {
    if (operator === '+') {
        return operand1 + operand2;
    } else if (operator === 'x') {
        return operand1 * operand2;
    } else if (operator === '/') {
        return operand1 / operand2;
    } else {
        throw Error('Something went wrong with the operator!');
    }
}

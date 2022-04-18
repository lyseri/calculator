function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,operator,b) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
        return subtract(a,b);
    } else if (operator == "*") {
        return multiply(a,b);
    } else if (operator == "/") {
        return divide(a,b);
    }
}

function condenseInput(input) {
    numHolder = '';
    solveEquation = [];

    for (let i in input) {
        if (typeof input[i] == 'number') {
            numHolder += input[i];
            if (i == input.length - 1) {
                solveEquation.push(parseInt(numHolder));
                numHolder = '';
            }
        } else {
            solveEquation.push(parseInt(numHolder));
            solveEquation.push(input[i]);
            numHolder = '';
        }
    }
    return solveEquation;
} 

currentEquation = [];

const display = document.querySelector('#display');

// Operator and input arrays, looped eventListener
const inputButtons = document.querySelectorAll('.input');
const operatorButtons = document.querySelectorAll('.operator');

// Individual function buttons, unique eventListener
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const anwser = document.querySelector('#anwser');
const equals = document.querySelector('#equals');

// Collects inputs in currentEquation plus adds them to display
for (let i = 0; i < inputButtons.length; i++) {
    inputButtons[i].addEventListener('click', () => {
        display.textContent += inputButtons[i].textContent;
        currentEquation.push(parseInt(inputButtons[i].textContent))
    });
}

// Pushes currentNum to currentEquation and checks for valid preceeding character (a number)
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (typeof currentEquation[currentEquation.length-1] == 'number') {
            currentEquation.push(operatorButtons[i].textContent);
            display.textContent += operatorButtons[i].textContent;
        } else {
            return;
        }
    });
}

// Clears display and currentEquation
clear.addEventListener('click', () => {
    currentEquation = [];
    display.textContent = '';
});

// Removes last input
backspace.addEventListener('click', () => {
    last = currentEquation[currentEquation.length - 1];

    currentEquation.pop(last);
    display.textContent = display.textContent.slice(0,-1)
    console.log(currentEquation);
});

// Solves the equation with MDAS order of operation, and calls input condenser
equals.addEventListener('click', () => {
    placeholder = [];
    solveEquation = condenseInput(currentEquation);

    // Checks if last index is a number
    if (typeof solveEquation[solveEquation.length-1] == 'number') {
        // solves * or /
        for (let i = 0; i < solveEquation.length-1; i++) {
            if (solveEquation[i] == '*' || solveEquation[i] == '/') {
                first = solveEquation[i-1];
                second = solveEquation[parseInt(i)+1];
                operator = solveEquation[i];

                solveEquation.splice(parseInt(i)-1,3, operate(first,operator,second));
                i = 0;
            } else {
                continue;
            }
        }

        // Then solves for + or -
        for (let i = 0; i < solveEquation.length-1; i++) {
            if (solveEquation[i] == '+' || solveEquation[i] == '-') {
                first = solveEquation[i-1];
                second = solveEquation[parseInt(i)+1];
                operator = solveEquation[i];

                solveEquation.splice(parseInt(i)-1,3, operate(first,operator,second));
                i = 0;
            } else {
                continue;
            }
        }

        // Sets result as display and starts as first term in currentEquation
        display.textContent = solveEquation[0];
        currentEquation = [];
        string = solveEquation[0] + '';

        for (let i = 0; i < string.length; i++) {
            currentEquation.push(parseInt(string[i]));
        }
    }
});
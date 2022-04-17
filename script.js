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
        console.log(currentEquation);
    });
}

// Pushes currentNum to currentEquation and checks for valid preceeding character (a number)
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        if (typeof currentEquation[currentEquation.length-1] == 'number') {
            currentEquation.push(operatorButtons[i].textContent);
            display.textContent += operatorButtons[i].textContent;
            console.log(currentEquation);
        } else {
            return;
        }
    });
}

// Clears display and currentEquation
clear.addEventListener('click', () => {
    currentNum = '';
    currentEquation = [];
    display.textContent = '';
    console.log(currentEquation);
});

// Removes last input
backspace.addEventListener('click', () => {
    last = currentEquation[currentEquation.length - 1];

    currentEquation.pop(last);
    display.textContent = display.textContent.slice(0,-1)
    console.log(currentEquation);
});


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

function operate(a,b,operator) {
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

displayText = '';
calculator = {};
const display = querySelector('#display');

const buttons = document.querySelectorAll('button');

// Converts buttons array into object
for (let i = 0; i < buttons.length; i++) {
    calculator[buttons[i].getAttribute('id')] = buttons[i];
  }


for (let i in calculator) {
    i.addEventListener('click', () => {
        i  
    })
}
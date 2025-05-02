const add = function(nr1, nr2) {
	return nr1 + nr2;
};

const subtract = function(nr1, nr2) {
	return nr1 - nr2;
};

const multiply = function(nr1, nr2) {
    return nr1 * nr2;
};

const divide = function(nr1, nr2) {
    return nr1 / nr2;
};

let number1
let operator
let number2

const operate = function(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
        default:
            return 'Invalid operator';
    }
};

let clickedNumber = '';

function populateDisplay(value) {
    document.getElementById("result").value = value;
};

function clickButtonOld(value) {
    // If value is a digit or dot
    if(!isNaN(value) || '.' === value) {
        clickedNumber += value;
        populateDisplay(clickedNumber);
    }
    // If value is an operator
    else if(['+', '-', '*', '/'].includes(value)) {
        if(operator && clickedNumber !== '') {
            number2 = parseFloat(clickedNumber);
            const result = operate(operator, number1, number2);
            populateDisplay(result);
            number1 = result; // store result as the first number
        } else {
            number1 = parseFloat(clickedNumber);
        }
        operator = value;
        clickedNumber = '';
    }
    // If equals is pressed
    else if( value === '=') {
        if (operator && clickedNumber !== '') {
            number2 = parseFloat(clickedNumber);
            const result = operate(operator, number1, number2);
            populateDisplay(result);
        };
    }
    // Clear current input (C)
    else if(value === 'C') {
        clickedNumber = clickedNumber.slice(0, -1);
        populateDisplay(clickedNumber);
    }
    // All Clear (AC)
    else if(value === 'AC') {
        clickedNumber = '';
        populateDisplay('');
    }
};

document.querySelectorAll('input[type="button"]').forEach(button => {
    const value = button.value
    button.addEventListener("click", () => clickButton(value));
}
);

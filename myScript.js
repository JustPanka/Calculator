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

const operate = function(operator, number1, number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return subtract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            // Check for division by zero
            if (number2 === 0) {
                clearScreenAtNextNum = true;     
                return "Cannot divide by zero!"; 
            }
            return divide(number1, number2);
        default:
            return 'Invalid operator';
    }
};

function getDisplayValue() {
    var val = document.getElementById("display").value;
    if (val == '') {
        return undefined;
    } else {
        return val;
    }
};
function setDisplayValue(value) {
    if (typeof value === "string" && value.includes("Cannot divide by zero!")) {

    // round answers with long decimals so that they don’t overflow the display
    } else if (value.length > 17) {
        value = parseFloat(Number(value).toFixed(3));
    }
    document.getElementById("display").value = value;
};

let number1;
let operator;
let number2;
let lastButtonType;

let clearScreenAtNextNum = false;     // Clear the screen when a new number button is pushed?

function clickNum(num) {
    lastButtonType = 'number';

    // Clear screen and put new number on
    if (clearScreenAtNextNum === true) {
        setDisplayValue(num);
        clearScreenAtNextNum = false;

    // Append number
    } else {
        let currentVal = getDisplayValue();
        if (currentVal == undefined) {
            currentVal = '';
        }
        setDisplayValue(currentVal + num);
    }
};

function clickDot() {
    lastButtonType = 'dot';

    let currentVal = getDisplayValue();
    if (!currentVal.includes('.')) {
        setDisplayValue(currentVal + '.');
    }
};

function clickEquals() {
    lastButtonType = 'equals';

    number2 = getDisplayValue();

    // If user pressed = only
    if (number1 == undefined && operator == undefined) {
        return;

    // Num 1, num2 and operator is present
    } else if (number1 !== undefined && operator !== undefined && number2 !== undefined) {
        let result = operate(operator, number1, number2);
        setDisplayValue(result);

        // When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result.
        // Prepare for next operation
        number1 = undefined;
        number2 = undefined;
        operator = undefined;
        clearScreenAtNextNum = true;
    }
};

function clickOperator(op) {
    // Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. 
    if (lastButtonType == 'operator') {
        operator = op;
        return;
    }

    lastButtonType = 'operator';

    if (number1 == undefined) {
        number1 = getDisplayValue();
        if (number1 == undefined) return;   // User pressed operator with empty screen
        
        operator = op;
        clearScreenAtNextNum = true;

    } else {
        number2 = getDisplayValue();
        clickEquals();
        lastButtonType = 'operator';

        // Prepare for next operator click
        number1 = getDisplayValue();
        number2 = undefined;
        operator = op;

        clearScreenAtNextNum = true;
    }
};

function clickClear() {
    lastButtonType = 'clear';
    let currentVal = getDisplayValue();
    setDisplayValue(currentVal.slice(0, -1));
};

function clickAllClear() {
    lastButtonType = 'allclear';

    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    setDisplayValue('');
};

const values = ['7', '8', '9', 'C', 'AC', '4', '5', '6', '*', '/', '1', '2', '3', '+', '-', '0', '.', '=', 'Shift', 'Enter'];

document.getElementsByTagName("body").onkeypress = function() {keyboardSupport()};

function keyboardSupport() {

}


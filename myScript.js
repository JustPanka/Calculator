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
                return "Cannot divide by zero!"; // it is not written anymore
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
    // round answers with long decimals so that they don’t overflow the display
    if (value.length > 17) {
        value = parseFloat(Number(value).toFixed(3));
    }
    document.getElementById("display").value = value;
};

let number1;
let operator;
let number2;

let clearScreenAtNextNum = false;     // Clear the screen when a new number button is pushed?

function clickNum(num) {
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
    let currentVal = getDisplayValue();
    if (!currentVal.includes('.')) {
        setDisplayValue(currentVal + '.');
    }
};

function clickEquals() {
    number2 = getDisplayValue();

    // If user pressed = only
    if (number1 == undefined && operator == undefined) {
        return;

    // Num 1, num2 and operator is present
    } else if (number1 !== undefined && operator !== undefined && number2 !== undefined) {
        let result = operate(operator, number1, number2);
        setDisplayValue(result);

        // When a result is displayed, pressing a new digit should clear the result and start a new calculation instead of appending the digit to the existing result.

        // Prepare for next operation - division with 0 should display error message, not NaN
        number1 = undefined;
        number2 = undefined;
        operator = undefined;
    }
};

function clickOperator(op) {
    if (number1 == undefined) {
        number1 = getDisplayValue();
        if (number1 == undefined) return;   // User pressed operator with empty screen
        
        operator = op;
        clearScreenAtNextNum = true;

    } else {
        // Make sure that your calculator only runs an operation when supplied with two numbers and an operator by the user. 
        number2 = getDisplayValue();
        clickEquals();

        // Prepare for next operator click
        number1 = getDisplayValue();
        number2 = undefined;
        operator = op;

        clearScreenAtNextNum = true;
    }
};

function clickClear() {
    let currentVal = getDisplayValue();
    setDisplayValue(currentVal.slice(0, -1));
};

function clickAllClear() {
    number1 = undefined;
    number2 = undefined;
    operator = undefined;
    setDisplayValue('');
};


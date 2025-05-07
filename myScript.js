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
                return "Cannot divide by zero!";
            }
            return divide(number1, number2);
        default:
            return 'Invalid operator';
    }
};

function getDisplayValue() {
    return document.getElementById("display").value;
};
function setDisplayValue(value) {
    document.getElementById("display").value = value;
};


let number1;
let operator;
let number2;

let clearScreenAtNextNum = false;     // Clear the screen when a new number is pushed?

function clickNum(num) {
    // Clear screen and put new number on
    if (clearScreenAtNextNum === true) {
        setDisplayValue(num);
        clearScreenAtNextNum = false;

    // Append number
    } else {
        let currentVal = getDisplayValue();
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
    if (number1 == undefined && operator == undefined && number2 == '') {
        return; 

    // Num 1 and operator is present
    } else if (number1 !== undefined && operator !== undefined && number2 == undefined) {
        return;

    // Num 1, num2 and operator is present
    } else if (number1 !== undefined && operator !== undefined && number2 !== undefined) {
        let result = operate(operator, number1, number2);
        setDisplayValue(result);

        // Prepare for next operation
        number1 = result;
        number2 = undefined;
    }
};

// TODO NEXT STEP
// Sequence: 1+3*2 a számológépnek 6-al egyenlő, pedig 8. MIÉRT?



function clickOperator(op) {
    if (number1 == undefined) {
        number1 = getDisplayValue();
    } else {
        number2 = getDisplayValue();
    }

    operator = op;

    // If user pressed operator only
    if (number1 == '' && number2 == undefined && operator !== undefined) {
        return;

    // Num 1 and operator are present
    } else if (number1 !== '' && number2 == undefined && operator !== undefined) {
        clearScreenAtNextNum = true;

    // Num 1, num2 and operator are present
    } else if (number1 !== '' && number2 !== undefined && operator !== undefined) {
        clickEquals();
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


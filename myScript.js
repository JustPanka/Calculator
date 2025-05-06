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

let operatorPushed = false;     // Was the last button an operator?

function clickNum(num) {
    if (operatorPushed == false) {
        let currentVal = getDisplayValue();
        setDisplayValue(currentVal + num);

    } else {
        setDisplayValue(num);
        operatorPushed = false;
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
    if (number1 == undefined && number2 == undefined && operator == undefined) {
        return;

    // Num 1 and operator is present
    } else if (number1 !== undefined && number2 == undefined && operator !== undefined) {
        return;

    // Num 1, num2 and operator is present
    } else if (number1 !== undefined && number2 !== undefined && operator !== undefined) {
        let result = operate(operator, number1, number2);
        setDisplayValue(result);
    }   
};

function clickOperator(op) {
    number1 = getDisplayValue();
    operator = op;

    // If user pressed operator only
    if (number1 == undefined && number2 == undefined && operator !== undefined) {
        return;

    // Num 1 and operator is present
    } else if (number1 !== undefined && number2 == undefined && operator !== undefined) {
        operatorPushed = true;
        setDisplayValue(number1);

    // Num 1, num2 and operator is present
    } else if (number1 !== undefined && number2 !== undefined && operator !== undefined) {
        setDisplayValue(number2);
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


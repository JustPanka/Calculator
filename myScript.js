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



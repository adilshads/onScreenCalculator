/** Variables */
let currentExpression = '';
let currentNumber = '';
let num1; 
let num2; 
let operator; 

/** FUNCTIONS FOR ALL BUTTONS */
function updateDisplay(button) {
  const buttonValue = button.textContent;
  const display = document.getElementById('display');

  if (button.classList.contains('numbers')) {
    currentNumber += buttonValue;
    display.textContent = currentNumber;
  } else if (buttonValue === '=') {
    num2 = parseFloat(currentNumber);
    const result = operate(operator, num1, num2);
    display.textContent = result;
    currentNumber = result.toString(); // Convert the result to a string for concatenation
    num1 = result; // Set the result as the new num1
  } else {
    if (currentNumber !== '') {
      num1 = parseFloat(currentNumber);
      currentNumber = '';
    }
    operator = buttonValue;
    currentNumber = '';
  }
}


function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    default:
      throw new Error('Invalid operator');
  }
}


function resetValues() {
  currentExpression = '';
  currentNumber = '';
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
}

/** Functions for handling basic arithmatic */

// Operate on numbers from user input 

function operate(operator, num1, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        throw new Error('Invalid operator');
    }
  }
  
  
// Addition
function add(a, b) {
    return a + b;
  }
  
// Subtraction
  function subtract(a, b) {
    return a - b;
  }
  
// Multiplication
  function multiply(a, b) {
    return a * b;
  }
  
// Division
function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero'); // Handle dividing by zero.
    }
    return a / b;
  }
  


/** Everything below this is for testing using Jest */

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate, 
    updateDisplay,
  };
  
  
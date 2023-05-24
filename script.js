/** Variables */
let currentExpression = '';
let currentNumber = '';
let num1; 
let num2; 
let operator; 


/** Functions for Display Screen */

function updateDisplay(button) {
  const buttonValue = button.textContent;
  const display = document.getElementById('display');

  if (button.classList.contains('numbers') || buttonValue === '.') {
    // Append decimal point only if currentNumber doesn't already contain one
    if (buttonValue === '.' && currentNumber.includes('.')) {
      return; // Don't append multiple decimal points
    }

    if (currentNumber === '0' && buttonValue === '.') {
      currentNumber = '0.'; // Update currentNumber to '0.' when appending decimal to '0'
    } else {
      currentNumber += buttonValue; // Append the button value to currentNumber
    }

    display.textContent = currentNumber;
  } else if (buttonValue === '=') {
    num2 = parseFloat(currentNumber);
    const result = operate(operator, num1, num2);
    display.textContent = result;
    currentNumber = result.toString();
    num1 = result;
  } else {
    if (currentNumber !== '') {
      num1 = parseFloat(currentNumber);
      currentNumber = '';
    }
    operator = buttonValue;
    currentNumber = '';
  }
}




function resetValues() {
  currentExpression = '';
  currentNumber = '';
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
}


/** Function for Positive Negative Toggle Button */

const negativeButton = document.getElementById('negativeButton');
negativeButton.addEventListener('click', toggleNegative);

function toggleNegative() {
  const display = document.getElementById('display');
  if (currentNumber === '') {
    return; // No current number to toggle the sign
  }

  if (currentNumber.startsWith('-')) {
    // Make the number positive
    currentNumber = currentNumber.slice(1);
  } else {
    // Make the number negative
    currentNumber = '-' + currentNumber;
  }

  display.textContent = currentNumber;
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
  
  
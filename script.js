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
    updateSecondaryDisplay();
  } else if (buttonValue === '=') {
    num2 = parseFloat(currentNumber);
    const result = operate(operator, num1, num2);
    display.textContent = formatResult(result);
    currentNumber = result.toString();
    num1 = result;
    clearSecondaryDisplay();
  } else if (buttonValue === '²') {
    num1 = parseFloat(currentNumber);
    const result = square(num1);
    display.textContent = formatResult(result);
    currentNumber = result.toString();
    num1 = result;
    operator = undefined;
    num2 = undefined;
    updateSecondaryDisplay();
  } else if (buttonValue === '√') {
    num1 = parseFloat(currentNumber);
    if (num1 < 0) {
      display.textContent = 'Error';
      currentNumber = '';
      num1 = undefined;
      operator = undefined;
      num2 = undefined;
    } else {
      const result = squareRoot(num1);
      display.textContent = formatResult(result);
      currentNumber = result.toString();
      num1 = result;
      operator = undefined;
      num2 = undefined;
      updateSecondaryDisplay();
    }
  } else {
    if (currentNumber !== '') {
      num1 = parseFloat(currentNumber);
      currentNumber = '';
    }
    operator = buttonValue;
    currentNumber = '';
    updateSecondaryDisplay();
  }
}

function updateSecondaryDisplay() {
  const secondaryDisplay = document.getElementById('secondary-display');
  let expression = '';

  if (num1 !== undefined) {
    expression += num1;
  }

  if (operator !== undefined) {
    expression += ` ${operator}`;
  }

  if (currentNumber !== '') {
    expression += ` ${currentNumber}`;
  }

  secondaryDisplay.textContent = expression;
}

function clearSecondaryDisplay() {
  const secondaryDisplay = document.getElementById('secondary-display');
  secondaryDisplay.textContent = '';
}

// Rounds answer to the 4th decimal. 
function formatResult(result) {
  const roundedResult = Math.round(result * 10000) / 10000; // Round the result to 4 decimal places
  if (Number.isInteger(roundedResult)) {
    // If the rounded result is an integer, display it as is
    return roundedResult.toString();
  } else {
    return roundedResult.toFixed(4); // Convert the rounded result to a string with a maximum of 4 decimal places
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
      if (num2 === 0) {
        displayError('Cannot divide by zero');
        return; // Stop further calculation
      }
      return divide(num1, num2);
    case '²':
      return square(num1);
    case '√':
      if (num1 < 0) {
        displayError('Cannot calculate square root of a negative number');
        return; // Stop further calculation
      }
      return squareRoot(num1);
    default:
      throw new Error('Invalid operator');
  }
}

function displayError(message) {
  const display = document.getElementById('display');
  display.textContent = message;
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

// Square
function square(a) {
  return a * a;
}

// Square root
function squareRoot(a) {
  if (a < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(a);
}



/** Everything below this is for testing using Jest */

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operate, 
    updateDisplay,
    square,
    squareRoot,
  };
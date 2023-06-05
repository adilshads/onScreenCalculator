/** Variables */
let currentExpression = '';
let currentNumber = '';
let num1; 
let num2; 
let operator; 

/** Functions for Display Screens */

// Handles display screen
function updateDisplay(button) {
  const buttonValue = button.textContent;
  const display = document.getElementById('display');

  if (buttonValue === 'Delete') {
    deleteInput();
    display.textContent = currentNumber;
  } else if (button.classList.contains('numbers') || buttonValue === '.') {
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
    performCalculation();
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
      num2 = parseFloat(currentNumber);
      if (operator && num1 !== undefined && num2 !== undefined) {
        performCalculation();
      } else {
        num1 = num2;
      }
    }
    operator = buttonValue;
    currentNumber = '';
    updateSecondaryDisplay();
  }
}

// Perform the calculation when equal button is clicked
function performCalculation() {
  if (num1 !== undefined && operator !== undefined && currentNumber !== '') {
    num2 = parseFloat(currentNumber);
    const result = operate(operator, num1, num2);
    const display = document.getElementById('display');
    display.textContent = formatResult(result);
    currentNumber = result.toString();
    num1 = result;
    operator = undefined;
    num2 = undefined;
    clearSecondaryDisplay();
  }
}

// Handles secondary screen display 
function updateSecondaryDisplay() {
  const secondaryDisplay = document.getElementById('secondary-display');
  let expression = '';

  if (num1 !== undefined) {
    expression += num1;
  }

  if (operator !== undefined) {
    expression += ` ${operator}`;
  }

  if (currentNumber !== '' && operator !== '²' && operator !== '√') {
    if (operator !== undefined) {
      expression += ` ${currentNumber}`;
    } else {
      expression = currentNumber;
    }
  }

  secondaryDisplay.textContent = expression;
}

// Clears secondary display 
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

// Clear Button 

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
  // Reset all variables
  currentExpression = '';
  currentNumber = '';
  num1 = undefined;
  num2 = undefined;
  operator = undefined;

  // Clear the display
  const display = document.getElementById('display');
  display.textContent = '0';

  // Clear the secondary display
  clearSecondaryDisplay();
}


/** Function for Positive Negative Toggle Button */
function toggleNegative() {
  const display = document.getElementById('display');
  
  if (currentNumber === '') {
    // If there is no current number, assume 0 and toggle its sign
    currentNumber = '0';
  } else {
    if (currentNumber.startsWith('-')) {
      // Make the number positive
      currentNumber = currentNumber.slice(1);
    } else {
      // Make the number negative
      currentNumber = '-' + currentNumber;
    }
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

/** Add Keyboard Functionality */

function handleKeyboardInput(event) {
  const key = event.key;

  switch (key) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      appendNumber(key);
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '^':
    case 'r':
      updateDisplay(document.querySelector(`button[data-key="${key}"]`));
      break;
    case '=':
    case 'Enter':
      performCalculation();
      break;
    case 'Backspace':
      deleteNumber();
      break;
    case 'Escape':
      clearCalculator();
      break;
    case 'n':
      toggleNegative();
      break;
    default:
      break;
  }
}


// Attach event listener to window for keyboard input
window.addEventListener('keydown', handleKeyboardInput);

// Append number to the current input
function appendNumber(number) {
  currentNumber += number;
  display.textContent = currentNumber;
  updateSecondaryDisplay();
}

// Delete the last character from the current input
function deleteNumber() {
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber;
    updateSecondaryDisplay();
  }
}

// Set the operator based on the key pressed
function setOperation(key) {
  const operatorButtons = document.querySelectorAll('.operators');
  let operator = key === '*' ? '*' : key === '/' ? '/' : key;

  // Remove the active class from all operator buttons
  operatorButtons.forEach(button => {
    button.classList.remove('active');
  });

  // Add the active class to the button corresponding to the pressed operator key
  const pressedOperatorButton = document.querySelector(`button[data-key="${operator}"]`);
  pressedOperatorButton.classList.add('active');

  operator = key;
  updateSecondaryDisplay();
}

// Evaluate the expression
function evaluate() {
  if (num1 === undefined || operator === undefined || currentNumber === '') {
    return; // Not enough information to perform evaluation
  }

  num2 = parseFloat(currentNumber);
  const result = operate(operator, num1, num2);
  display.textContent = formatResult(result);
  currentNumber = result.toString();
  num1 = result;
  clearSecondaryDisplay();
}

// Clear the calculator
function clear() {
  currentExpression = '';
  currentNumber = '';
  num1 = undefined;
  num2 = undefined;
  operator = undefined;
  display.textContent = '0';
  clearSecondaryDisplay();
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
/** Variables */

let num1; 
let num2; 
let operator; 

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
  };
  
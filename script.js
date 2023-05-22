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
  
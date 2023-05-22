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
      // Handle division by zero
      return "Cannot divide by zero!";
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
  
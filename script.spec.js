/**
 * @jest-environment jsdom
 */


/** TESTS FOR ADD FUNCTION. */

// Import or require the add function from your script
const { add } = require('./script');

// Test case 1: Add positive numbers
test('Add positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

// Test case 2: Add negative numbers
test('Add negative numbers', () => {
  expect(add(-5, -2)).toBe(-7);
});

// Test case 3: Add positive and negative numbers
test('Add positive and negative numbers', () => {
  expect(add(10, -7)).toBe(3);
});

// Test case 4: Add zero
test('Add zero', () => {
  expect(add(5, 0)).toBe(5);
});

// Test case 5: Add floating-point numbers
test('Add floating-point numbers', () => {
  expect(add(2.5, 1.3)).toBeCloseTo(3.8);
});

// Test case 6: Add large numbers
test('Add large numbers', () => {
  expect(add(9999999999999999, 1)).toBe(10000000000000000);
});


/** TEST FOR SUBTRACT FUNCTION. */

const { subtract } = require('./script');

// Test case 1: Subtract positive numbers
test('Subtract positive numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

// Test case 2: Subtract negative numbers
test('Subtract negative numbers', () => {
  expect(subtract(-5, -2)).toBe(-3);
});

// Test case 3: Subtract positive and negative numbers
test('Subtract positive and negative numbers', () => {
  expect(subtract(10, -7)).toBe(17);
});

// Test case 4: Subtract zero
test('Subtract zero', () => {
  expect(subtract(5, 0)).toBe(5);
});

// Test case 5: Subtract floating-point numbers
test('Subtract floating-point numbers', () => {
  expect(subtract(2.5, 1.3)).toBeCloseTo(1.2);
});

// Test case 6: Subtract large numbers
test('Subtract large numbers', () => {
  expect(subtract(10000000000000000, 1)).toBe(9999999999999999);
});

/** TEST FOR MULTIPLY FUNCTION. */

const { multiply } = require('./script');

// Test case 1: Multiply positive numbers
test('Multiply positive numbers', () => {
  expect(multiply(5, 3)).toBe(15);
});

// Test case 2: Multiply negative numbers
test('Multiply negative numbers', () => {
  expect(multiply(-5, -2)).toBe(10);
});

// Test case 3: Multiply positive and negative numbers
test('Multiply positive and negative numbers', () => {
  expect(multiply(10, -7)).toBe(-70);
});

// Test case 4: Multiply by zero
test('Multiply by zero', () => {
  expect(multiply(5, 0)).toBe(0);
});

// Test case 5: Multiply floating-point numbers
test('Multiply floating-point numbers', () => {
  expect(multiply(2.5, 1.3)).toBeCloseTo(3.25);
});

// Test case 6: Multiply large numbers
test('Multiply large numbers', () => {
  expect(multiply(9999999999999999, 2)).toBe(19999999999999998);
});

/** TESTS FOR DIVIDE FUNCTION. */

const { divide } = require('./script');

// Test case 1: Divide positive numbers
test('Divide positive numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

// Test case 2: Divide negative numbers
test('Divide negative numbers', () => {
  expect(divide(-10, -2)).toBe(5);
});

// Test case 3: Divide positive and negative numbers
test('Divide positive and negative numbers', () => {
  expect(divide(10, -2)).toBe(-5);
});

// Test case 4: Divide by zero
test('Divide by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

// Test case 5: Divide floating-point numbers
test('Divide floating-point numbers', () => {
  expect(divide(3.5, 1.4)).toBeCloseTo(2.5);
});

// Test case 6: Divide large numbers
test('Divide large numbers', () => {
  expect(divide(9999999999999999, 2)).toBe(4999999999999999.5);
});


/** Test for OPERATE function  */

const { operate } = require('./script');

// Addition
test('Addition: 2 + 3 = 5', () => {
  expect(operate('+', 2, 3)).toBe(5);
});

// Subtraction
test('Subtraction: 5 - 2 = 3', () => {
  expect(operate('-', 5, 2)).toBe(3);
});

// Multiplication
test('Multiplication: 4 * 3 = 12', () => {
  expect(operate('*', 4, 3)).toBe(12);
});

// Division
test('Division: 10 / 2 = 5', () => {
  expect(operate('/', 10, 2)).toBe(5);
});

// Invalid operator
test('Invalid Operator: %', () => {
  expect(() => operate('%', 5, 2)).toThrow('Invalid operator');
});


/** Test updateDisplay function. */


// Import or require the necessary functions from your script
const { updateDisplay } = require('./script');

// Mock the necessary elements and functions
document.getElementById = jest.fn().mockReturnValue({
  classList: {
    contains: jest.fn().mockReturnValue(false)
  },
  textContent: ''
});
const button = { textContent: '=' };

// Test case: Button click with '='

test('Button click with "=" should update the display', () => {
  // Create a mock button element with a classList containing 'numbers'
  const button = {
    classList: {
      contains: jest.fn().mockReturnValue(true) // Mocking contains to return true
    }
  };

  // Call the updateDisplay function with the mock button and '=' value
  updateDisplay(button, '=');

  // Assertions
  expect(button.classList.contains).toHaveBeenCalledWith('numbers');
  // Additional assertions for other parts of the function
});

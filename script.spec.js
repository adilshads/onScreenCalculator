/** Tests for add function. */

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


/** Test for Subtract function. */

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

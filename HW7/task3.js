function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Both arguments must be numbers");
  }
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }
  return numerator / denominator;
}

const testCases = [
  [10, 2],
  [9, 3],
  [5, 0],         
  [7, "hello"],    
];

testCases.forEach(([a, b]) => {
  try {
    const result = divide(a, b);
    console.log(`Result of ${a} / ${b} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log("Робота завершена\n");
  }
});
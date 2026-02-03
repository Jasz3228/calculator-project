// Variables for each part of the operation

let firstNum = "";
let secondNum = "";
let operator = "";


// Create functions for basic math operator +, -, *, /,

function add(a, b) {
 return a + b;
};
 
function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
 return a * b;
};

function divide(a, b) {
  if (b === 0) {
    return "ERROR";
  }
  return a / b;
};


// Operate function that takes an operator and two numbers then calls one of the above functions on the numbers.

function operate(firstNum, operator, secondNum) {
  // Convert strings to numbers
  const a = Number(firstNum);
  const b = Number(secondNum);
  
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid Operator"
  }
};


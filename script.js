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

// Selecting the elements. Displaying the numbers 
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (display.textContent === "0") {
      display.textContent = button.textContent;
    } else {
      display.textContent += button.textContent;
    }
  });
});

// Handling the operator click

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    firstNum = display.textContent; // Saves the current display to firstNum
    operator = button.textContent; // Saves the button to the operator variable
    display.textContent = "0" // Resets the display for second num
  });
});

// Making the equalsButton function.

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {
  secondNum = display.textContent;
  const result = operate(firstNum, operator, secondNum);
  display.textContent = result;

  firstNum = result;
  secondNum = "";
});

// Making the clear button function.

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.textContent = "0";
});
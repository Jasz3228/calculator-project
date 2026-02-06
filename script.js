// Variables for each part of the operation
let shouldResetDisplay = false;
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

function operate(n1, op, n2) {
  // Convert strings to numbers
  const a = Number(n1);
  const b = Number(n2);

  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return b === 0 ? "NOPE" : divide(a, b);
    default:
      return "Invalid Operator"
  }
};

// Selecting the elements. Displaying the numbers 
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (display.textContent.length < 18) {
      if (shouldResetDisplay) {
        display.textContent = button.textContent;
        shouldResetDisplay = false;
      } else if (display.textContent === "0") {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
});

// Handling the operator click

const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (firstNum !== "" && operator !== "" && !shouldResetDisplay) {
      secondNum = display.textContent;
      const result = operate(firstNum, operator, secondNum);
      display.textContent = result;
      firstNum = result;
    } else {
      firstNum = display.textContent;
    }

    operator = button.textContent; 
    shouldResetDisplay = true;
  });
});

// Making the equalsButton function.

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", () => {
  secondNum = display.textContent;
  let result = operate(firstNum, operator, secondNum);

  if (result === "NOPE") {
    display.textContent = result; 
    firstNum = "";
    secondNum = "";
    operator = "";
    return;
  }

  result = Math.round(result * 10000) / 10000;
  display.textContent = result;
  firstNum = result;
  operator = "";
  secondNum = "";
  shouldResetDisplay = true;
  
  
});

// Making the clear button function.

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", () => {
  firstNum = "";
  secondNum = "";
  operator = "";
  display.textContent = "0";
});

// Decimal click listener

const decimalButton = document.querySelector("#decimal");

decimalButton.addEventListener("click", () => {
  if (shouldResetDisplay) {
    display.textContent = "0.";
    shouldResetDisplay = false;
    return;
  }

  if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});  

// delete button 

const deleteButton = document.querySelector("#delete");

deleteButton.addEventListener("click", () => {
  if(display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1); 
  } else {
    display.textContent = "0";
  }
});

// Adding keyboard logic

window.addEventListener("keydown", (e) => {
  let key = e.key;

  if (key === "Enter") key = "=";
  if (key === "Backspace") {
    deleteButton.click();
    return;
  }
  if (key === "Escape") {
    clearButton.click();
    return
  }
  if (key === "*") key = "x";

  const button = Array.from(document.querySelectorAll("button")).find(
    (btn) => btn.textContent === key);

  if (button) {
    button.click();
  }
});
// Create functions for basic math operator +, -, *, /,

function add(...nums) {
  const sum = nums.reduce((accumulator, current) => accumulator + current, 0);

  return sum;
};
 
function subtract(...nums) {
  const difference = nums.reduce((accumulator, current) => accumulator - current);

  return difference;
}

function multiply(...nums) {
  const product = nums.reduce((accumulator, current) => accumulator * current);
  
  return product;
}

function divide(...nums) {
  const quotient = nums.reduce((accumulator, current) => accumulator / current);

  return quotient;
}
console.log(add(50, 50, 50,100));

console.log(subtract(10, 2,5));

console.log(multiply(5,2,5));

console.log(divide(100, 2, 2));
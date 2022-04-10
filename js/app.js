// get HTML elements
const display = document.querySelector(`.display`);
const numbers = document.querySelectorAll(`.number`);
const operator = document.querySelectorAll(`.operator`);
const decimal = document.querySelector(`.decimal`);
const clear = document.querySelector(`.clear`);

//
let total = 0;
let a = '';
let b = '';
let currentOperator = '';
let lastOperator = '';
let haveDot = false;

//click
numbers.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.textContent === '.' && !haveDot) {
      haveDot = true;
    } else if (button.textContent === '.' && haveDot) {
      return;
    }
    b += button.textContent;
    display.textContent = b;
  });
});


operator.forEach((button) => {
  button.addEventListener('click', () => {
    if(a && b && lastOperator){
      currentOperator = button.textContent;
      operate(lastOperator, a, b);
    } else {
      currentOperator = button.textContent
      total = b;
    }  
    clearVar();
    console.log(total)  
  });
});

function clearVar() {
  display.textContent = total;
  a = total;
  b = '';
  lastOperator = currentOperator;
  haveDot = false;
}

clear.addEventListener('click', () => {
  display.textContent = "";
  a = '';
  b = '';
  total = 0;
  haveDot = false;
});

// calculations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = function(a, b) {
  if (b == 0) {
    return `ERROR`;
  } else
    return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case `+`:
      total = add(a, b);
      break;
    case `-`:
      total = subtract(a, b);
      break;
    case `x`:
      total = multiply(a, b);
      break;
    case `/`:
      total = divide(a, b);
      break;
    default:
      total = `ERROR`
  };
}

// get HTML elements
const display = document.querySelector(`.display`);
const numbers = document.querySelectorAll(`.number`);
const operator = document.querySelectorAll(`.operator`);
const decimal = document.querySelector(`.decimal`);
const clear = document.querySelector(`.clear`);
const backspace = document.querySelector(`.backspace`);
const equals = document.querySelector(`.equals`);


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
    case `*`:
      total = multiply(a, b);
      break;
    case `/`:
      total = divide(a, b);
      break;
    default:
      total = `ERROR`
  };
}

backspace.addEventListener(`click`, () => {
  if (b.slice(-1) === '.') {
    haveDot = false;
  }
  b = b.slice(0, -1);
  display.textContent = b;
});


equals.addEventListener('click', () => {
  if(a && b && lastOperator){
     operate(lastOperator, a, b);
   } else {
     return;
   }  
   clearVar();
});

window.addEventListener('keydown', (e) => {
  if(
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'   
  ){
    clickbutton(e.key);
  } else if(
    e.key === `*` ||
    e.key === `+` ||
    e.key === `-` ||
    e.key === `/`    
  ) {
    clickOperation(e.key);
  } else if(e.key == `Enter` || e.key == `=`) {
    clickEqual();
  } else if (e.key == `Backspace`) {
    clickBackspace();
  }
})

function clickbutton(key){
  numbers.forEach( button => {
    if(button.textContent === key) {
      button.click();
    }
  })
}

function clickOperation(key){
  operator.forEach( button => {
    if(button.textContent === key) {
      button.click();
    }
  })
}

function clickEqual(){
  equals.click()
}

function clickBackspace(){
  backspace.click()
}
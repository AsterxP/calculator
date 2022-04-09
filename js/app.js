// display
const display = document.querySelector(`.display`);

//click
const buttons = document.querySelectorAll(`.btn`)
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.TextContent);
    display.textContent = button.textContent;
  });
});

// calculations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, c) {
  if(!Number.isInteger(a) || !Number.isInteger(c)) {
    return 'ERROR'
  } else {
    answer = 0;
    switch (b) {
      case `+`:
        answer = add(a, c);
        break;
      case `-`:
        answer = subtract(a, c);
        break;
      case `*`:
        answer = multiply(a, c);
        break;
      case `/`:
        answer = divide(a, c);
        break;
      default:
        answer = `ERROR`
    }
    display.textContent = answer;
  }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

let currentInput = "";
let operator = "";
let firstNumber = null;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.dataset.value;

    if (value === "C") {
      currentInput = "";
      operator = "";
      firstNumber = null;
      display.value = "";
    } else if (value === "=") {
      if (firstNumber !== null && operator !== "") {
        currentInput = calculate(firstNumber, currentInput, operator);
        display.value = currentInput;
        firstNumber = null;
        operator = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (firstNumber === null) {
        firstNumber = currentInput;
        currentInput = "";
        operator = value;

        display.value = firstNumber + " " + operator;
      } else {
        currentInput = currentInput.slice(0, -1);
        operator = value;
        currentInput += operator;
        display.value = firstNumber + " " + operator + " " + currentInput;
      }
    } else {
      currentInput += value;

      if (firstNumber !== null) {
        display.value = firstNumber + " " + operator + " " + currentInput;
      } else {
        display.value = currentInput;
      }
    }
  });
});

function calculate(firstNumber, secondNumber, operator) {
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    default:
      return secondNumber;
  }
}

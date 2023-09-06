let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let resetScreen = false

const numBtn = document.querySelectorAll("[num]");
const operatorBtn = document.querySelectorAll("[operator]");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const pointBtn = document.getElementById("point");
const resultScreen = document.getElementById("result-screen");
const inputScreen = document.getElementById("input-screen");

window.addEventListener("keydown", handleKeyStroke);

numBtn.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

clearBtn.addEventListener("click", () => clearScreen())

function resetResultScreen() {
  inputScreen.textContent = ''
  resetScreen = false
}

function clearScreen() {
  console.log('clear')
  resultScreen.textContent = ''
  inputScreen.textContent = '0'
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function appendNumber(number) {
  if (inputScreen.textContent === '0' || resetScreen){
    console.log(resetScreen)
    resetResultScreen()
  }
  inputScreen.textContent += number
}

function handleKeyStroke(e) {
  if (e.key >=  0 && e.key <= 9){
    appendNumber(e.key)
  } 
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

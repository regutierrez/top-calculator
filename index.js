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

operatorBtn.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

equalsBtn.addEventListener("click", () => evaluateExpression())
clearBtn.addEventListener("click", () => clearScreen())
deleteBtn.addEventListener("click", () => deleteNumber())
pointBtn.addEventListener("click", () => appendPoint())

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

  if (e.key === '.') appendPoint()

  if (e.key === 'Backspace') deleteNumber()
}

function appendPoint() {
  if (resetScreen) resetResultScreen()
  if (inputScreen.textContent.includes('.')) return
  inputScreen.textContent += '.'
}

function deleteNumber() {
  if (inputScreen.textContent.length == 1) {
    inputScreen.textContent = '0'
  } else {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1)
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

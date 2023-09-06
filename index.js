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
  button.addEventListener("click", () => setoperation(button.textContent))
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
  resultScreen.textContent = ''
  inputScreen.textContent = '0'
  firstOperand = ''
  secondOperand = ''
  currentOperation = null
}

function appendNumber(number) {
  if (inputScreen.textContent === '0' || resetScreen){
    resetResultScreen()
  }
  inputScreen.textContent += number
}


function roundResult(number) {
  return Math.round(number * 1000) / 1000
}

function handleKeyStroke(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
  if (e.key === '.') appendPoint()
  if (e.key === '=' || e.key === 'Enter') evaluateExpression()
  if (e.key === 'Backspace') deleteNumber()
  if (e.key === 'Escape') clearScreen()
  if (e.key === '+' || e.key === '-' || e.key === 'x' || e.key === '/') 
    setOperation(convertOperator(e.key))
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

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '÷'
  if (keyboardOperator === '*') return 'x'
  if (keyboardOperator === '-') return '-'
  if (keyboardOperator === '+') return '+'
}

function setoperation(operator) {
  currentOperation = operator 
  firstOperand = inputScreen.textContent
  resultScreen.textContent = `${firstOperand} ${currentOperation}`
  resetScreen = true
}

function evaluateExpression() {
  if (currentOperation === null || resetScreen) return
  if (currentOperation === '÷' && inputScreen.textContent === '0') {
    alert("Warning! Division by zero!")
    return
  }
  secondOperand = inputScreen.textContent
  inputScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  )
  resetScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
  currentOperation = null
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

function operate(operator, x, y) {
  x = Number(x)
  y = Number(y)
  switch (operator) {
    case '+':
      return add(x, y)
    case '-':
      return subtract(x, y)
    case 'x':
      return multiply(x, y)
    case '÷':
      if (x === 0) return null
      else return divide(x, y)
    default:
      return null
  }
}
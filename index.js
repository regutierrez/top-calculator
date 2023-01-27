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

function appendNumber(num) {
  if (inputScreen.textContent === "0") resetScreen;
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

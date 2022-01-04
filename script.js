let operator = "";
let storedNumber = [];
let currentNumber = [];
let total = "";
const numberBtn = document.querySelectorAll(".numbers");
const bottomDisplay = document.querySelector(".currentNumber");
const topDisplay = document.querySelector(".previousNumber");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const remainderBtn = document.querySelector("#remainder")
const opsBtn = document.querySelectorAll(".ops");
// const pressedOperator = Array.from(document.querySelectorAll("#ops"))

function calculate(storedNumber, currentNumber, operator) {
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "÷": (a, b) => b === 0 ? "Error, can't divide by 0" : a / b,
        "%": (a, b) => a % b
    }
     return operator in operators ? operators[operator](parseInt(storedNumber), parseInt(currentNumber)) : NaN; 
}

function pullNumber() {
    let num = this.textContent;
    bottomDisplay.textContent += num;
    currentNumber += num;
    console.log(currentNumber);
}

function pickOperator() {
    operator = this.textContent;
    storedNumber = currentNumber;
    currentNumber = [];
    bottomDisplay.textContent = "";
    topDisplay.textContent = `${storedNumber} ${operator}`;
    console.log(operator);
}

function calculatingTotal() {
    total = calculate(storedNumber, currentNumber, operator);
    bottomDisplay.textContent = total;
    topDisplay.textContent = `${storedNumber} ${operator} ${currentNumber}`
    currentNumber = total;
    currentNumber = "";
    operator = "";
}

function clear() {
    operator = [];
    storedNumber = [];
    currentNumber = [];
    total = 0;
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
}

function erase() {

}

function decimal() {

}

numberBtn.forEach((number) => {
    number.addEventListener("click", pullNumber);
 });

 opsBtn.forEach((op) => {
    op.addEventListener("click", pickOperator);
 });

equalBtn.addEventListener("click", calculatingTotal);
clearBtn.addEventListener("click", clear);
// decimalBtn.addEventListener("click", decimal);
// deleteBtn.addEventListener("click", erase);
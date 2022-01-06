let operator = "";
let num = "";
let storedNumber = [];
let currentNumber = [];
let total = 0;
const numberBtn = document.querySelectorAll(".numbers");
const bottomDisplay = document.querySelector(".currentNumber");
const topDisplay = document.querySelector(".previousNumber");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimal");
const deleteBtn = document.querySelector("#deleteBtn");
const remainderBtn = document.querySelector("#remainder")
const opsBtn = document.querySelectorAll(".ops");

function calculate(storedNumber, currentNumber, operator) {
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "÷": (a, b) => b === 0 ? "Error, can't divide by 0" : a / b,
        "%": (a, b) => a % b
    }
     return operator in operators ? operators[operator](Number(storedNumber), Number(currentNumber)) : NaN; 
}

function inputTotal() {
    if(!operator == false){
        total = calculate(storedNumber, currentNumber, operator);
        bottomDisplay.textContent = total;
        topDisplay.textContent = `${storedNumber} ${operator} ${currentNumber}`;
        currentNumber = total;
        operator = "";
    }
}

function inputOperator() {
    storedNumber = currentNumber;
    currentNumber = [];
    bottomDisplay.textContent = "";
    topDisplay.textContent = `${storedNumber} ${operator}`;
    total = 0;
}

function inputNumbers() {
    // removeLeadingZeros(currentNumber);
    currentNumber += num;
    topDisplay.textContent = `${storedNumber} ${operator}`;
    bottomDisplay.textContent = currentNumber;
}

// function removeLeadingZeros(currentNumber) {
//     let floatNum = parseFloat(currentNumber);
//     return floatNum % 1 == 0 ? floatNum.toFixed(0) : floatNum.toFixed(1);
// }

function pullNumber() {
    if(!total === false) {
        clear();
        num = this.textContent;
        inputNumbers();
    }  else {
        num = this.textContent;
        inputNumbers();
    }
}

function pickOperator() {
    if(!operator == false) {
        inputTotal();
        operator = this.textContent;
        inputOperator();
    } else {
        operator = this.textContent;
        inputOperator();
    }
    console.log(storedNumber);
    console.log(currentNumber);
    console.log(operator);
}

function clear() {
    operator = "";
    storedNumber = [];
    currentNumber = [];
    total = 0;
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
}

function del() {
    currentNumber = currentNumber.slice(0, -1);
    bottomDisplay.textContent = currentNumber;
    console.log(currentNumber);
}

function decimal() {
    let decimalClicked = this.textContent;
    if(currentNumber.includes(decimalClicked) == false) {
        if(currentNumber == 0 ) {
            currentNumber = "0" + decimalClicked;
        }
        currentNumber += decimalClicked;
        bottomDisplay.textContent = currentNumber;
    }
}

numberBtn.forEach(number => number.addEventListener("click", pullNumber));
opsBtn.forEach(op => op.addEventListener("click", pickOperator));
equalBtn.addEventListener("click", inputTotal);
clearBtn.addEventListener("click", clear);
decimalBtn.addEventListener("click", decimal);
deleteBtn.addEventListener("click", del);
let operator = "";
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
        "÷": (a, b) => b === 0 ? alert("Error, can't divide by 0") : a / b,
        "%": (a, b) => a % b
    }
    return operator in operators ? operators[operator](Number(storedNumber), Number(currentNumber)) : NaN; 
}

function roundTotal(total) {
    return Math.round(total * 10000) / 10000;
}

function inputTotal() {
    if(!operator == false){
        total = roundTotal(calculate(storedNumber, currentNumber, operator));
        bottomDisplay.textContent = total;
        topDisplay.textContent = `${storedNumber} ${operator} ${currentNumber} =`;
        currentNumber = total;
        operator = "";
    }
}

// function removeLeadingZeros(currentNumber) {
//     let floatNum = parseFloat(currentNumber);
//     return floatNum % 1 == 0 ? floatNum.toFixed(0) : floatNum.toFixed(1);
// }

function inputNumbers() {
    currentNumber += num;
    topDisplay.textContent = `${storedNumber} ${operator}`;
    bottomDisplay.textContent = currentNumber;
}

function inputOperator() {
    storedNumber = currentNumber;
    currentNumber = [];
    bottomDisplay.textContent = "";
    topDisplay.textContent = `${storedNumber} ${operator}`;
    total = 0;
}

function pullNumber() {
    num = this.textContent;
    if(!total == false) {
        clear();
        inputNumbers();
    } else if(currentNumber.length >= 17) {
        topDisplay.textContent = "Too many numbers, please pick an operator!";
    } else {
        inputNumbers();
    }
}

function pickOperator() {
    if(storedNumber != "" && currentNumber == "") {
        operator = this.textContent;
        topDisplay.textContent = `${storedNumber} ${operator}`;
    } else if(!operator == false) {
        inputTotal();
        operator = this.textContent;
        inputOperator();
    } else if(!operator == true && currentNumber == "") {
        topDisplay.textContent = "Please choose a number first";
    } else {
        operator = this.textContent;
        inputOperator();
    }
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
}

function decimal() {
    if(currentNumber.includes(".") == false) {
        if(currentNumber == "" ) {
            currentNumber = "0" + ".";
        } else {
            currentNumber += ".";
        }
    }
    return bottomDisplay.textContent = currentNumber;
}

numberBtn.forEach(number => number.addEventListener("click", pullNumber));
opsBtn.forEach(op => op.addEventListener("click", pickOperator));
equalBtn.addEventListener("click", inputTotal);
clearBtn.addEventListener("click", clear);
decimalBtn.addEventListener("click", decimal);
deleteBtn.addEventListener("click", del);
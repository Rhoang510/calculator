let currentOperator = "";
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
const remainderBtn = document.querySelector("#remainder");
const opsBtn = document.querySelectorAll(".ops");
const allBtn = document.querySelectorAll("button");

function calculate(storedNumber, currentNumber, currentOperator) {
    const operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "÷": (a, b) => a / b,
        "%": (a, b) => a % b
    }
    return currentOperator in operators ? operators[currentOperator](Number(storedNumber), Number(currentNumber)) : NaN;
}

function roundTotal(total) {
    return Math.round(total * 1000000) / 1000000;
}

function inputTotal() {
    if(currentNumber == "") {
        return
    } else if(currentNumber === "0" && currentOperator === "÷") {
        return topDisplay.textContent = "Error, can't divide by 0";
    } else if(!currentOperator == false){
        total = roundTotal(calculate(storedNumber, currentNumber, currentOperator));
        total = total.toString();
        if(total.length >= 17) {
            total = +total;
            total = total.toExponential(12);
        }
        bottomDisplay.textContent = total;
        topDisplay.textContent = `${storedNumber} ${currentOperator} ${currentNumber} =`;
        currentNumber = total;
        currentOperator = "";
    }
}

function pullNumber(number) {
    if(!total == false) {
        clear();
    } else if(currentNumber.length >= 17) {
        return topDisplay.textContent = "Too many numbers, please pick an operator!";
    } else if(currentNumber == "0") {
        currentNumber = [];
    } 
    currentNumber += number;
    currentNumber = currentNumber.replace(/^0+/, "0");
    topDisplay.textContent = `${storedNumber} ${currentOperator}`;
    bottomDisplay.textContent = currentNumber;
}

function pickOperator(operator) { 
    if(currentOperator == "" && currentNumber == "") {
        return topDisplay.textContent = "Please choose a number first";
    } else if(storedNumber !== "" && currentNumber == "") {
        currentOperator = operator;
        return topDisplay.textContent = `${storedNumber} ${currentOperator}`;
    } else if(currentNumber === "0" && currentOperator === "÷") {
        return inputTotal();
    } else if(!operator == false) {
        inputTotal();
    }
    currentOperator = operator;
    storedNumber = currentNumber;
    currentNumber = [];
    bottomDisplay.textContent = "";
    topDisplay.textContent = `${storedNumber} ${currentOperator}`;
    total = 0;
}

function clear() {
    currentOperator = "";
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

function keyboardInput(e) {
    let key = e.key;
    if(!isNaN(key)) {
        pullNumber(key);
    } else if(key === ".") {
        decimal();
    } else if(key === "Enter") {
        inputTotal();
    } else if(key === "Backspace") {
        del();
    } else if(key === "Escape") {
        clear();
    } else if(["+", "-", "*", "/", "%"].includes(key)) {
        pickOperator(convertOperator(key));
    }
    e.target.blur();
    // allBtn.classList.add("active");
}

function convertOperator(keyOp) {
    switch (keyOp) {
        case "+":
            return "+";
        case "-":
            return "-";
        case "*":
            return "x";
        case "/":
            return "÷";
        case "%":
            return "%";
    }
}

window.addEventListener("keydown", keyboardInput);
numberBtn.forEach((number) => number.addEventListener("click", () => pullNumber(number.textContent)));
opsBtn.forEach((op) => op.addEventListener("click", () => pickOperator(op.textContent)));
equalBtn.addEventListener("click", inputTotal);
clearBtn.addEventListener("click", clear);
decimalBtn.addEventListener("click", decimal);
deleteBtn.addEventListener("click", del);
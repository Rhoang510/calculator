let operator = "";
let storedNumber = "";
let currentNumber = "";
let total = 0;
const numberBtn = document.querySelectorAll(".numbers");
const operationBtn = document.querySelectorAll(".ops");
const bottomDisplay = document.querySelector(".currentNumber");
const topDisplay = document.querySelector(".previousNumber");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const opsBtn = document.querySelectorAll(".ops");
// const addBtn = document.querySelector("#addBtn");
// const subBtn = document.querySelector("#subBtn");
// const multiplyBtn = document.querySelector("#multiplyBtn");
// const divideBtn = document.querySelector("#divideBtn");

function calculate(storedNumber, currentNumber, operator) {
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "x": (a, b) => a * b,
        "÷": (a, b) => a / b
    }
    return operator in operators ? operators[operator](parseInt(storedNumber), parseInt(currentNumber)) : NaN;
}

function pullNumber() {
    let num = this.textContent;
    bottomDisplay.textContent += num;
    currentNumber += num;
    console.log(currentNumber);
}

// function pickOperator() {
//     let operator = this.textContent;
//     storedNumber = currentNumber;
//     currentNumber = "";
//         switch(operator) {
//             case "+":
//                 bottomDisplay.textContent = "";
//                 topDisplay.textContent = `${storedNumber} ${this.id}`
//                 console.log(operator);
//                 break;
//             case "-":
//                 bottomDisplay.textContent = "";
//                 topDisplay.textContent = `${storedNumber} ${this.id}`
//                 break;
//             case "x":
//                 bottomDisplay.textContent = "";
//                 topDisplay.textContent = `${storedNumber} ${this.id}`
//                 break;
//             case "÷":
//                 bottomDisplay.textContent = "";
//                 topDisplay.textContent = `${storedNumber} ${this.id}`
//                 break;
//         }
//     }

function pickOperator() {
    operator = this.textContent;
    storedNumber = currentNumber;
    currentNumber = "";
    bottomDisplay.textContent = "";
    topDisplay.textContent = `${storedNumber} ${operator}`;
    console.log(operator);
}

numberBtn.forEach((number) => {
    number.addEventListener("click", pullNumber);
 });

 opsBtn.forEach((op) => {
     op.addEventListener("click", pickOperator);
 });

equalBtn.addEventListener("click", calculate);

clearBtn.addEventListener("click", () => {
    operator = "";
    firstInput = "";
    secondInput = "";
    total = 0;
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
})
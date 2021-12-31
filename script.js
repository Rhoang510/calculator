let ops = [];
let firstInput = [];
let secondInput = [];
let total = parseInt(0);
const numberBtn = document.querySelectorAll(".numbers");
const operationBtn = document.querySelectorAll(".ops");
const bottomDisplay = document.querySelector(".currentNumber");
const topDisplay = document.querySelector(".previousNumber");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const addBtn = document.querySelector("#addBtn");
const subBtn = document.querySelector("#subBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");
let opsBtn = document.querySelector(".ops");


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// const sum = function(array) {
//     return array.reduce((total, current) => total + current, 0);
//   };

function equal() {
    switch(ops) {
        case "+":
            total = add(firstInput, secondInput);
            bottomDisplay.textContent = total;
            break;
        case "-":
            total = subtract(firstInput, secondInput);
            bottomDisplay.textContent = total;
            break;
        case "*":
            total = multiply(firstInput, secondInput);
            bottomDisplay.textContent = total;
             break;
        case "÷":
            total = divide(firstInput, secondInput);
            bottomDisplay.textContent = total;
            break;
    }
}

function pullNum(e) {
    let num = parseInt(this.id);
    bottomDisplay.textContent += num;
    firstInput.push(num);
    console.log(num);
}

numberBtn.forEach((number) => {
    number.addEventListener("click", pullNum);
});

function pickOperator(e) {
    let operator = this.id;
    ops.push(operator);
    console.log(operator);
}


equalBtn.addEventListener("click", operate);

operationBtn.forEach((ops) => {
    ops.addEventListener("click", pickOperator)
})

clearBtn.addEventListener("click", () => {
    ops = [];
    firstInput = [];
    secondInput = [];
    total = parseInt(0);
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
})
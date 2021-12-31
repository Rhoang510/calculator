let ops = [
    "+",
    "-", 
    "*", 
    "/"
];

let firstInput = [];
let secondInput = [];
const numberBtn = document.querySelectorAll(".numbers");
const operationBtn = document.querySelectorAll(".operation");
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

function operate(firstInput, secondInput) {
    let total = parseInt(0);
    switch(ops) {
        case "+":
            total = add(userInput);
            break;
        case "-":
            total = subtract(userInput);
            break;
        case "*":
            total = multiply(userInput);
             break;
        case "/":
            total = divide(userInput);
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

operationBtn.forEach((ops) => {
    ops.addEventListener("click", operate);
})

let ops = [
    "+",
    "-", 
    "*", 
    "/"
];

let userInput = [];
let total = 0;

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

function operate() {
    total = parseInt(total);
    switch(ops) {
        case "+":
            add(userInput);
            break;
        case "-":
            subtract(userInput);
            break;
        case "*":
             multiply(userInput);
             break;
        case "/":
            divide(userInput);
            break;
    }
}


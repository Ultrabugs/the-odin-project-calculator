function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}

function operate(operator, numberX, numberY) { 
   switch(operator) {
    case "+":
        add(numberX, numberY);
    case "-":
        subtract(numberX, numberY);
    case "*":
        multiply(numberX, numberY);
    case "/":
        divide(numberX, numberY)
   }

}

 
const textOutput = document.querySelector(".calculator-results");

const buttons = document.querySelectorAll("button");

let numberOne = null;
let numberTwo = null;
let operator = null;

let firstInput = [];

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        textOutput.textContent = button.textContent;
        if(button.textContent != "+" || button.textContent != "-" || button.textContent != "*" || button.textContent != "/" || button.textContent != "x") {
            console.log(button.textContent);
            firstInput.push(button.textContent);
            console.log(firstInput);
        } else if(button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "x") {
            operator = button.textContent; 
            console.log(firstInput.toString().slice(",").join())
        }
        
    });
});



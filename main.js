function add(numberOne, numberTwo) {
    console.log(totalSum);
    if(totalSum === null) {
        let result = Number(numberOne) + Number(numberTwo);
        textOutput.textContent = result;
        totalSum = result;
    } else if(totalSum != null) {
        numberOne = totalSum;
        let result = Number(numberOne) + Number(numberTwo);
        totalSum = result;
        textOutput.textContent = result;
    }
   
}

function subtract(numberOne, numberTwo) {
     console.log(totalSum);
    if(totalSum === null) {
        let result = Number(numberOne) - Number(numberTwo);
        textOutput.textContent = result;
        totalSum = result;
    } else if(totalSum != null) {
        numberOne = totalSum;
        let result = Number(numberOne) - Number(numberTwo);
        totalSum = result;
        textOutput.textContent = result;
    }
}

function multiply(numberOne, numberTwo) {
     console.log(totalSum);
    if(totalSum === null) {
        let result = Number(numberOne) * Number(numberTwo);
        textOutput.textContent = result;
        totalSum = result;
    } else if(totalSum != null) {
        numberOne = totalSum;
        let result = Number(numberOne) * Number(numberTwo);
        totalSum = result;
        textOutput.textContent = result;
    }
}

function divide(numberOne, numberTwo) {
    console.log(totalSum);
    if(totalSum === null) {
        let result = Number(numberOne) / Number(numberTwo);
        textOutput.textContent = result;
        totalSum = result;
    } else if(totalSum != null) {
        numberOne = totalSum;
        let result = Number(numberOne) / Number(numberTwo);
        totalSum = result;
        textOutput.textContent = result;
    }
}

function operate(operator, numberX, numberY) { 
   console.log(`number one ${numberOne} | number two ${numberTwo}`)
   if(operator === "+") {
    add(numberOne, numberTwo)
   } 

   if(operator === "-") {
    subtract(numberOne, numberTwo)
   }

   if(operator === "x") {
    multiply(numberOne, numberTwo)
   }

   if(operator === "/") {
    divide(numberOne, numberTwo)
   }

}

 
const textOutput = document.querySelector(".calculator-results");

const buttons = document.querySelectorAll("button");

let numberOne = null;
let numberTwo = null;
let operator = null;
let totalSum = null;

let inputArray = [];

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {

        textOutput.textContent = button.textContent;
        
        if(button.textContent != "+" && button.textContent != "-" && button.textContent != "*" && button.textContent != "/" && button.textContent != "x" && button.textContent != "=" && button.textContent != "Clear") {
           
            inputArray.push(button.textContent);
            console.log(inputArray);

        } else if(button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" || button.textContent === "x") {
            operator = button.textContent; 
            if(numberOne === null) {
                numberOne = inputArray.toString().split(",").join("")
                console.log(`number one ${numberOne}`)
                inputArray = [];
            }

            if(numberOne != null & numberTwo != null) {
                 
                numberTwo = inputArray.toString().split(",").join("")
                inputArray = [];
            }
        } else if (button.textContent === "=") {
            if(numberOne != null && numberTwo === null || numberTwo != null) {
               
                numberTwo = inputArray.toString().split(",").join("")
                console.log(`number two ${numberTwo}`)
                operate(operator, numberOne, numberTwo)
                inputArray = [];

            }

        } else if(button.textContent === "Clear") {
            numberOne = null;
            numberTwo = null;
            totalSum = null;
            inputArray = [];
            textOutput.textContent = "";
             
        }
    });
});



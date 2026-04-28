function add(numberOne, numberTwo) {
    console.log('adding', numberOne, '+ ', numberTwo);
    result = Number(numberOne) + Number(numberTwo);
    outputResults.textContent = result;
    numberOne = result;
    
}

function subtract(numberOne, numberTwo) {
    console.log('adding', numberOne, '- ', numberTwo);
    result = Number(numberOne) - Number(numberTwo);
    outputResults.textContent = result;
    numberOne = result;
   
}

function multiply(numberOne, numberTwo) {
    console.log('adding', numberOne, '* ', numberTwo);
    result = Number(numberOne) * Number(numberTwo);
    outputResults.textContent = result;
    numberOne = result;
   
}

function divide(numberOne, numberTwo) {
   console.log('adding', numberOne, '/ ', numberTwo);
    result = Math.round(Number(numberOne) / Number(numberTwo));
    outputResults.textContent = result;
    numberOne = result;
   
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

 
const resultsOutput = document.querySelector(".calculator-results");
const buttons = document.querySelectorAll("button");
const outputResults = document.querySelector(".calculator-output");

let numberOne = null;
let numberTwo = null;
let operator = null;
let result = null;
let firstOperator = null;

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {

    if(button.textContent === "+" || button.textContent === "-" || button.textContent === "x" || button.textContent === "/"){
        // operate logic here
         if(firstOperator === null) {
            firstOperator = button.textContent;
         }  
        
        console.log('operator is set too: ', operator);
        // if number one is empty add numberOne and clear it.
        if(numberOne === null) {
            numberOne = resultsOutput.textContent;
            resultsOutput.textContent = '';
             
        // if number one is not empty and numberTwo is empty add numberTwo
        } else if(numberOne != null & numberTwo === null & result === null) {
            numberTwo = resultsOutput.textContent
            resultsOutput.textContent = "";
            operate(firstOperator, numberOne, numberTwo)
            numberTwo = "";
            console.log('result is: ', result);
            firstOperator = button.textContent;
            
        // if numberOne is empty, and if numberTwo
        }  
         else if(numberOne != null & result != null & numberTwo === null) {
            numberOne = result;
            numberTwo = resultsOutput.textContent;
            operate(firstOperator, numberOne, numberTwo)
            numberTwo = "";
            resultsOutput.textContent = "";
            console.log('result is: ', result);
            firstOperator = null;
            
            
            
        // if numberOne is empty, and if numberTwo
        }else if(result != null & numberOne != null & button.textContent === "=") {
            numberOne = result;
            numberTwo = resultsOutput.textContent;
            operate(firstOperator, result, numberTwo)
            numberTwo = "";
            console.log('result is: ', result);
            resultsOutput.textContent = "";
            firstOperator = null;
        }  

       
    } else if(button.textContent === "Clear") {
        numberOne = null;
        numberTwo = null;
        operator = null;
        totalSum = null;
        result = null;
        resultsOutput.textContent = '';
        outputResults.textContent = '';

    } else if(button.textContent === "=") {
        // some issue lies here with number
        if(result != null) {
            numberOne = result;
        }
        console.log('operater is current:', operator);
        numberTwo = resultsOutput.textContent;
        console.log('numberOne is set to ->:', numberOne)
        console.log('numberTwo is set to ->:', numberTwo);
        console.log('oeprater', operator);
        operate(firstOperator, result, numberTwo);
        resultsOutput.textContent = "";
        numberTwo = "";
        firstOperator = null;
        
        
    } else if(button.textContent === "=" & result != null) {
        numberOne = result;
        numberTwo = resultsOutput.textContent;
        console.log('numberOne is set to ->:', numberOne)
        console.log('numberTwo is set to ->:', numberTwo);
        console.log('oeprater', operator);
        operate(firstOperator, result, numberTwo);
        resultsOutput.textContent = "";
        numberTwo = "";
        firstOperator = null;

        
    } else {
        resultsOutput.textContent = resultsOutput.textContent.concat(button.textContent);
       }
    });
});



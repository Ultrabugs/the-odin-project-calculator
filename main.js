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
 

let numberOne = "";
let numberTwo = "";
let result = "";
let operator = "";

buttons.forEach((button) => {
    button.addEventListener("mouseup", ()=> {

    if(button.textContent === "+" || button.textContent === "-" || button.textContent === "x" || button.textContent === "/"){
       
        // here we are adding the operator to our string. 100+ etc.  
        resultsOutput.textContent = resultsOutput.textContent.concat(button.textContent)

        // if the operator is null then we should set it to what ever the user pressed.
        if(operator === "") {
            operator = button.textContent;
         }  
        
        // We are concating the operator to our input 100+ example. 
        console.log('operator is set too: ', operator);
        console.log('numberOne === ', numberOne);
       
        // here we are checking if numberOne is empty if its empty 
        // We set numberOne equals to our input and storing it. 
        if(numberOne === "") {
            numberOne = resultsOutput.textContent.replace(button.textContent, "");
            console.log(numberOne)
             
        } 
        
        // here we are checking if numberOne is not empty. 
        // if numberOne is not empty we add the input to numberTwo.
        else if(numberOne != "") {

            // here i need to remove previous number and the operators. 

            numberTwo = resultsOutput.textContent.replace(button.textContent, "")
            numberTwo = resultsOutput.textContent.replace(numberOne, "")
            numberTwo = resultsOutput.textContent.replace(operator, "")
            resultsOutput.textContent = "";
            // operate(firstOperator, numberOne, numberTwo)
            // numberTwo = "";
            // console.log('result is: ', result);
            // firstOperator = null;
           
        
        } 
    } 
    // if the user doesn't hit an operator + - / * etc. then we just add the numbers they set.
    else {
            
            resultsOutput.textContent = resultsOutput.textContent.concat(button.textContent);
        }
    
    });
});


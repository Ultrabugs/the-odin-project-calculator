function add(numberOne, numberTwo) {
    console.log('adding', numberOne, '+ ', numberTwo);
    result = Number(numberOne) + Number(numberTwo);
    let output = `${numberOne} ${operator} ${numberTwo} = ${result}`
    // display the results on the top bar UI
    outputResults.textContent = output;
    // now set numberOne so we can use it again
    numberOne = result;

    // here we should set the display to be results also.
    resultsOutput.textContent = result;
    
}

function subtract(numberOne, numberTwo) {
    console.log('adding', numberOne, '- ', numberTwo);
    result = Number(numberOne) - Number(numberTwo);
    let output = `${numberOne} ${operator} ${numberTwo} = ${result}`
    outputResults.textContent = output;
    numberOne = result;
   
}

function multiply(numberOne, numberTwo) {
    console.log('adding', numberOne, '* ', numberTwo);
    result = Number(numberOne) * Number(numberTwo);
    let output = `${numberOne} ${operator} ${numberTwo} = ${result}`
    outputResults.textContent = output;
    numberOne = result;
   
}

function divide(numberOne, numberTwo) {
   console.log('adding', numberOne, '/ ', numberTwo);
    result = Math.round(Number(numberOne) / Number(numberTwo));
    let output = `${numberOne} ${operator} ${numberTwo} = ${result}`
    outputResults.textContent = output;
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
       
        // if the operator is null then we should set it to what ever the user pressed.
        if(operator === "") {
            operator = button.textContent;
         }  
        
        // We are concating the operator to our input 100+ example. 
        console.log('operator is set too: ', operator);
        console.log('numberOne === ', numberOne);

        // here we should check if there is a result. 
        if(result != "") {
            // set numberOne equals to our result. 
            numberOne = result; 
            numberTwo = resultsOutput.textContent;
            operate(operator, numberOne, numberTwo);
            resultsOutput.textContent = "";

        }
       
        // here we are checking if numberOne is empty if its empty 
        // We set numberOne equals to our input and storing it. 
        if(numberOne === "") {
            numberOne = resultsOutput.textContent;
            
            // here i am adding the operator after adding numberOne.
            resultsOutput.textContent = resultsOutput.textContent.concat(button.textContent)

        } 
        
        // here we are checking if numberOne is not empty. 
        // if numberOne is not empty we add the input to numberTwo.
        // we need to also check if result is empty.
        else if(numberOne != "" && result === "") {

            // here i need to remove previous number and the operators. 
            numberTwo = resultsOutput.textContent.replace(numberOne, "").replace(operator, "")
            operate(operator, numberOne, numberTwo);
            numberTwo = "";
            // After operate we should reset the UI text.
             
            // We should also set the operator to what the user just set also.
            operator = button.textContent;
        
        } 

        

        
    } 
    // if the user doesn't hit an operator + - / * etc. then we just add the numbers they set.
    else {
            
            resultsOutput.textContent = resultsOutput.textContent.concat(button.textContent);
        }
    
    });
});


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

}

const firstNumber = document.querySelectorAll("button");

firstNumber.array.forEach((button) => {
    button.addEventListener("click", ()=> {
        console.log(button.id);
    });
});
     

 






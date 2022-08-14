const output = document.querySelector('.output');
const prevOut = document.querySelector('.output-previous');
const numBtn = document.querySelectorAll('#number');
const operatorBtn = document.querySelectorAll('#operator');
const clearBtn = document.querySelector('.clear-btn');
// const number = document.querySelector('number');
// // const operator =document.querySelector('operator');

let currentNumber;
let previousNumber;
let operator;

numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", (e) => {
        console.log("elength : " +e.target.textContent.length)
        if(output.textContent.length <= 11){
        const displayValue = e.target.textContent;
        output.innerHTML += displayValue;
        currentNumber = output.textContent;
        console.log("number : " +output.textContent)
        }
    });
});

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", (e) => {
        const displayValue = e.target.textContent;
        operator = e.target.textContent
        previousNumber = currentNumber;
        prevOut.innerHTML += displayValue;
        prevOut.innerHTML += output.innerHTML;
        output.innerHTML = "";
    });
});

function calculate(){
    console.log("pre " +previousNumber + "cur " +currentNumber)

    let answer; 
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)
   
    if(operator === ""){
        console.log(currentNumber)
        answer = currentNumber
    }
    if(operator === "+"){
        console.log(previousNumber + currentNumber)
        answer = previousNumber + currentNumber
    }
    if(operator === "-"){
        console.log(previousNumber - currentNumber)
        answer = previousNumber - currentNumber
    }
    if(operator === "*"){
        console.log(previousNumber * currentNumber)
        answer = previousNumber * currentNumber
    }
    if(operator === "/"){
        console.log(previousNumber / currentNumber)
        answer = previousNumber / currentNumber
    }
    clearDisplay();
    output.innerHTML = ""
    prevOut.innerHTML = answer;

    currentNumber = ""
    previousNumber =""
    return answer;
}

let clearDisplay = function(){
    output.innerHTML = "";
    prevOut.innerHTML = "";
}
/* take input 1 
    store it
    take operator 
    store it
    take input 2
    store it
    then run function 
    if operator = "" then 
    a formula with the inputs*/
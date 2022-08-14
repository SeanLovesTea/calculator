const output = document.querySelector('.output');
const numBtn = document.querySelectorAll('#number');
const operatorBtn = document.querySelectorAll('#operator');
const clearBtn = document.querySelector('.clear-btn');
const number = document.querySelector('number');
// const operator =document.querySelector('operator');

let currentNumber;
let previousNumber;
let operator;

numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", (e) => {
        const displayValue = e.target.textContent;
        output.innerHTML += displayValue;
        currentNumber = displayValue;
    });
});


operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", (e) => {
        const displayValue = e.target.textContent;
        if (e.target.id == "operator"){
            operator = e.target.textContent
            previousNumber = currentNumber;
            output.innerHTML += displayValue;
        }
    });
});

function calculate(){
    console.log("pre " +previousNumber + "cur " +currentNumber)
    let answer; 
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)
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
    output.innerHTML =  answer;
    return answer;
}

let clearDisplay = function(){
    output.innerHTML = "";
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
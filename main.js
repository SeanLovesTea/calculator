const output = document.querySelector('.output');
const outAns = document.querySelector('.output-ans');
const prevOut = document.querySelector('.output-previous');
const numBtn = document.querySelectorAll('#number');
const operatorBtn = document.querySelectorAll('#operator');
const clearBtn = document.querySelector('.clear-btn');

let currentNumber;
let previousNumber;
let operator;

// Add event listeners to each Number button
// display the number on screen
// store the value in current Number
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

// Add event listener to all operator buttons
// Make the number before operater into previousNumber variable
// And if there is already an operator on the display, calculate the current equation
// Add the Answer to currentNumber to continue equation
// Update display

operatorBtn.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", (e) => {
        if(output.textContent.includes("+")){
            operator = "+"
            console.log("it do have dem")
            calculate();
            currentNumber = outAns.textContent;
            prevOut.innerHTML = currentNumber;
            outAns.textContent = "";
        }
        if(output.textContent.includes("-")){
            operator = "-"
            console.log("it do have dem")
            calculate();
            currentNumber = outAns.textContent;
            prevOut.innerHTML = currentNumber;
            outAns.textContent = "";
        }
        if(output.textContent.includes("/")){
            operator = "/"
            console.log("it do have dem")
            calculate();
            currentNumber = outAns.textContent;
            prevOut.innerHTML = currentNumber;
            outAns.textContent = "";
        }
        if(output.textContent.includes("*")){
            operator = "*"
            console.log("it do have dem")
            calculate();
            currentNumber = outAns.textContent;
            prevOut.innerHTML = currentNumber;
            outAns.textContent = "";
        }
        
        const displayValue = e.target.textContent;
        operator = e.target.textContent
        previousNumber = currentNumber;
        output.innerHTML += displayValue;
    });
});
// Current Number comes in as full equation
// Takes in only number after the operator
function handleCurrentNum(){
    currentNumber = currentNumber.split(`${operator}`);
    currentNumber = currentNumber[1];
    return currentNumber;
}
// take in the operator, currentNumber and previousNumber
// runs operation, returns answer , updates display
function calculate(){
    handleCurrentNum();
    let answer; 
    previousNumber = Number(previousNumber)
    currentNumber = Number(currentNumber)
   
    if(operator === ""){
        answer = currentNumber
    }
    if(operator === "+"){
        answer = previousNumber + currentNumber;
    }
    if(operator === "-"){
        answer = previousNumber - currentNumber;
    }
    if(operator === "*"){
        answer = previousNumber * currentNumber;
    }
    if(operator === "/"){
        answer = previousNumber / currentNumber;
    }
    clearDisplay();
    displayAnswer(answer);

    // resets currentNumber and previousNum variables
    currentNumber = "";
    previousNumber = "";

    return answer;
}
// clears the output and displays answer
function displayAnswer(answer){
    outAns.innerHTML = answer;
    output.innerHTML = "";
    prevOut.innerHTML = "";
}
// clears display
let clearDisplay = function(){
    outAns.innerHTML = "";
    output.innerHTML = "";
    prevOut.innerHTML = "";
}

const buttons = document.querySelectorAll('.buttons');
const currentEntry = document.querySelector('#current-entry');
const previousEntry = document.querySelector('#previous-entry');
let currentValue = currentEntry.textContent;
let previousValue = previousEntry.textContent;
let currentOperation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('operation')){
            let buttonValue = button.value;
            // checks if the starting value of the calculator is 0 and has a length of 1 
            if (currentValue == 0 && currentValue.length == 1) {
                // checks the pressed button's value is any whole number
                if (buttonValue >= 0 || buttonValue <= 9) {
                    // clears the initial value in the calculator screen
                    currentEntry.textContent = '';
                    currentValue = currentEntry.textContent;
                }
            }
            // concatenates the current text of the button to the initial value on the calculator screen
            currentValue += buttonValue;
            currentEntry.textContent = currentValue;
        } else {
            if (button.value == 'AC') {
                clearScreen();
            }  
            else if (button.value == 'CE') {
                clearEntry();
            }
            else if (button.value == '+') {
                passEntry(currentValue, 'add');
            } 
            else if (button.value == '-') {
                passEntry(currentValue, 'subtract');
            }
            else if (button.value == '*') {
                passEntry(currentValue, 'multiply');
            }
            else if (button.value == '/') {
                passEntry(currentValue, 'divide');
            }
            else if (button.value == '=') {
                solve(currentOperation);
            }
        }
    });
});

// function for clearing or resetting the calculator screen
function clearScreen() {
    currentEntry.textContent = 0;    
    previousEntry.textContent = '';    
    currentValue = currentEntry.textContent;   
    previousValue = previousEntry.textContent;   
};

// function for clearing entry
function clearEntry() {
    currentEntry.textContent = 0;
    currentValue = currentEntry.textContent;     
};

// function for passing current entry to previous entry
function passEntry(entry, operation) {
    currentOperation  = operation;
    previousEntry.textContent = entry;
    previousValue = previousEntry.textContent;
    clearEntry(true, false);
};

// function for solving the problem
function solve(operation) {
    switch (operation) {
        case 'add': add() 
            break;
        case 'subtract': subtract() 
            break;
        case 'multiply': multiply() 
            break;
        case 'divide': divide() 
            break;
    }
}

function add() {
    let sum = parseInt(previousValue + currentValue);
    clearScreen();
    currentEntry.textContent = sum;
};

function subtract() {
    let difference = parseInt(previousValue - currentValue);
    clearScreen();
    currentEntry.textContent = difference;
};

function multiply() {
    let product = parseInt(previousValue * currentValue);
    clearScreen();
    currentEntry.textContent = product;
};

function divide() {
    let quotient = parseInt(previousValue / currentValue);
    clearScreen();
    currentEntry.textContent = quotient;
};
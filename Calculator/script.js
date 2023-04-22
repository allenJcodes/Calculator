const buttons = document.querySelectorAll('.buttons');
const currentEntry = document.querySelector('#current-entry');
const previousEntry = document.querySelector('#previous-entry');
let currentValue = currentEntry.textContent;
let previousValue = previousEntry.textContent;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let allClear = false;

        if (!button.classList.contains('operation')){
                let buttonValue = button.value;
                // checks if the starting value of the calculator is 0 and has a length of 1 
                if (currentValue == 0 && currentValue.length == 1) {
                    // checks the pressed button's value is any whole number
                    if (buttonValue >= 0 || buttonValue <= 9) {
                        // clears the initial value in the calculator screen
                        allClear = false;
                        clearScreen(allClear);
                    }
                }
                // concatenates the current value of the button to the initial value on the calculator screen
                currentValue += buttonValue;
                currentEntry.textContent = currentValue;
        } else {
            if (button.value == 'AC') {
                allClear = true;
                clearScreen(allClear);
            }  
            else if (button.value == 'CE') {
                allClear = false;
                clearEntry(allClear);
            }
        }
        console.log(currentValue.length);
    });
});

// function for clearing or resetting the calculator screen
function clearScreen(allClear) {
    if (allClear == true) {
        currentEntry.textContent = 0;    
        previousEntry.textContent = '';    
        currentValue = currentEntry.textContent;   
        previousValue = previousEntry.textContent;   
    }
    else {
        currentEntry.textContent = '';
        currentValue = currentEntry.textContent;
    }
};

// function for clearing entry
function clearEntry(allClear) {
    previousEntry.textContent = ''; 
    previousValue = previousEntry.textContent;    

    if (allClear == true) {
        clearScreen(allClear);  
    }
};

// function for passing current entry to previous entry
function passEntry(entry) {
    previousEntry.textContent = currentValue;
    previousValue = previousEntry.textContent;
};
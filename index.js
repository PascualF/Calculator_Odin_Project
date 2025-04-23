let displayNumbers = document.querySelector(".display-numbers");
const buttons = document.querySelectorAll(".btn");
let currentOperand = '';
let previousOperand = '';
let operator = '';
let toggleDarkMode = document.querySelector(".switch-dark-mode input")
const darkModeClass = "dark-mode-toggle"

const clearDisplay = () => {
    currentOperand = '';
    previousOperand = '';   
    return displayNumbers.value = '0';
};

const add = (a, b) => {
    return (Number(a) + Number(b)).toString()
}

const subtract = (a, b) => {
    return (Number(a) - Number(b)).toString();
}

const multiply = (a, b) => {
    return (Number(a) * Number(b)).toString();
}

const divide = (a, b) => {
    if (Number(b) == 0){
        return 'Err0r'
    } else {
        return (Number(a) / Number(b)).toString();
    }
};

const operate = (a, operator, b) => {
    if (operator === '+'){
        return add(a, b);
    } else if (operator === '-'){
        return subtract(a, b);
    } else if (operator === '*'){
        return multiply(a, b);
    } else if (operator === '/'){
        return  divide(a, b);
    } 
}

const plusMinusSign = () => {
    if(currentOperand) {
        currentOperand = (parseFloat(currentOperand) * -1).toString()
        displayNumbers.value = currentOperand;
    } else if (previousOperand && !operator){
        previousOperand = (parseFloat(previousOperand) * -1).toString();
        displayNumbers.value = previousOperand;
    }
}

buttons.forEach(button  => {
    button.addEventListener('click', () => {

        // This will activate the +/- on the numlber displayed.
        if(button.textContent === '+/-'){
            plusMinusSign();
            return;
        }

        // This will add a decimal, and do nothing if the number is already decimal.
        if(button.textContent === '.'){
            if(operator) {
                if(!currentOperand.includes('.')){
                    if(currentOperand === ""){
                        currentOperand += '0.'
                    } else {
                        currentOperand += '.'
                    } 
                    displayNumbers.value = currentOperand
                }
            } else {
                if(!previousOperand.includes('.')){
                    if(previousOperand === ""){
                        previousOperand += '0.'
                    } else {
                        previousOperand += '.'
                    }
                    displayNumbers.value = previousOperand
                }
            }
            return;
        }
        
        if(button.textContent === 'C'){
            if (displayNumbers.value === "0") return;
            console.log(previousOperand)
            console.log(operator)
            if (operator && operator !== '=') {
                if(currentOperand !== ""){
                    currentOperand = currentOperand.slice(0, currentOperand.length - 1)
                    displayNumbers.value = currentOperand
                }
            } else {
                if(previousOperand !== ""){
                    previousOperand = previousOperand.slice(0, previousOperand.length - 1)
                    displayNumbers.value = previousOperand
                }
            } 
            if (displayNumbers.value === '') displayNumbers.value = '0';
            return;
        }

        // This will prevent adding zeros at the beginning of a number (e.g: 0001234)
        if(button.textContent === '0'){
            if(operator && currentOperand === '0') return
            if(!operator && previousOperand === '0') return
        }

        if(!previousOperand && !operator && !currentOperand){
            if(button.classList.contains('num')){
                previousOperand += button.textContent;
                displayNumbers.value = previousOperand;
            }
        } else if (previousOperand && !operator && !currentOperand) {
            if (button.classList.contains('operate')){
                operator = button.textContent;
            } else if (button.classList.contains('num')){
                previousOperand += button.textContent;
                displayNumbers.value = previousOperand;
            }
        } else if(previousOperand && operator && !currentOperand){
            if(button.classList.contains('operate')){
                operator = button.textContent;
            } else if(button.classList.contains('num')){
                currentOperand += button.textContent;
                displayNumbers.value = currentOperand;
            }
        } else {
            if(button.classList.contains('operate')){
                let result = operate(previousOperand, operator, currentOperand);
                previousOperand = result;
                displayNumbers.value = previousOperand;
                currentOperand = '';
                operator = button.textContent;
            } else if (button.classList.contains('num')){
                currentOperand += button.textContent;
                displayNumbers.value = currentOperand;
            }
        }

        if (button.textContent === '%'){
            if(currentOperand) {
                currentOperand = (parseFloat(currentOperand) / 100).toString()
                displayNumbers.value = currentOperand;
            } else if (previousOperand && !operator){
                previousOperand = (parseFloat(previousOperand) / 100).toString()
                displayNumbers.value = previousOperand;
            }
            return;
        }

        // This let's the user finalize with equal
        if(button.textContent === '=') {
            if(previousOperand && operator && currentOperand){
                let result = operate(previousOperand, operator, currentOperand);
                previousOperand = result;
                displayNumbers.value = previousOperand;
                currentOperand = '';
                operator = '';
            }
            return;
        }

        if(button.textContent === 'AC'){
            clearDisplay();
            return;
        }
       
    })

})

// This will handle 
document.addEventListener('keydown', (e) => {
    const key = e.key

    const btn = Array.from(buttons).find(button => button.textContent === key || 
        (key === 'Enter' && button.textContent === "=") ||
        key === 'Delete' && button.textContent === 'AC')

    if(btn) btn.click() // If it find a matching button it will simulate the clicking. Only if the pressed key is on the Calculator
})

// This will turn on/off the Dark-Mode, including adding to the loca storage
toggleDarkMode.addEventListener('click', () => {
    if(toggleDarkMode.checked) {
        document.body.classList.add(darkModeClass);
        localStorage.setItem("darkMode", "enabled")
    } else {
        document.body.classList.remove(darkModeClass);
        localStorage.setItem("darkMode", "disabled")
    }
})

// Onload the window, it will check the localStorage if it has Darkmode or not.
window.onload = () => {
    const checkIfDarkMode = localStorage.getItem("darkMode");

    if(checkIfDarkMode === "enabled"){
        document.body.classList.add(darkModeClass)
    toggleDarkMode. checked = true;
    }
}
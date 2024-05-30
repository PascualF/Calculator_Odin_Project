let displayNumbers = document.querySelector(".display-numbers");
const buttons = document.querySelectorAll(".btn");
let currentOperand = '';
let previousOperand = '';
let operator = '';

const clearDisplay = () => {
    currentOperand = '';
    previousOperand = '';   
    return displayNumbers.value = '0';
};

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b == 0){
        return 'Err0r'
    } else {
    return a / b;
    }; 
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

buttons.forEach(button  => {
    button.addEventListener('click', () => {

        if(!previousOperand && !operator && !currentOperand){
            if(button.classList.contains('num')){
                previousOperand += button.textContent;
                displayNumbers.value = previousOperand;
                console.log(previousOperand)
            }
        } else if (previousOperand && !operator && !currentOperand) {
            if (button.textContent === '+/-'){
                if (previousOperand[0] === '-'){
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                } else{
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                }
            } 
            if (button.classList.contains('operate')){
                operator = button.textContent;
                console.log(operator)  
            } else if (button.classList.contains('num')){
                previousOperand += button.textContent;
                displayNumbers.value = previousOperand;
                console.log(previousOperand);
            }
        } else if(previousOperand && operator && !currentOperand){
            if (button.textContent === '+/-'){
                if (previousOperand[0] === '-'){
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                } else{
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                }
            } else if(button.classList.contains('operate')){
                operator = button.textContent;
                console.log(operator)
            } else if(button.classList.contains('num')){
                currentOperand += button.textContent;
                displayNumbers.value = currentOperand;
                console.log(currentOperand)
            }
        }else {
            if(button.classList.contains('operate')){
                result = operate(previousOperand, operator, currentOperand);
                previousOperand = result;
                console.log(previousOperand)
                result = '';
                operator = button.textContent;
                currentOperand = '';
                displayNumbers.value = previousOperand;
                console.log(result);
            } else if (button.textContent === '+/-'){
                if (previousOperand[0] === '-'){
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                } else {
                    previousOperand *= -1;
                    displayNumbers.value = previousOperand;
                }
            } else if(button.classList.contains('num')){
                currentOperand += button.textContent;
                displayNumbers.value = currentOperand;
            }
        }

        if (button.textContent === '%'){
            if(displayNumbers.value){
                displayNumbers.value /= 100;
            }
        }

    })
})
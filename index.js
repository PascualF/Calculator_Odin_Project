let displayNumbers = document.querySelector(".display-numbers");
const buttons = document.querySelector(".btn");
const numbers = ['0', '1', '2', '3', '4', '5' ,'6', '7', '8', '9'];
let currentOperand = '';
let previousOperand = '';
let operator = null;

const clearDisplay = () => {
    currentOperand = '';
    previousOperand = '';   
    return displayNumbers.value = '0';
};

const singleOperator = (number, operator) => {
    number = Number(number);
    if (operator === '+/-'){
        if(number < 0){
            return number *= -1;
        } else if(number > 0){
            return number *= -1;
        } else {
            return number
        }
    } else if (operator === '%'){
        return number / 100;
    }
};

const operate = () => {

}

const getId = (btn_id) => {
    if(btn_id === 'C'){
        clearDisplay();
    }
    if(displayNumbers.value === '0'){
        displayNumbers.value = btn_id;
        currentOperand = btn_id;
    } else if (btn_id in numbers){
        displayNumbers.value += btn_id;
        currentOperand += btn_id;
    } else {
        if(btn_id === '+/-' || btn_id === '%'){
            displayNumbers.value = singleOperator(currentOperand, btn_id);
        } else if (btn_id === '/'){
            previousOperand = currentOperand;
            operator = '/';
        }else if (btn_id === '*'){
            previousOperand = currentOperand;
            operator = '*';
        }else if (btn_id === '-'){
            previousOperand = currentOperand;
            operator = '-';
        }else if (btn_id === '+'){
            previousOperand = currentOperand;
            operator = '+';
        }
    }
    if (btn_id === '='){
        if (previousOperand !== '' || currentOperand !== ''){
            displayNumbers.value = previousOperand + currentOperand;
        }
    }
    console.log(currentOperand)
};

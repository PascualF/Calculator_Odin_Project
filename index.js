const operate= (num1, operator, num2) => {
    let result = '';
    if (operator === '+'){
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator === '-') {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator === '*') {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator === '/') {
        result = parseFloat(num1) / parseFloat(num2);
    }; 

    return result;
};


let displayNumbers = document.querySelector(".display-numbers");
const buttons = document.querySelector(".btn");

const getId = (btn_id) => {
    console.log(btn_id);
    displayNumbers.innerHTML = `9`;
};

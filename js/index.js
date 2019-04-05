// Calculator

const display = document.querySelector('.display');
const digitsOpers = document.querySelectorAll('.digits .digit_button, .operations');
digitsOpers.forEach( digit => digit.addEventListener('click', digitOperPressed) );

const operButton = document.querySelector('.operations');

function digitOperPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

const clearDisplay = document.querySelector('.clear');
clearDisplay.addEventListener('click', clearDisp);

function clearDisp(e) {
    e.preventDefault();
    display.value = '';
}

const equal = document.querySelector('.eq');
equal.addEventListener('click', equalPressed);

function equalPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}

const powNumber = document.querySelector('.pow');
powNumber.addEventListener('click', powResult);

function powResult(e) {
    e.preventDefault();
    display.value = eval(Math.pow(display.value, 2))
}

const sqrtNumber = document.querySelector('.sqrt');
sqrtNumber.addEventListener('click', sqrtResult);

function sqrtResult(e) {
    e.preventDefault();
    display.value = eval(Math.sqrt(display.value))
}
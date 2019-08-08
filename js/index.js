const display = document.querySelector('.calculator .display');

document
    .querySelectorAll('.digits button')
    .forEach(digit => digit.addEventListener('click', digitPressed));
function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document
    .querySelectorAll('.opers button')
    .forEach(oper => oper.addEventListener('click', operPressed));
function operPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed () {
    display.value = eval(display.value);
}

document.querySelector('.clear').addEventListener('click', clearPressed);
function clearPressed (ev) {
   display.value = '';
}

/*else if (btnText === 'CE') { // delete one character
            input = input.slice(0, input.length - 1);*/

/*if (input.indexOf('.') === -1 || dotFlag) { // only one dot is allowed
                input += '.';
                dotFlag = false;
            }*/
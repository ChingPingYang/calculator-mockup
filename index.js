let operatora;
let operatorb;
let operation;
let answer;


const numberBtn = document.getElementsByClassName("numberBtn");

const reset = document.getElementById("reset");
const equal = document.getElementById("equal");
const total = document.getElementById("result");

const mutiply = document.getElementById("multiply");
const plus = document.getElementById("plus");
const divide = document.getElementById("divide");
const minus = document.getElementById("minus");
const modulo = document.getElementById("modulo");

//For Loop for adding number//
for (let i = 0; i < numberBtn.length; i++) {
    numberBtn[i].onclick = function(e) {
        checkInput();
        total.value = total.value + numberBtn[i].textContent;
    }
}



reset.onclick = function(e) {
    clearAll();
};

mutiply.onclick = function(e) {
    if (operation !== undefined) {
        operation = "*";
    } else {
        operation = "*";
        operatora = total.value;
        clearscreen();
        checkInput();
    }
}
plus.onclick = function(e) {
    if (operation !== undefined) {
        operation = "+";
    } else {
        operation = "+";
        operatora = total.value;
        clearscreen();
        checkInput();
    }
}
divide.onclick = function(e) {
    if (operation !== undefined) {
        operation = "/";
    } else {
        operation = "/";
        operatora = total.value;
        clearscreen();
        checkInput();
    }
}
minus.onclick = function(e) {
    if (operation !== undefined) {
        operation = "-";
    } else {
        operation = "-";
        operatora = total.value;
        clearscreen();
        checkInput();
    }
}
modulo.onclick = function(e) {
    if (operation !== undefined) {
        operation = "%";
    } else {
        operation = "%";
        operatora = total.value;
        clearscreen();
        checkInput();
    }
}

equal.onclick = function(e) {
    if (answer !== undefined) {
        calculate();
        answer = total.value;
        operation = undefined;
    } else {
        operatorb = total.value;
        calculate();
        operation = undefined;
        answer = total.value;
    }
}

function checkInput() {
    if (total.value === "0") {
        total.value = "";
    }
}

function clearscreen() {
    total.value = "0";
}

function clearAll() {
    clearscreen();
    operatora = 0;
    operatorb = 0;
    operation = undefined;
    answer = undefined;
    console.log(operation);
}


function calculate() {
    
    switch(operation) {
        case "+":
            total.value = parseFloat(operatora) + parseFloat(operatorb);
            break;
        case "-":
            total.value = parseFloat(operatora) - parseFloat(operatorb);
            break;
        case "*":
            total.value = parseFloat(operatora) * parseFloat(operatorb);
            break;
        case "/":
            total.value = parseFloat(operatora) / parseFloat(operatorb);
            break;
        case "%":
            total.value = parseFloat(operatora) % parseFloat(operatorb);
            break;
    }
}












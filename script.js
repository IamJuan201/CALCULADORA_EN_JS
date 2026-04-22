const pantalla = document.getElementById('pantalla');

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

const btnSuma = document.getElementById('btnSuma');
const btnResta = document.getElementById('btnResta');
const btnMultiplicacion = document.getElementById('btnMultiplicacion');
const btnDivision = document.getElementById('btnDivision');

const igual = document.getElementById('igual');
const ac = document.getElementById('ac');

let operacion = "";

btn0.addEventListener('click', function() {
    operacion += "0";
    pantalla.value = operacion;
});

btn1.addEventListener('click', function() {
    operacion += "1";
    pantalla.value = operacion;
});

btn2.addEventListener('click', function() {
    operacion += "2";
    pantalla.value = operacion;
});

btn3.addEventListener('click', function() {
    operacion += "3";
    pantalla.value = operacion;
});

btn4.addEventListener('click', function() {
    operacion += "4";
    pantalla.value = operacion;
});

btn5.addEventListener('click', function() {
    operacion += "5";
    pantalla.value = operacion;
});

btn6.addEventListener('click', function() {
    operacion += "6";
    pantalla.value = operacion;
});

btn7.addEventListener('click', function() {
    operacion += "7";
    pantalla.value = operacion;
});

btn8.addEventListener('click', function() {
    operacion += "8";
    pantalla.value = operacion;
});

btn9.addEventListener('click', function() {
    operacion += "9";
    pantalla.value = operacion;
});


btnSuma.addEventListener('click', function() {
    operacion += "+";
    pantalla.value = operacion;
});

btnResta.addEventListener('click', function() {
    operacion += "-";
    pantalla.value = operacion;
});

btnMultiplicacion.addEventListener('click', function() {
    operacion += "*";
    pantalla.value = operacion;
});

btnDivision.addEventListener('click', function() {
    operacion += "/";
    pantalla.value = operacion;
});

igual.addEventListener('click', function() {
    let resultado = eval(operacion);
    pantalla.value = operacion + " = " + resultado;
    operacion = resultado;
});

ac.addEventListener('click', function() {
    operacion = "";
    pantalla.value = ""
});
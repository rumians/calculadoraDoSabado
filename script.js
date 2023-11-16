

let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.getElementById("btSomar");
btSoma.addEventListener("click" , function () {
    somar(Number(valor1.value), Number(valor2.value));
});

function somar(a, b) {
    resultado.textContent = a + b;
}

let btSubtrair = document.getElementById("btSubtrair");
btSubtrair.addEventListener("click" , function () {
    sub(Number(valor1.value), Number(valor2.value));
});

function sub(a, b) {
    resultado.textContent = a - b;
}

let btMultiplicar = document.getElementById("btMultiplicar");
btMultiplicar.addEventListener("click" , function () {
    mult(Number(valor1.value), Number(valor2.value));
});

function mult(a, b) {
    resultado.textContent = a * b;
}

let btDividir = document.getElementById("btDividir");
btDividir.addEventListener("click" , function () {
    div(Number(valor1.value), Number(valor2.value));
});

function div(a, b) {
    resultado.textContent = a / b;
}

let idioma = document.getElementById("idioma")
idioma.addEventListener("change", function () {
        if (this.value == "br") {
            btSoma.value = "Somar";
        } else if (this.value == "es") {
            btSoma.value = "Sumar";
        }
    })
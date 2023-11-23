const linguaportuguesa = document.createElement("script");
linguaportuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaportuguesa);

const linguainglesa = document.createElement("script");
linguainglesa.src = "idiomas/english.js";
document.head.appendChild(linguainglesa);

const linguaespanhola = document.createElement("script");
linguaespanhola.src = "idiomas/espanol.js";
document.head.appendChild(linguaespanhola);

const linguafrancesa = document.createElement("script");
linguafrancesa.src = "idiomas/francais.js";
document.head.appendChild(linguafrancesa);

let idioma = document.getElementById("idioma")
idioma.addEventListener("change", function () {
        translate(this.value);
    })  

function translate(idioma) {    
    let traducao = 
        (idioma == "pt-br") ? portugues()
         : (idioma == "en") ? english()
         : (idioma == "es") ? espanol()
         : (idioma == "fr") ? francais()
         : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btSomar = document.getElementById("btSomar");
    btSomar.value = traducao.soma;
    btSubtrair = document.getElementById("btSubtrair");
    btSubtrair.value = traducao.subtracao;
    btMultiplicar = document.getElementById("btMultiplicar")
    btMultiplicar.value = traducao.multiplicacao;
    btDividir = document.getElementById("btDividir");
    btDividir.value = traducao.divisao;
    Titulo = document.getElementById("Titulo");
    Titulo.innerHTML = traducao.titulo;
    BoasVindas = document.getElementById("BoasVindas")
    BoasVindas.innerHTML = traducao.boasVindas;
}
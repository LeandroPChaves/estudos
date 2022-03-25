function pulalinha(){
    document.write ("<br> <br>");
}

function mostra(frase){
    document.write(frase);
    pulalinha();
}

function calculaImc(peso, altura){
    var imc = peso/(altura * altura);
    return imc;
}

var imcLeandro = calculaImc(84, 1.69);
var imcAmigo = calculaImc(80, 1.75);

mostra("O meu IMC é: " + Math.round(imcLeandro));
mostra("O IMC do meu amigo é: " + Math.round(imcAmigo));
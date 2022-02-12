function pulalinha() {
    document.write ("<br> <br>");
}
function mostra(frase) {
    document.write (frase);
    pulalinha();
}
function sorteio(n) {
    return Math.round(Math.random() * n);
}

//var adivinhe = n );
var adivinhe = sorteio(10);
var valor = parseInt(prompt ("Digite o valor:"));
//console.log (adivinhe);


if (adivinhe == valor) {
    mostra ("Você acertou. Parabéns !!!!!");
}
else  {
    var contador = 1;
    while (contador <= 10) {
        mostra ("Você errou " + "O correto era: " + adivinhe);
        contador = contador + 1;
    }
    
}
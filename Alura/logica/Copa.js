function pulalinha() {
    document.write ("<br> <br>");
}

function mostra(frase) {
    document.write (frase);
    pulalinha();
}

var limite = parseInt(prompt("Informe o ano em que deseja começar a contar a quantidade de copas"));
//var anocopa = 1930;

while (limite <= 2021) {
    mostra ("Teve copa em " + limite);
    limite = limite + 4;
}

mostra ("FIM"); 
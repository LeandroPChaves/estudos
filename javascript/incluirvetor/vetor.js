    var vetor = new Array ();
for (var r = 0; r < 5; r++) {
    var numero = prompt ("Digite um número");
    vetor [r] = numero;
}

var busca = prompt ("Digite um número para descobrir se consta no vetor");

if(vetor.indexOf(busca)>=0) {
    alert (`O número ${busca} foi encontrado`);
}
else {
    alert ("O numero " +busca+ " não foi encontrado" );
}
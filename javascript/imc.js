//programa que calcuma o IMC e retorna an informação se está abaixo, acima ou no índice correto//

function pulalinha() {
    document.write ("<br>" + "<br>");
}

function mostra(frase) {
    document.write(frase);
    pulalinha();
}

function calculaImc(peso, altura) {
    return peso/(altura * altura);
}

var nome = prompt("Digite o seu nome: ");
var digaPeso = prompt(nome + " " + "Digite o seu peso ");
var digaAltura = prompt(nome + " " + "Digite a sua altura");
var imc = calculaImc(digaPeso, digaAltura);

if (imc < 18.5) {
    mostra("O sei IMC é: " + Math.round(imc))
    mostra ("Você está abaixo do recomendado.")
} 
 else if (imc > 35){
     mostra("O sei IMC é: " + Math.round(imc))
     mostra ("Você está acima do recomendado.")
 }
   else {
       mostra("O sei IMC é: " + Math.round(imc))
       mostra ("Parabéns, você está no índice correto.")
   }
 





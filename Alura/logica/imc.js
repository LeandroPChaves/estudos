function pulalinha() {
    document.write ("<br>");
    document.write ("<br>");
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
 


//function somaDoisNumeros (numero1, numero2) {
    //var soma = (numero1 + numero2);
    //mostra ("A soma dos números é: " + soma);
//}

//somaDoisNumeros (10, 5);

//function valorQualquer(){
   // var a = 10;
   // var b = 20;
   // var c = 30;

   // return b;
//}


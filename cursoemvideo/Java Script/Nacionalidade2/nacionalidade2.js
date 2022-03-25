//Programa que o usário informa o nome e digita sim ou não para Brasileiro ou Estrangeiro

var nome = prompt("Digite nome");
var pais = prompt(`Digite sim se for Brasileiro e não se for estrangeiro`);

//var nome = "Iata"
//var pais = "dupla"

if (pais == "sim") {
    document.write (`O ${nome} é Brasileiro`)
}
 else if (pais == "não"){
     document.write (`O ${nome} é estrangeiro`)
 }
  else if (pais == "dupla"){
      document.write ("O " + nome +" Tem nacionalidade dupla")
      //document.write (`O ${nome} Tem nacionalidade dupla`)
  }
  else {
     document.write ("Valor Inválido")
     alert ("valor inválido")
     }
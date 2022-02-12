var alimentos = prompt("Nome do Alimento")

if (alimentos == "tomate" || alimentos == "laranja" || alimentos == "abacaxi" || alimentos == "limão") {

    var valorAlimentoAnt = prompt("Valor do Alimento na semana anterior")
    var valorAlimentoAtual = prompt("Valor do Alimento na semana atual")


    if (valorAlimentoAtual > valorAlimentoAnt){
        console.log ("O " + alimentos + " " + "aumentou: " + (parseFloat(valorAlimentoAtual) - parseFloat(valorAlimentoAnt)) + " Reais")
    }
     else if (valorAlimentoAtual < valorAlimentoAnt) {
        console.log ("O " + alimentos + " " + "diminuiu: " + (parseFloat(valorAlimentoAnt) - parseFloat(valorAlimentoAtual)) + " Reais")
     }
      else 
        alert("Não houve alteração no preço de " + alimentos)
        
      }
     
     
else {
    console.log ("O alimento está indisponível na feira")
    alert ("Alimento indisponível na feira")
}

 
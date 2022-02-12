function contar(){

var ini = document.getElementById('txti');
var fim = document.getElementById('txtf');
var passo = document.getElementById('txtp');
var res = document.getElementById('res');
var i = Number(ini.value);
var f = Number(fim.value);
var p = Number(passo.value);

if (i == 0 || f == 0 || p <= 0 ) {
    res.innerHTML = "Impossível contar"
}
 else {
    res.innerHTML ='Contando: ';
    //var i = Number(ini.value);
    //var f = Number(fim.value);
    //var p = Number(passo.value);
    if (i < f) {
    for (var c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
  } else { 
      for (var c = i; c >= f; c -=p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    res.innerHTML += `\u{1F3C1}`  
  }
}
}  

//Caso eu declarasse os valores das variáveis (value) no else conforme comentário
//O meu If inicial seria: ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0
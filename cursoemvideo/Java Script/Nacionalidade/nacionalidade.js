//function btnpais(){

//var pais = prompt(`Digite sim para Brasileiro e não para Estrangeiro`)



// if (pais == "sim" || pais == "Sim") {
//     document.write ("Brasileiro");
// }
 
// else if (pais == "nao" || pais == "não" || pais == "Não" || pais == "Nao") {
//     document.write ("Estrangeiro");
//  }
  
//  else {
//       alert ("Valor Inválido")
//   }
// }



 

function btnpais(){
    var nome = document.getElementById('nome').value.style.color="red";
    var pais = document.getElementById('pais').value;
    var enviar = document.getElementById('enviar'); 
    var nome = document.getElementById('nome').style.background = "red";
    

    if (pais == "sim" || pais == "Sim") {
       
        document.write (`O ${nome} é Brasileiro`);
    }
     
    else if (pais == "nao" || pais == "não" || pais == "Não" || pais == "Nao") {
       
        document.write (`O ${nome} é Estrangeiro`);
     }
      
     else {
          
        alert ("Valor Inválido")
      }
    
}

btnpais()

//enviar.addEventListener('click', function() {

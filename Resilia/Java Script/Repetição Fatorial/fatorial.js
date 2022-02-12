var n = prompt ("Digite o número");
contador = n;
if (n > 0) {
 while (n >= 0) {
     contador *= n;
     n--;
 }
   console.log (contador);
}
else {
    console.log ("Número inválido")
}
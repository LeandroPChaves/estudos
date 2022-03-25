// function parimpar(n) {
//     if (n%2 == 0) {
//         return ("par")
//     }
//      else {
//         return ("ìmpar")
//      }
// }

// //var chamar = parimpar(4)
// //document.write (chamar)

// document.write (parimpar(2)) 

// Eu posso chamar a função direto ou criar uma variável para chamar a função através da variável.

// --------------------------------------------------------------------------------------------------------

// function valores (n1, n2) {
//     var som = (n1 + n2)
//     return (som)
// }

// document.write (valores (2,5)) 

// --------------------------------------------------------------------------------------------------------

function fatorial (n) {
    var fat = 1
    for (c = n; c > 1; c--){
        fat *= c
    }
    return fat
    //ex de fatorial 5 (5 x 4 x 3 x 2 x 1) 
}

document.write (fatorial(5));

function soma_impares_menores(numero) {
    var soma_impares = 0;
    
    for (var cont = 0; cont < numero; cont++) {
        if (cont % 2 == 1) {
            soma_impares += cont;
        }
    }

    return soma_impares;
}

console.log(soma_impares_menores(10));
console.log(soma_impares_menores(11));
console.log(soma_impares_menores(5));
console.log(soma_impares_menores(6));
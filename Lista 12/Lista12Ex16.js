
function soma_pares_menores(numero) {
    var soma_pares = 0;

    for (var cont = 0; cont < numero; cont++) {
        if (cont % 2 == 0) {
            soma_pares += cont;
        }
    }

    return soma_pares;
}

console.log(soma_pares_menores(10));
console.log(soma_pares_menores(9));
console.log(soma_pares_menores(11));
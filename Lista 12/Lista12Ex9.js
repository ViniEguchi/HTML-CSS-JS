
function primos(numero) {
    var qtd_divisiveis = 0;

    for (var cont = 1; cont <= numero; cont++) {
        if (numero % cont == 0) {
            qtd_divisiveis++;
        }    
    }

    if (qtd_divisiveis == 2) {
        return 'primo';
    }
    return 'não primo';
}

console.log(primos(2));
console.log(primos(5));
console.log(primos(10));
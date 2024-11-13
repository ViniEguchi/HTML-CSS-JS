
function fatorial(numero) {
    var fatorial = 1;

    for (cont = numero; cont > 0; cont--) {
        fatorial *= cont;
    }

    return fatorial;
}

console.log(fatorial(2));
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(3));
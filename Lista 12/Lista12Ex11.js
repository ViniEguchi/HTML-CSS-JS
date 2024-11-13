
function dualidade(numero) {
    var par_impar = 'impar';
    var positivo_negativo = 'positivo';

    if (numero % 2 == 0) {
        par_impar = 'par';
    }

    if (numero < 0) {
        positivo_negativo = 'negativo';
    }

    return `${positivo_negativo} e ${par_impar}`;
}

console.log(dualidade(-2));
console.log(dualidade(4));
console.log(dualidade(-5));
console.log(dualidade(11));
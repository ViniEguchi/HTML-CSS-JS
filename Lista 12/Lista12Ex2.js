
function verificar_par_impar(numero) {
    if (numero % 2 == 0) {
        return 'par';
    }

    return 'impar';
}

console.log(verificar_par_impar(5));
console.log(verificar_par_impar(4));
console.log(verificar_par_impar(3));
console.log(verificar_par_impar(2));

function repetir_caractere(numero, caractere) {
    var msg = '';

    for (var cont = 1; cont <= numero; cont++) {
        msg += `${cont}- ${caractere}, `
    }

    return msg;
}

console.log(repetir_caractere(2, 'b'));
console.log(repetir_caractere(5, '@'));
console.log(repetir_caractere(10, '#'));
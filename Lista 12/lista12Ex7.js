
function qtd_vogais(string) {
    var qtd_vogais = 0;
    var minusculo = string.toLowerCase();

    for (var cont = 0; cont < string.length; cont++) {
        if (
            minusculo[cont].includes('a') ||
            minusculo[cont].includes('e') ||
            minusculo[cont].includes('i') ||
            minusculo[cont].includes('o') ||
            minusculo[cont].includes('u')
        ) {
            qtd_vogais++;
        }
    }

    return qtd_vogais;
}

console.log(qtd_vogais('maca'));
console.log(qtd_vogais('fghj'));
console.log(qtd_vogais('pare'));

function multiplos(primeiro, segundo) {
    if (segundo % primeiro == 0) {
        return 'múltiplo';
    }

    return 'não múltiplo';
}

console.log(multiplos(2, 5));
console.log(multiplos(2, 4));
console.log(multiplos(2, 10));
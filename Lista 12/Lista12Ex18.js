
function proximidade(primeiro, segundo) {
    var primeiro_menos_segundo = Math.abs(primeiro - segundo);
    var segundo_menos_primeiro = Math.abs(segundo - primeiro);

    if (primeiro_menos_segundo < 5 || segundo_menos_primeiro < 5) {
        return 'Próximos'
    }

    return 'Distantes'
}

console.log(proximidade(1, 7));
console.log(proximidade(5, 9));
console.log(proximidade(9, 5));
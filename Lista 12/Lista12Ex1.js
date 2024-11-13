
function teste(primeiro, segundo) {
    if (primeiro == segundo) {
        return "Ambos são iguais";
    }

    if (primeiro > segundo) {
        return primeiro;
    }

    return segundo;
}

console.log(teste(5, 6));
console.log(teste(6, 6));
console.log(teste(10, 15));
console.log(teste(0, -6));
console.log(teste(-15, -7));
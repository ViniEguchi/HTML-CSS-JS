
function maior_numero(primeiro, segundo, terceiro) {
    if (primeiro > segundo && primeiro > terceiro) {
        return primeiro;
    }

    if (segundo > primeiro && segundo > terceiro) {
        return segundo;
    }

    return terceiro;
}

console.log(maior_numero(1, 2, 3));
console.log(maior_numero(4, 2, 1));
console.log(maior_numero(1, 5, 2));
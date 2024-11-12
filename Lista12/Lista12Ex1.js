
function teste(a, b) {
    if (a == b) {
        return "Ambos são iguais";
    }

    if (a > b) {
        return a;
    }

    return b;
}

console.log(teste(5, 6));
console.log(teste(6, 6));
console.log(teste(10, 15));
console.log(teste(0, -6));
console.log(teste(-15, -7));
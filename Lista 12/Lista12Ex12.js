
function somar_subtrair(primeiro, segundo) {
    if (primeiro >= segundo) {
        return primeiro - segundo;
    }

    return primeiro + segundo;
}

console.log(somar_subtrair(10, 9));
console.log(somar_subtrair(10, 10));
console.log(somar_subtrair(10, 11));

function divisivel_3(numero) {
    if (numero % 3 == 0) {
        return 'divisível por 3';
    }

    return 'não divisível por 3';
}

console.log(divisivel_3(2));
console.log(divisivel_3(6));
console.log(divisivel_3(18));
console.log(divisivel_3(25));
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var resultado = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        resultado.push(numbers[index]);
    }
}

console.log(resultado);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = 100;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < resultado) {
        resultado = numbers[index];
    }
}

console.log(resultado);
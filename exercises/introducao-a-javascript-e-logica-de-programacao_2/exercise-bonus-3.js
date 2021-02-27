let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let resultado = [];

for (index = 0; index < numbers.length - 1; index += 1) {
    for (mult = 1; mult > index; mult += 1) {
        index = mult - 1;
        if (mult > numbers.length - 1) {
            resultado.push(numbers[numbers.length - 1] * 2);
            break;
        } else {
            resultado.push(numbers[index] * numbers[mult]);
        }
    }
}
console.log(resultado);
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var somaNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    somaNumbers = somaNumbers + numbers[index]
}

var media = somaNumbers / numbers.length;

console.log(media)
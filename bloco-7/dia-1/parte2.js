//---------------------------------exercicio 1

/* let number = 4;
let result = 1;
for (let index = 1; index <= number; index += 1) {
  result *= index;
}
console.log(result);

 //com função
const soma = (number) => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result *= index;
  }
  console.log(result);
}
soma(3);

//recursiva
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(3));
 */
//--------------------------------exercicio 2
/* const longestWord = (phrase) => {
    let arr = phrase.split(' ');
    //console.log(arr);
    let result = '';
    let comparation = 0;
    for (let index = 1; index < arr.length; index += 1) {
      if (arr[comparation].length > arr[index].length) {
        result = arr[comparation];
      } else {
        result = arr[index];
        comparation = index;
      }
    }
    console.log(result);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); */

//--------------------------------exercicio 4
const array1 = ["Android", "iOS", "Architecture", "Teach", "Run"];

const funcOne = (str) => {
  let arr = str.split(' ');
  let resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] === 'x') {
      resultArr.push('Douglas');
    } else {
      resultArr.push(arr[index]);
    }
  }
  return resultArr.join(' ');
}
funcOne('Tryber x aqui!');

const funcTwo = (funcOne, array) => {
  let habilities = `${funcOne('Tryber x aqui!')} Minhas cinco principais habilidades são:`
  array.forEach((element) => {
    if (element === array[array.length - 1]) {
      habilities += ` ${element}.`
    } else {
      habilities += ` ${element},`
    }
  });
  return habilities;
}
console.log(funcTwo(funcOne, array1.sort()));

//forma resumida funcOne

/* const funcOne = (str) => {
  
  return str.replace(/x/, 'Douglas');
}
console.log(funcOne('Tryber x aqui!')); */
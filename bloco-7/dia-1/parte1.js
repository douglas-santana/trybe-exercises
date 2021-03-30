// exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
/* Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .*/

// exercicio 2 (ajuda do w3schools)

const oddsAndEvens = (arr) => {
  arr.sort((a, b) => a - b);
  //arr.sort(function(a, b){return a - b});
  console.log(`Os números ${arr} se encontram ordenados de forma crescente!`);
}

oddsAndEvens([13, 3, 4, 10, 7, 2]);
/* Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. */
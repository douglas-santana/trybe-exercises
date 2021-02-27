// criar variavel n
// imprimir '*' n vezes
// imprimir resultado n vezes

let n = 5;

let resultado = '*';

for (index = 1; index < n; index += 1) { // imprime '*' n vezes
    resultado += '*';
}

for (res = 1; res < n; res += 1) { // imprime resultado n vezes
    console.log(resultado);
}

console.log(resultado)
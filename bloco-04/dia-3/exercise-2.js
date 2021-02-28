// criar variável n
// imprimir '*' 1 a mais a cada linha até a linha n
// criar uma variavel para ser usada com valor '*'
// for vai decidir quantos '*' quero por linha
// if vai ser a condição de parada ou mostra resultado por linha no console

n = 5;

let simbolo = '*';

    console.log(simbolo);
    for (index = 1; index < n; index += 1) {
        if (index >= n) {
            break;
        } else {
            console.log(simbolo += '*')
        }
    }
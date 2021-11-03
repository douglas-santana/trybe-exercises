// fazer um for para armazenar o valor de n - 1 espaços
// outro for para usar esse resultado e acrescentar '*' ao final
// ir decremetando os espaços 1 por linha
// criar variável com o valor de '*' para ser usada
// incremetando '*' por linha

let n = 5;
let resultado = '';
let tamanho = n;

for (let lineIndex = 0; lineIndex <= n -1; lineIndex += 1) { //quantas linhas serao imprimidas de 0 a 4 (5 linhas)
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) { //percorre as colunas até o valor de n (5 colunas)
        if (columnIndex < tamanho) { //se o indice correspondente a coluna for menor que o valor de tamanho
            resultado = resultado + ' '; //atribui ' ' a variavel resultado
        } else {
            resultado = resultado + '*'; //atribui '*' a variavel resultado
        }
    }
    console.log(resultado); //imprime resultado dos for
    resultado = ''; //zera o resultado para poder ir para proxima linha e ser imprimido uma nova condicao
    tamanho -= 1; //reduz o tamanho para que os espacos sejam -1 a cada for
}
let n = 5;
let result = '';
let center = Math.trunc(n / 2) + 1; //arredonda para 2 e + 1 = 3 (será usado para preencher o meio).
let right = center -1; //preenche as 2 primeiras colunas.
let left = center + 1; //preenche as 2 ultimas colunas.

for (lineIndex = 0; lineIndex < center; lineIndex += 1) { //irá percorrer as center (3) linhas: 0,1 e 2 (3 vezes).
    for (columnIndex = 0; columnIndex <= n; columnIndex += 1) { //irá percorrer cada espaço da coluna (5 colunas).
        if (columnIndex < right) { //enquanto a coluna for menor que o valor de right atribua ao resulta ' '.
            result += ' ';
        } else if (columnIndex > right && columnIndex < left) { //enquanto a coluna estiver entre right e left atribua '*'.
            result += '*';
        } else { // se nenhum dos casos acima for verdadeiro, atribua ao result ' '. (depois que preencher os '*').
            result += ' ';
        }
    }
    console.log(result); //imprime o resultado.
    result = ''; //zera o resultado para ser usado na proxima linha.
    right -= 1; //reduz 1 coluna do right que será usado na próxima linha.
    left += 1; //aumenta 1 coluna do left que será usado na próxima linha.
}
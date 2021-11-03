let n = 7;
let center = (n + 1) / 2; //arredonda para 2 e + 1 = 3 (será usado para preencher o meio).
let left = center; //preenche as 2 ultimas colunas.
let right = center; //preenche as 2 primeiras colunas.

for (let line = 1; line <= center; line += 1) {
    let result = '';
    for (let column = 1; column <= n; column += 1) {
        if (column === left || column === right || line === center ) {
            result += '*';
        }  else {
            result += ' ';
        }
    }
    console.log(result);
    right += 1; //reduz 1 coluna do right que será usado na próxima linha.
    left -= 1; //aumenta 1 coluna do left que será usado na próxima linha.
}
let custo = 100;
let venda = 150;
let imposto = 0.2;
let lucro = venda - (custo + (custo * imposto))

if (custo < 0 || venda < 0) {
    console.log('erro')
} else {
    console.log (lucro) 
}
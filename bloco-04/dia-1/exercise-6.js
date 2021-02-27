let pecaXadrez = 'peao'

if (pecaXadrez.toLocaleLowerCase() == 'peao') {
    console.log('uma casa para frente')
} else if (pecaXadrez.toLocaleLowerCase() == 'bispo') {
    console.log('quantas casas quiser na giagonal')
} else if (pecaXadrez.toLocaleLowerCase() == 'torre') {
    console.log('quantas casas quiser na horizontal e vertical, sem pular peça')
} else if (pecaXadrez.toLocaleLowerCase() == 'cavalo') {
    console.log('duas casas horizontal ou vertical e uma a mais em formato de L, pode pular peça')
} else if (pecaXadrez.toLocaleLowerCase() == 'rainha') {
    console.log('quantas casas quiser na horizontal e vertical e diagonal')
} else if (pecaXadrez.toLocaleLowerCase() == 'rei') {
    console.log('uma casa horizontal e vertical e diagonal')
} else {
    console.log('erro')
}
let anguloA = 60;
let anguloB = 80;
let anguloC = true;

if (anguloA + anguloB + anguloC == 180) {
    console.log(true);
} else if (anguloA + anguloB + anguloC != 180) {
    console.log(false);
} else if (typeof anguloA != 'number' || typeof anguloB != 'number' || typeof anguloC != 'number') {
    console.log('Erro');
}

//if (anguloA + anguloB + anguloC == 180) {
  //      console.log(true);
    //} else if (anguloA + anguloB + anguloC != 180) {
      //  console.log(false);
    //} else if (typeof (anguloA) != 'number') {
      //  console.log('Erro');
    //} else if (typeof (anguloB) != Number) {
      //  console.log('Erro');
    //}
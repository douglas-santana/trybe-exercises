//--------------------exercicio 1--------------------
function changeP() {
   let aboutMe = document.querySelectorAll(".center-content p")[0];
   aboutMe.innerHTML = 'Daqui a 2 anos quero estar trabalhando numa empresa que amo!';
}
changeP();

//--------------------exercicio 2--------------------
function changeColorMain() {
   let changeColor = document.getElementsByClassName("main-content")[0];
   changeColor.style.backgroundColor = 'rgb(76,164,109)';
}
changeColorMain();

//--------------------exercicio 3--------------------
function changeColorCenter() {
   let changeColor = document.getElementsByClassName("center-content")[0];
   changeColor.style.backgroundColor = 'rgb(255,255,255)';
}
changeColorCenter();

//--------------------exercicio 4--------------------
function correctText() {
   let correctH1 = document.getElementsByTagName('h1')[0];
   correctH1.innerHTML = 'Exercício 5.1 - JavaScripit'
}
correctText()

//--------------------exercicio 5--------------------
function toUpperCase() {
   let aboutMe = document.querySelectorAll(".center-content p")[0];
   aboutMe.innerHTML = aboutMe.innerHTML.toLocaleUpperCase();
}
toUpperCase();

//--------------------exercicio 6--------------------
function showAllTagsP() {
   let show = document.getElementsByTagName('p');
   for (let index = 0; index < show.length; index += 1) {
      console.log(show[index].innerHTML);
   }
}
showAllTagsP();
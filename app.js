//selectionner la id 'invader'
//pour i allant de 0 a 7(8 fois)
//on créer une div
//on lui ajouter la class 'row'
//on l'insert dans 'invader'
//Pour J  allant de 0 a 7
//on créer un div
//on lui met la class pixel
// on l'insere dans row
//=================================
//selectionne la première balise avec l'ID #invader
const invaderElement = document.querySelector(`#invader`); 
//on boucle sur les lignes 8 fois 
for (let i = 0; i < 8; i++) {
    //8 fois je créer une div 
  const rowElement = document.createElement(`div`);
  //8 fois je lui ajoute la class 'row'
  rowElement.classList.add(`row`);
  //8 fois je l'adopte a la div ayant l'ID #invader
  invaderElement.appendChild(rowElement);

  //on boucle sur les pixel 8 fois
  for (let j = 0; j < 8; j++) {
    //8 fois je créer une div
    let pixelElement = document.createElement(`div`);
    //8 fois je lui ajoute la class 'pixel'
    pixelElement.classList.add(`pixel`);
    //8 fois je l'adopte a ma ligne  class ='row'
    rowElement.appendChild(pixelElement);
    // console.log(pixelElement);
  }
}


//PARTIE 2
// exercice sur une boucle forEach
//je selectionne tout mes pixels
const pixelElements = document.querySelectorAll(`.pixel`);
// je selectionne tout mes pixels et je boucle sur chaque pixel
pixelElements.forEach((pixelElement) => {
    //pour chaque pixel je mes un écouteur 'click' 
  pixelElement.addEventListener(`click`, function () {
    //a chaque 'click' je change la class soit '.pixel' soit '.pixel.dark'
    pixelElement.classList.toggle(`dark`);
  });
});

//PARTIE 3

//créer le formulaire

const formHTML = 
`<input placeholder ="Taille de  la grille" id="grid-size">
<input type="submit" value="Valider">`;
const formElement = document.querySelector("form.configuration");

formElement.insertAdjacentHTML('beforeend',formHTML);
//on a besoin d'écouter le click sur le bouton valider 
//et on a besoin d'écouter le ENTER sur la touche du clavier 
//Pour cela on écoute le SUBMIT du form


formElement.addEventListener(`submit`,(event)=>{
  event.preventDefault(); //on prévient du rechargement automatique de la page
  const inputElement = document.querySelector('#grid-size');  // je sélectionne mon input en hard-codant une div
  //on récupere la valeur rentrer par l'utilisateur
  const gridZise = inputElement.valueAsNumber; //valueAsNumber pas besoin de parseInt
  
})



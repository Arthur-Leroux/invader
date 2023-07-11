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

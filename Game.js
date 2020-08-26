let card = document.querySelectorAll(".card"); // optenemos todos elementos del DOM con la etiqueta "card"
let cover = document.querySelectorAll(".cover"); // optenemos todos elementos del DOM con la etiqueta "cover"

/*
 *Voltea la carta del reverso al frente
 */
function voltearTarjeta(index, cardValue, img) {
  //(posicion, valor, imagen)
  card[index].style.transform = "rotateY(-180deg)"; // Rota un elemento del array de cards
  // console.log(cover);

  setTimeout(() => {
    // restrazamos un poco las instrucciones durmiendo el programa
    card[index].innerHTML = null; // borramos el contenido de la carta
    cover[index].style.display = "block"; // mostramos el lado de frente de la imagen
    // console.log(index);
    card[index].appendChild(cover[index]); // ingresamos en el elemento card la parte del frente de la carta(cover)
  }, 300); //milisegundos que se durme el programa

  comparation(index, cardValue, img); // funcion que se llama para comparar cartas
}

let question = document.querySelectorAll(".question"); // optenemos todos elementos del DOM con la etiqueta "question" que son los signos de interrogacion
let back = document.querySelectorAll(".back"); // optenemos todos elementos del DOM con la etiqueta "back" son el reverso de la tarjeta
/*
 *Voltea la carta del frente al reves
 */
function volveravoltear(index) {
  card[index].style.transform = "rotateY(180deg)"; // Rota un elemento del array de cards
  // console.log(back);

  setTimeout(() => {
    // restrazamos un poco las instrucciones durmiendo el programa
    card[index].innerHTML = null; //borramos lo que esta dentro de card
    back[index].style.display = "block"; // aparecemos el reverso de la carta
    console.log(index);
    card[index].appendChild(back[index]); //ingresamos el reverso de la carta en el elemento card
  }, 300); //milisegundos
}

let clickEnCarta = 0; // esta variable manejara el click en la primera y la segunda carta como un switche
//----------- estas variables recibiran el valor de la primera carta clickeada la imagen y la posicion de donde se encuentra
let valueCarta1 = 0;
let image1 = "";
let index1 = 0;
//----------- estas variables recibiran el valor de la segunda carta clickeada la imagen y la posicion de donde se encuentra
let valueCarta2 = 0;
let image2 = "";
let index2 = 0;

/*
 *Compara las cartas en base a su posición, imagen y valor numerico.
 */

function comparation(index, cardValue, img) {
  if (clickEnCarta == 0) {
    // si es la primera carta clickeada
    // almacena los datos de la primera carta
    valueCarta1 = cardValue;
    image1 = img;
    index1 = index;

    clickEnCarta = 1;
  } else if (clickEnCarta == 1) {
    // si es la segunda carta clickeada
    // almacena los datos de la segunda carta
    valueCarta2 = cardValue;
    image2 = img;
    index2 = index;

    setTimeout(() => {
      if (valueCarta1 == valueCarta2 && image1 == image2) {
        //Se compara carta 1 con carta 2
      } else {
        // Si las cartas son distintas se voltean de regreso
        volveravoltear(index1);
        volveravoltear(index2);
      }
    }, 1000);

    clickEnCarta = 0;
  }
}

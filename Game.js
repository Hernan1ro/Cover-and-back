let card = document.querySelectorAll(".card");
let cover = document.querySelectorAll(".cover");

function voltearTarjeta(index, cardValue, img) {
  card[index].style.transform = "rotateY(-180deg)";
  // console.log(cover);

  setTimeout(() => {
    card[index].innerHTML = null;
    cover[index].style.display = "block";
    console.log(index);
    card[index].appendChild(cover[index]);
  }, 300);

  comparation(index, cardValue, img);
}

let question = document.querySelectorAll(".question");
let back = document.querySelectorAll(".back");

function volveravoltear(index) {
  card[index].style.transform = "rotateY(180deg)";
  // console.log(back);

  setTimeout(() => {
    card[index].innerHTML = null;
    back[index].style.display = "block";
    console.log(index);
    card[index].appendChild(back[index]);
  }, 300);
}

let clickEnCarta = 0;
function comparation(index, cardValue, img) {
  if (clickEnCarta == 0) {
    let valueCarta1 = cardValue;
    let image1 = img;
    let index1 = index;
    alert(valueCarta1);

    clickEnCarta = 1;
  } else if (clickEnCarta == 1) {
    let valueCarta2 = cardValue;
    let image2 = img;
    let index2 = index;

    alert(valueCarta1 + " var2: " + valueCarta2);
    alert(valueCarta2);

    // if (valueCarta1 == valueCarta2 && image1 == image2) {
    // } else {
    //   volveravoltear(index1);
    //   volveravoltear(index2);
    // }

    clickEnCarta = 0;
  }
}

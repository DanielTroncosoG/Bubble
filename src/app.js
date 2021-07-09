/* eslint-disable */
import "bootstrap";
import "./style.css";

let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let pinta = ["♥", "♦", "♠", "♣"];
let arrayCard = [];
let bigDiv = document.querySelector("#BigContainer");
let first = document.querySelector("#FirstDraw");

let buttonDraw = document.querySelector("#Draw");

let buttonBubble = document.querySelector("#Bubble");

function randomNumero() {
  let a = Math.floor(Math.random() * 13);
  return numero[a];
}

function randomPinta() {
  let b = Math.floor(Math.random() * 4);
  return pinta[b];
}

function DrawCards(numero, pinta) {
  let divDraw = document.querySelector("#Generate");
  let Class = "white";
  if (pinta == "♠" || pinta == "♣") {
    Class = "black";
  }
  if (pinta == "♥" || pinta == "♦") {
    Class = "red";
  }
  divDraw.innerHTML += `<div class="card ${Class}">
  <p class="upcorner">${pinta}</p>
  <p class="bodycard">${numero}</p>
  <p class="bottomcorner">${pinta}</p>
  </div>`;
}

function DrawBubble(numero, pinta) {
  let divBubble = document.querySelector("#Generated");
  let Class = "white";
  if (pinta == "♠" || pinta == "♣") {
    Class = "black";
  }
  if (pinta == "♥" || pinta == "♦") {
    Class = "red";
  }
  let newDiv = document.createElement("DIV");
  bigDiv.appendChild(newDiv);
  divBubble.innerHTML += `<div class="card ${Class}">
  <p class="upcorner">${pinta}</p>
  <p class="bodycard">${numero}</p>
  <p class="bottomcorner">${pinta}</p>
  </div>`;
}

function printCards(arrayCard) {
  for (let i = 0; i < arrayCard.length; i++) {
    let num = arrayCard[i][0];
    let pint = arrayCard[i][1];
    DrawCards(num, pint);
  }
}

function printBubble(arrayCard) {
  let newDiv = document.createElement("DIV");
  newDiv.classList.add("d-flex");
  bigDiv.appendChild(newDiv);
  let w = first;

  for (let i = 0; i < w; i++) {
    let num = arrayCard[i][0];
    let pint = arrayCard[i][1];
    DrawBubble(num, pint);
  }
}

function newArray(array) {
  for (let i = 0; i < array; i++) {
    let newArr = [randomNumero(), randomPinta()];
    arrayCard.push(newArr);
  }
  console.log(arrayCard);
  return arrayCard;
}

function ordenarImprimir() {
  let c = arrayCard.length - 1;
  while (c > 0) {
    let i = 0;
    while (i < c) {
      if (arrayCard[i][0] > arrayCard[i + 1][0]) {
        let aux = arrayCard[i][0];
        let auxS = arrayCard[i][1];
        arrayCard[i][0] = arrayCard[i + 1][0];
        arrayCard[i][1] = arrayCard[i + 1][1];
        arrayCard[i + 1][0] = aux;
        arrayCard[i + 1][1] = auxS;
        printBubble(arrayCard);
      }
      i++;
    }

    c--;
  }
  return arrayCard;
}

window.onload = function() {
  buttonDraw.addEventListener("click", () => {
    printCards(newArray(first.value));
  });
  buttonBubble.addEventListener("click", () => {
    ordenarImprimir();
  });
};

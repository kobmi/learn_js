"use strict";

const box = document.getElementById("box"),
  buttons = document.getElementsByTagName("button"),
  secondButton = document.getElementsByTagName("button")[1],
  circles = document.getElementsByClassName("circle"),
  firstCircle = document.getElementsByClassName("circle")[0],
  hearts = document.querySelectorAll(".heart"),
  firstHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

console.log(buttons); //HTMLCollection(5) [button, button, button, button, button]
console.log(secondButton); //<button>2<button>
console.log(circles); //HTMLCollection(3) [div.circle, div.circle, div.circle]
console.log(firstCircle); //<div class="circle"></div>
console.log(hearts); //NodeList(3) [div.heart, div.heart, div.heart]
console.log(firstHeart); //<div class="heart"></div>

// box.style.backgroundColor = "darkred";
// box.style.width = "500px";

// for (let button of buttons) {
//   button.style.backgroundColor = "darkgrey";
//   button.style.color = "black";
// }

// hearts.forEach((heart) => {
//   heart.style.backgroundColor = "green";
// });

// document.getElementsByClassName("circle")[0].style.backgroundColor = "black";

// const text = document.createTextNode("Hello from createTextNode");

// const div = document.createElement("div");
// div.classList.add("black");

// // div.textContent = "Hello"; // только текст

// div.innerHTML = "<h1>Hello</h1>";
// div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");

// document.body.append(div); // добавляет в конец
// document.body.appendChild(div); // добавляет в конец

// document.body.prepend(div); // в начало
// document.body.insertBefore(div,hearts[1]);

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove(); //удалаяет елемент
// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0],hearts[0])

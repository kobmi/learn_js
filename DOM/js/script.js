"use strict";

// const box = document.getElementById("box"),
//   buttons = document.getElementsByTagName("button"),
//   secondButton = document.getElementsByTagName("button")[1],
//   circles = document.getElementsByClassName("circle"),
//   firstCircle = document.getElementsByClassName("circle")[0],
//   hearts = document.querySelectorAll(".heart"),
//   firstHeart = document.querySelector(".heart"),
//   wrapper = document.querySelector(".wrapper");

// console.log(buttons); //HTMLCollection(5) [button, button, button, button, button]
// console.log(secondButton); //<button>2<button>
// console.log(circles); //HTMLCollection(3) [div.circle, div.circle, div.circle]
// console.log(firstCircle); //<div class="circle"></div>
// console.log(hearts); //NodeList(3) [div.heart, div.heart, div.heart]
// console.log(firstHeart); //<div class="heart"></div>

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

// --------------------------------------------------------------------------------------------------------
// console.log(document.documentElement); //<html>
// console.log(document.body); // <body>
// console.log(document.body.childNodes); // NodeList со всеми элементами в body

// console.log(document.body.firstChild); // первая нода в body
// console.log(document.body.firstElementChild); //<div class="box" id="box"></div> первый элемент
// console.log(document.body.lastChild); // последная нода в body
// console.log(document.body.lastElementChild); // <script src="js/script.js"></script> ;

// console.log(document.querySelector("#current").parentNode); // родитель элемента
// console.log(document.querySelector("#current").parentNode.parentNode); // родитель родителя элемента
// console.log(document.querySelector("[data-current='3']")); //<li data-current="3">3</li>
// console.log(document.querySelector("[data-current='3']").nextSibling); //#text
// console.log(document.querySelector("[data-current='3']").nextElementSibling); //<li>4</li>

// выводим только элементы в body без текстовых нод
// for (let node of document.body.childNodes) {
//   if (node.nodeName == "#text") {
//     continue;
//   }
//   console.log(node);
// }

const btns = document.querySelectorAll("button"),
  wrapper = document.querySelector(".btn-block");

// console.log(btns); //NodeList(8) [button.blue.some, button, button, button, button, button, button, button]
// console.log(btns[0].classList.length); // 2
// console.log(btns[0].classList); //DOMTokenList(2) ["blue", "some", value: "blue some"]
// console.log(btns[0].classList.item(0)); // blue
// console.log(btns[1].classList.add("red")); // добавляет класс, или классы
// console.log(btns[0].classList.remove("blue")); // удаляет класс
// console.log(btns[0].classList.toggle("blue")); // если есть удаляет, если нет добавляет

// if (btns[1].classList.contains("red")) {
//   console.log("red");
// }
btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }
  btns[1].classList.toggle("red");
});
// Делегирование
wrapper.addEventListener("click", (event) => {
  //   if (event.target && event.target.matches("button.red")) {
  //     console.log("HellO");
  //   }
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("HellO");
  }
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Hel");
  });
});

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

"usestrict";
// const timerId = setTimeout(function () {
//   console.log("Hello after 1 second");
// }, 1000);
// -------------------------------------------------------------------
// const timerId = setTimeout(
//   function (text) {
//     console.log(text);
//   },
//   1000,
//   "Hello after 1 second"
// ); /// не часто используется
// -------------------------------------------------------------------

// const btn = document.querySelector(".btn");
// let interval,
//   i = 0;

// btn.addEventListener("click", () => {
//   interval = setInterval(logger, 1000);
// });

// function logger() {
//   if (i === 3) {
//     clearInterval(interval);
//   }
//   console.log("hello from function");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("Log");
//   id = setTimeout(log, 500);
// }, 500);

// function myAnimation() {
//   const box = document.querySelector(".box");
//   let position = 0;

//   const id = setInterval(frame, 5);
//   function frame() {
//     if (position == 300) {
//       clearInterval(id);
//     } else {
//       position++;
//       box.style.top = `${position}px`;
//       box.style.left = `${position}px`;
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);

// ---------------------------------------------------------------------------------

// let count = 15;

// function log() {
//   if (count === 10) {
//     clearInterval(timer);
//   }
//   console.log(count--);
// }

// const timer = setInterval(log, 1000);
// -----------------------------------------------------------------------------------
// Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
// let count = 10;

// const timerId = setInterval(() => {
//   console.log(count--);
//   if (count === 0) {
//     clearInterval(timerId);
//   }
// }, 500);

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function func() {
//   let count = 10;
//   const timerId = setInterval(() => {
//     console.log(count--);
//     if (count === 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
//   this.removeEventListener("click", func);
// });

// Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.

// По нажатию на вторую кнопку остановите таймер. Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
// const start = document.querySelector(".start"),
//   stop = document.querySelector(".stop");

// let count = 15;
// let timerId;

// start.addEventListener("click", function log() {
//   timerId = setInterval(() => {
//     if (count <= 0) {
//       clearInterval(timerId);
//     }
//     console.log(count--);
//   }, 1000);
//   start.removeEventListener("click", log);
// });

// stop.addEventListener("click", function stopLog() {
//   clearInterval(timerId);
// });

// Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени:
// После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let timerId;
// start.addEventListener("click", function () {
//   timerId = setInterval(function () {
//     let date = new Date();
//     console.log(date.getMinutes() + " " + date.getSeconds());
//   }, 1000);
// });

// stop.addEventListener("click", function () {
//   clearInterval(timerId);
// });
// --------------------------------------------------------------------------------------------------
// Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

// const btn = document.querySelector(".button"),
//   paragraph = document.querySelector("#output p");

// btn.addEventListener("click", function add() {
//   let timerId = setInterval(() => {
//     paragraph.innerHTML = Number(paragraph.innerHTML - 1);
//     if (paragraph.innerHTML == 1) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });

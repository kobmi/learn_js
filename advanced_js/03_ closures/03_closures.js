// "use strict";

// function createCalcFunction(n) {
//   return function () {
//     console.log(100 * n);
//   };
// }

// createCalcFunction(42);
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(42)); // 43
// console.log(addOne(45)); // 46
// console.log(addTen(100)); // 110

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("youtube")); // https://youtube.com
// console.log(ruUrl("vk")); // https://vk.ru

// ==============================================

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Sergey", age: 22, job: "Front" };
// const person2 = { name: "Misha", age: 25, job: "Back" };

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// bind(person1, logPerson)();
// bind(person2, logPerson)();

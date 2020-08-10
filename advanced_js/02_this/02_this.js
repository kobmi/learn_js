"use strict";

// Если строгий режим то контекст вызова функции undefind
// Если не строгий режим то кнотекст вызова фунцкии window
// this указывет на тот объект в контексте которого она вызвана

// function hello() {
//   console.log(`Hello`, this);
// }

// const person = {
//   name: "Sergey",
//   age: 25,
//   sayHello: hello,
//   // передали функции контекст window
//   sayHelloWindow: hello.bind(window),
//   // передали функции контекст documetn
//   sayHelloDocument: hello.bind(document),

//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}, age: ${this.age}`);
//     console.log(`Job is ${job}, phone: ${phone}`);
//   },
// };

// hello(); // this - window
// // или
// window.hello();
// person.sayHello(); // this - person
// person.sayHelloWindow(); // this - window
// person.sayHelloDocument(); // this - document
// // person.logInfo(); // Name is Sergey

// const lena = {
//   name: "Elena",
//   age: 23,
// };

// //Bind - возвращает новую функцию с заданым контекстом
// // Поменяли контекст вызова функции logInfo на обект lena
// // person.logInfo.bind(lena)(); //Name is Elena, age: 23

// const lenaInfoLog = person.logInfo.bind(lena, "front", "92313123");
// lenaInfoLog();

// // Call - в отличии от bind сразу вызывает функцую
// person.logInfo.call(lena);

// // apply - такой же как и call нор принимает только два параметра (обьект, массив параметров)
// person.logInfo.apply(lena, ["front", "333-33-33"]);

// ==============================================================

// const arr = [1, 2, 3, 4, 5];

// Array.prototype.multBy = function (n) {
//   // this указывет на массив
//   return this.map(function (item) {
//     return item * n;
//   });
// };

// console.log(arr.multBy(20));

// ==============================================================
// practice


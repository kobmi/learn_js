"use strict";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

// const numbersOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));

// const personalMevieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?"),
//   b = prompt("На сколько оцените его?"),
//   c = prompt("Один из последних просмотренных фильмов?"),
//   d = prompt("На сколько оцените его?");

// personalMevieDB.movies[a] = b;
// personalMevieDB.movies[c] = d;
// console.log(personalMevieDB);

// ----------------УСЛОВИЯ-------------------------------------------------
// if, else if, else
// const num = 50;
// if (num === 50) {
//   console.log("num = 50");
// } else if (num > 50) {
//   console.log("num > 50");
// } else {
//   console.log("num < 50 ");
// }

// true ? console.log("True") : console.log("False");

// switch case
// let num = 51;

// switch (num) {
//   case "49":
//     console.log("num = 49");
//     break;
//   case "51":
//     console.log("num = 50");
//     break;
//   default:
//     console.log("Ne podhodit");
//     break;
// }

// -----------------------ЦИКЛЫ--------------------------------------------
// while
// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num += 2;
// }

// do while

// let num = 0;
// do {
//   console.log(num);
//   num++;
// } while (num < 10);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break; // прерывает цикл
//     // continue; // продолжает цикл, но пропускает эту итерацию
//   }
//   console.log(i);
// }

/* Практика часть 2
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сдлелать так что бы пользователь не мог оставить ответ в виде пустой строки, отменить ответ, или ввести название фильма длиннее чем 50 символов. Если это происходит - возвращаем пользователя к вопросам опять. (к любой строке можно обратиться как str.length и получить ее длину)
3) при помощи условий проверить personalMovieDB.count, и если лн меньше 10 - вывести сообщение.
"Просмотрено довольно мало фильмов", если 10-30 "Вы классический зритель", а если больше - "Вы киноман", А если не подошло ни к одному варианту - "Произошла ощибка"
4) Потренироваться и переписать цикл еще двумя способами.
*/

// const numbersOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));

// const personalMevieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   const a = prompt("Один из последних просмотренных фильмов?"),
//     b = prompt("На сколько оцените его?");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMevieDB.movies[a] = b;
//     console.log("yes");
//   } else {
//     console.log("error");
//     i--;
//   }
// }
// if (personalMevieDB.count < 10) {
//   console.log("Просмотрено довольно мало фильмов");
// } else if (personalMevieDB.count >= 10 && personalMevieDB.count < 30) {
//   console.log("Вы классический зритель");
// } else if (personalMevieDB.count >= 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

// ---------------------Функции--------------------------------------------
// // FUNCTION DECLARATION
// function foo() {
//   код;
// }
// // FUNCTION EXPRESSION
// let foo = function () {
//   код;
// };

// function showFirstMessage() {
//   console.log("Hello from function");
// }
// showFirstMessage();

// function showSecondMessage(text) {
//   console.log(text);
// }
// showFirstMessage("Hello from function");

// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(5, 10));

// const calc = (a, b) => a + b;
// console.log(calc(1, 3));

// ------------------Методы и свойства строк и чисел------------------------
// .length
// .toLowerCase()
// .toUpperCase()
// .indexOF() поиск подстроки, возращает индекс, если не находит - то -1
// slice()
// const logg = "Hello world";
// console.log(logg.slice(6, 11)); // world

// .parseInt()
// .parseFloat()

//Практика часть 3------------------------------------------------------

/*1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// let numbersOfFilms;

// const personalMevieDB = {
//   count: numbersOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// function start() {
//   numbersOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));

//   while (
//     numbersOfFilms == "" ||
//     numbersOfFilms == null ||
//     isNaN(numbersOfFilms)
//   ) {
//     numbersOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?", ""));
//   }
// }

// function rememberMyFilms() {
//   for (let i = 0; i < 2; i++) {
//     const a = prompt("Один из последних просмотренных фильмов?"),
//       b = prompt("На сколько оцените его?");

//     if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//       personalMevieDB.movies[a] = b;
//       console.log("yes");
//     } else {
//       console.log("error");
//       i--;
//     }
//   }
// }

// function detectPersonalLevel() {
//   if (personalMevieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMevieDB.count >= 10 && personalMevieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMevieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log("Произошла ошибка");
//   }
// }

// function showMyDB(hidden) {
//   if (!hidden) {
//     console.log(personalMevieDB);
//   }
// }

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     personalMevieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//   }
// }

// start();
// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// writeYourGenres();
// showMyDB(personalMevieDB.privat);
// ------------------------------------Callback-------------------------------------------

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 2000);
// }
// function second() {
//   console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//   setTimeout(function () {
//     console.log(`Я учу ${lang}`);
//     callback();
//   }, 2000);
// }
// function done() {
//   setTimeout(function () {
//     console.log("Я прошел этот урок");
//   }, 1000);
// }
// learnJS("JS", done);

// -----------------------------------------Objects------------------------------------

// const obj = new Object();
// const options = {
//   name: "test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   makeTest: function () {
//     console.log("test");
//   },
// };

// delete delete options.name;
// console.log(options);

// function showOptions(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       for (let i in obj[key]) {
//         console.log(`Свойство: ${i}, значение ${obj[key][i]}`);
//       }
//     } else {
//       console.log(`Свойство: ${key}, значение ${obj[key]}`);
//     }
//   }
// }
// showOptions(options);
// Деструктуризация---------------------------------------------------------------------------------------------------------
// const { border, bg } = options.colors;
// console.log(border);

// массивы, псевдомассивы----------------------------------------------------------------------------------------------------
// const arr = [1, 2, 3, 4];

// .pop() удаляет и возврщает последний элемент
// .push() добавляет в конец массива элемент

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let elem of arr) {
//   console.log(elem);
// }

// arr.forEach(function (elem, index, arr) {
//   console.log(`${index}: ${elem} внутри массива: ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("..."));

const arr = [123, 36, 12, 6, 2, 13];
console.log(arr.sort(compare));
function compare(a, b) {
  return a - b;
}

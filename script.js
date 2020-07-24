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

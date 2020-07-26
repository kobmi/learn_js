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

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt("На сколько оцените его?");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMevieDB.movies[a] = b;
    console.log("yes");
  } else {
    console.log("error");
    i--;
  }
}
if (personalMevieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMevieDB.count >= 10 && personalMevieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMevieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

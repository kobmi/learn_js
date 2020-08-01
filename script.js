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

// const arr = [123, 36, 12, 6, 2, 13];
// console.log(arr.sort(compare));
// function compare(a, b) {
//   return a - b;
// }
// // сортировка по возростанию
// const arr2 = [123, 36, 12, 6, 2, 13];
// console.log(arr2.sort(compare));
// function compare(a, b) {
//   return b - a;
//
// -------------------------------------Spread--------------------------------------

// let arr1 = [1, 2, 3, 4];
// let arr2 = [0, ...arr1, 5, 6];
// console.log(arr2);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// function func(s1, s2, s3, s4, s5) {
//   return `${s1}-${s2}-${s3}-${s4}-${s5}`;
// }

// let str = "Hello";
// console.log(...str);
// console.log([...str]);

// console.log(func(..."Hello"));

// function sum(...nums) {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 5, 6));
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

// function avar(...numbers) {
//   let avarage = 0;
//   for (let num of numbers) {
//     avarage += num;
//   }
//   return avarage / numbers.length;
// }

// console.log(avar(5, 10, 15));

// function unit(...arrs) {
//   return arrs;
// }

// console.log(unit([1, 2, 3], [4, 5, 6], [7, 8, 9]));

// let arrs = [
//   [1, 2, 3],
//   [5, 6, 7],
//   [8, 9, 10],
// ];

// let result = [].concat(...arrs);
// console.log(result);

// ---------------------------------------------ООП-----------------------------------

// let str = "some";
// let strObj = new String(str);
// console.log(typeof str);
// console.log(typeof strObj);
// console.dir([1, 2, 3]);

// Object.setPrototypeOf(новый обьект, прототип от которого наследуемся)
// Object.create(протоип от которого наследуемся)

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };

// const jonh = Object.create(soldier);

// jonh.sayHello();

// ----------------------------------------ПРАКТИКА ч4------------------------------------
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
/*
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
        i--;
      } else {
        personalMovieDB.genres[i + 1] = genre;
      }

      // Альтернативный вариант из урока

      // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      // if (genres === '' || genres == null) {
      //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
      //     i--;
      // } else {
      //     personalMovieDB.genres = genres.split(', ');
      //     personalMovieDB.genres.sort();
      // }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
personalMovieDB.writeYourGenres();
*/

// --------------------------------------------Динамическая типизация-----------------------------------------------------
/*
// to string
// 1)
console.log(typeof String(null)); //string
// 2)
console.log(typeof String(1 + "")); //string

// to number
// 1)
console.log(typeof Number("4")); //number
// 2)
console.log(typeof +"5"); //number
// 3)
console.log(typeof parseInt("15px", 10)); //number

// to boolean
// 1)
// False
// 0,null,NaN,"",undefined
// True
// [],{},strings и все остальное

// let switcher = null;
// if (switcher) {
//   console.log("Working...");
// }

// switcher = 1;
// if (switcher) {
//   console.log("Working...");
// }
// 2)
console.log(typeof Boolean("4")); //boolean
// 3)
console.log(typeof !!"444"); //boolean: true
*/

// --------------------------------------------ЗАДАЧКИ----------------------------------------------------------------

/*
1.	Какое будет выведено значение: let x = 5; alert( x++ ); ?

2.	Чему равно такое выражение: [ ] + false - null + true ?

3.	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

4.	Чему равна сумма [ ] + 1 + 2?

5.	Что выведет этот код: alert( "1"[0] )?

6.	Чему равно 2 && 1 && null && 0 && undefined ?

7.	Есть ли разница между выражениями? !!( a && b ) и (a && b)?

8.	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

9.	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

10.	Что выведет этот код: alert( +"Infinity" ); ?

11.	Верно ли сравнение: "Ёжик" > "яблоко"?

12.	Чему равно 0 || "" || 2 || undefined || true || falsе ?
*/

// 1)
// let x = 5;
// console.log(x++); //5
// 2)
// console.log([] + false - null + true); // NaN
// 3)
// let y = 1;
// let x = (y = 2);
// console.log(x); // 2
// 4)
// console.log([] + 1 + 2); //12 строка
// 5)
// console.log("1"[0]); //1 строка
// 6)
// console.log(2 && 1 && null && 0 && undefined); //null
// 7)

// ---------------------------------------DOM-------------------------------------------------
// console.log(document.querySelector("#button")); // <input id="button" type="submit">
// console.log(document.querySelector("#parent input")); //<input>
// console.log(document.querySelector("#parent [value='2']")); //<input value="2"></input>
// console.log(document.querySelectorAll(".www")[1]);

// const btns = document.querySelectorAll("input[type='submit']");
// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     console.log(`button ${i + 1}`);
//   });
// });

// Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.
// const btn = document.querySelector("#button1");
// btn.addEventListener("click", () => {
//   console.log("some text");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("mouseover");
// });

// btn.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });

// btn.addEventListener("dblclick", () => {
//   console.log("dblclick");
// });

// const func = () => {
//   console.log("hello from func");
// };

// btn.addEventListener("click", func);
// -----------------------------------------------------------------------------------
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
// const func1 = () => {
//   console.log("hello from func1");
// };

// const func2 = () => {
//   console.log("hello from func2 ");
// };

// const btn1 = document.querySelector("input[value='button1']");
// const btn2 = document.querySelector("input[value='button2']");

// btn1.addEventListener("click", func1);
// btn2.addEventListener("click", func2);
//---------------------------------------------------------------------------------------------
// Даны 5 абзацев:
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:

// function func() {
// 	alert('message');
// }
// Привяжите эту функцию ко всем 5-ти абзацам.

// const func = () => {
//   console.log("Hello from func");
// };

// const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach((p) => {
//   p.addEventListener("click", func);
// });
// -------------------------------------------------------------------------------------------------
// Дан абзац:

// <p id="elem">text</p>
// Даны следующие функции:
// Привяжите все эти функции к нашему абзацу.
// const funcs = {
//   func1: () => {
//     console.log("func1");
//   },
//   func2: () => {
//     console.log("func2");
//   },
//   func3: () => {
//     console.log("func3");
//   },
// };

// const paragraph = document.querySelector("#elem");

// for (let func in funcs) {
//   paragraph.addEventListener("click", funcs[func]);
// }
//----------------------------------------------------------------------------------------------------
// Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик выводит число 1, второй обработчик - число 2, а третий - число 3.
// const btn3 = document.querySelector("#button3");
// btn3.addEventListener("click", () => {
//   console.log("1");
// });
// btn3.addEventListener("click", () => {
//   console.log("2");
// });
// btn3.addEventListener("click", () => {
//   console.log("3");
// });
//-----------------------------------------------------------------------------------------------------
// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.

// const btn1 = document.querySelector('input[value="кнопка1"]');
// const btn2 = document.querySelector('input[value="кнопка2"]');
// const p1 = document.querySelector("#parag1");
// const p2 = document.querySelector("#parag2");

// btn1.addEventListener("click", () => {
//   console.log(Number(p1.innerHTML) + Number(p2.innerHTML));
// });

// btn2.addEventListener("click", () => {
//   let text = p2.innerHTML;
//   console.log(text);
//   p2.innerHTML = `<b>${text}</b>`;
// });
// ---------------------------------------------------------------------------------------------------------

// document.querySelector("input[value='btn1']").addEventListener("click", () => {
//   document.querySelector("#parag1").innerHTML =
//     "!" + document.querySelector("#parag1").innerHTML;
// });

// document.querySelector("input[value='btn2']").addEventListener("click", () => {
//   document.querySelector("#parag1").innerHTML = "goodbay";
// });

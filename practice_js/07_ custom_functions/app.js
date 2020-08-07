"use strict";
// Основы работы с пользовательскими функциями в JavaScript

// function func() {
//   console.log("Hello from func");
// }
// func();

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.
// function sum() {
//   let sum = 0;
//   for (let i = 0; i <= 100; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// sum(); //5050

// Параметры функций в JavaScript
// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.
// function cube(num) {
//   console.log(num ** 3);
// }
// cube(3);

// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.
// function isPos(num) {
//   num > 0 ? console.log("+++") : console.log("---");
// }
// isPos(1);

// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.
// function sum(...nums) {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   console.log(sum);
// }
// sum(1, 2, 3);//6

// function showPersonInfo(name = "Anonim", age = undefined, job = undefined) {
//   console.log(`${name}, ${age}, ${job}`);
// }

// showPersonInfo();
// showPersonInfo("Serg", 20, "front");

// Инструкция return в JavaScript
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
// function cube(num) {
//   return num ** 3;
// }
// const result = cube(3);
// console.log(result);

// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.
// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
// function func(num) {
//   return num ** 2;
// }

// let result = func(2) + func(4);
// console.log(result);
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
// function func(num) {
//   let i = 0;
//   while (true) {
//     num = num / 2;
//     if (num < 10) {
//       return i;
//     }
//     i++;
//   }
// }

// console.log(func(100));

// Напишите функцию, которая будет находить сумму квадратов элементов массива.
// function sumOfSquare(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     sum += elem ** 2;
//   }
//   return sum;
// }
// console.log(sumOfSquare([1, 2, 3]));

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет принимать целое число и возвращать сумму его цифр.
// function getDigitsSum(num) {
//   let sum = 0;
//   for (let i = 0; i < String(num).length; i++) {
//     sum += Number(String(num)[i]);
//   }
//   return sum;
// }

// console.log(getDigitsSum(124));

// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].

// function getDivisors(num) {
//   let div = [];
//   for (let i = num; i >= 1; i--) {
//     if (num % i === 0) {
//       div.unshift(i);
//     }
//   }
//   return div;
// }

// console.log(getDivisors(24));

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("Hello"));

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// function delElem(val, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (val === arr[i]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// const arr = [1, 2, 3, 4, 5, 6];
// console.log(delElem(1, arr));

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
// function func(num) {
//   const arr = [];
//   for (let i = 0; i < num; i++) {
//     arr.push(i + 1);
//   }
//   return arr;
// }
// console.log(func(4)); //(4) [1, 2, 3, 4]

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.

// function func(num1, num2) {
//   const arr = [];
//   for (let i = num1; i <= num2; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(4, 10));

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

// function func(arr) {
//   for (let elem of arr) {
//     if (elem % 2 !== 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(func([2, 4, 6, 8]));
// console.log(func([2, 4, 7, 8]));

// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// function func(num) {
//   for (let digit of String(num)) {
//     if (Number(digit) % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(func(111)); //true
// console.log(func(222)); //false

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

// function func(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(func([1, 0, 1, 4, 5, 5]));

// function func(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function funcMod(a, b) {
//   return a === b;
// }
// console.log(func(1, 1));
// console.log(funcMod(2, 2));

// Давайте запишем в новый массив только те элементы, сумма первых двух цифр в которых равна сумме вторых двух цифр.
// let arr = [1524, 1321, 4563, 7144, 2879];

// function checkDigitsPairsSum(num) {
//   let sumFirstPairsOfNum = Number(String(num)[0]) + Number(String(num)[1]);
//   let sumSecondPairsOfNum = Number(String(num)[2]) + Number(String(num)[3]);
//   return sumFirstPairsOfNum === sumSecondPairsOfNum;
// }

// function func(arr) {
//   const result = [];
//   for (let elem of arr) {
//     if (checkDigitsPairsSum(elem)) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(func(arr));

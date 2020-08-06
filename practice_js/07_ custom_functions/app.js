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

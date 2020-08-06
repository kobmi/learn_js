"use strict";
/*
... - spread
Когда оператор spread стоит перед массивом, он разделяет этот массив на отдельные значения, превращая массив в набор параметров, необходимых для вызова функции.
*/
// const arr = [1, 2, 3];
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }

// console.log(sum(...arr)); //6
// ---------------------------------------------------------------------
// function sum(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }
// console.log(sum(...[1, 2, 3, 4])); //10

// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
// let arr = [12, 31, -231, 0, 213];
// console.log(Math.min(...arr)); //-231

// let arr1 = [1, 2, 3, 4];
// let arr2 = [10, 15, ...arr1];
// arr1[0] = 100;
// console.log(arr2);

// Оператор spread, примененный к строке, разбивает эту строку посимвольно:
// ...'abcde'; // разобьет строку в символы через запятую: 'a','b','c','d','e'

// let arr = [..."Hello"];
// console.log(arr); //(5) ["H", "e", "l", "l", "o"]
// let arr2 = "Hello".split("");
// console.log(arr2); //(5) ["H", "e", "l", "l", "o"]

// Оператор spread не применим к числам:
// let arr = [...12345]; // будет ошибка

// ----------------------------------------------------------------------------
// ...- rest

// function sum(...args) {
//   let sum = 0;
//   args.forEach((arg) => {
//     sum += arg;
//   });
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6)); //21
// console.log(sum(...[10, 20, 30, 40])); //100

// function sum(...nums) {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3)); //6

// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое (сумма делить на количество).

// function avarage(...nums) {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }
//   let avar = sum / nums.length;
//   return avar;
// }
// console.log(avarage(15, 10, 20, 10, 20));

// function unite(...arrs) {
//   return arrs;
// }

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(unite(arr1, arr2)); // [[1,2,3],[4,5,6]]

// function merge(...arrs) {
//   return [].concat(...arrs);
// }

// console.log(merge(arr1, arr2)); //(6) [1, 2, 3, 4, 5, 6]

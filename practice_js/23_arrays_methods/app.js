"use strict";

// // forEach - не возвращает массив

// // Filter
// const names = ["Ivan", "Anna", "Vlad", "Ksenia", "Voldemart", "vasya", "dima"];

// //Имя меньше 5 символов
// const shortNames = names.filter((name) => {
//   return name.length < 5;
// });
// // Имя с маленькой буквы
// const namesWithFirstLower = names.filter((name) => {
//   return name[0] === name[0].toLocaleLowerCase();
// });
// console.log(shortNames); //(4) ["Ivan", "Anna", "Vlad", "dima"]
// console.log(namesWithFirstLower); // (2) ["vasya", "dima"]

// // Map
// let answers = ["IvaN", "AnNa", "VlAd", "KsEnia", "VoldeMArt", "vasSa", "dima"];
// answers = answers.map((answer) => answer.toLocaleLowerCase());
// console.log(answers); //["ivan", "anna", "vlad", "ksenia", "voldemart", "vassa", "dima"]

// // every/some - возвращают boolean

// // some - если хоть один из елементов, тогда - true
// const arr = [4, "some string", null];
// console.log(arr.some((item) => typeof item === "number")); //true
// // every если все элементы, тогда - true
// const arr2 = [1, 2, 3];
// console.log(arr2.every((item) => typeof item === "number")); //true

// reduce

const arr = [1, 23, 4, 5, 1, 5];
// 1  +  23
// 24  +  4
// 28  +  5
// 33  +  1
// 34  +  5
const result = arr.reduce((sum, current) => {
  sum + current;
});
console.log(result);

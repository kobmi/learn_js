"use stricts";

// .filter - возвращает новый массив эелементов которые соответствуют условию
// const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// console.log(shortNames);

// =============================================================================
// .map = возвращает новый массив с измененными элементами
// const answers = ["IvaN", "AnnA", "HellO"].map((answer) =>
//   answer.toLocaleLowerCase()
// );
// // const result = answers.map((answer) => {
// //   return answer.toLocaleLowerCase();
// // });
// console.log(answers);

// =============================================================================
// .some - возвращает true если хотя бы один элемент соответсвует условию
// const arr = [4, "hello", "str"];
// console.log(arr.some((item) => typeof item === "number"));

// =======================================================================
// .every возвращает true если все элементы соответсвует условию

// const arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.every((item) => {
//     return typeof item === "number";
//   })
// );

// ==========================================================================
// .reduce

// const arr = [4, 5, 1, 3, 2, 6];
// // 0        4
// // 4        5
// // 9        1
// // 10       3
// // 13       2
// // 15       6
// // 21

// const result = arr.reduce((sum, current) => {
//   return sum + current;
// });

// console.log(result); // 21

// const arr2 = ["apple", "pear", "plum"];

// const res = arr2.reduce((sum, current) => {
//   return `${sum}, ${current}`;
// });
// console.log(res); // apple, pear, plum

//obj.entries

const obj = {
  ivan: "persone",
  ann: "persone",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((elem) => elem[1] === "persone")
  .map((elem) => elem[0]);
console.log(newArr);

"use strict";

const person = {
  name: "Alex",
  tel: "+380343434343",
  parents: {
    mom: "Olga",
    dad: "Mike",
  },
};

// console.log(JSON.stringify(person)); //{"name":"Alex","tel":"+380343434343"}
// console.log(JSON.parse(JSON.stringify(person))); //{name: "Alex", tel: "+380343434343"} object

const clone = JSON.parse(JSON.stringify(person)); // глубокая копия объекта
console.log(clone);

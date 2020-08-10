"use strict";

const student = new Object({
  name: "Sergey",
  age: 30,
  sayHello: function () {
    console.log("hello from object");
  },
});

Object.prototype.sayHelloFromObjectPrototype = function () {
  console.log("hello from object prototype");
};

student.sayHello();
student.sayHelloFromObjectPrototype();

// создали новый объект прототипом которого является student
const katya = Object.create(student);

console.log(katya.name); // sergey
katya.sayHello();
katya.sayHelloFromObjectPrototype();

"use strict";
// ES5
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello from ${this.name}`);
  };
}

User.prototype.exit = function () {
  console.log(`User ${this.name} is out`);
};

const john = new User("John", 1);
const nick = new User("Nick", 2);
console.log(john);
console.log(nick);
nick.hello();
john.hello();
john.exit();

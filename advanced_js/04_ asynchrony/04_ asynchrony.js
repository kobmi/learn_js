"use strict";

console.log("Start");
console.log("Strart after first start");

window.setTimeout(function () {
  console.log("Start from timeout, after 2 seconds");
}, 3000);
// или
function timeOut3sec() {
  console.log("Start from timeout, after 3 seconds");
}
window.setTimeout(timeOut3sec, 3000);

console.log("End");

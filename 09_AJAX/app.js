"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

// inputUah.addEventListener("input", () => {
//   const xhr = new XMLHttpRequest();

//   //   xhr.open(method, url, async, login, password);
//   xhr.open("GET", "app.json");
//   xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   xhr.send();

//   //   readstatechange
//   //   xhr.addEventListener("readystatechange", () => {
//   //     if (xhr.readyState === 4 && xhr.status === 200) {
//   //       const data = JSON.parse(xhr.response);
//   //       inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
//   //     } else {
//   //       inputUsd.value = "Error";
//   //     }
//   //   });

//   //   load
//   xhr.addEventListener("load", () => {
//     if (xhr.status === 200) {
//       const data = JSON.parse(xhr.response);
//       inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
//     } else {
//       inputUsd.value = "Error";
//     }
//   });
//   //status
//   //statusText
//   //response
//   //readyState
// });

// =====================================================================================

inputUah.addEventListener("input", () => {
  return fetch("app.json")
    .then((response) => response.json())
    .then((json) => {
      inputUsd.value = (+inputUah.value / json.current.usd).toFixed(2);
    });
});

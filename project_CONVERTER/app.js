"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd"),
  inputEur = document.querySelector("#eur");

// XMLHttpRequest()

// inputUah.addEventListener("input", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", "app.json");
//   xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
//   xhr.addEventListener("readystatechange", () => {
//     // status
//     // statusText
//     // response
//     // responseText
//     // readyState

//     if (xhr.status === 200 && xhr.readyState === 4) {
//       const response = JSON.parse(xhr.response);
//       inputUsd.value = (+inputUah.value / response.current.usd).toFixed(2);
//       inputEur.value = (+inputUah.value / response.current.eur).toFixed(2);
//     } else {
//       inputUsd.value = `Ошибка: ${xhr.status}`;
//       inputEur.value = `Ошибка: ${xhr.status}`;
//     }
//   });
//   xhr.send();
// });

// Fetch========================================================================

inputUah.addEventListener("input", convert);

function convert() {
  fetch("app.json")
    .then((response) => response.json())
    .then((data) => {
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
      inputEur.value = (+inputUah.value / data.current.eur).toFixed(2);
    })
    .catch((err) => {
      console.log(err);
    });
}

// ============================================================================

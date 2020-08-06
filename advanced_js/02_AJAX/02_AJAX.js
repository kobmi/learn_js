"use strict";

const inputUah = document.querySelector("#uah"),
  inputUsd = document.querySelector("#usd");

inputUah.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  request.open("GET", "current.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("readystatechange", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = +inputUah.value / data.current.usd;
    } else {
      inputUsd.value = "Ошибка";
    }
  });

  // status
  // statusText
  // response
  // readyState
});

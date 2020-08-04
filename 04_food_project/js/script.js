"use strict";

window.addEventListener("DOMContentLoaded", () => {
  // Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items"),
    choiceGenderBtns = document.querySelectorAll(
      "#gender .calculating__choose-item"
    ),
    choiceGenderBtnsParent = document.querySelector("#gender");

  const hideTabsContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  };

  const showTabsContent = (i = 0) => {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  };

  hideTabsContent();
  showTabsContent();
  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
      tabs.forEach((item, i) => {
        if (e.target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });

  choiceGenderBtnsParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".calculating__choose-item")) {
      choiceGenderBtns.forEach((item) => {
        if (!item.classList.contains("calculating__choose-item_active")) {
          item.classList.add("calculating__choose-item_active");
        } else {
          item.classList.remove("calculating__choose-item_active");
        }
      });
    }
  });
  //   Timer
  const deadline = "2020-08-15";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);
});

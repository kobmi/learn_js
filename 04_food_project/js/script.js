"usestrict";

window.addEventListener("DOMContentLoaded", () => {
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
});


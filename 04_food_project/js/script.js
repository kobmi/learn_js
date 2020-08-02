"usestrcit";

window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  const hideTabsContent = () => {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  };

  const showTabContent = (i = 0) => {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  };

  hideTabsContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
      tabs.forEach((item, i) => {
        if (e.target == item) {
          hideTabsContent();
          showTabContent(i);
        }
      });
    }
  });
});

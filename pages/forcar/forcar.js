"use strict";

const experienceDiv = document.querySelectorAll(".infoDiv");
const uiDiv = document.querySelectorAll(".uiDiv");
const designDiv = document.querySelectorAll(".designDiv");
const tabs = document.querySelectorAll(".tabs li span");
const content = document.querySelectorAll(".content");
const links = document.querySelectorAll(".toTop");

experienceDiv.forEach((item) => {
  let key = item.dataset.key;
  item.innerHTML = `
            <div class="leftSide">
                <div class="leftTitle">${data[key].leftTitle}</div>
            </div>
            <div class="right">
                    <ul class="rightList">
                        ${data[key].rightList}
                    </ul>
                </div>
    `;
});

uiDiv.forEach((item) => {
  let key = item.dataset.key;
  item.innerHTML = `
    ${uiData[key].block1}
    ${uiData[key].block2}
    ${uiData[key].block3}
    ${uiData[key].block4}
    ${uiData[key].block5}
    `;
});

designDiv.forEach((item) => {
  let key = item.dataset.key;
  item.innerHTML = `
    ${designData[key].block1}
    ${designData[key].block2}
    `;
});

tabs.forEach((item) => {
  item.addEventListener("click", () => {
    tabs.forEach((elem) => elem.classList.remove("greenText"));
    item.classList.add("greenText");
    content.forEach((item) => item.classList.remove("is-active"));
    document
      .querySelector(`[data-content="${item.dataset.openBlock}"]`)
      .classList.add("is-active");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Плавный скролл
links.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let link = e.target.getAttribute("href");
    const elem = document.querySelector(link);
    let top = elem.getBoundingClientRect().top;
    window.scrollTo({
      top: top + window.scrollY - 55,
      behavior: "smooth",
    });
  });
});

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // NAV BAR
  document.querySelectorAll(".nav-li").forEach(function (li) {
    li.addEventListener("click", function () {
      li.classList.toggle("active");
    });
  });

  //LINKS

  document
    .querySelector(".view-elena-joy")
    .addEventListener("click", function () {
      window.location.href = "https://adamselenajoyphotography.netlify.app/";
    });
  document
    .querySelector(".view-elena-joy-code")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/Olabody/photography-website";
    });
  document
    .querySelector(".view-travelly")
    .addEventListener("click", function () {
      window.location.href = "https://adamstravelsite.netlify.app/";
    });
  document
    .querySelector(".view-travelly-code")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/Olabody/Travel-Website";
    });
  document
    .querySelector(".view-hexashop")
    .addEventListener("click", function () {
      window.location.href = "https://adamshexashop.netlify.app/";
    });

  document
    .querySelector(".view-hexashop-code")
    .addEventListener("click", function () {
      window.location.href = "https://github.com/Olabody/hexashop-";
    });
});

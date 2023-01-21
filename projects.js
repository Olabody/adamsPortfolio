"use strict";
document.addEventListener("DOMContentLoaded", function () {
  // NAV BAR
  document.querySelectorAll(".nav-li").forEach(function (li) {
    li.addEventListener("click", function () {
      li.classList.toggle("active");
    });
  });
});

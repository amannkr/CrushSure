"use strict";

const images = document.querySelectorAll(".ask_img");
const image = document.querySelector(".ask_img img-active");
const text = document.querySelectorAll(".ask_txt");
const yesBtn = document.querySelector(".Yes_btn");
const noBtn = document.querySelector(".No_btn");
const messageBtn = document.querySelector(".Message_btn");
let data = 1;

const change = function () {
  images.forEach((i) => i.classList.remove("img-active"));
  images.forEach(function (i) {
    if (data == i.getAttribute("data-img")) {
      i.classList.add("img-active");
    }
  });
  text.forEach((t) => t.classList.remove("txt-active"));
  text.forEach(function (t) {
    if (data == t.getAttribute("data-txt")) {
      t.classList.add("txt-active");
    }
  });
};

noBtn.addEventListener("click", function () {
  if (data != 5) {
    if (data < 4) {
      data++;
      change();
      if (data >= 4) {
        noBtn.addEventListener("mouseup", function () {
          let i = Math.floor(Math.random() * 500) + 1;
          let j = Math.floor(Math.random() * 500) + 1;
          noBtn.style.left = i + "px";
          noBtn.style.top = j + "px";
        });
      }
    }
  }
});

yesBtn.addEventListener("click", function () {
  data = 5;
  change();
  noBtn.classList.add("hidden");
  yesBtn.classList.add("hidden");
  messageBtn.classList.remove("hidden");
});

messageBtn.addEventListener("click", function () {
  onclick = window.open("https://www.instagram.com/iamannkr/");
});

const slider = document.querySelector(".slider");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const imgs = document.querySelectorAll(".img");

let counter = 1;
const imgWidth = imgs[0].clientWidth;

rightBtn.addEventListener("click", function () {
  if (counter === imgs.length) {
    counter = 0;
  }
  slider.style.transform = `translateX(${-imgWidth * counter}px)`;
  counter++;
});

leftBtn.addEventListener("click", () => {
  if (counter === 0) {
    counter = imgs.length - 1;
  } else {
    counter--;
  }
  slider.style.transform = `translateX(${-imgWidth * counter}px)`;
});

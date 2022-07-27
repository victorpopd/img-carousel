const carouselImg = document.querySelector(".img-container ");
const numOfImg = document.querySelectorAll(".img-container img").length;
const imgWidth = 500;
let imgIndex = 1;
let translateX = 0;
let xAxisPosition = 0;

const leftBtn = document.querySelector("#previous");
const rightBtn = document.querySelector("#next");

rightBtn.addEventListener("click", function (event) {
  if (rightBtn.id === "next") {
    if (imgIndex < numOfImg) {
      imgIndex++;
      xAxisPosition -= imgWidth;
      carouselImg.style.transform = `translateX(${xAxisPosition}px)`;
    } else if (imgIndex === numOfImg) {
      imgIndex = 1;
      xAxisPosition = 0;
      carouselImg.style.transform = `translateX(${xAxisPosition}px)`;
    }
  }
});

leftBtn.addEventListener("click", function (event) {
  if (leftBtn.id === "previous") {
    if (imgIndex > 1) {
      imgIndex--;
      xAxisPosition += imgWidth;
      carouselImg.style.transform = `translateX(${xAxisPosition}px)`;
    } else if (imgIndex === 1) {
      imgIndex = numOfImg;
      xAxisPosition -= imgWidth * (numOfImg - 1);
      carouselImg.style.transform = `translateX(${xAxisPosition}px)`;
    }
  }
});

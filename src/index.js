import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";

import "./style.css";
import { Slide } from "./slide";

const slider = document.getElementById("slider");
console.log("🚀 ~ file: index.js:5 ~ slider:", slider);
let currentSlide = null;
let slides = [];

function setupSlide(imageRelativePath) {
  console.log(
    "🚀 ~ file: index.js:7 ~ setupSlide ~ imageUrl:",
    imageRelativePath
  );
  const slide = new Slide(imageRelativePath);
  slides.push(slide);
  console.log("🚀 ~ file: index.js:10 ~ setupSlide ~ slides:", slides);
}

setupSlide(image1);
setupSlide(image2);
setupSlide(image3);
setupSlide(image4);
setupSlide(image5);

render();

function render() {
  slides.forEach((slide) => slider.appendChild(slide.image));
}

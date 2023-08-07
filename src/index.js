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

setupSlide("/images/1.jpg");
setupSlide("/images/2.jpg");
setupSlide("/images/3.jpg");
setupSlide("/images/4.jpg");
setupSlide("/images/5.jpg");

render();

function render() {
  slides.forEach((slide) => slider.appendChild(slide.image));
}

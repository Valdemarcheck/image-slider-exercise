import { Slide } from "./slide";

let currentSlide = null;
let slides = [];

function setupSlide(imageUrl) {
  console.log("🚀 ~ file: index.js:7 ~ setupSlide ~ imageUrl:", imageUrl);
  const slide = new Slide(imageUrl);
  slides.push(slide);
  console.log("🚀 ~ file: index.js:10 ~ setupSlide ~ slides:", slides);
}

setupSlide("./images/1.jpg");

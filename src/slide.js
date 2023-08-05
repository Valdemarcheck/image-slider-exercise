module.exports.Slide = class {
  constructor(imageUrl) {
    this.indicator = document.createElement("img");
    this.indicator.classList.add("indicator");

    this.image = document.createElement("img");
    this.image.classList.add("sliderImage");
    this.image.url = imageUrl;
  }
};

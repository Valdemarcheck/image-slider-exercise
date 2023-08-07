const path = require("node:path");

module.exports.Slide = class {
  constructor(imageRelativePath) {
    this.indicator = document.createElement("img");
    this.indicator.classList.add("indicator");

    this.image = document.createElement("img");
    this.image.classList.add("sliderImage");
    this.image.src = path.join(__dirname, imageRelativePaths);
  }
};

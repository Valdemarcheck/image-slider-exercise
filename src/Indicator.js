export default class Indicator {
  constructor(framePosition) {
    this.div = document.createElement("div");
    this.div.classList.add("indicator");
    this.framePosition = framePosition;
  }
}

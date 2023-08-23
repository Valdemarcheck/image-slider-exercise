import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";

import "./style.css";

class Indicator {
  constructor(frame, framePosition) {
    this.div = document.createElement("div");
    this.div.classList.add("indicator");
    this.frame = frame;
    this.framePosition = framePosition;
  }
}

const FRAME_MANAGER = { frames: [], current: null };
const INDICATORS = [];
const DIRECTIONS = { left: 0, right: 1 };

const frameIndicatorsDiv = document.getElementById("frame-indicators");
const sliderFramesDiv = document.getElementById("slider-frames");

const rightArrow = document.querySelector(".arrow#right");
rightArrow.addEventListener("click", () => {
  move(DIRECTIONS.right);
});
const leftArrow = document.querySelector(".arrow#left");
leftArrow.addEventListener("click", () => {
  move(DIRECTIONS.left);
});

(() => {
  const images = [image1, image2, image3, image4, image5];
  for (let i = 0; i < 5; i++) {
    setupFrame(sliderFramesDiv, images[i]);
  }
  setupIndicators(FRAME_MANAGER.frames);
  setFrameAsCurrent({ frameManager: FRAME_MANAGER, position: 0 });
})();

function setupIndicators(frames) {
  frames.forEach((frame, i) => {
    const indicator = new Indicator(frame, i);
    INDICATORS.push(indicator);

    frameIndicatorsDiv.append(indicator.div);
    indicator.div.addEventListener("click", () => {
      goToFrame({
        newPosition: indicator.framePosition,
      });
    });
  });
}

function goToFrame({ newPosition }) {
  const currentFramePosition = getFramePosition(
    FRAME_MANAGER,
    FRAME_MANAGER.current
  );
  console.log(newPosition, currentFramePosition);

  if (currentFramePosition === newPosition) return;
  else if (newPosition < currentFramePosition) {
    const steps = currentFramePosition - newPosition;
    console.log(steps);
    for (let i = 0; i < steps; i++) {
      move(DIRECTIONS.left);
    }
  } else {
    const steps = newPosition - currentFramePosition;
    console.log(steps);
    for (let i = 0; i < steps; i++) {
      move(DIRECTIONS.right);
    }
  }
}

function move(direction) {
  console.log("doing move");
  const currentFramePosition = getFramePosition(
    FRAME_MANAGER,
    FRAME_MANAGER.current
  );
  if (isNewFrameOutOfBounds({ direction, currentFramePosition })) return;

  const frameWidth = FRAME_MANAGER.current.offsetWidth;
  const frameGap = pxIntoNumber(
    window.getComputedStyle(sliderFramesDiv, null).getPropertyValue("gap")
  );
  const sliderCurrentPosition = pxIntoNumber(
    window.getComputedStyle(sliderFramesDiv, null).getPropertyValue("left")
  );

  console.log(sliderCurrentPosition, frameWidth, frameGap);
  let sliderFramesDivNewPosition = null;
  if (direction === DIRECTIONS.right) {
    sliderFramesDivNewPosition = sliderCurrentPosition - frameWidth - frameGap;
  } else {
    sliderFramesDivNewPosition = sliderCurrentPosition + frameWidth + frameGap;
  }

  sliderFramesDiv.style.left = numberIntoPx(sliderFramesDivNewPosition);
  let newFramePosition = null;

  if (direction === DIRECTIONS.left) {
    newFramePosition = currentFramePosition - 1;
  } else {
    newFramePosition = currentFramePosition + 1;
  }
  setFrameAsCurrent({
    frameManager: FRAME_MANAGER,
    position: newFramePosition,
  });
}

function isNewFrameOutOfBounds({ currentFramePosition, direction }) {
  if (direction === DIRECTIONS.right) {
    const newFramePosition = currentFramePosition + 1;
    return newFramePosition > FRAME_MANAGER.frames.length - 1;
  }
  if (direction === DIRECTIONS.left) {
    const newFramePosition = currentFramePosition - 1;
    return newFramePosition < 0;
  }
}

function pxIntoNumber(value) {
  return parseInt(value.split("px")[0]);
}
function numberIntoPx(value) {
  return value + "px";
}

function setupFrame(sliderFramesDiv, imageURL) {
  const frame = document.createElement("div");
  frame.classList.add("frame");
  sliderFramesDiv.append(frame);
  FRAME_MANAGER.frames.push(frame);
  if (imageURL) {
    const imageElem = document.createElement("img");
    imageElem.url = imageURL;
    frame.append(imageElem);
  }
}

function setFrameAsCurrent({ frameManager, position, frame }) {
  setCurrentFrameIndex({ frameManager, position, frame });
  setAllFramesStylesToDefault(frameManager);
  applyCurrentFrameStyles(frameManager);
  makeIndicatorCurrent(position);
}

function setCurrentFrameIndex({ frameManager, position, frame }) {
  if (!frameManager) {
    throw new Error("No frame manager argument");
  }
  if (position || position === 0) {
    frameManager.current = frameManager.frames[position];
  } else if (frame) {
    frameManager.current = frame;
  }
}
function setAllFramesStylesToDefault(frameManager) {
  for (let frame of frameManager.frames) {
    frame.classList.remove("current");
  }
}
function applyCurrentFrameStyles(frameManager) {
  frameManager.current.classList.add("current");
}

function getFramePosition(frameManager, frame) {
  return frameManager.frames.indexOf(frame);
}

function makeIndicatorCurrent(position) {
  for (let indicator of INDICATORS) {
    indicator.div.classList.remove("current");
  }
  const indicatorDiv = INDICATORS[position].div;
  indicatorDiv.classList.add("current");
}

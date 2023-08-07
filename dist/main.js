/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/slide.js":
/*!**********************!*\
  !*** ./src/slide.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var __dirname = "/";
const path = __webpack_require__(/*! node:path */ "node:path");

module.exports.Slide = class {
  constructor(imageRelativePath) {
    this.indicator = document.createElement("img");
    this.indicator.classList.add("indicator");

    this.image = document.createElement("img");
    this.image.classList.add("sliderImage");
    this.image.src = path.join(__dirname, imageRelativePaths);
  }
};


/***/ }),

/***/ "node:path":
/*!*****************!*\
  !*** node:path ***!
  \*****************/
/***/ (() => {

throw new Error("Module build failed: UnhandledSchemeError: Reading from \"node:path\" is not handled by plugins (Unhandled scheme).\nWebpack supports \"data:\" and \"file:\" URIs by default.\nYou may need an additional plugin to handle \"node:\" URIs.\n    at /home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/webpack/lib/NormalModule.js:838:25\n    at Hook.eval [as callAsync] (eval at create (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:6:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/tapable/lib/Hook.js:18:14)\n    at Object.processResource (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/webpack/lib/NormalModule.js:835:8)\n    at processResource (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/loader-runner/lib/LoaderRunner.js:220:11)\n    at iteratePitchingLoaders (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/loader-runner/lib/LoaderRunner.js:171:10)\n    at runLoaders (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/loader-runner/lib/LoaderRunner.js:398:2)\n    at NormalModule._doBuild (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/webpack/lib/NormalModule.js:825:3)\n    at NormalModule.build (/home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/webpack/lib/NormalModule.js:969:15)\n    at /home/valdemar_check/Desktop/TOP-coding-files/Javascript-path/image-slider-exercise/node_modules/webpack/lib/Compilation.js:1377:12");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide */ "./src/slide.js");



const slider = document.getElementById("slider");
console.log("🚀 ~ file: index.js:5 ~ slider:", slider);
let currentSlide = null;
let slides = [];

function setupSlide(imageRelativePath) {
  console.log(
    "🚀 ~ file: index.js:7 ~ setupSlide ~ imageUrl:",
    imageRelativePath
  );
  const slide = new _slide__WEBPACK_IMPORTED_MODULE_1__.Slide(imageRelativePath);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLG1CQUFPLENBQUMsNEJBQVc7O0FBRWhDLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixTQUFTO0FBQ3hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNXOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUFLO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXItZXhlcmNpc2UvLi9zcmMvc2xpZGUuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLWV4ZXJjaXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBwYXRoID0gcmVxdWlyZShcIm5vZGU6cGF0aFwiKTtcblxubW9kdWxlLmV4cG9ydHMuU2xpZGUgPSBjbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGltYWdlUmVsYXRpdmVQYXRoKSB7XG4gICAgdGhpcy5pbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoXCJpbmRpY2F0b3JcIik7XG5cbiAgICB0aGlzLmltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB0aGlzLmltYWdlLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJJbWFnZVwiKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGltYWdlUmVsYXRpdmVQYXRocyk7XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcblxuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG5jb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qczo1IH4gc2xpZGVyOlwiLCBzbGlkZXIpO1xubGV0IGN1cnJlbnRTbGlkZSA9IG51bGw7XG5sZXQgc2xpZGVzID0gW107XG5cbmZ1bmN0aW9uIHNldHVwU2xpZGUoaW1hZ2VSZWxhdGl2ZVBhdGgpIHtcbiAgY29uc29sZS5sb2coXG4gICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanM6NyB+IHNldHVwU2xpZGUgfiBpbWFnZVVybDpcIixcbiAgICBpbWFnZVJlbGF0aXZlUGF0aFxuICApO1xuICBjb25zdCBzbGlkZSA9IG5ldyBTbGlkZShpbWFnZVJlbGF0aXZlUGF0aCk7XG4gIHNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanM6MTAgfiBzZXR1cFNsaWRlIH4gc2xpZGVzOlwiLCBzbGlkZXMpO1xufVxuXG5zZXR1cFNsaWRlKFwiL2ltYWdlcy8xLmpwZ1wiKTtcbnNldHVwU2xpZGUoXCIvaW1hZ2VzLzIuanBnXCIpO1xuc2V0dXBTbGlkZShcIi9pbWFnZXMvMy5qcGdcIik7XG5zZXR1cFNsaWRlKFwiL2ltYWdlcy80LmpwZ1wiKTtcbnNldHVwU2xpZGUoXCIvaW1hZ2VzLzUuanBnXCIpO1xuXG5yZW5kZXIoKTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlci5hcHBlbmRDaGlsZChzbGlkZS5pbWFnZSkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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

module.exports.Slide = class {
  constructor(imageRelativePath) {
    this.indicator = document.createElement("img");
    this.indicator.classList.add("indicator");

    const imageSrc = __webpack_require__("./src sync recursive")(imageRelativePath);
    this.image = document.createElement("img");
    this.image.classList.add("sliderImage");
    this.image.src = imageSrc;
  }
};


/***/ }),

/***/ "./src sync recursive":
/*!*******************!*\
  !*** ./src/ sync ***!
  \*******************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive";
module.exports = webpackEmptyContext;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDRDQUFRLGlCQUFpQixDQUFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ1c7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUNBQUs7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLWV4ZXJjaXNlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS8uL3NyYy9zbGlkZS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXItZXhlcmNpc2UvLi9zcmMvIHN5bmMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLWV4ZXJjaXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLXNsaWRlci1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cy5TbGlkZSA9IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoaW1hZ2VSZWxhdGl2ZVBhdGgpIHtcbiAgICB0aGlzLmluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LmFkZChcImluZGljYXRvclwiKTtcblxuICAgIGNvbnN0IGltYWdlU3JjID0gcmVxdWlyZShpbWFnZVJlbGF0aXZlUGF0aCk7XG4gICAgdGhpcy5pbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgdGhpcy5pbWFnZS5jbGFzc0xpc3QuYWRkKFwic2xpZGVySW1hZ2VcIik7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSBpbWFnZVNyYztcbiAgfVxufTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUNvbnRleHQocmVxKSB7XG5cdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHR0aHJvdyBlO1xufVxud2VicGFja0VtcHR5Q29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUNvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUNvbnRleHQ7XG53ZWJwYWNrRW1wdHlDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IFNsaWRlIH0gZnJvbSBcIi4vc2xpZGVcIjtcblxuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJcIik7XG5jb25zb2xlLmxvZyhcIvCfmoAgfiBmaWxlOiBpbmRleC5qczo1IH4gc2xpZGVyOlwiLCBzbGlkZXIpO1xubGV0IGN1cnJlbnRTbGlkZSA9IG51bGw7XG5sZXQgc2xpZGVzID0gW107XG5cbmZ1bmN0aW9uIHNldHVwU2xpZGUoaW1hZ2VSZWxhdGl2ZVBhdGgpIHtcbiAgY29uc29sZS5sb2coXG4gICAgXCLwn5qAIH4gZmlsZTogaW5kZXguanM6NyB+IHNldHVwU2xpZGUgfiBpbWFnZVVybDpcIixcbiAgICBpbWFnZVJlbGF0aXZlUGF0aFxuICApO1xuICBjb25zdCBzbGlkZSA9IG5ldyBTbGlkZShpbWFnZVJlbGF0aXZlUGF0aCk7XG4gIHNsaWRlcy5wdXNoKHNsaWRlKTtcbiAgY29uc29sZS5sb2coXCLwn5qAIH4gZmlsZTogaW5kZXguanM6MTAgfiBzZXR1cFNsaWRlIH4gc2xpZGVzOlwiLCBzbGlkZXMpO1xufVxuXG5zZXR1cFNsaWRlKFwiL2ltYWdlcy8xLmpwZ1wiKTtcbnNldHVwU2xpZGUoXCIvaW1hZ2VzLzIuanBnXCIpO1xuc2V0dXBTbGlkZShcIi9pbWFnZXMvMy5qcGdcIik7XG5zZXR1cFNsaWRlKFwiL2ltYWdlcy80LmpwZ1wiKTtcbnNldHVwU2xpZGUoXCIvaW1hZ2VzLzUuanBnXCIpO1xuXG5yZW5kZXIoKTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHNsaWRlci5hcHBlbmRDaGlsZChzbGlkZS5pbWFnZSkpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
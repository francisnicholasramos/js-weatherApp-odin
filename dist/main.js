/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const display = (() => {
  function setSearchResult(data) {
    if (!data) return;

    const cityName = document.querySelector('h3')
    const temperature = document.querySelector('.temperature')
    const feelsLike = document.querySelector('.feelsLike')
    const humidity = document.querySelector('.humidity')
    const wind = document.querySelector('.wind')

    cityName.textContent = `${data.cityName}`
    temperature.textContent = `${data.temperature}`
    feelsLike.textContent = `${data.feelsLike}`
    humidity.textContent = `${data.humidity}`
    wind.textContent = `${data.windSpeed}`
  }

  return { setSearchResult };

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weather = (() => {
  function convertData(data) {
    const {
      name: cityName,
      main: { temp: temperature, feels_like: feelsLike, humidity },
      wind: { speed: windSpeed },
    } = data;
    return { cityName, temperature, feelsLike, humidity, windSpeed }
  }

  async function getData(city) {
    const API_KEY = "55e6d5234c729a9621bf71726498a1e9"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`; 

    try {
      const res = await fetch(url, {mode: "cors"});
      if (!res.ok) throw new Error(`City ${city} not found`)
      const data = convertData(await res.json());
      return data;         
    } catch (error) {
        alert(error)
        return null;
    }
  }
  return { getData };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ "./src/display.js");




const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')

form.addEventListener('submit', (e) => {
  e.preventDefault();
})

button.addEventListener('click', async () => {
  if (input.value === "") return;
  const weatherData = await _weather__WEBPACK_IMPORTED_MODULE_0__["default"].getData(input.value)
  _display__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(weatherData)
})

// ** TO COMPLETE **

// DTR
// Picture Documentation (min of 4 pics)
// Endorsement Letter

// ** DONE **
// MOA
// Certificate of Completion
// Evaluation Form

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixjQUFjO0FBQzVDLGlDQUFpQyxpQkFBaUI7QUFDbEQsK0JBQStCLGVBQWU7QUFDOUMsOEJBQThCLGNBQWM7QUFDNUMsMEJBQTBCLGVBQWU7QUFDekM7O0FBRUEsV0FBVzs7QUFFWCxDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQW9EO0FBQ2xFLGNBQWMsa0JBQWtCO0FBQ2hDLE1BQU07QUFDTixhQUFhO0FBQ2I7O0FBRUE7QUFDQSxvQkFBb0Isa0NBQXdCO0FBQzVDLHFFQUFxRSxLQUFLLHNCQUFzQixRQUFROztBQUV4RztBQUNBLG9DQUFvQyxhQUFhO0FBQ2pELDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7VUMzQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0E7OztBQUcvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLDRCQUE0QixnREFBTztBQUNuQyxFQUFFLGdEQUFPO0FBQ1QsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vLi9zcmMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtd2VhdGhlcmFwcC1vZGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyYXBwLW9kaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGlzcGxheSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHNldFNlYXJjaFJlc3VsdChkYXRhKSB7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG5cbiAgICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJylcbiAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpXG4gICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzTGlrZScpXG4gICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2RhdGEuY2l0eU5hbWV9YFxuICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYCR7ZGF0YS50ZW1wZXJhdHVyZX1gXG4gICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mZWVsc0xpa2V9YFxuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5odW1pZGl0eX1gXG4gICAgd2luZC50ZXh0Q29udGVudCA9IGAke2RhdGEud2luZFNwZWVkfWBcbiAgfVxuXG4gIHJldHVybiB7IHNldFNlYXJjaFJlc3VsdCB9O1xuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5O1xuIiwiY29uc3Qgd2VhdGhlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnZlcnREYXRhKGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBuYW1lOiBjaXR5TmFtZSxcbiAgICAgIG1haW46IHsgdGVtcDogdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2U6IGZlZWxzTGlrZSwgaHVtaWRpdHkgfSxcbiAgICAgIHdpbmQ6IHsgc3BlZWQ6IHdpbmRTcGVlZCB9LFxuICAgIH0gPSBkYXRhO1xuICAgIHJldHVybiB7IGNpdHlOYW1lLCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgIGNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5PUEVOX01BUF9BUElcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke0FQSV9LRVl9YDsgXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7bW9kZTogXCJjb3JzXCJ9KTtcbiAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoYENpdHkgJHtjaXR5fSBub3QgZm91bmRgKVxuICAgICAgY29uc3QgZGF0YSA9IGNvbnZlcnREYXRhKGF3YWl0IHJlcy5qc29uKCkpO1xuICAgICAgcmV0dXJuIGRhdGE7ICAgICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoZXJyb3IpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBnZXREYXRhIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgd2VhdGhlciBmcm9tICcuL3dlYXRoZXInXG5pbXBvcnQgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXknXG5cblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgaWYgKGlucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXREYXRhKGlucHV0LnZhbHVlKVxuICBkaXNwbGF5LnNldFNlYXJjaFJlc3VsdCh3ZWF0aGVyRGF0YSlcbn0pXG5cbi8vICoqIFRPIENPTVBMRVRFICoqXG5cbi8vIERUUlxuLy8gUGljdHVyZSBEb2N1bWVudGF0aW9uIChtaW4gb2YgNCBwaWNzKVxuLy8gRW5kb3JzZW1lbnQgTGV0dGVyXG5cbi8vICoqIERPTkUgKipcbi8vIE1PQVxuLy8gQ2VydGlmaWNhdGUgb2YgQ29tcGxldGlvblxuLy8gRXZhbHVhdGlvbiBGb3JtXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
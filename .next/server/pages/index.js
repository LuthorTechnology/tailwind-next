/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-circular-progressbar */ \"react-circular-progressbar\");\n/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ \"./node_modules/react-circular-progressbar/dist/styles.css\");\n/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! animate.css */ \"./node_modules/animate.css/animate.css\");\n/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(animate_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/Luthor/Projecten/tailwind-next/pages/index.js\";\n\n\n\n\n\n\nconst AdultSwimLogo = () => {\n  const leftText = \"[a\";\n  const rightText = \"s]\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex items-center justify-center py-2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-9xl animate__animated animate__fadeInLeft animate__delay-2s\",\n      children: leftText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"text-9xl animate__animated animate__fadeInRight animate__delay-2s\",\n      children: rightText\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst Home = () => {\n  // Interval ID to keep track of setInterval, as component re-renders\n  const {\n    0: intervalId,\n    1: setIntervalId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n  const {\n    0: loaderValue,\n    1: setLoaderValue\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n  const {\n    0: loaderClass,\n    1: setLoaderClass\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (!loaderValue) {\n      const timer = setInterval(() => {\n        setLoaderValue(prev => prev + 1);\n      }, 10);\n      setIntervalId(timer);\n    } else if (loaderValue === 100) {\n      setLoaderClass(classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n        \"animate__animated animate__fadeOut animate__delay-1.5s\": loaderValue === 100\n      }));\n      setTimeout(() => {\n        setLoaderClass(\"hidden\");\n      }, 1500);\n      clearInterval(intervalId);\n    }\n  }, [loaderValue]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex items-center min-h-screen justify-center\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        width: 200,\n        height: 200\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__.CircularProgressbar, {\n        value: loaderValue,\n        maxValue: 100,\n        text: `${loaderValue}%`,\n        styles: (0,react_circular_progressbar__WEBPACK_IMPORTED_MODULE_3__.buildStyles)({\n          pathColor: `rgba(0, 0, 0, ${loaderValue / 100})`,\n          textColor: \"#000\",\n          trailColor: \"#fff\",\n          backgroundColor: \"#000\"\n        }),\n        className: loaderClass\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined), loaderValue === 100 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AdultSwimLogo, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 41\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0Ly4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBZHVsdFN3aW1Mb2dvIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJIb21lIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsSWQiLCJ1c2VTdGF0ZSIsImxvYWRlclZhbHVlIiwic2V0TG9hZGVyVmFsdWUiLCJsb2FkZXJDbGFzcyIsInNldExvYWRlckNsYXNzIiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGFzc05hbWVzIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJ3aWR0aCIsImhlaWdodCIsImJ1aWxkU3R5bGVzIiwicGF0aENvbG9yIiwidGV4dENvbG9yIiwidHJhaWxDb2xvciIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUN4QixRQUFNQyxRQUFRLEdBQUcsSUFBakI7QUFDQSxRQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtFQUFmO0FBQUEsZ0JBQW1GRDtBQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBSyxlQUFTLEVBQUMsbUVBQWY7QUFBQSxnQkFBb0ZDO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFNSCxDQVZEOztBQVlBLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2Y7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLEVBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDRiwrQ0FBUSxDQUFDLENBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NKLCtDQUFRLENBQUMsRUFBRCxDQUE5QztBQUVBSyxrREFBUyxDQUFDLE1BQU07QUFDWixRQUFJLENBQUNKLFdBQUwsRUFBa0I7QUFDZCxZQUFNSyxLQUFLLEdBQUdDLFdBQVcsQ0FBQyxNQUFNO0FBQzVCTCxzQkFBYyxDQUFFTSxJQUFELElBQVVBLElBQUksR0FBRyxDQUFsQixDQUFkO0FBQ0gsT0FGd0IsRUFFdEIsRUFGc0IsQ0FBekI7QUFJQVQsbUJBQWEsQ0FBQ08sS0FBRCxDQUFiO0FBQ0gsS0FORCxNQU1PLElBQUlMLFdBQVcsS0FBSyxHQUFwQixFQUF5QjtBQUM1Qkcsb0JBQWMsQ0FDVkssaURBQVUsQ0FBQztBQUNQLGtFQUEwRFIsV0FBVyxLQUFLO0FBRG5FLE9BQUQsQ0FEQSxDQUFkO0FBTUFTLGdCQUFVLENBQUMsTUFBTTtBQUNiTixzQkFBYyxDQUFDLFFBQUQsQ0FBZDtBQUNILE9BRlMsRUFFUCxJQUZPLENBQVY7QUFJQU8sbUJBQWEsQ0FBQ2IsVUFBRCxDQUFiO0FBQ0g7QUFDSixHQXBCUSxFQW9CTixDQUFDRyxXQUFELENBcEJNLENBQVQ7QUFzQkEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQSwyQkFDSTtBQUFLLFdBQUssRUFBRTtBQUFFVyxhQUFLLEVBQUUsR0FBVDtBQUFjQyxjQUFNLEVBQUU7QUFBdEIsT0FBWjtBQUFBLDhCQUNJLDhEQUFDLDJFQUFEO0FBQ0ksYUFBSyxFQUFFWixXQURYO0FBRUksZ0JBQVEsRUFBRSxHQUZkO0FBR0ksWUFBSSxFQUFHLEdBQUVBLFdBQVksR0FIekI7QUFJSSxjQUFNLEVBQUVhLHVFQUFXLENBQUM7QUFDaEJDLG1CQUFTLEVBQUcsaUJBQWdCZCxXQUFXLEdBQUcsR0FBSSxHQUQ5QjtBQUVoQmUsbUJBQVMsRUFBRSxNQUZLO0FBR2hCQyxvQkFBVSxFQUFFLE1BSEk7QUFJaEJDLHlCQUFlLEVBQUU7QUFKRCxTQUFELENBSnZCO0FBVUksaUJBQVMsRUFBRWY7QUFWZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBYUtGLFdBQVcsS0FBSyxHQUFoQixpQkFBdUIsOERBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWI1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQkgsQ0EvQ0Q7O0FBaURBLCtEQUFlSixJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzc2JhciwgYnVpbGRTdHlsZXMgfSBmcm9tIFwicmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXJcIjtcblxuaW1wb3J0IFwicmVhY3QtY2lyY3VsYXItcHJvZ3Jlc3NiYXIvZGlzdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgXCJhbmltYXRlLmNzc1wiO1xuXG5jb25zdCBBZHVsdFN3aW1Mb2dvID0gKCkgPT4ge1xuICAgIGNvbnN0IGxlZnRUZXh0ID0gXCJbYVwiO1xuICAgIGNvbnN0IHJpZ2h0VGV4dCA9IFwic11cIjtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC05eGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluTGVmdCBhbmltYXRlX19kZWxheS0yc1wiPntsZWZ0VGV4dH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC05eGwgYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluUmlnaHQgYW5pbWF0ZV9fZGVsYXktMnNcIj57cmlnaHRUZXh0fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICAvLyBJbnRlcnZhbCBJRCB0byBrZWVwIHRyYWNrIG9mIHNldEludGVydmFsLCBhcyBjb21wb25lbnQgcmUtcmVuZGVyc1xuICAgIGNvbnN0IFtpbnRlcnZhbElkLCBzZXRJbnRlcnZhbElkXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW2xvYWRlclZhbHVlLCBzZXRMb2FkZXJWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbG9hZGVyQ2xhc3MsIHNldExvYWRlckNsYXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghbG9hZGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRlclZhbHVlKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldEludGVydmFsSWQodGltZXIpO1xuICAgICAgICB9IGVsc2UgaWYgKGxvYWRlclZhbHVlID09PSAxMDApIHtcbiAgICAgICAgICAgIHNldExvYWRlckNsYXNzKFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMoe1xuICAgICAgICAgICAgICAgICAgICBcImFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVPdXQgYW5pbWF0ZV9fZGVsYXktMS41c1wiOiBsb2FkZXJWYWx1ZSA9PT0gMTAwLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGVyQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgIH0sIFtsb2FkZXJWYWx1ZV0pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWluLWgtc2NyZWVuIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAyMDAsIGhlaWdodDogMjAwIH19PlxuICAgICAgICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzYmFyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2FkZXJWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9ezEwMH1cbiAgICAgICAgICAgICAgICAgICAgdGV4dD17YCR7bG9hZGVyVmFsdWV9JWB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17YnVpbGRTdHlsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aENvbG9yOiBgcmdiYSgwLCAwLCAwLCAke2xvYWRlclZhbHVlIC8gMTAwfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7bG9hZGVyVmFsdWUgPT09IDEwMCAmJiA8QWR1bHRTd2ltTG9nbyAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-circular-progressbar/dist/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-circular-progressbar/dist/styles.css ***!
  \*****************************************************************/
/***/ (function() {



/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-circular-progressbar":
/*!*********************************************!*\
  !*** external "react-circular-progressbar" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-circular-progressbar");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
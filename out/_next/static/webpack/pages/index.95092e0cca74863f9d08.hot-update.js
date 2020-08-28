webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/skills.tsx":
/*!*************************************!*\
  !*** ./components/index/skills.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Skills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.module.css */ \"./components/index/skills.module.css\");\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skills_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _jsxFileName = \"/home/victor/Coding/victorkuo/components/index/skills.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar skills = [{\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCodeBranch\"],\n  title: 'Programmer',\n  text: 'Familiar with C, C++, Java, Python, JS, DevOps, Git. Competitive programmer and Open Source contributor.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faRobot\"],\n  title: 'Robotics Engineering',\n  text: 'Mechatronics student strong in mechanical, electrical and software designs for robotics.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCode\"],\n  title: 'Full Stack Web Developer',\n  text: 'Well versed with frontend, backend and devops.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlane\"],\n  title: 'Private Pilot',\n  text: 'Certified Private Pilot with the FAA (USA) and CASA (Aus). Trained for 3 months in USA to fly single engine planes.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMedkit\"],\n  title: 'First Aider',\n  text: 'Certified Occupational First Aider (HLTSS00027). Trained with the Australian Red Cross.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faLanguage\"],\n  title: 'Trilingual',\n  text: 'Native English, Conversational Chinese, Business Level Japanese (N2)'\n}];\n\nfunction Card(_ref) {\n  var skill = _ref.skill;\n  return __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    icon: skill.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, skill.title), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, skill.text));\n}\n\n_c = Card;\nfunction Skills() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.skills,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, skills.map(function (skill) {\n    return __jsx(Card, {\n      skill: skill,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n_c2 = Skills;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9za2lsbHMudHN4PzhhZWEiXSwibmFtZXMiOlsic2tpbGxzIiwiaWNvbiIsImZhQ29kZUJyYW5jaCIsInRpdGxlIiwidGV4dCIsImZhUm9ib3QiLCJmYUNvZGUiLCJmYVBsYW5lIiwiZmFNZWRraXQiLCJmYUxhbmd1YWdlIiwiQ2FyZCIsInNraWxsIiwic3R5bGVzIiwiY2FyZCIsImNhcmRUaXRsZSIsImNhcmRUZXh0IiwiU2tpbGxzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxNQUFnQixHQUFHLENBQ3ZCO0FBQ0VDLE1BQUksRUFBRUMsOEVBRFI7QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEdUIsRUFPdkI7QUFDRUgsTUFBSSxFQUFFSSx5RUFEUjtBQUVFRixPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQdUIsRUFhdkI7QUFDRUgsTUFBSSxFQUFFSyx3RUFEUjtBQUVFSCxPQUFLLEVBQUUsMEJBRlQ7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0FidUIsRUFrQnZCO0FBQ0VILE1BQUksRUFBRU0seUVBRFI7QUFFRUosT0FBSyxFQUFFLGVBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FsQnVCLEVBd0J2QjtBQUNFSCxNQUFJLEVBQUVPLDBFQURSO0FBRUVMLE9BQUssRUFBRSxhQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBeEJ1QixFQThCdkI7QUFDRUgsTUFBSSxFQUFFUSw0RUFEUjtBQUVFTixPQUFLLEVBQUUsWUFGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQTlCdUIsQ0FBekI7O0FBMENBLFNBQVNNLElBQVQsT0FBb0M7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQ2xDLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLGFBQVMsRUFBRUQseURBQU0sQ0FBQ1gsSUFBbkM7QUFBeUMsUUFBSSxFQUFFVSxLQUFLLENBQUNWLElBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFVyx5REFBTSxDQUFDRSxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DSCxLQUFLLENBQUNSLEtBQXpDLENBRkYsRUFHRTtBQUFLLGFBQVMsRUFBRVMseURBQU0sQ0FBQ0csUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQ0osS0FBSyxDQUFDUCxJQUF4QyxDQUhGLENBREY7QUFPRDs7S0FSUU0sSTtBQVVNLFNBQVNNLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0IsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBSyxhQUFTLEVBQUVKLHlEQUFNLENBQUNaLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsTUFBTSxDQUFDaUIsR0FBUCxDQUFXLFVBQUNOLEtBQUQ7QUFBQSxXQUNWLE1BQUMsSUFBRDtBQUFNLFdBQUssRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFU7QUFBQSxHQUFYLENBREgsQ0FGRixDQURGO0FBVUQ7TUFYdUJLLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4L3NraWxscy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc2tpbGxzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gIEljb25EZWZpbml0aW9uLFxuICBmYU1lZGtpdCxcbiAgZmFQbGFuZSxcbiAgZmFDb2RlLFxuICBmYVJvYm90LFxuICBmYUxhbmd1YWdlLFxuICBmYUNvZGVCcmFuY2gsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbmludGVyZmFjZSBJU2tpbGwge1xuICBpY29uOiBJY29uRGVmaW5pdGlvbjtcbiAgdGl0bGU6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBza2lsbHM6IElTa2lsbFtdID0gW1xuICB7XG4gICAgaWNvbjogZmFDb2RlQnJhbmNoLFxuICAgIHRpdGxlOiAnUHJvZ3JhbW1lcicsXG4gICAgdGV4dDpcbiAgICAgICdGYW1pbGlhciB3aXRoIEMsIEMrKywgSmF2YSwgUHl0aG9uLCBKUywgRGV2T3BzLCBHaXQuIENvbXBldGl0aXZlIHByb2dyYW1tZXIgYW5kIE9wZW4gU291cmNlIGNvbnRyaWJ1dG9yLicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYVJvYm90LFxuICAgIHRpdGxlOiAnUm9ib3RpY3MgRW5naW5lZXJpbmcnLFxuICAgIHRleHQ6XG4gICAgICAnTWVjaGF0cm9uaWNzIHN0dWRlbnQgc3Ryb25nIGluIG1lY2hhbmljYWwsIGVsZWN0cmljYWwgYW5kIHNvZnR3YXJlIGRlc2lnbnMgZm9yIHJvYm90aWNzLicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUNvZGUsXG4gICAgdGl0bGU6ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXInLFxuICAgIHRleHQ6ICdXZWxsIHZlcnNlZCB3aXRoIGZyb250ZW5kLCBiYWNrZW5kIGFuZCBkZXZvcHMuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhUGxhbmUsXG4gICAgdGl0bGU6ICdQcml2YXRlIFBpbG90JyxcbiAgICB0ZXh0OlxuICAgICAgJ0NlcnRpZmllZCBQcml2YXRlIFBpbG90IHdpdGggdGhlIEZBQSAoVVNBKSBhbmQgQ0FTQSAoQXVzKS4gVHJhaW5lZCBmb3IgMyBtb250aHMgaW4gVVNBIHRvIGZseSBzaW5nbGUgZW5naW5lIHBsYW5lcy4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFNZWRraXQsXG4gICAgdGl0bGU6ICdGaXJzdCBBaWRlcicsXG4gICAgdGV4dDpcbiAgICAgICdDZXJ0aWZpZWQgT2NjdXBhdGlvbmFsIEZpcnN0IEFpZGVyIChITFRTUzAwMDI3KS4gVHJhaW5lZCB3aXRoIHRoZSBBdXN0cmFsaWFuIFJlZCBDcm9zcy4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFMYW5ndWFnZSxcbiAgICB0aXRsZTogJ1RyaWxpbmd1YWwnLFxuICAgIHRleHQ6XG4gICAgICAnTmF0aXZlIEVuZ2xpc2gsIENvbnZlcnNhdGlvbmFsIENoaW5lc2UsIEJ1c2luZXNzIExldmVsIEphcGFuZXNlIChOMiknLFxuICB9LFxuXTtcblxuaW50ZXJmYWNlIFNraWxsUHJvcCB7XG4gIHNraWxsOiBJU2tpbGw7XG59XG5cbmZ1bmN0aW9uIENhcmQoeyBza2lsbCB9OiBTa2lsbFByb3ApIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXtza2lsbC5pY29ufSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9Pntza2lsbC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRleHR9Pntza2lsbC50ZXh0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ta2lsbHM8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICAgIHtza2lsbHMubWFwKChza2lsbCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHNraWxsPXtza2lsbH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index/skills.tsx\n");

/***/ })

})
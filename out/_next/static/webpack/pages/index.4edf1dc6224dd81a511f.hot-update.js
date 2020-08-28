webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/skills.tsx":
/*!*************************************!*\
  !*** ./components/index/skills.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Skills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.module.css */ \"./components/index/skills.module.css\");\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skills_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _jsxFileName = \"/home/victor/Coding/victorkuo/components/index/skills.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar skills = [{\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCodeBranch\"],\n  title: 'Programmer',\n  text: 'Familiar with C, C++, Java, Python, JS, DevOps, Git. Competitive programmer and Open Source contributor.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faRobot\"],\n  title: 'Robotics Engineering',\n  text: 'Mechatronics student strong in mechanical, electrical and software designs for robotics.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMedkit\"],\n  title: 'First Aid',\n  text: 'Certified Occupational First Aider. Trained with Australia Red Cross.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlane\"],\n  title: 'Private Pilot - FAA & CASA',\n  text: 'Trained for 3 months in Portland, Oregon to fly single engine planes. USA and Aus licenses.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCode\"],\n  title: 'Full stack Web Developer',\n  text: 'Well versed with frontend, backend and devops.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faLanguage\"],\n  title: 'Trilingual',\n  text: 'Native English, conversational Chinese and business level Japanese (N2)'\n}];\n\nfunction Card(_ref) {\n  var skill = _ref.skill;\n  return __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.icon,\n    icon: skill.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, skill.title), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, skill.text));\n}\n\n_c = Card;\nfunction Skills() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.skills,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, skills.map(function (skill) {\n    return __jsx(Card, {\n      skill: skill,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n_c2 = Skills;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9za2lsbHMudHN4PzhhZWEiXSwibmFtZXMiOlsic2tpbGxzIiwiaWNvbiIsImZhQ29kZUJyYW5jaCIsInRpdGxlIiwidGV4dCIsImZhUm9ib3QiLCJmYU1lZGtpdCIsImZhUGxhbmUiLCJmYUNvZGUiLCJmYUxhbmd1YWdlIiwiQ2FyZCIsInNraWxsIiwic3R5bGVzIiwiY2FyZCIsImNhcmRUaXRsZSIsImNhcmRUZXh0IiwiU2tpbGxzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxNQUFnQixHQUFHLENBQ3ZCO0FBQ0VDLE1BQUksRUFBRUMsOEVBRFI7QUFFRUMsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FEdUIsRUFPdkI7QUFDRUgsTUFBSSxFQUFFSSx5RUFEUjtBQUVFRixPQUFLLEVBQUUsc0JBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FQdUIsRUFhdkI7QUFDRUgsTUFBSSxFQUFFSywwRUFEUjtBQUVFSCxPQUFLLEVBQUUsV0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQWJ1QixFQW1CdkI7QUFDRUgsTUFBSSxFQUFFTSx5RUFEUjtBQUVFSixPQUFLLEVBQUUsNEJBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0FuQnVCLEVBeUJ2QjtBQUNFSCxNQUFJLEVBQUVPLHdFQURSO0FBRUVMLE9BQUssRUFBRSwwQkFGVDtBQUdFQyxNQUFJLEVBQUU7QUFIUixDQXpCdUIsRUE4QnZCO0FBQ0VILE1BQUksRUFBRVEsNEVBRFI7QUFFRU4sT0FBSyxFQUFFLFlBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0E5QnVCLENBQXpCOztBQTBDQSxTQUFTTSxJQUFULE9BQW9DO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUNsQyxTQUNFO0FBQUssYUFBUyxFQUFFQyx5REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4RUFBRDtBQUFpQixhQUFTLEVBQUVELHlEQUFNLENBQUNYLElBQW5DO0FBQXlDLFFBQUksRUFBRVUsS0FBSyxDQUFDVixJQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRVcseURBQU0sQ0FBQ0UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0gsS0FBSyxDQUFDUixLQUF6QyxDQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUVTLHlEQUFNLENBQUNHLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NKLEtBQUssQ0FBQ1AsSUFBeEMsQ0FIRixDQURGO0FBT0Q7O0tBUlFNLEk7QUFVTSxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFFSix5REFBTSxDQUFDWixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLE1BQU0sQ0FBQ2lCLEdBQVAsQ0FBVyxVQUFDTixLQUFEO0FBQUEsV0FDVixNQUFDLElBQUQ7QUFBTSxXQUFLLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWCxDQURILENBRkYsQ0FERjtBQVVEO01BWHVCSyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbmRleC9za2lsbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NraWxscy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge1xuICBJY29uRGVmaW5pdGlvbixcbiAgZmFNZWRraXQsXG4gIGZhUGxhbmUsXG4gIGZhQ29kZSxcbiAgZmFSb2JvdCxcbiAgZmFMYW5ndWFnZSxcbiAgZmFDb2RlQnJhbmNoLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbnRlcmZhY2UgSVNraWxsIHtcbiAgaWNvbjogSWNvbkRlZmluaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY29uc3Qgc2tpbGxzOiBJU2tpbGxbXSA9IFtcbiAge1xuICAgIGljb246IGZhQ29kZUJyYW5jaCxcbiAgICB0aXRsZTogJ1Byb2dyYW1tZXInLFxuICAgIHRleHQ6XG4gICAgICAnRmFtaWxpYXIgd2l0aCBDLCBDKyssIEphdmEsIFB5dGhvbiwgSlMsIERldk9wcywgR2l0LiBDb21wZXRpdGl2ZSBwcm9ncmFtbWVyIGFuZCBPcGVuIFNvdXJjZSBjb250cmlidXRvci4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFSb2JvdCxcbiAgICB0aXRsZTogJ1JvYm90aWNzIEVuZ2luZWVyaW5nJyxcbiAgICB0ZXh0OlxuICAgICAgJ01lY2hhdHJvbmljcyBzdHVkZW50IHN0cm9uZyBpbiBtZWNoYW5pY2FsLCBlbGVjdHJpY2FsIGFuZCBzb2Z0d2FyZSBkZXNpZ25zIGZvciByb2JvdGljcy4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFNZWRraXQsXG4gICAgdGl0bGU6ICdGaXJzdCBBaWQnLFxuICAgIHRleHQ6XG4gICAgICAnQ2VydGlmaWVkIE9jY3VwYXRpb25hbCBGaXJzdCBBaWRlci4gVHJhaW5lZCB3aXRoIEF1c3RyYWxpYSBSZWQgQ3Jvc3MuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhUGxhbmUsXG4gICAgdGl0bGU6ICdQcml2YXRlIFBpbG90IC0gRkFBICYgQ0FTQScsXG4gICAgdGV4dDpcbiAgICAgICdUcmFpbmVkIGZvciAzIG1vbnRocyBpbiBQb3J0bGFuZCwgT3JlZ29uIHRvIGZseSBzaW5nbGUgZW5naW5lIHBsYW5lcy4gVVNBIGFuZCBBdXMgbGljZW5zZXMuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhQ29kZSxcbiAgICB0aXRsZTogJ0Z1bGwgc3RhY2sgV2ViIERldmVsb3BlcicsXG4gICAgdGV4dDogJ1dlbGwgdmVyc2VkIHdpdGggZnJvbnRlbmQsIGJhY2tlbmQgYW5kIGRldm9wcy4nLFxuICB9LFxuICB7XG4gICAgaWNvbjogZmFMYW5ndWFnZSxcbiAgICB0aXRsZTogJ1RyaWxpbmd1YWwnLFxuICAgIHRleHQ6XG4gICAgICAnTmF0aXZlIEVuZ2xpc2gsIGNvbnZlcnNhdGlvbmFsIENoaW5lc2UgYW5kIGJ1c2luZXNzIGxldmVsIEphcGFuZXNlIChOMiknLFxuICB9LFxuXTtcblxuaW50ZXJmYWNlIFNraWxsUHJvcCB7XG4gIHNraWxsOiBJU2tpbGw7XG59XG5cbmZ1bmN0aW9uIENhcmQoeyBza2lsbCB9OiBTa2lsbFByb3ApIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBpY29uPXtza2lsbC5pY29ufSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkVGl0bGV9Pntza2lsbC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRleHR9Pntza2lsbC50ZXh0fTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5Ta2lsbHM8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICAgIHtza2lsbHMubWFwKChza2lsbCkgPT4gKFxuICAgICAgICAgIDxDYXJkIHNraWxsPXtza2lsbH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/index/skills.tsx\n");

/***/ })

})
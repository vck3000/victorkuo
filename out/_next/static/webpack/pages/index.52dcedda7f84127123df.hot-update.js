webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index/skills.tsx":
/*!*************************************!*\
  !*** ./components/index/skills.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Skills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skills.module.css */ \"./components/index/skills.module.css\");\n/* harmony import */ var _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skills_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\nvar _jsxFileName = \"/home/victor/Coding/victorkuo/components/index/skills.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar skills = [{\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faMedkit\"],\n  title: 'Certified Occupational First Aider',\n  text: 'Trained for 5 full days with the Red Cross foundation.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faPlane\"],\n  title: 'Private Pilot - FAA & CASA',\n  text: 'Trained for 3 months in Portland, Oregon to fly single engine planes. USA and Aus licenses.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCode\"],\n  title: 'Full stack Web Developer',\n  text: 'Well versed with frontend, backend and devops.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faRobot\"],\n  title: 'Robotics Engineering',\n  text: 'Strong educational background in hardware, electrical and software design for robotics. Comfortable with Solidworks, Fusion360, PCB design and manufacturing.'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faLanguage\"],\n  title: 'Trilingual',\n  text: 'Native English, conversational Chinese and business level Japanese (N2)'\n}, {\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCodeBranch\"],\n  title: 'Programmer and Open Source Contributor',\n  text: 'Well versed in procedural, object oriented and data oriented design. Comfortable in C, C++, Java, Python and Javascript. Enjoys competitive programming.'\n}];\n\nfunction Card(_ref) {\n  var skill = _ref.skill;\n  return __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }\n  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: skill.icon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }, skill.title), __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }\n  }, skill.text));\n}\n\n_c = Card;\nfunction Skills() {\n  var _this = this;\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _skills_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.skills,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }, skills.map(function (skill) {\n    return __jsx(Card, {\n      skill: skill,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n_c2 = Skills;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"Skills\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC9za2lsbHMudHN4PzhhZWEiXSwibmFtZXMiOlsic2tpbGxzIiwiaWNvbiIsImZhTWVka2l0IiwidGl0bGUiLCJ0ZXh0IiwiZmFQbGFuZSIsImZhQ29kZSIsImZhUm9ib3QiLCJmYUxhbmd1YWdlIiwiZmFDb2RlQnJhbmNoIiwiQ2FyZCIsInNraWxsIiwic3R5bGVzIiwiY2FyZCIsImNhcmRUaXRsZSIsImNhcmRUZXh0IiwiU2tpbGxzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQWdCQSxJQUFNQSxNQUFnQixHQUFHLENBQ3ZCO0FBQ0VDLE1BQUksRUFBRUMsMEVBRFI7QUFFRUMsT0FBSyxFQUFFLG9DQUZUO0FBR0VDLE1BQUksRUFBRTtBQUhSLENBRHVCLEVBTXZCO0FBQ0VILE1BQUksRUFBRUkseUVBRFI7QUFFRUYsT0FBSyxFQUFFLDRCQUZUO0FBR0VDLE1BQUksRUFDRjtBQUpKLENBTnVCLEVBWXZCO0FBQ0VILE1BQUksRUFBRUssd0VBRFI7QUFFRUgsT0FBSyxFQUFFLDBCQUZUO0FBR0VDLE1BQUksRUFBRTtBQUhSLENBWnVCLEVBaUJ2QjtBQUNFSCxNQUFJLEVBQUVNLHlFQURSO0FBRUVKLE9BQUssRUFBRSxzQkFGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQWpCdUIsRUF1QnZCO0FBQ0VILE1BQUksRUFBRU8sNEVBRFI7QUFFRUwsT0FBSyxFQUFFLFlBRlQ7QUFHRUMsTUFBSSxFQUNGO0FBSkosQ0F2QnVCLEVBNkJ2QjtBQUNFSCxNQUFJLEVBQUVRLDhFQURSO0FBRUVOLE9BQUssRUFBRSx3Q0FGVDtBQUdFQyxNQUFJLEVBQ0Y7QUFKSixDQTdCdUIsQ0FBekI7O0FBeUNBLFNBQVNNLElBQVQsT0FBb0M7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQ2xDLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhFQUFEO0FBQWlCLFFBQUksRUFBRUYsS0FBSyxDQUFDVixJQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBRVcseURBQU0sQ0FBQ0UsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0gsS0FBSyxDQUFDUixLQUF6QyxDQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUVTLHlEQUFNLENBQUNHLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0NKLEtBQUssQ0FBQ1AsSUFBeEMsQ0FIRixDQURGO0FBT0Q7O0tBUlFNLEk7QUFVTSxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFO0FBQUssYUFBUyxFQUFFSix5REFBTSxDQUFDWixNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLE1BQU0sQ0FBQ2lCLEdBQVAsQ0FBVyxVQUFDTixLQUFEO0FBQUEsV0FDVixNQUFDLElBQUQ7QUFBTSxXQUFLLEVBQUVBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURVO0FBQUEsR0FBWCxDQURILENBRkYsQ0FERjtBQVVEO01BWHVCSyxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9pbmRleC9za2lsbHMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NraWxscy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQge1xuICBJY29uRGVmaW5pdGlvbixcbiAgZmFNZWRraXQsXG4gIGZhUGxhbmUsXG4gIGZhQ29kZSxcbiAgZmFSb2JvdCxcbiAgZmFMYW5ndWFnZSxcbiAgZmFDb2RlQnJhbmNoLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuXG5pbnRlcmZhY2UgSVNraWxsIHtcbiAgaWNvbjogSWNvbkRlZmluaXRpb247XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuY29uc3Qgc2tpbGxzOiBJU2tpbGxbXSA9IFtcbiAge1xuICAgIGljb246IGZhTWVka2l0LFxuICAgIHRpdGxlOiAnQ2VydGlmaWVkIE9jY3VwYXRpb25hbCBGaXJzdCBBaWRlcicsXG4gICAgdGV4dDogJ1RyYWluZWQgZm9yIDUgZnVsbCBkYXlzIHdpdGggdGhlIFJlZCBDcm9zcyBmb3VuZGF0aW9uLicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYVBsYW5lLFxuICAgIHRpdGxlOiAnUHJpdmF0ZSBQaWxvdCAtIEZBQSAmIENBU0EnLFxuICAgIHRleHQ6XG4gICAgICAnVHJhaW5lZCBmb3IgMyBtb250aHMgaW4gUG9ydGxhbmQsIE9yZWdvbiB0byBmbHkgc2luZ2xlIGVuZ2luZSBwbGFuZXMuIFVTQSBhbmQgQXVzIGxpY2Vuc2VzLicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiBmYUNvZGUsXG4gICAgdGl0bGU6ICdGdWxsIHN0YWNrIFdlYiBEZXZlbG9wZXInLFxuICAgIHRleHQ6ICdXZWxsIHZlcnNlZCB3aXRoIGZyb250ZW5kLCBiYWNrZW5kIGFuZCBkZXZvcHMuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhUm9ib3QsXG4gICAgdGl0bGU6ICdSb2JvdGljcyBFbmdpbmVlcmluZycsXG4gICAgdGV4dDpcbiAgICAgICdTdHJvbmcgZWR1Y2F0aW9uYWwgYmFja2dyb3VuZCBpbiBoYXJkd2FyZSwgZWxlY3RyaWNhbCBhbmQgc29mdHdhcmUgZGVzaWduIGZvciByb2JvdGljcy4gQ29tZm9ydGFibGUgd2l0aCBTb2xpZHdvcmtzLCBGdXNpb24zNjAsIFBDQiBkZXNpZ24gYW5kIG1hbnVmYWN0dXJpbmcuJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhTGFuZ3VhZ2UsXG4gICAgdGl0bGU6ICdUcmlsaW5ndWFsJyxcbiAgICB0ZXh0OlxuICAgICAgJ05hdGl2ZSBFbmdsaXNoLCBjb252ZXJzYXRpb25hbCBDaGluZXNlIGFuZCBidXNpbmVzcyBsZXZlbCBKYXBhbmVzZSAoTjIpJyxcbiAgfSxcbiAge1xuICAgIGljb246IGZhQ29kZUJyYW5jaCxcbiAgICB0aXRsZTogJ1Byb2dyYW1tZXIgYW5kIE9wZW4gU291cmNlIENvbnRyaWJ1dG9yJyxcbiAgICB0ZXh0OlxuICAgICAgJ1dlbGwgdmVyc2VkIGluIHByb2NlZHVyYWwsIG9iamVjdCBvcmllbnRlZCBhbmQgZGF0YSBvcmllbnRlZCBkZXNpZ24uIENvbWZvcnRhYmxlIGluIEMsIEMrKywgSmF2YSwgUHl0aG9uIGFuZCBKYXZhc2NyaXB0LiBFbmpveXMgY29tcGV0aXRpdmUgcHJvZ3JhbW1pbmcuJyxcbiAgfSxcbl07XG5cbmludGVyZmFjZSBTa2lsbFByb3Age1xuICBza2lsbDogSVNraWxsO1xufVxuXG5mdW5jdGlvbiBDYXJkKHsgc2tpbGwgfTogU2tpbGxQcm9wKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17c2tpbGwuaWNvbn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZFRpdGxlfT57c2tpbGwudGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRUZXh0fT57c2tpbGwudGV4dH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+U2tpbGxzPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHN9PlxuICAgICAgICB7c2tpbGxzLm1hcCgoc2tpbGwpID0+IChcbiAgICAgICAgICA8Q2FyZCBza2lsbD17c2tpbGx9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index/skills.tsx\n");

/***/ })

})
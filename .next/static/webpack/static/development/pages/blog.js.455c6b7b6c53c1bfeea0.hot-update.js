webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_layout_intro_IntroCenterImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/intro/IntroCenterImage */ \"./components/layout/intro/IntroCenterImage.js\");\n/* harmony import */ var _components_content_blog_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content/blog/Preview */ \"./components/content/blog/Preview.js\");\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ \"./node_modules/@material-ui/lab/esm/index.js\");\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  root: {\n    [theme.breakpoints.up('xs')]: {},\n    [theme.breakpoints.up('sm')]: {},\n    [theme.breakpoints.up('md')]: {},\n    [theme.breakpoints.up('lg')]: {},\n    [theme.breakpoints.up('xl')]: {}\n  },\n  previewWrapper: {\n    [theme.breakpoints.up('xs')]: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center',\n      margin: theme.spacing(2)\n    },\n    [theme.breakpoints.up('sm')]: {\n      flexDirection: 'row',\n      flexWrap: 'wrap',\n      alignItems: 'stretch'\n    },\n    [theme.breakpoints.up('md')]: {\n      justifyContent: 'flex-start'\n    },\n    [theme.breakpoints.up('lg')]: {},\n    [theme.breakpoints.up('xl')]: {}\n  }\n}));\n\nfunction Blog({\n  posts\n}) {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(posts.length);\n\n  const pageChanged = (event, value) => {\n    console.log(event, value);\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"nanocosmos Blog\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  })), __jsx(_components_layout_intro_IntroCenterImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: \"/assets/icons/white-blog.png\",\n    title: \"nanocosmos Blog\",\n    subtitle: \"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: classes.previewWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, posts.map((post, index) => __jsx(_components_content_blog_Preview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    post: post,\n    key: index,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: classes.pagination,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__[\"Pagination\"], {\n    showFirstButton: true,\n    showLastButton: true,\n    onChange: pageChanged,\n    count: count,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Blog, \"tYeAI/KOkaZAK2t5UHWk43fyOGI=\", false, function () {\n  return [useStyles];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJyZWFrcG9pbnRzIiwidXAiLCJwcmV2aWV3V3JhcHBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwic3BhY2luZyIsImZsZXhXcmFwIiwiQmxvZyIsInBvc3RzIiwiY2xhc3NlcyIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsImxlbmd0aCIsInBhZ2VDaGFuZ2VkIiwiZXZlbnQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJwYWdpbmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3JDQyxNQUFJLEVBQUU7QUFDRixLQUFDRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEIsRUFENUI7QUFFRixLQUFDSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEIsRUFGNUI7QUFHRixLQUFDSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEIsRUFINUI7QUFJRixLQUFDSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEIsRUFKNUI7QUFLRixLQUFDSCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsR0FBOEI7QUFMNUIsR0FEK0I7QUFRckNDLGdCQUFjLEVBQUU7QUFDWixLQUFDSixLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLEVBQWxC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dGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEludHJvQ2VudGVySW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaW50cm8vSW50cm9DZW50ZXJJbWFnZSdcbmltcG9ydCAqIGFzIGxpbmsgZnJvbSAnLi4vdXRpbGl0aWVzL2xpbmstY29uZmlnJztcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9ibG9nL1ByZXZpZXcnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHt9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7fSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge30sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHt9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7fVxuICAgIH0sXG4gICAgcHJldmlld1dyYXBwZXI6IHtcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKVxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7fSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge31cbiAgICB9XG59KSk7XG5cbmZ1bmN0aW9uIEJsb2coeyBwb3N0cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUocG9zdHMubGVuZ3RoKVxuXG4gICAgY29uc3QgcGFnZUNoYW5nZWQgPSAoZXZlbnQsIHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LCB2YWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5uYW5vY29zbW9zIEJsb2c8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxJbnRyb0NlbnRlckltYWdlXG4gICAgICAgICAgICAgICAgaW1hZ2U9Jy9hc3NldHMvaWNvbnMvd2hpdGUtYmxvZy5wbmcnXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJuYW5vY29zbW9zIEJsb2dcIlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPVwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNldGV0dXIgc2FkaXBzY2luZyBlbGl0ciwgc2VkIGRpYW0gbm9udW15IGVpcm1vZCB0ZW1wb3IgaW52aWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdXlhbSBlcmF0LlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJldmlld1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByZXZpZXcgcG9zdD17cG9zdH0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2luYXRpb259PlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIHNob3dGaXJzdEJ1dHRvbiBzaG93TGFzdEJ1dHRvbiBvbkNoYW5nZT17cGFnZUNoYW5nZWR9IGNvdW50PXtjb3VudH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtsaW5rLlNUUkFQSV9VUkx9L2FydGljbGVzYCk7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3RzXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})
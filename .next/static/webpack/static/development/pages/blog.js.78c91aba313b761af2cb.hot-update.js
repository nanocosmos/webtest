webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _components_layout_intro_IntroCenterImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/intro/IntroCenterImage */ \"./components/layout/intro/IntroCenterImage.js\");\n/* harmony import */ var _components_content_blog_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content/blog/Preview */ \"./components/content/blog/Preview.js\");\n/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab */ \"./node_modules/@material-ui/lab/esm/index.js\");\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/pages/blog.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  root: {\n    [theme.breakpoints.up('xs')]: {},\n    [theme.breakpoints.up('sm')]: {},\n    [theme.breakpoints.up('md')]: {},\n    [theme.breakpoints.up('lg')]: {},\n    [theme.breakpoints.up('xl')]: {}\n  },\n  previewWrapper: {\n    [theme.breakpoints.up('xs')]: {\n      display: 'flex',\n      flexDirection: 'column',\n      justifyContent: 'center',\n      alignItems: 'center',\n      margin: theme.spacing(2)\n    },\n    [theme.breakpoints.up('sm')]: {\n      flexDirection: 'row',\n      flexWrap: 'wrap',\n      alignItems: 'stretch'\n    },\n    [theme.breakpoints.up('md')]: {\n      justifyContent: 'flex-start'\n    },\n    [theme.breakpoints.up('lg')]: {},\n    [theme.breakpoints.up('xl')]: {}\n  }\n}));\n\nfunction Blog({\n  posts\n}) {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: amountShown\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(12);\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(posts.length / amountShown);\n  console.log(count / amountShown);\n\n  const pageChanged = (event, value) => {\n    console.log(event, value);\n  };\n\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }\n  }, \"nanocosmos Blog\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  })), __jsx(_components_layout_intro_IntroCenterImage__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    image: \"/assets/icons/white-blog.png\",\n    title: \"nanocosmos Blog\",\n    subtitle: \"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: classes.previewWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, posts.map((post, index) => __jsx(_components_content_blog_Preview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    post: post,\n    key: index,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 25\n    }\n  }))), __jsx(\"div\", {\n    className: classes.pagination,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_5__[\"Pagination\"], {\n    showFirstButton: true,\n    showLastButton: true,\n    onChange: pageChanged,\n    count: count,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Blog, \"dNcft9shRNc1OiRqIdNa6gxc3DI=\", false, function () {\n  return [useStyles];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJyZWFrcG9pbnRzIiwidXAiLCJwcmV2aWV3V3JhcHBlciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwic3BhY2luZyIsImZsZXhXcmFwIiwiQmxvZyIsInBvc3RzIiwiY2xhc3NlcyIsImFtb3VudFNob3duIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInBhZ2VDaGFuZ2VkIiwiZXZlbnQiLCJ2YWx1ZSIsIm1hcCIsInBvc3QiLCJpbmRleCIsInBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE1BQUksRUFBRTtBQUNGLEtBQUNELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QixFQUQ1QjtBQUVGLEtBQUNILEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QixFQUY1QjtBQUdGLEtBQUNILEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QixFQUg1QjtBQUlGLEtBQUNILEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QixFQUo1QjtBQUtGLEtBQUNILEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUw1QixHQUQrQjtBQVFyQ0MsZ0JBQWMsRUFBRTtBQUNaLEtBQUNKLEtBQUssQ0FBQ0UsV0FB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QWpCSixDQURKO0FBdUJIOztHQWxDUUwsSTtVQUNXZCxTOzs7S0FEWGMsSTs7QUErQ01BLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEludHJvQ2VudGVySW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaW50cm8vSW50cm9DZW50ZXJJbWFnZSdcbmltcG9ydCAqIGFzIGxpbmsgZnJvbSAnLi4vdXRpbGl0aWVzL2xpbmstY29uZmlnJztcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGVudC9ibG9nL1ByZXZpZXcnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHt9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7fSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge30sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHt9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7fVxuICAgIH0sXG4gICAgcHJldmlld1dyYXBwZXI6IHtcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKVxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0J1xuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7fSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge31cbiAgICB9XG59KSk7XG5cbmZ1bmN0aW9uIEJsb2coeyBwb3N0cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFthbW91bnRTaG93bl0gPSB1c2VTdGF0ZSgxMik7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShwb3N0cy5sZW5ndGggLyBhbW91bnRTaG93bik7XG5cbiAgICBjb25zb2xlLmxvZyhjb3VudC9hbW91bnRTaG93bilcblxuICAgIGNvbnN0IHBhZ2VDaGFuZ2VkID0gKGV2ZW50LCB2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCwgdmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+bmFub2Nvc21vcyBCbG9nPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8SW50cm9DZW50ZXJJbWFnZVxuICAgICAgICAgICAgICAgIGltYWdlPScvYXNzZXRzL2ljb25zL3doaXRlLWJsb2cucG5nJ1xuICAgICAgICAgICAgICAgIHRpdGxlPVwibmFub2Nvc21vcyBCbG9nXCJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT1cIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZXRldHVyIHNhZGlwc2NpbmcgZWxpdHIsIHNlZCBkaWFtIG5vbnVteSBlaXJtb2QgdGVtcG9yIGludmlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXV5YW0gZXJhdC5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByZXZpZXdXcmFwcGVyfT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmV2aWV3IHBvc3Q9e3Bvc3R9IGtleT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdpbmF0aW9ufT5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBzaG93Rmlyc3RCdXR0b24gc2hvd0xhc3RCdXR0b24gb25DaGFuZ2U9e3BhZ2VDaGFuZ2VkfSBjb3VudD17Y291bnR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7bGluay5TVFJBUElfVVJMfS9hcnRpY2xlc2ApO1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBwb3N0c1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})
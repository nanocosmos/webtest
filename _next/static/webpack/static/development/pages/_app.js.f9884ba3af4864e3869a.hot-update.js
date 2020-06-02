webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/toolbar/Header.js":
/*!*********************************************!*\
  !*** ./components/layout/toolbar/Header.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu/Menu */ \"./components/layout/menu/Menu.js\");\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/components/layout/toolbar/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  root: {\n    backgroundColor: theme.palette.primary.main,\n    flexGrow: 1\n  },\n  toolbar: {\n    display: 'flex',\n    flexDirection: 'row',\n    justifyContent: 'space-between'\n  },\n  logo: {\n    [theme.breakpoints.up('xs')]: {\n      \"&:hover\": {\n        cursor: 'pointer'\n      },\n      height: '35px',\n      padding: theme.spacing(1),\n      marginRight: theme.spacing(2),\n      order: 1\n    },\n    [theme.breakpoints.up('md')]: {\n      order: 0\n    }\n  },\n  menu: {\n    [theme.breakpoints.up('xs')]: {\n      order: 0\n    },\n    [theme.breakpoints.up('md')]: {\n      order: 1\n    }\n  }\n}));\nfunction Header(props) {\n  _s();\n\n  const classes = useStyles();\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"AppBar\"], {\n    className: classes.root,\n    elevation: 0,\n    position: \"sticky\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Toolbar\"], {\n    className: classes.toolbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    className: classes.logo,\n    src: \"/assets/logo/white-logo.png\",\n    onClick: () => {\n      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(\"/\");\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 21\n    }\n  })), __jsx(_menu_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  })));\n}\n\n_s(Header, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC90b29sYmFyL0hlYWRlci5qcz9jNjQzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJmbGV4R3JvdyIsInRvb2xiYXIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwibG9nbyIsImJyZWFrcG9pbnRzIiwidXAiLCJjdXJzb3IiLCJoZWlnaHQiLCJwYWRkaW5nIiwic3BhY2luZyIsIm1hcmdpblJpZ2h0Iiwib3JkZXIiLCJtZW51IiwiSGVhZGVyIiwicHJvcHMiLCJjbGFzc2VzIiwiUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsTUFBSSxFQUFFO0FBQ0ZDLG1CQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxPQUFkLENBQXNCQyxJQURyQztBQUVGQyxZQUFRLEVBQUU7QUFGUixHQUQrQjtBQUtyQ0MsU0FBTyxFQUFFO0FBQ0xDLFdBQU8sRUFBRSxNQURKO0FBRUxDLGlCQUFhLEVBQUUsS0FGVjtBQUdMQyxrQkFBYyxFQUFFO0FBSFgsR0FMNEI7QUFVckNDLE1BQUksRUFBRTtBQUNGLEtBQUNYLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQixpQkFBVztBQUNQQyxjQUFNLEVBQUU7QUFERCxPQURlO0FBSTFCQyxZQUFNLEVBQUUsTUFKa0I7QUFLMUJDLGFBQU8sRUFBRWhCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxDQUFkLENBTGlCO0FBTTFCQyxpQkFBVyxFQUFFbEIsS0FBSyxDQUFDaUIsT0FBTixDQUFjLENBQWQsQ0FOYTtBQU8xQkUsV0FBSyxFQUFFO0FBUG1CLEtBRDVCO0FBVUYsS0FBQ25CLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQk0sV0FBSyxFQUFFO0FBRG1CO0FBVjVCLEdBVitCO0FBd0JyQ0MsTUFBSSxFQUFFO0FBQ0YsS0FBQ3BCLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQk0sV0FBSyxFQUFFO0FBRG1CLEtBRDVCO0FBSUYsS0FBQ25CLEtBQUssQ0FBQ1ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQk0sV0FBSyxFQUFFO0FBRG1CO0FBSjVCO0FBeEIrQixDQUFaLENBQUQsQ0FBNUI7QUFrQ2UsU0FBU0UsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDbEMsUUFBTUMsT0FBTyxHQUFHekIsU0FBUyxFQUF6QjtBQUVBLFNBQ0ksTUFBQyx3REFBRDtBQUFRLGFBQVMsRUFBRXlCLE9BQU8sQ0FBQ3RCLElBQTNCO0FBQWlDLGFBQVMsRUFBRSxDQUE1QztBQUErQyxZQUFRLEVBQUMsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseURBQUQ7QUFBUyxhQUFTLEVBQUVzQixPQUFPLENBQUNoQixPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFZ0IsT0FBTyxDQUFDWixJQUF4QjtBQUE4QixPQUFHLEVBQUMsNkJBQWxDO0FBQWdFLFdBQU8sRUFBRSxNQUFNO0FBQUVhLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQWtCLEtBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESixDQURKO0FBVUg7O0dBYnVCSixNO1VBQ0p2QixTOzs7S0FESXVCLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC90b29sYmFyL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9tZW51L01lbnUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgIGZsZXhHcm93OiAxXG4gICAgfSxcbiAgICB0b29sYmFyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDogJzM1cHgnLFxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgb3JkZXI6IDFcbiAgICAgICAgfSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAgb3JkZXI6IDBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWVudToge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICBvcmRlcjogMFxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBvcmRlcjogMVxuICAgICAgICB9XG4gICAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcihwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBCYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGVsZXZhdGlvbj17MH0gcG9zaXRpb249XCJzdGlja3lcIj5cbiAgICAgICAgICAgIDxUb29sYmFyIGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9Jy9hc3NldHMvbG9nby93aGl0ZS1sb2dvLnBuZycgb25DbGljaz17KCkgPT4geyBSb3V0ZXIucHVzaChcIi9cIikgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/toolbar/Header.js\n");

/***/ })

})
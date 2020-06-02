webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/layout/menu/DesktopMenuItem.js":
/*!***************************************************!*\
  !*** ./components/layout/menu/DesktopMenuItem.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DesktopMenuItem; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Router */ \"./node_modules/next/Router.js\");\n/* harmony import */ var next_Router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/components/layout/menu/DesktopMenuItem.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  root: {\n    [theme.breakpoints.up('xs')]: {}\n  },\n  button: {\n    [theme.breakpoints.up('xs')]: {\n      color: theme.palette.common.white,\n      margin: theme.spacing(0, 0.5)\n    },\n    ':&hover': {\n      cursor: 'pointer'\n    }\n  },\n  outlined: {\n    border: `0.5px solid ${theme.palette.common.white}`\n  },\n  listMenu: {\n    backgroundColor: theme.palette.primary.main,\n    padding: 0,\n    borderRadius: theme.spacing(0.2),\n    boxShadow: theme.shadows[4]\n  },\n  popper: {\n    zIndex: theme.zIndex.modal\n  },\n  highlight: {\n    backgroundColor: theme.palette.common.white,\n    color: theme.palette.primary.main,\n    '&:hover': {\n      backgroundColor: theme.palette.common.white,\n      boxShadow: theme.shadows[4]\n    }\n  },\n  link: {\n    color: 'inherit',\n    textDecoration: 'none'\n  }\n}));\nfunction DesktopMenuItem(props) {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: anchorEl,\n    1: setAnchorEl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const {\n    0: showSubmenu,\n    1: setShowSubmenu\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const handleOpenSubmenu = event => {\n    setAnchorEl(event.currentTarget);\n    setShowSubmenu(true);\n  };\n\n  const closeSubmenu = () => {\n    setAnchorEl(null);\n    setShowSubmenu(false);\n  };\n\n  const redirect = link => {\n    setShowSubmenu(false);\n    setAnchorEl(null); // PROPS\n  };\n\n  const button = Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.button, {\n    [classes[props.menuItem.className]]: props.menuItem.className\n  });\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"FormControl\"], {\n    className: classes.root,\n    onMouseLeave: closeSubmenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    className: button,\n    onClick: event => {\n      props.menuItem.submenu ? handleOpenSubmenu(event) : next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push(props.menuItem.link);\n    },\n    onMouseOver: handleOpenSubmenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, props.menuItem.submenu ? props.menuItem.name : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: props.menuItem.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    className: classes.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 29\n    }\n  }, props.menuItem.name))), props.menuItem.submenu ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Popper\"], {\n    className: classes.popper,\n    placement: \"bottom\",\n    anchorEl: anchorEl,\n    open: showSubmenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"List\"], {\n    className: classes.listMenu,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 25\n    }\n  }, props.menuItem.submenu.map((menuItem, index) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"ListItem\"], {\n    key: `${menuItem.name}-${index}`,\n    button: true,\n    onClick: () => {\n      next_Router__WEBPACK_IMPORTED_MODULE_2___default.a.push(menuItem.link);\n    },\n    key: menuItem.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 37\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[\"Typography\"], {\n    className: classes.title,\n    variant: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 41\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: menuItem.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 45\n    }\n  }, __jsx(\"a\", {\n    className: classes.link,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 49\n    }\n  }, menuItem.name))))))) : null);\n}\n\n_s(DesktopMenuItem, \"RA+5Bjpte4cjUmXkdqMENRDmHA8=\", false, function () {\n  return [useStyles];\n});\n\n_c = DesktopMenuItem;\n; // import React, { useState } from 'react';\n// import { makeStyles } from '@material-ui/core/styles';\n// import { FormControl, Typography, ListItem, Button, List, Popper } from '@material-ui/core';\n// const useStyles = makeStyles((theme) => ({\n//     root: {\n//         [theme.breakpoints.up('xs')]: {\n//         }\n//     },\n//     button: {\n//         [theme.breakpoints.up('xs')]: {\n//             color: theme.palette.common.white\n//         },\n//         ':&hover': {\n//             cursor: 'pointer'\n//         }\n//     },\n//     listMenu: {\n//         backgroundColor: theme.palette.primary.main,\n//         padding: 0,\n//         borderRadius: theme.spacing(0.2),\n//         boxShadow: theme.shadows[4]\n//     },\n//     popper: {\n//         zIndex: theme.zIndex.modal\n//     },\n//     highlight: {\n//         backgroundColor: theme.palette.common.white,\n//         color: theme.palette.primary.main,\n//         '&:hover': {\n//             backgroundColor: theme.palette.common.white,\n//             boxShadow: theme.shadows[4]\n//         }\n//     }\n// }))\n// export default function DesktopMenuItem(props) {\n//     const classes = useStyles();\n//     const [anchorElSubMenu, setAnchorElSubMenu] = useState(null);\n//     const [anchorElSubSubMenu, setAnchorElSubSubMenu] = useState(null);\n//     const [showSubmenu, setShowSubmenu] = useState(false);\n//     const [showSubSubMenu, setShowSubSubMenu] = useState(false);\n//     const [menuId] = useState({\n//         submenu: 1,\n//         subsubMenu: 2\n//     })\n//     const handleOpenSubmenu = (event, menuId) => {\n//         switch (menuId) {\n//             case 1:\n//                 setAnchorElSubMenu(event.currentTarget);\n//                 setShowSubmenu(true);\n//                 return;\n//             case 2:\n//                 setAnchorElSubSubMenu(event.currentTarget);\n//                 setShowSubSubMenu(true);\n//                 return;\n//             default: break;\n//         }\n//     }\n//     const closeSubmenu = () => {\n//         setAnchorElSubMenu(null);\n//         setAnchorElSubSubMenu(null);\n//         setShowSubmenu(false);\n//         setShowSubSubMenu(false);\n//     }\n//     const redirect = (link) => {\n//         window.open(`${link}`, \"_self\")\n//         setShowSubmenu(false);\n//         setAnchorElSubMenu(null);\n//         setShowSubSubMenu(false);\n//         setAnchorElSubSubMenu(null);\n//     }\n//     return (\n//         <FormControl\n//             className={classes.root}\n//             onMouseLeave={closeSubmenu}\n//         >\n//             <Button\n//                 className={props.menuItem.highlight ? classes.highlight : classes.button}\n//                 onClick={(event) => { props.menuItem.submenu ? handleOpenSubmenu(event, menuId.submenu) : redirect(props.menuItem.link) }}\n//                 onMouseOver={(event) => { handleOpenSubmenu(event, menuId.submenu) }}\n//             >\n//                 {props.menuItem.name}\n//             </Button>\n//             {\n//                 props.menuItem.submenu\n//                     ?\n//                     <Popper\n//                         className={classes.popper}\n//                         placement=\"bottom\"\n//                         anchorEl={anchorElSubMenu}\n//                         open={showSubmenu}\n//                     >\n//                         <List className={classes.listMenu} >\n//                             {\n//                                 props.menuItem.submenu.map((menuItem) => (\n//                                     <span>\n//                                         <ListItem\n//                                             button\n//                                             onClick={() => { redirect(menuItem.link) }}\n//                                             onClick={(event) => { menuItem.submenu ? handleOpenSubmenu(event, menuId.subsubMenu) : redirect(menuItem.link) }}\n//                                             key={menuItem.name}\n//                                             onMouseOver={(event) => { handleOpenSubmenu(event, menuId.subsubMenu) }}\n//                                         >\n//                                             <Typography className={classes.title} variant=\"button\">\n//                                                 {menuItem.name}\n//                                             </Typography>\n//                                         </ListItem>\n//                                         {\n//                                             showSubSubMenu && menuItem.submenu\n//                                                 ?\n//                                                 menuItem.submenu.map((menuItem) => (\n//                                                     <ListItem\n//                                                         button\n//                                                         onClick={(event) => { menuItem.submenu ? handleOpenSubmenu(event) : redirect(menuItem.link) }}\n//                                                         key={menuItem.name}\n//                                                     >\n//                                                         <Typography className={classes.title} variant=\"button\">\n//                                                             {menuItem.name}\n//                                                         </Typography>\n//                                                     </ListItem>\n//                                                 ))\n//                                                 : null\n//                                         }\n//                                     </span>\n//                                 ))\n//                             }\n//                         </List>\n//                     </Popper>\n//                     : null\n//             }\n//         </FormControl>\n//     );\n// };\n\nvar _c;\n\n$RefreshReg$(_c, \"DesktopMenuItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9tZW51L0Rlc2t0b3BNZW51SXRlbS5qcz9mNWYyIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsInVwIiwiYnV0dG9uIiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJtYXJnaW4iLCJzcGFjaW5nIiwiY3Vyc29yIiwib3V0bGluZWQiLCJib3JkZXIiLCJsaXN0TWVudSIsImJhY2tncm91bmRDb2xvciIsInByaW1hcnkiLCJtYWluIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJwb3BwZXIiLCJ6SW5kZXgiLCJtb2RhbCIsImhpZ2hsaWdodCIsImxpbmsiLCJ0ZXh0RGVjb3JhdGlvbiIsIkRlc2t0b3BNZW51SXRlbSIsInByb3BzIiwiY2xhc3NlcyIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJ1c2VTdGF0ZSIsInNob3dTdWJtZW51Iiwic2V0U2hvd1N1Ym1lbnUiLCJoYW5kbGVPcGVuU3VibWVudSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNsb3NlU3VibWVudSIsInJlZGlyZWN0IiwiY2xzeCIsIm1lbnVJdGVtIiwiY2xhc3NOYW1lIiwic3VibWVudSIsIlJvdXRlciIsInB1c2giLCJuYW1lIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE1BQUksRUFBRTtBQUNGLEtBQUNELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUQ1QixHQUQrQjtBQUtyQ0MsUUFBTSxFQUFFO0FBQ0osS0FBQ0osS0FBSyxDQUFDRSxXQUFOLENB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvbWVudS9EZXNrdG9wTWVudUl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvUm91dGVyJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgVHlwb2dyYXBoeSwgTGlzdEl0ZW0sIEJ1dHRvbiwgTGlzdCwgUG9wcGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwLjUpXG4gICAgICAgIH0sXG4gICAgICAgICc6JmhvdmVyJzoge1xuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb3V0bGluZWQ6IHtcbiAgICAgICAgYm9yZGVyOiBgMC41cHggc29saWQgJHt0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZX1gXG4gICAgfSxcbiAgICBsaXN0TWVudToge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdXG4gICAgfSxcbiAgICBwb3BwZXI6IHtcbiAgICAgICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWxcbiAgICB9LFxuICAgIGhpZ2hsaWdodDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s0XVxuICAgICAgICB9XG4gICAgfSxcbiAgICBsaW5rOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcbiAgICB9XG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVza3RvcE1lbnVJdGVtKHByb3BzKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3Nob3dTdWJtZW51LCBzZXRTaG93U3VibWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGNvbnN0IGhhbmRsZU9wZW5TdWJtZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBzZXRTaG93U3VibWVudSh0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbG9zZVN1Ym1lbnUgPSAoKSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgICAgICBzZXRTaG93U3VibWVudShmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVkaXJlY3QgPSAobGluaykgPT4ge1xuICAgICAgICBzZXRTaG93U3VibWVudShmYWxzZSk7XG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xuICAgICAgICAvLyBQUk9QU1xuICAgIH1cblxuICAgIGNvbnN0IGJ1dHRvbiA9IGNsc3goY2xhc3Nlcy5idXR0b24sIHtcbiAgICAgICAgW2NsYXNzZXNbcHJvcHMubWVudUl0ZW0uY2xhc3NOYW1lXV06IHByb3BzLm1lbnVJdGVtLmNsYXNzTmFtZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtjbG9zZVN1Ym1lbnV9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2J1dHRvbn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHsgcHJvcHMubWVudUl0ZW0uc3VibWVudSA/IGhhbmRsZU9wZW5TdWJtZW51KGV2ZW50KSA6IFJvdXRlci5wdXNoKHByb3BzLm1lbnVJdGVtLmxpbmspIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9e2hhbmRsZU9wZW5TdWJtZW51fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMubWVudUl0ZW0uc3VibWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBwcm9wcy5tZW51SXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9wcy5tZW51SXRlbS5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5tZW51SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLm1lbnVJdGVtLnN1Ym1lbnVcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICA8UG9wcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucG9wcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Nob3dTdWJtZW51fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdE1lbnV9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1lbnVJdGVtLnN1Ym1lbnUubWFwKChtZW51SXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7bWVudUl0ZW0ubmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgUm91dGVyLnB1c2gobWVudUl0ZW0ubGluaykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnVJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e21lbnVJdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvUG9wcGVyPlxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICApO1xufTtcblxuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbi8vIGltcG9ydCB7IEZvcm1Db250cm9sLCBUeXBvZ3JhcGh5LCBMaXN0SXRlbSwgQnV0dG9uLCBMaXN0LCBQb3BwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cblxuLy8gY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4vLyAgICAgcm9vdDoge1xuLy8gICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4vLyAgICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIGJ1dHRvbjoge1xuLy8gICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4vLyAgICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGVcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgJzomaG92ZXInOiB7XG4vLyAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuLy8gICAgICAgICB9XG4vLyAgICAgfSxcbi8vICAgICBsaXN0TWVudToge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuLy8gICAgICAgICBwYWRkaW5nOiAwLFxuLy8gICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnNwYWNpbmcoMC4yKSxcbi8vICAgICAgICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzRdXG4vLyAgICAgfSxcbi8vICAgICBwb3BwZXI6IHtcbi8vICAgICAgICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWxcbi8vICAgICB9LFxuLy8gICAgIGhpZ2hsaWdodDoge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuLy8gICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4vLyAgICAgICAgICcmOmhvdmVyJzoge1xuLy8gICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbi8vICAgICAgICAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1s0XVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSkpXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2t0b3BNZW51SXRlbShwcm9wcykge1xuLy8gICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbi8vICAgICBjb25zdCBbYW5jaG9yRWxTdWJNZW51LCBzZXRBbmNob3JFbFN1Yk1lbnVdID0gdXNlU3RhdGUobnVsbCk7XG4vLyAgICAgY29uc3QgW2FuY2hvckVsU3ViU3ViTWVudSwgc2V0QW5jaG9yRWxTdWJTdWJNZW51XSA9IHVzZVN0YXRlKG51bGwpO1xuLy8gICAgIGNvbnN0IFtzaG93U3VibWVudSwgc2V0U2hvd1N1Ym1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICAgIGNvbnN0IFtzaG93U3ViU3ViTWVudSwgc2V0U2hvd1N1YlN1Yk1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuLy8gICAgIGNvbnN0IFttZW51SWRdID0gdXNlU3RhdGUoe1xuLy8gICAgICAgICBzdWJtZW51OiAxLFxuLy8gICAgICAgICBzdWJzdWJNZW51OiAyXG4vLyAgICAgfSlcblxuXG4vLyAgICAgY29uc3QgaGFuZGxlT3BlblN1Ym1lbnUgPSAoZXZlbnQsIG1lbnVJZCkgPT4ge1xuLy8gICAgICAgICBzd2l0Y2ggKG1lbnVJZCkge1xuLy8gICAgICAgICAgICAgY2FzZSAxOlxuLy8gICAgICAgICAgICAgICAgIHNldEFuY2hvckVsU3ViTWVudShldmVudC5jdXJyZW50VGFyZ2V0KTtcbi8vICAgICAgICAgICAgICAgICBzZXRTaG93U3VibWVudSh0cnVlKTtcbi8vICAgICAgICAgICAgICAgICByZXR1cm47XG4vLyAgICAgICAgICAgICBjYXNlIDI6XG4vLyAgICAgICAgICAgICAgICAgc2V0QW5jaG9yRWxTdWJTdWJNZW51KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuLy8gICAgICAgICAgICAgICAgIHNldFNob3dTdWJTdWJNZW51KHRydWUpO1xuLy8gICAgICAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgY2xvc2VTdWJtZW51ID0gKCkgPT4ge1xuLy8gICAgICAgICBzZXRBbmNob3JFbFN1Yk1lbnUobnVsbCk7XG4vLyAgICAgICAgIHNldEFuY2hvckVsU3ViU3ViTWVudShudWxsKTtcbi8vICAgICAgICAgc2V0U2hvd1N1Ym1lbnUoZmFsc2UpO1xuLy8gICAgICAgICBzZXRTaG93U3ViU3ViTWVudShmYWxzZSk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgcmVkaXJlY3QgPSAobGluaykgPT4ge1xuLy8gICAgICAgICB3aW5kb3cub3BlbihgJHtsaW5rfWAsIFwiX3NlbGZcIilcbi8vICAgICAgICAgc2V0U2hvd1N1Ym1lbnUoZmFsc2UpO1xuLy8gICAgICAgICBzZXRBbmNob3JFbFN1Yk1lbnUobnVsbCk7XG4vLyAgICAgICAgIHNldFNob3dTdWJTdWJNZW51KGZhbHNlKTtcbi8vICAgICAgICAgc2V0QW5jaG9yRWxTdWJTdWJNZW51KG51bGwpO1xuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxGb3JtQ29udHJvbFxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4vLyAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2Nsb3NlU3VibWVudX1cbi8vICAgICAgICAgPlxuLy8gICAgICAgICAgICAgPEJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvcHMubWVudUl0ZW0uaGlnaGxpZ2h0ID8gY2xhc3Nlcy5oaWdobGlnaHQgOiBjbGFzc2VzLmJ1dHRvbn1cbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHsgcHJvcHMubWVudUl0ZW0uc3VibWVudSA/IGhhbmRsZU9wZW5TdWJtZW51KGV2ZW50LCBtZW51SWQuc3VibWVudSkgOiByZWRpcmVjdChwcm9wcy5tZW51SXRlbS5saW5rKSB9fVxuLy8gICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoZXZlbnQpID0+IHsgaGFuZGxlT3BlblN1Ym1lbnUoZXZlbnQsIG1lbnVJZC5zdWJtZW51KSB9fVxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIHtwcm9wcy5tZW51SXRlbS5uYW1lfVxuLy8gICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgcHJvcHMubWVudUl0ZW0uc3VibWVudVxuLy8gICAgICAgICAgICAgICAgICAgICA/XG4vLyAgICAgICAgICAgICAgICAgICAgIDxQb3BwZXJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wb3BwZXJ9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsU3ViTWVudX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3Nob3dTdWJtZW51fVxuLy8gICAgICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdE1lbnV9ID5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1lbnVJdGVtLnN1Ym1lbnUubWFwKChtZW51SXRlbSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHJlZGlyZWN0KG1lbnVJdGVtLmxpbmspIH19XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4geyBtZW51SXRlbS5zdWJtZW51ID8gaGFuZGxlT3BlblN1Ym1lbnUoZXZlbnQsIG1lbnVJZC5zdWJzdWJNZW51KSA6IHJlZGlyZWN0KG1lbnVJdGVtLmxpbmspIH19XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWVudUl0ZW0ubmFtZX1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eyhldmVudCkgPT4geyBoYW5kbGVPcGVuU3VibWVudShldmVudCwgbWVudUlkLnN1YnN1Yk1lbnUpIH19XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJidXR0b25cIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5uYW1lfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTdWJTdWJNZW51ICYmIG1lbnVJdGVtLnN1Ym1lbnVcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtLnN1Ym1lbnUubWFwKChtZW51SXRlbSkgPT4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7IG1lbnVJdGVtLnN1Ym1lbnUgPyBoYW5kbGVPcGVuU3VibWVudShldmVudCkgOiByZWRpcmVjdChtZW51SXRlbS5saW5rKSB9fVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnVJdGVtLm5hbWV9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJidXR0b25cIj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbS5uYW1lfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuLy8gICAgICAgICAgICAgICAgICAgICA8L1BvcHBlcj5cbi8vICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4vLyAgICAgKTtcbi8vIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/menu/DesktopMenuItem.js\n");

/***/ }),

/***/ "./node_modules/next/Router.js":
/*!*************************************!*\
  !*** ./node_modules/next/Router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9Sb3V0ZXIuanM/ODA3OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsbUJBQU8sQ0FBQyx1RUFBc0IiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9Sb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/Router.js\n");

/***/ })

})
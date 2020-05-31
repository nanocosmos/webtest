module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/intro/IntroLogoLeft.js":
/*!**************************************************!*\
  !*** ./components/layout/intro/IntroLogoLeft.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return IntroLogoLeft; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/components/layout/intro/IntroLogoLeft.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    [theme.breakpoints.up('xs')]: {\n      margin: 0\n    },\n    [theme.breakpoints.up('md')]: {\n      padding: `0 ${theme.spacing(4)}px 0 ${theme.spacing(4)}px`\n    }\n  },\n  container: {\n    [theme.breakpoints.up('xs')]: {\n      paddingTop: theme.spacing(1),\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center'\n    },\n    [theme.breakpoints.up('md')]: {\n      padding: theme.spacing(2),\n      flexDirection: 'row'\n    }\n  },\n  item: {\n    [theme.breakpoints.up('xs')]: {\n      padding: theme.spacing(1),\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'center'\n    },\n    [theme.breakpoints.up('md')]: {\n      justifyContent: 'flex-end'\n    }\n  },\n  item2: {\n    [theme.breakpoints.up('xs')]: {\n      padding: theme.spacing(1),\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'center'\n    },\n    [theme.breakpoints.up('md')]: {\n      // justifyContent: 'flex-start',\n      paddingLeft: theme.spacing(1)\n    }\n  },\n  logo: {\n    [theme.breakpoints.up('xs')]: {\n      width: '150px'\n    },\n    [theme.breakpoints.up('md')]: {\n      display: 'block',\n      width: '250px'\n    }\n  },\n  textWrapper: {\n    [theme.breakpoints.up('xs')]: {\n      textAlign: 'center',\n      width: '80%'\n    },\n    [theme.breakpoints.up('md')]: {\n      textAlign: 'left'\n    },\n    [theme.breakpoints.up('lg')]: {\n      textAlign: 'left'\n    }\n  },\n  buttonWrapper: {\n    [theme.breakpoints.up('xs')]: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'center'\n    },\n    [theme.breakpoints.up('md')]: {\n      justifyContent: 'flex-start'\n    }\n  },\n  button: {\n    [theme.breakpoints.up('xs')]: {\n      margin: theme.spacing(0.5),\n      lineHeight: 1,\n      padding: theme.spacing(1)\n    },\n    [theme.breakpoints.up('sm')]: {\n      lineHeight: 1.5,\n      padding: 'auto'\n    },\n    [theme.breakpoints.up('md')]: {\n      margin: theme.spacing(1, 1, 1, 0)\n    }\n  },\n  // TEXT STYLES\n  headerText: {\n    [theme.breakpoints.up('xs')]: {\n      fontWeight: 900,\n      lineHeight: 0.9,\n      fontSize: '2rem'\n    },\n    [theme.breakpoints.up('md')]: {\n      fontSize: '3rem'\n    }\n  },\n  underline: {\n    [theme.breakpoints.up('xs')]: {\n      lineHeight: 1,\n      fontWeight: 300,\n      fontSize: '1rem',\n      paddingBottom: theme.spacing(1),\n      paddingTop: theme.spacing(1)\n    },\n    [theme.breakpoints.up('md')]: {\n      fontSize: '1.5rem'\n    }\n  },\n  bold: {\n    [theme.breakpoints.up('xs')]: {\n      fontWeight: '900'\n    }\n  }\n}));\nfunction IntroLogoLeft(props) {\n  const classes = useStyles();\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    container: true,\n    className: classes.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    className: classes.item,\n    item: true,\n    xs: 12,\n    md: 4,\n    lg: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    className: classes.logo,\n    src: \"/assets/logo/white-atw-logo.png\",\n    alt: \"Around the World in one second\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 25\n    }\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n    className: classes.item2,\n    item: true,\n    xs: 12,\n    md: 8,\n    lg: 9,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: classes.textWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    className: classes.headerText,\n    variant: \"subtitle1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 25\n    }\n  }, props.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n    className: classes.underline,\n    variant: \"body1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 25\n    }\n  }, props.subtitle)))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbnRyby9JbnRyb0xvZ29MZWZ0LmpzPzI0MWYiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJyZWFrcG9pbnRzIiwidXAiLCJtYXJnaW4iLCJwYWRkaW5nIiwic3BhY2luZyIsImNvbnRhaW5lciIsInBhZGRpbmdUb3AiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJpdGVtIiwianVzdGlmeUNvbnRlbnQiLCJpdGVtMiIsInBhZGRpbmdMZWZ0IiwibG9nbyIsIndpZHRoIiwidGV4dFdyYXBwZXIiLCJ0ZXh0QWxpZ24iLCJidXR0b25XcmFwcGVyIiwiYnV0dG9uIiwibGluZUhlaWdodCIsImhlYWRlclRleHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ1bmRlcmxpbmUiLCJwYWRkaW5nQm90dG9tIiwiYm9sZCIsIkludHJvTG9nb0xlZnQiLCJwcm9wcyIsImNsYXNzZXMiLCJ0aXRsZSIsInN1YnRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFFQyxLQUFELEtBQVk7QUFDckNDLE1BQUksRUFBRTtBQUNGLEtBQUNELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FBRCxHQUE4QjtBQUMxQkMsWUFBTSxFQUFFO0FBRGtCLEtBRDVCO0FBSUYsS0FBQ0osS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzFCRSxhQUFPLEVBQUcsS0FBSUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUFpQixRQUFPTixLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBQWlCO0FBRDdCO0FBSjVCLEdBRCtCO0FBU3JDQyxXQUFTLEVBQUU7QUFDUCxLQUFDUCxLQUFLLENBQUNF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QTtBQUFBLElBREosQ0FESixDQURKLEVBTUksTUFBQyxzREFBRDtBQUFNLGFBQVMsRUFBRWUsT0FBTyxDQUFDakIsS0FBekI7QUFBZ0MsUUFBSSxNQUFwQztBQUFxQyxNQUFFLEVBQUUsRUFBekM7QUFBNkMsTUFBRSxFQUFFLENBQWpEO0FBQW9ELE1BQUUsRUFBRSxDQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVpQixPQUFPLENBQUNiLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQ0ksYUFBUyxFQUFFYSxPQUFPLENBQUNSLFVBRHZCO0FBRUksV0FBTyxFQUFDLFdBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlLTyxLQUFLLENBQUNFLEtBSlgsQ0FESixFQU9JLE1BQUMsNERBQUQ7QUFBWSxhQUFTLEVBQUVELE9BQU8sQ0FBQ0wsU0FBL0I7QUFBMEMsV0FBTyxFQUFDLE9BQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0ksS0FBSyxDQUFDRyxRQURYLENBUEosQ0FESixDQU5KLENBREosQ0FESjtBQXdCSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L2ludHJvL0ludHJvTG9nb0xlZnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBUeXBvZ3JhcGh5LCBHcmlkLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIH0sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGAwICR7dGhlbWUuc3BhY2luZyg0KX1weCAwICR7dGhlbWUuc3BhY2luZyg0KX1weGBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGl0ZW06IHtcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICAgIH0sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGl0ZW0yOiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICAvLyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0ZXh0V3JhcHBlcjoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgd2lkdGg6ICc4MCUnXG4gICAgICAgIH0sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gICAgICAgIH0sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBidXR0b25XcmFwcGVyOiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpXG4gICAgICAgIH0sXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgICAgICAgIHBhZGRpbmc6ICdhdXRvJ1xuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSwgMSwgMSwgMClcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8gVEVYVCBTVFlMRVNcbiAgICBoZWFkZXJUZXh0OiB7XG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgneHMnKV06IHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDAuOSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMnJlbSdcbiAgICAgICAgfSxcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgICAgICAgZm9udFNpemU6ICczcmVtJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4cycpXToge1xuICAgICAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMXJlbScsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxKVxuICAgICAgICB9LFxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzEuNXJlbSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYm9sZDoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hzJyldOiB7XG4gICAgICAgICAgICBmb250V2VpZ2h0OiAnOTAwJ1xuICAgICAgICB9XG4gICAgfVxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvTG9nb0xlZnQocHJvcHMpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0gaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfSBzcmM9Jy9hc3NldHMvbG9nby93aGl0ZS1hdHctbG9nby5wbmcnIGFsdD1cIkFyb3VuZCB0aGUgV29ybGQgaW4gb25lIHNlY29uZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbTJ9IGl0ZW0geHM9ezEyfSBtZD17OH0gbGc9ezl9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0V3JhcHBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy51bmRlcmxpbmV9IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/intro/IntroLogoLeft.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_intro_IntroLogoLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/intro/IntroLogoLeft */ \"./components/layout/intro/IntroLogoLeft.js\");\nvar _jsxFileName = \"/Users/annamatic/Desktop/webtest/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"nanocosmos\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout_intro_IntroLogoLeft__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Live stream your interactive use cases with ultra-low latency\",\n    subtitle: \"Lorem ipsum dolor sit amet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixTQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsOEVBQUQ7QUFBZSxTQUFLLEVBQUMsK0RBQXJCO0FBQXFGLFlBQVEsRUFBQyw0QkFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEludHJvTG9nb0xlZnQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaW50cm8vSW50cm9Mb2dvTGVmdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5uYW5vY29zbW9zPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEludHJvTG9nb0xlZnQgdGl0bGU9XCJMaXZlIHN0cmVhbSB5b3VyIGludGVyYWN0aXZlIHVzZSBjYXNlcyB3aXRoIHVsdHJhLWxvdyBsYXRlbmN5XCIgc3VidGl0bGU9XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/annamatic/Desktop/webtest/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/link */ \"./node_modules/next/dist/client/link.js\");\n/* harmony import */ var next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ \"./components/styles/NavStyles.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignOut */ \"./components/SignOut.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartCount */ \"./components/CartCount.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/cameronreid/Desktop/Wesbos/sickFitsTutorial/frontend/components/Nav.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Nav() {\n  _s();\n\n  var user = (0,_User__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n\n  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart)(),\n      openCart = _useCart.openCart;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/products\",\n      children: \"Products\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/sell\",\n        children: \"Sell\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/orders\",\n        children: \"Orders\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/account\",\n        children: \"Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: openCart,\n        children: [\"My Cart\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_6__.default, {\n          count: user.cart.reduce(function (tally, cartItem) {\n            return tally + (cartItem.quantity ? cartItem.quantity : 0);\n          }, 0)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_client_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/signin\",\n        children: \"Sign In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, this)\n    }, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Nav, \"86KsfHpdJ0mvqtyipp2mMpkUFQs=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_3__.useUser, _lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart];\n});\n\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJ1c2VyIiwidXNlVXNlciIsInVzZUNhcnQiLCJvcGVuQ2FydCIsImNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsImNhcnRJdGVtIiwicXVhbnRpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsR0FBVCxHQUFlO0FBQUE7O0FBQzVCLE1BQU1DLElBQUksR0FBR0MsOENBQU8sRUFBcEI7O0FBRDRCLGlCQUVQQyx1REFBTyxFQUZBO0FBQUEsTUFFcEJDLFFBRm9CLFlBRXBCQSxRQUZvQjs7QUFHNUIsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw0QkFDRSw4REFBQyw4REFBRDtBQUFNLFVBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFR0gsSUFBSSxpQkFDSDtBQUFBLDhCQUNFLDhEQUFDLDhEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLDhEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLDhEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZUFBTyxFQUFFRyxRQUEvQjtBQUFBLDJDQUVFLDhEQUFDLCtDQUFEO0FBQ0UsZUFBSyxFQUFFSCxJQUFJLENBQUNJLElBQUwsQ0FBVUMsTUFBVixDQUNMLFVBQUNDLEtBQUQsRUFBUUMsUUFBUjtBQUFBLG1CQUNFRCxLQUFLLElBQUlDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkQsUUFBUSxDQUFDQyxRQUE3QixHQUF3QyxDQUE1QyxDQURQO0FBQUEsV0FESyxFQUdMLENBSEs7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUEsb0JBSEosRUFxQkcsQ0FBQ1IsSUFBRCxpQkFDQztBQUFBLDZCQUNFLDhEQUFDLDhEQUFEO0FBQU0sWUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0dBaEN1QkQsRztVQUNURSwwQyxFQUNRQyxtRDs7O0tBRkNILEciLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvZGlzdC9jbGllbnQvbGluayc7XG5pbXBvcnQgTmF2U3R5bGVzIGZyb20gJy4vc3R5bGVzL05hdlN0eWxlcyc7XG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBTaWduT3V0IGZyb20gJy4vU2lnbk91dCc7XG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XG5pbXBvcnQgQ2FydENvdW50IGZyb20gJy4vQ2FydENvdW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xuICBjb25zdCB7IG9wZW5DYXJ0IH0gPSB1c2VDYXJ0KCk7XG4gIHJldHVybiAoXG4gICAgPE5hdlN0eWxlcz5cbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvTGluaz5cbiAgICAgIHt1c2VyICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlbGxcIj5TZWxsPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3JkZXJzXCI+T3JkZXJzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L0xpbms+XG4gICAgICAgICAgPFNpZ25PdXQgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvcGVuQ2FydH0+XG4gICAgICAgICAgICBNeSBDYXJ0XG4gICAgICAgICAgICA8Q2FydENvdW50XG4gICAgICAgICAgICAgIGNvdW50PXt1c2VyLmNhcnQucmVkdWNlKFxuICAgICAgICAgICAgICAgICh0YWxseSwgY2FydEl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICB0YWxseSArIChjYXJ0SXRlbS5xdWFudGl0eSA/IGNhcnRJdGVtLnF1YW50aXR5IDogMCksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7IXVzZXIgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+U2lnbiBJbjwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvTmF2U3R5bGVzPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});
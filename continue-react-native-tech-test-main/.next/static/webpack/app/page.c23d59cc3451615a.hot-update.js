"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/state/product/reducer */ \"(app-pages-browser)/./src/app/redux/state/product/reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.product);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: products.list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false))\n                    }, void 0, false, {\n                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    \"Test here\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IF+/DJvFLBaO0twWgreOwyoO/ec=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0M7QUFDNkI7QUFDUjtBQUl4QyxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBc0JBLE1BQU1DLE9BQU87SUFDakUsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCRixnREFBU0EsQ0FBQztRQUNSUSxTQUFTUCw0RUFBY0E7SUFDekIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDOztrQ0FDQyw4REFBQ0M7a0NBQ0lQLFNBQVNRLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLHFCQUNwQjswQ0FDRSw0RUFBQ0M7OENBQUdELEtBQUtFLEtBQUs7Ozs7Ozs7Ozs7OztvQkFHZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXZCd0JiOztRQUNMRCxvREFBV0E7UUFDWEQsb0RBQVdBOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuL3JlZHV4L3N0YXRlL3Byb2R1Y3QvcmVkdWNlclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC90eXBlcy9wcm9kdWN0LnR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSApID0+IHN0YXRlLnByb2R1Y3QpXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdHMoKSk7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgeyBwcm9kdWN0cy5saXN0Lm1hcCgoaXRlbTogUHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICA8PiBcbiAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgVGVzdCBoZXJlXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImdldEFsbFByb2R1Y3RzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkhvbWUiLCJwcm9kdWN0cyIsInN0YXRlIiwicHJvZHVjdCIsImRpc3BhdGNoIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInVsIiwibGlzdCIsIm1hcCIsIml0ZW0iLCJwIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
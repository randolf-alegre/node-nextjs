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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/state/product/reducer */ \"(app-pages-browser)/./src/app/redux/state/product/reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.product);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-sm rounded overflow-hidden shadow-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-6 py-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold text-xl mb-2\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"m-5\",\n                                        children: [\n                                            \"Price: $\",\n                                            item.value,\n                                            \" \"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-700 text-base\",\n                                        children: [\n                                            \"Product Description: \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 40\n                                            }, this),\n                                            \" \",\n                                            item.organisationDescription\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"px-6 pt-4 pb-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex mb-4\",\n                                    children: item.organisationImageNames.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-1/2 bg-gray-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                className: \"h-auto max-w-full rounded-lg p-5\",\n                                                src: link,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IF+/DJvFLBaO0twWgreOwyoO/ec=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0M7QUFDNkI7QUFDUjtBQUl4QyxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBcUJBLE1BQU1DLE9BQU87SUFDaEUsTUFBTUMsV0FBV04sd0RBQVdBO0lBRTVCRixnREFBU0EsQ0FBQztRQUNSUSxTQUFTUCw0RUFBY0E7SUFDekIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDOzBCQUNFTixTQUFTTyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEIsOERBQUNIO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFBMEJJLEtBQUtDLEtBQUs7Ozs7OztrREFDbkQsOERBQUNDO3dDQUFLTixXQUFVOzs0Q0FBTTs0Q0FBU0ksS0FBS0csS0FBSzs0Q0FBQzs7Ozs7OztrREFDMUMsOERBQUNDO3dDQUFFUixXQUFVOzs0Q0FBMEI7MERBQ2hCLDhEQUFDUzs7Ozs7NENBQUs7NENBQUVMLEtBQUtNLHVCQUF1Qjs7Ozs7Ozs7Ozs7OzswQ0FHN0QsOERBQUNUO2dDQUFJRCxXQUFVOzBDQUNmLDRFQUFDQztvQ0FBSUQsV0FBVTs4Q0FDWkksS0FBS08sc0JBQXNCLENBQUNSLEdBQUcsQ0FBQyxDQUFDUyxxQkFDaEMsOERBQUNYOzRDQUFJRCxXQUFVO3NEQUNiLDRFQUFDYTtnREFDQ2IsV0FBVTtnREFDVmMsS0FBS0Y7Z0RBQ0xHLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWExQjtHQXpDd0JyQjs7UUFDTEQsb0RBQVdBO1FBQ1hELG9EQUFXQTs7O0tBRk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0cyB9IGZyb20gXCIuL3JlZHV4L3N0YXRlL3Byb2R1Y3QvcmVkdWNlclwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSBcIi4vcmVkdXgvc3RvcmVcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC90eXBlcy9wcm9kdWN0LnR5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUucHJvZHVjdCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRBbGxQcm9kdWN0cygpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7cHJvZHVjdHMubGlzdC5tYXAoKGl0ZW06IFByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gcm91bmRlZCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNiBweS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e2l0ZW0udGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibS01XCI+UHJpY2U6ICR7aXRlbS52YWx1ZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICBQcm9kdWN0IERlc2NyaXB0aW9uOiA8YnIgLz4ge2l0ZW0ub3JnYW5pc2F0aW9uRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB0LTQgcGItMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItNFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLm9yZ2FuaXNhdGlvbkltYWdlTmFtZXMubWFwKChsaW5rOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgYmctZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byBtYXgtdy1mdWxsIHJvdW5kZWQtbGcgcC01XCJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiZ2V0QWxsUHJvZHVjdHMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiSG9tZSIsInByb2R1Y3RzIiwic3RhdGUiLCJwcm9kdWN0IiwiZGlzcGF0Y2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGlzdCIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInNwYW4iLCJ2YWx1ZSIsInAiLCJiciIsIm9yZ2FuaXNhdGlvbkRlc2NyaXB0aW9uIiwib3JnYW5pc2F0aW9uSW1hZ2VOYW1lcyIsImxpbmsiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
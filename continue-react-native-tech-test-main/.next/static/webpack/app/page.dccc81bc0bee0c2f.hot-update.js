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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/state/product/reducer */ \"(app-pages-browser)/./src/app/redux/state/product/reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.product);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: products.list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full bg-gray-500 h-12\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-lg\",\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full bg-gray-500 h-12\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"m-5\",\n                                            children: [\n                                                \"Price: $\",\n                                                item.value,\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Product Description: \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 42\n                                                }, this),\n                                                \" \",\n                                                item.organisationDescription\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex mb-4\",\n                                children: item.organisationImageNames.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-1/4 bg-gray-500 h-12\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"h-auto max-w-full rounded-lg\",\n                                            src: link,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 19\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true))\n            }, void 0, false, {\n                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IF+/DJvFLBaO0twWgreOwyoO/ec=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0M7QUFDNkI7QUFDUjtBQUl4QyxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBcUJBLE1BQU1DLE9BQU87SUFDaEUsTUFBTUMsV0FBV04sd0RBQVdBO0lBRTVCRixnREFBU0EsQ0FBQztRQUNSUSxTQUFTUCw0RUFBY0E7SUFDekIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDOzBCQUNFTixTQUFTTyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDbEI7OzBDQUNFLDhEQUFDSDtnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ0M7b0NBQUlELFdBQVU7OENBQ2IsNEVBQUNLO3dDQUFLTCxXQUFVO2tEQUFXSSxLQUFLRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUd6Qyw4REFBQ0w7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNDO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0s7NENBQUtMLFdBQVU7O2dEQUFNO2dEQUFTSSxLQUFLRyxLQUFLO2dEQUFDOzs7Ozs7O3NEQUMxQyw4REFBQ0M7O2dEQUFFOzhEQUNvQiw4REFBQ0M7Ozs7O2dEQUFLO2dEQUFFTCxLQUFLTSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJL0QsOERBQUNUO2dDQUFJRCxXQUFVOzBDQUNaSSxLQUFLTyxzQkFBc0IsQ0FBQ1IsR0FBRyxDQUFDLENBQUNTLHFCQUNoQyw4REFBQ1g7d0NBQUlELFdBQVU7a0RBQ2IsNEVBQUNhOzRDQUNDYixXQUFVOzRDQUNWYyxLQUFLRjs0Q0FDTEcsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzFCO0dBNUN3QnJCOztRQUNMRCxvREFBV0E7UUFDWEQsb0RBQVdBOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIi4vcmVkdXgvc3RhdGUvcHJvZHVjdC9yZWR1Y2VyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3Byb2R1Y3QudHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldEFsbFByb2R1Y3RzKCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtwcm9kdWN0cy5saXN0Lm1hcCgoaXRlbTogUHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwMCBoLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2l0ZW0udGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTUwMCBoLTEyXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLTVcIj5QcmljZTogJHtpdGVtLnZhbHVlfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdCBEZXNjcmlwdGlvbjogPGJyIC8+IHtpdGVtLm9yZ2FuaXNhdGlvbkRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTRcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5vcmdhbmlzYXRpb25JbWFnZU5hbWVzLm1hcCgobGluazogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS80IGJnLWdyYXktNTAwIGgtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtYXV0byBtYXgtdy1mdWxsIHJvdW5kZWQtbGdcIlxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlua31cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImdldEFsbFByb2R1Y3RzIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkhvbWUiLCJwcm9kdWN0cyIsInN0YXRlIiwicHJvZHVjdCIsImRpc3BhdGNoIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxpc3QiLCJtYXAiLCJpdGVtIiwic3BhbiIsInRpdGxlIiwidmFsdWUiLCJwIiwiYnIiLCJvcmdhbmlzYXRpb25EZXNjcmlwdGlvbiIsIm9yZ2FuaXNhdGlvbkltYWdlTmFtZXMiLCJsaW5rIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
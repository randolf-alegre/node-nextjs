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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/state/product/reducer */ \"(app-pages-browser)/./src/app/redux/state/product/reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.product);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    JSON.stringify(products.list),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: products.list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: item.organisationDescription\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 17\n                                    }, this),\n                                    item.organisationImageNames.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"#\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        className: \"rounded-t-lg\",\n                                                        src: link,\n                                                        alt: \"\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"p-5\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                                                children: \"Noteworthy technology acquisitions 2021\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                                lineNumber: 37,\n                                                                columnNumber: 25\n                                                            }, this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                            lineNumber: 36,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"mb-3 font-normal text-gray-700 dark:text-gray-400\",\n                                                            children: \"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 23\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                            href: \"#\",\n                                                            className: \"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                                                            children: [\n                                                                \"Read more\",\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                    className: \"rtl:rotate-180 w-3.5 h-3.5 ms-2\",\n                                                                    \"aria-hidden\": \"true\",\n                                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                                    fill: \"none\",\n                                                                    viewBox: \"0 0 14 10\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                        stroke: \"currentColor\",\n                                                                        \"stroke-linecap\": \"round\",\n                                                                        \"stroke-linejoin\": \"round\",\n                                                                        \"stroke-width\": \"2\",\n                                                                        d: \"M1 5h12m0 0L9 1m4 4L9 9\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                                        lineNumber: 57,\n                                                                        columnNumber: 27\n                                                                    }, this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                                    lineNumber: 50,\n                                                                    columnNumber: 25\n                                                                }, this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                            lineNumber: 45,\n                                                            columnNumber: 23\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 19\n                                        }, this))\n                                ]\n                            }, void 0, true))\n                    }, void 0, false, {\n                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IF+/DJvFLBaO0twWgreOwyoO/ec=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0M7QUFDNkI7QUFDUjtBQUl4QyxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBcUJBLE1BQU1DLE9BQU87SUFDaEUsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCRixnREFBU0EsQ0FBQztRQUNSUSxTQUFTUCw0RUFBY0E7SUFDekIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDOztvQkFDRUMsS0FBS0MsU0FBUyxDQUFDUixTQUFTUyxJQUFJO2tDQUM3Qiw4REFBQ0M7a0NBQ0VWLFNBQVNTLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLHFCQUNsQjs7a0RBQ0UsOERBQUNDO2tEQUFHRCxLQUFLRSxLQUFLOzs7Ozs7a0RBQ2QsOERBQUNEO2tEQUFHRCxLQUFLRyx1QkFBdUI7Ozs7OztvQ0FDL0JILEtBQUtJLHNCQUFzQixDQUFDTCxHQUFHLENBQUMsQ0FBQ00scUJBQ2hDLDhEQUFDWDs0Q0FBSUQsV0FBVTs7OERBQ2IsOERBQUNhO29EQUFFQyxNQUFLOzhEQUNOLDRFQUFDQzt3REFDQ2YsV0FBVTt3REFDVmdCLEtBQUtKO3dEQUNMSyxLQUFJOzs7Ozs7Ozs7Ozs4REFHUiw4REFBQ2hCO29EQUFJRCxXQUFVOztzRUFDYiw4REFBQ2E7NERBQUVDLE1BQUs7c0VBQ04sNEVBQUNJO2dFQUFHbEIsV0FBVTswRUFBdUU7Ozs7Ozs7Ozs7O3NFQUl2Riw4REFBQ1E7NERBQUVSLFdBQVU7c0VBQW9EOzs7Ozs7c0VBSWpFLDhEQUFDYTs0REFDQ0MsTUFBSzs0REFDTGQsV0FBVTs7Z0VBQ1g7OEVBRUMsOERBQUNtQjtvRUFDQ25CLFdBQVU7b0VBQ1ZvQixlQUFZO29FQUNaQyxPQUFNO29FQUNOQyxNQUFLO29FQUNMQyxTQUFROzhFQUVSLDRFQUFDQzt3RUFDQ0MsUUFBTzt3RUFDUEMsa0JBQWU7d0VBQ2ZDLG1CQUFnQjt3RUFDaEJDLGdCQUFhO3dFQUNiQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzlCO0dBbkV3Qm5DOztRQUNMRCxvREFBV0E7UUFDWEQsb0RBQVdBOzs7S0FGTkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldEFsbFByb2R1Y3RzIH0gZnJvbSBcIi4vcmVkdXgvc3RhdGUvcHJvZHVjdC9yZWR1Y2VyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3Byb2R1Y3QudHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBwcm9kdWN0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRBbGxQcm9kdWN0cygpKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGZvbnQtbW9ubyB0ZXh0LXNtIGxnOmZsZXhcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocHJvZHVjdHMubGlzdCl9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb2R1Y3RzLmxpc3QubWFwKChpdGVtOiBQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLm9yZ2FuaXNhdGlvbkRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICB7aXRlbS5vcmdhbmlzYXRpb25JbWFnZU5hbWVzLm1hcCgobGluazogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIGJnLXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpiZy1ncmF5LTgwMCBkYXJrOmJvcmRlci1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE5vdGV3b3J0aHkgdGVjaG5vbG9neSBhY3F1aXNpdGlvbnMgMjAyMVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMyBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVyZSBhcmUgdGhlIGJpZ2dlc3QgZW50ZXJwcmlzZSB0ZWNobm9sb2d5IGFjcXVpc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgb2YgMjAyMSBzbyBmYXIsIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlci5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGJnLWJsdWUtNzAwIHJvdW5kZWQtbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGRhcms6YmctYmx1ZS02MDAgZGFyazpob3ZlcjpiZy1ibHVlLTcwMCBkYXJrOmZvY3VzOnJpbmctYmx1ZS04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgbW9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJydGw6cm90YXRlLTE4MCB3LTMuNSBoLTMuNSBtcy0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNCAxMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xIDVoMTJtMCAwTDkgMW00IDRMOSA5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJnZXRBbGxQcm9kdWN0cyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJIb21lIiwicHJvZHVjdHMiLCJzdGF0ZSIsInByb2R1Y3QiLCJkaXNwYXRjaCIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJKU09OIiwic3RyaW5naWZ5IiwibGlzdCIsInVsIiwibWFwIiwiaXRlbSIsInAiLCJ0aXRsZSIsIm9yZ2FuaXNhdGlvbkRlc2NyaXB0aW9uIiwib3JnYW5pc2F0aW9uSW1hZ2VOYW1lcyIsImxpbmsiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImg1Iiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94IiwicGF0aCIsInN0cm9rZSIsInN0cm9rZS1saW5lY2FwIiwic3Ryb2tlLWxpbmVqb2luIiwic3Ryb2tlLXdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
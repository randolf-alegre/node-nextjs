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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/state/product/reducer */ \"(app-pages-browser)/./src/app/redux/state/product/reducer.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const products = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.product);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_state_product_reducer__WEBPACK_IMPORTED_MODULE_2__.getAllProducts)());\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-12\",\n                children: products.list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.title\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.organisationDescription\n                            }, void 0, false, {\n                                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, this),\n                            item.organisationImageNames.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-4 md:grid-cols-6 gap-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \"h-auto max-w-full rounded-lg\",\n                                            src: link,\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true))\n            }, void 0, false, {\n                fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/blueclerk/Desktop/Sample Project/continue-react-native-tech-test-main/src/app/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"IF+/DJvFLBaO0twWgreOwyoO/ec=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFa0M7QUFDNkI7QUFDUjtBQUl4QyxTQUFTSTs7SUFDdEIsTUFBTUMsV0FBV0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBcUJBLE1BQU1DLE9BQU87SUFDaEUsTUFBTUMsV0FBV04sd0RBQVdBO0lBQzVCRixnREFBU0EsQ0FBQztRQUNSUSxTQUFTUCw0RUFBY0E7SUFDekIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBdUJiLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDWkwsU0FBU08sSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCOzswQ0FDRSw4REFBQ0M7MENBQUdELEtBQUtFLEtBQUs7Ozs7OzswQ0FDZCw4REFBQ0Q7MENBQUdELEtBQUtHLHVCQUF1Qjs7Ozs7OzRCQUMvQkgsS0FBS0ksc0JBQXNCLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSxxQkFDaEMsOERBQUNSO29DQUFJRCxXQUFVOzhDQUNiLDRFQUFDQztrREFDQyw0RUFBQ1M7NENBQ0NWLFdBQVU7NENBQ1ZXLEtBQUtGOzRDQUNMRyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXMUI7R0F0RHdCbEI7O1FBQ0xELG9EQUFXQTtRQUNYRCxvREFBV0E7OztLQUZORSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tIFwiLi9yZWR1eC9zdGF0ZS9wcm9kdWN0L3JlZHVjZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvdHlwZXMvcHJvZHVjdC50eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnByb2R1Y3QpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldEFsbFByb2R1Y3RzKCkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxuICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocHJvZHVjdHMubGlzdCl9XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3Byb2R1Y3RzLmxpc3QubWFwKChpdGVtOiBQcm9kdWN0KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntpdGVtLm9yZ2FuaXNhdGlvbkRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICB7aXRlbS5vcmdhbmlzYXRpb25JbWFnZU5hbWVzLm1hcCgobGluazogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWF1dG8gbWF4LXctZnVsbCByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTJcIj5cbiAgICAgICAgICB7cHJvZHVjdHMubGlzdC5tYXAoKGl0ZW06IFByb2R1Y3QpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0ub3JnYW5pc2F0aW9uRGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICB7aXRlbS5vcmdhbmlzYXRpb25JbWFnZU5hbWVzLm1hcCgobGluazogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IG1kOmdyaWQtY29scy02IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIG1heC13LWZ1bGwgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtsaW5rfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiZ2V0QWxsUHJvZHVjdHMiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiSG9tZSIsInByb2R1Y3RzIiwic3RhdGUiLCJwcm9kdWN0IiwiZGlzcGF0Y2giLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwibGlzdCIsIm1hcCIsIml0ZW0iLCJwIiwidGl0bGUiLCJvcmdhbmlzYXRpb25EZXNjcmlwdGlvbiIsIm9yZ2FuaXNhdGlvbkltYWdlTmFtZXMiLCJsaW5rIiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});
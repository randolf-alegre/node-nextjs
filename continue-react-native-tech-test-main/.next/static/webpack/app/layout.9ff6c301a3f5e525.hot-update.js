"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"410b1724fc51\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/N2QyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjQxMGIxNzI0ZmM1MVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux/state/product/reducer.ts":
/*!************************************************!*\
  !*** ./src/app/redux/state/product/reducer.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllProducts: function() { return /* binding */ getAllProducts; },\n/* harmony export */   reducer: function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _service_http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../service/http.service */ \"(app-pages-browser)/./src/service/http.service.ts\");\n/* __next_internal_client_entry_do_not_use__ getAllProducts,reducer auto */ \n\nconst getAllProducts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"product/all\", async (_, thunkAPI)=>{\n    try {\n        const data = await _service_http_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/products\");\n        return data;\n    } catch (error) {\n        return thunkAPI.rejectWithValue(error.response.data);\n    }\n});\nconst setActiveProduct = (state, action)=>{\n    const payload = action.payload;\n    const selectedProduct = state.list.find((item)=>item.id === payload.id);\n    state.activeProduct = null;\n    if (selectedProduct) {\n        state.activeProduct = {\n            ...selectedProduct\n        };\n    }\n};\nconst reducer = {\n    setActiveProduct\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvc3RhdGUvcHJvZHVjdC9yZWR1Y2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7NEVBQ21FO0FBQ1I7QUFJcEQsTUFBTUUsaUJBQWlCRixrRUFBZ0JBLENBQzVDLGVBQ0EsT0FBT0csR0FBR0M7SUFDUixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNSiw2REFBV0EsQ0FBQ0ssR0FBRyxDQUFFO1FBQ3BDLE9BQU9EO0lBQ1QsRUFBRSxPQUFPRSxPQUFZO1FBQ25CLE9BQU9ILFNBQVNJLGVBQWUsQ0FBQ0QsTUFBTUUsUUFBUSxDQUFDSixJQUFJO0lBQ3JEO0FBQ0YsR0FDQTtBQUdGLE1BQU1LLG1CQUFtQixDQUFDQyxPQUFzQkM7SUFDOUMsTUFBTUMsVUFBVUQsT0FBT0MsT0FBTztJQUM5QixNQUFNQyxrQkFBa0JILE1BQU1JLElBQUksQ0FBQ0MsSUFBSSxDQUNyQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUU7SUFHbENQLE1BQU1RLGFBQWEsR0FBRztJQUV0QixJQUFJTCxpQkFBaUI7UUFDbkJILE1BQU1RLGFBQWEsR0FBRztZQUFFLEdBQUdMLGVBQWU7UUFBQztJQUM3QztBQUNGO0FBRU8sTUFBTU0sVUFBVTtJQUNyQlY7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVkdXgvc3RhdGUvcHJvZHVjdC9yZWR1Y2VyLnRzPzJiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlQXN5bmNUaHVuayB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgSHR0cFNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2UvaHR0cC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJUHJvZHVjdFN0YXRlIH0gZnJvbSBcIi4vcHJvZHVjdFNsaWNlXCI7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIkAvdHlwZXMvcHJvZHVjdC50eXBlXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxQcm9kdWN0cyA9IGNyZWF0ZUFzeW5jVGh1bms8e3Jlc3VsdDogUHJvZHVjdFtdfSwgeyByZWplY3RWYWx1ZToge2Vycm9yOiBzdHJpbmd9IH0+KFxuICBcInByb2R1Y3QvYWxsXCIsXG4gIGFzeW5jIChfLCB0aHVua0FQSSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgSHR0cFNlcnZpY2UuZ2V0KGAvcHJvZHVjdHNgKTtcbiAgICAgIHJldHVybiBkYXRhIGFzIHtyZXN1bHQ6IFByb2R1Y3RbXX07XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRodW5rQVBJLnJlamVjdFdpdGhWYWx1ZShlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gIH1cbik7XG5cblxuY29uc3Qgc2V0QWN0aXZlUHJvZHVjdCA9IChzdGF0ZTogSVByb2R1Y3RTdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFByb2R1Y3Q+KSA9PiB7XG4gIGNvbnN0IHBheWxvYWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9kdWN0ID0gc3RhdGUubGlzdC5maW5kKFxuICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXlsb2FkLmlkXG4gICk7XG5cbiAgc3RhdGUuYWN0aXZlUHJvZHVjdCA9IG51bGw7XG5cbiAgaWYgKHNlbGVjdGVkUHJvZHVjdCkge1xuICAgIHN0YXRlLmFjdGl2ZVByb2R1Y3QgPSB7IC4uLnNlbGVjdGVkUHJvZHVjdCB9O1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IHtcbiAgc2V0QWN0aXZlUHJvZHVjdCxcbn07XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsIkh0dHBTZXJ2aWNlIiwiZ2V0QWxsUHJvZHVjdHMiLCJfIiwidGh1bmtBUEkiLCJkYXRhIiwiZ2V0IiwiZXJyb3IiLCJyZWplY3RXaXRoVmFsdWUiLCJyZXNwb25zZSIsInNldEFjdGl2ZVByb2R1Y3QiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZWxlY3RlZFByb2R1Y3QiLCJsaXN0IiwiZmluZCIsIml0ZW0iLCJpZCIsImFjdGl2ZVByb2R1Y3QiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/state/product/reducer.ts\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movements",{

/***/ "./pages/movements.tsx":
/*!*****************************!*\
  !*** ./pages/movements.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ListOfItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/ListOfItems */ \"./components/ListOfItems.tsx\");\n/* harmony import */ var _model_IMovement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @model/IMovement */ \"./model/IMovement.ts\");\nvar _this = undefined;\n\n\n\nvar Movements = function() {\n    var mockedMovements = [\n        {\n            userId: \"\",\n            day: new Date().getDate(),\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate(),\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate(),\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate(),\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 1,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 2,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 2,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 3,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 4,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 4,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 4,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 4,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        },\n        {\n            userId: \"\",\n            day: new Date().getDate() - 4,\n            month: new Date().getMonth(),\n            year: new Date().getFullYear(),\n            amount: parseFloat(Math.random().toFixed(2)),\n            currency: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.ICurrency.CHF,\n            createdAt: new Date().getTime().toString(),\n            movementType: _model_IMovement__WEBPACK_IMPORTED_MODULE_2__.IMovementType.EXPENSE,\n            category: \"lol\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-auto justify-center flex-col mx-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"my-4 text-lg mr-auto text-white\",\n                children: \"Transactions\"\n            }, void 0, false, {\n                fileName: \"/Users/alessiolonghi/dev/github/budget-expenses-tracker/frontend/pages/movements.tsx\",\n                lineNumber: 154,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListOfItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                movements: mockedMovements\n            }, void 0, false, {\n                fileName: \"/Users/alessiolonghi/dev/github/budget-expenses-tracker/frontend/pages/movements.tsx\",\n                lineNumber: 155,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alessiolonghi/dev/github/budget-expenses-tracker/frontend/pages/movements.tsx\",\n        lineNumber: 153,\n        columnNumber: 9\n    }, _this);\n};\n_c = Movements;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movements);\nvar _c;\n$RefreshReg$(_c, \"Movements\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRSxLQUFLO1NBQ2xCO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUcsMkNBQXlDOzswQkFDdEQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBRyxpQ0FBK0I7MEJBQUcsY0FBWTs7Ozs7cUJBQUs7MEJBQ25FLDhEQUFDM0IsK0RBQVc7Z0JBQUM2QixTQUFTLEVBQUV6QixlQUFlOzs7OztxQkFBRzs7Ozs7O2FBQ3hDLENBQ1Q7Q0FDSjtBQXhKS0QsS0FBQUEsU0FBUztBQTBKZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tb3ZlbWVudHMudHN4P2Y1ZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge05leHRQYWdlfSBmcm9tICduZXh0J1xuaW1wb3J0IExpc3RPZkl0ZW1zIGZyb20gXCJAY29tcG9uZW50cy9MaXN0T2ZJdGVtc1wiO1xuaW1wb3J0IElNb3ZlbWVudCwge0lDdXJyZW5jeSwgSU1vdmVtZW50VHlwZX0gZnJvbSBcIkBtb2RlbC9JTW92ZW1lbnRcIjtcblxuXG5jb25zdCBNb3ZlbWVudHM6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vY2tlZE1vdmVtZW50czogSU1vdmVtZW50W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCksXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCkgLSAxLFxuICAgICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgY3VycmVuY3k6IElDdXJyZW5jeS5DSEYsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBtb3ZlbWVudFR5cGU6IElNb3ZlbWVudFR5cGUuRVhQRU5TRSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImxvbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1c2VySWQ6IFwiXCIsXG4gICAgICAgICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gMixcbiAgICAgICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCksXG4gICAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoTWF0aC5yYW5kb20oKS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBJQ3VycmVuY3kuQ0hGLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbW92ZW1lbnRUeXBlOiBJTW92ZW1lbnRUeXBlLkVYUEVOU0UsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJsb2xcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdXNlcklkOiBcIlwiLFxuICAgICAgICAgICAgZGF5OiBuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDIsXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCkgLSAzLFxuICAgICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgY3VycmVuY3k6IElDdXJyZW5jeS5DSEYsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBtb3ZlbWVudFR5cGU6IElNb3ZlbWVudFR5cGUuRVhQRU5TRSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImxvbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1c2VySWQ6IFwiXCIsXG4gICAgICAgICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gNCxcbiAgICAgICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCksXG4gICAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoTWF0aC5yYW5kb20oKS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBJQ3VycmVuY3kuQ0hGLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbW92ZW1lbnRUeXBlOiBJTW92ZW1lbnRUeXBlLkVYUEVOU0UsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJsb2xcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdXNlcklkOiBcIlwiLFxuICAgICAgICAgICAgZGF5OiBuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDQsXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVzZXJJZDogXCJcIixcbiAgICAgICAgICAgIGRheTogbmV3IERhdGUoKS5nZXREYXRlKCkgLSA0LFxuICAgICAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgIGFtb3VudDogcGFyc2VGbG9hdChNYXRoLnJhbmRvbSgpLnRvRml4ZWQoMikpLFxuICAgICAgICAgICAgY3VycmVuY3k6IElDdXJyZW5jeS5DSEYsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBtb3ZlbWVudFR5cGU6IElNb3ZlbWVudFR5cGUuRVhQRU5TRSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImxvbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB1c2VySWQ6IFwiXCIsXG4gICAgICAgICAgICBkYXk6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpIC0gNCxcbiAgICAgICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLmdldE1vbnRoKCksXG4gICAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgICAgICBhbW91bnQ6IHBhcnNlRmxvYXQoTWF0aC5yYW5kb20oKS50b0ZpeGVkKDIpKSxcbiAgICAgICAgICAgIGN1cnJlbmN5OiBJQ3VycmVuY3kuQ0hGLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpLFxuICAgICAgICAgICAgbW92ZW1lbnRUeXBlOiBJTW92ZW1lbnRUeXBlLkVYUEVOU0UsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJsb2xcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdXNlcklkOiBcIlwiLFxuICAgICAgICAgICAgZGF5OiBuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDQsXG4gICAgICAgICAgICBtb250aDogbmV3IERhdGUoKS5nZXRNb250aCgpLFxuICAgICAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgYW1vdW50OiBwYXJzZUZsb2F0KE1hdGgucmFuZG9tKCkudG9GaXhlZCgyKSksXG4gICAgICAgICAgICBjdXJyZW5jeTogSUN1cnJlbmN5LkNIRixcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG1vdmVtZW50VHlwZTogSU1vdmVtZW50VHlwZS5FWFBFTlNFLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwibG9sXCIsXG4gICAgICAgIH1cbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IG14LWF1dG8ganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgbXgtNGB9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YG15LTQgdGV4dC1sZyBtci1hdXRvIHRleHQtd2hpdGVgfT5UcmFuc2FjdGlvbnM8L2gxPlxuICAgICAgICAgICAgPExpc3RPZkl0ZW1zIG1vdmVtZW50cz17bW9ja2VkTW92ZW1lbnRzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92ZW1lbnRzXG4iXSwibmFtZXMiOlsiTGlzdE9mSXRlbXMiLCJJQ3VycmVuY3kiLCJJTW92ZW1lbnRUeXBlIiwiTW92ZW1lbnRzIiwibW9ja2VkTW92ZW1lbnRzIiwidXNlcklkIiwiZGF5IiwiRGF0ZSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiYW1vdW50IiwicGFyc2VGbG9hdCIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwiY3VycmVuY3kiLCJDSEYiLCJjcmVhdGVkQXQiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJtb3ZlbWVudFR5cGUiLCJFWFBFTlNFIiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1vdmVtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/movements.tsx\n"));

/***/ })

});
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

/***/ "./components/ListOfItems.tsx":
/*!************************************!*\
  !*** ./components/ListOfItems.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _this = undefined;\n\nvar isOfSameDay = function(first, second) {\n    return first.day === second.day && first.month === second.month && first.year === second.year;\n};\nvar ListOfItems = function(param) {\n    var movements = param.movements;\n    var groupBy = function groupBy(list) {\n        var map = [];\n        console.log(\"received \".concat(JSON.stringify(list, null, 2)));\n        list.forEach(function(item) {\n            var ref;\n            var key = item.day;\n            var indexOfElem = ((ref = map.map(function(e) {\n                return e.day;\n            })) === null || ref === void 0 ? void 0 : ref.indexOf(item.day)) || -1;\n            if (indexOfElem >= 0) {\n                map = map.map(function(g) {\n                    return {\n                        day: g.day,\n                        data: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(g.data).concat([\n                            item\n                        ])\n                    };\n                });\n            } else {\n                console.log(\"pushing..\");\n                map.push({\n                    day: key,\n                    data: [\n                        item\n                    ]\n                });\n            }\n            console.log(\"setting map.. \".concat(JSON.stringify(map)));\n        });\n        console.log(\"created \".concat(JSON.stringify(map, null, 2)));\n        return map;\n    };\n    var groupedMovements = groupBy(movements);\n    console.log(\"enties: \".concat(Object.entries(groupBy(movements))));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"h-full overflow-y-auto\",\n        \"aria-label\": \"Directory\",\n        children: JSON.stringify(Object.entries(groupedMovements), null, 2)\n    }, void 0, false, {\n        fileName: \"/Users/alessiolonghi/dev/github/budget-expenses-tracker/frontend/components/ListOfItems.tsx\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, _this);\n};\n_c = ListOfItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListOfItems);\nvar _c;\n$RefreshReg$(_c, \"ListOfItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xpc3RPZkl0ZW1zLnRzeD80MTcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJTW92ZW1lbnQgZnJvbSBcIkBtb2RlbC9JTW92ZW1lbnRcIjtcblxuaW50ZXJmYWNlIFNvcnRhYmxlVGFibGVQcm9wcyB7XG4gICAgbW92ZW1lbnRzOiBJTW92ZW1lbnRbXVxufVxuXG5cbmNvbnN0IGlzT2ZTYW1lRGF5ID0gKGZpcnN0OiBJTW92ZW1lbnQsIHNlY29uZDogSU1vdmVtZW50KSA9PlxuICAgIGZpcnN0LmRheSA9PT0gc2Vjb25kLmRheSAmJlxuICAgIGZpcnN0Lm1vbnRoID09PSBzZWNvbmQubW9udGggJiZcbiAgICBmaXJzdC55ZWFyID09PSBzZWNvbmQueWVhclxuXG5pbnRlcmZhY2UgTW92ZW1lbnRHcm91cGVkIHtcbiAgICBkYXk6IG51bWJlcixcbiAgICBkYXRhOiBJTW92ZW1lbnRbXVxufVxuXG5jb25zdCBMaXN0T2ZJdGVtczogUmVhY3QuRkM8U29ydGFibGVUYWJsZVByb3BzPiA9ICh7bW92ZW1lbnRzfSkgPT4ge1xuICAgIGNvbnN0IGdyb3VwZWRNb3ZlbWVudHMgPSBncm91cEJ5KG1vdmVtZW50cylcblxuICAgIGZ1bmN0aW9uIGdyb3VwQnkobGlzdDogSU1vdmVtZW50W10pIHtcbiAgICAgICAgbGV0IG1hcDogTW92ZW1lbnRHcm91cGVkW10gPSBbXTtcbiAgICAgICAgY29uc29sZS5sb2coYHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkobGlzdCwgbnVsbCwgMil9YClcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBJTW92ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGl0ZW0uZGF5O1xuICAgICAgICAgICAgY29uc3QgaW5kZXhPZkVsZW0gPSBtYXAubWFwKGUgPT4gZS5kYXkpPy5pbmRleE9mKGl0ZW0uZGF5KSB8fCAtMVxuICAgICAgICAgICAgaWYgKGluZGV4T2ZFbGVtID49IDApIHtcbiAgICAgICAgICAgICAgICBtYXAgPSBtYXAubWFwKGcgPT4gKHtkYXk6IGcuZGF5LCBkYXRhOiBbLi4uZy5kYXRhLCBpdGVtXX0pKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncHVzaGluZy4uJylcbiAgICAgICAgICAgICAgICBtYXAucHVzaCh7ZGF5OiBrZXksIGRhdGE6IFtpdGVtXX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2V0dGluZyBtYXAuLiAke0pTT04uc3RyaW5naWZ5KG1hcCl9YClcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBjcmVhdGVkICR7SlNPTi5zdHJpbmdpZnkobWFwLCBudWxsLCAyKX1gKVxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKGBlbnRpZXM6ICR7T2JqZWN0LmVudHJpZXMoZ3JvdXBCeShtb3ZlbWVudHMpKX1gKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiaC1mdWxsIG92ZXJmbG93LXktYXV0b1wiIGFyaWEtbGFiZWw9XCJEaXJlY3RvcnlcIj5cbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShPYmplY3QuZW50cmllcyhncm91cGVkTW92ZW1lbnRzKSwgbnVsbCwgMil9XG4gICAgICAgICAgICB7Lyo/Lm1hcCgoKGtleSxncm91cGVkKSkgPT4gKCovfVxuICAgICAgICAgICAgey8qPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPiovfVxuICAgICAgICAgICAgey8qICAgIDxkaXYqL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBzdGlja3kgdG9wLTAgYm9yZGVyLXQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktNTAgcHgtNiBweS0xIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPiovfVxuICAgICAgICAgICAgey8qICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXgganVzdGlmeS1iZXR3ZWVuYH0+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICA8aDM+e2dyb3VwZWQuZGF5fTwvaDM+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgey8qICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgey8qICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMCBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICB7Z3JvdXBlZC5kYXRhLm1hcCgobSwgaSkgPT4gKCovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgPGRpdiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB4LTYgcHktNSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgaG92ZXI6YmctZ3JheS01MCBmb2N1cy13aXRoaW46cmluZy0yIGZvY3VzLXdpdGhpbjpyaW5nLWluc2V0IGZvY3VzLXdpdGhpbjpyaW5nLWluZGlnby01MDBcIj4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy0wXCI+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lXCI+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRlbmQgdG91Y2ggdGFyZ2V0IHRvIGVudGlyZSBwYW5lbCAqL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiBhcmlhLWhpZGRlbj1cInRydWVcIi8+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj57bS5hbW91bnR9IHttLmN1cnJlbmN5fTwvcD4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCB0cnVuY2F0ZVwiPnttLmNhdGVnb3J5fTwvcD4qL31cbiAgICAgICAgICAgIHsvKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgey8qICAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgICAgIDwvbGk+Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICAgICAgKSl9Ki99XG4gICAgICAgICAgICB7LyogICAgICAgICA8L3VsPiovfVxuICAgICAgICAgICAgey8qICAgICA8L2Rpdj4qL31cbiAgICAgICAgICAgIHsvKiApKSovfVxuICAgICAgICAgICAgey8qICAgICB9Ki99XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdE9mSXRlbXMiXSwibmFtZXMiOlsiaXNPZlNhbWVEYXkiLCJmaXJzdCIsInNlY29uZCIsImRheSIsIm1vbnRoIiwieWVhciIsIkxpc3RPZkl0ZW1zIiwibW92ZW1lbnRzIiwiZ3JvdXBCeSIsImxpc3QiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvckVhY2giLCJpdGVtIiwia2V5IiwiaW5kZXhPZkVsZW0iLCJlIiwiaW5kZXhPZiIsImciLCJkYXRhIiwicHVzaCIsImdyb3VwZWRNb3ZlbWVudHMiLCJPYmplY3QiLCJlbnRyaWVzIiwibmF2IiwiY2xhc3NOYW1lIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ListOfItems.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data2 = ref1[0], setData2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), allData = ref3[0], setAllData = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        fetch(\"/api/mons/aero\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setData(data);\n            setLoading(false);\n        // console.log(data)\n        });\n        // fetch('/api/mons/abra')\n        //   .then((res) => res.json())\n        //   .then((data2) => {\n        //     setData2(data2)\n        //     setLoading(false)\n        //     // console.log('yesh')\n        //   })\n        fetch(\"/api/mons/allMonData\").then(function(res) {\n            return res.json();\n        }).then(function(allData) {\n            setAllData(allData);\n            setLoading(false);\n        // console.log(allData)\n        });\n    // fetch('/api/mons/allMonData')\n    //   .then((res) => res.json())\n    //   .then((allData) => {\n    //     setAllData(allData)\n    //     setLoading(false)\n    //     console.log('yesh')\n    //   })\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CyberPokeAPI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An API serving data about cyberpunk style mons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"32x32\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: data.imageUrl,\n                        alt: \"Vercel Logo\",\n                        width: \"100%\",\n                        height: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 18\n                    }, _this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"lDAu1TS+N36UT9nNoCbD8we1aOQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiQyxNQUFNLEVBQUUsTUFBTTs7Ozs7NkJBQUksR0FBRyxFQUFFO2tDQUN4Qiw4REFBQ0MsR0FBQzs7Ozs2QkFBSzs7Ozs7O3FCQWlDRjswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ3BCLFNBQVMsRUFBRWxCLHVFQUFhOzBCQUM5Qiw0RUFBQytCLEdBQUM7b0JBQ0FILElBQUksRUFBQyx3R0FBd0c7b0JBQzdHVyxNQUFNLEVBQUMsUUFBUTtvQkFDZmQsR0FBRyxFQUFDLHFCQUFxQjs7d0JBQzFCLFlBQ1c7d0JBQUMsR0FBRztzQ0FDZCw4REFBQ2UsTUFBSTs0QkFBQ3RCLFNBQVMsRUFBRWxCLHFFQUFXO3NDQUMxQiw0RUFBQ0QsbURBQUs7Z0NBQUNpQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0UsR0FBRyxFQUFDLGFBQWE7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7cUNBQUk7Ozs7O2lDQUMvRDs7Ozs7O3lCQUNMOzs7OztxQkFDRzs7Ozs7O2FBQ0wsQ0FDUDtDQUNGO0dBN0hLaEMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBK0hWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2RhdGEyLCBzZXREYXRhMl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgZmV0Y2goJy9hcGkvbW9ucy9hZXJvJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIFxuICAgICAgfSlcbiAgICAvLyBmZXRjaCgnL2FwaS9tb25zL2FicmEnKVxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAvLyAgIC50aGVuKChkYXRhMikgPT4ge1xuICAgIC8vICAgICBzZXREYXRhMihkYXRhMilcbiAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ3llc2gnKVxuICAgIC8vICAgfSlcbiAgICBmZXRjaCgnL2FwaS9tb25zL2FsbE1vbkRhdGEnKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChhbGxEYXRhKSA9PiB7XG4gICAgICAgIHNldEFsbERhdGEoYWxsRGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsRGF0YSlcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gZmV0Y2goJy9hcGkvbW9ucy9hbGxNb25EYXRhJylcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC8vICAgLnRoZW4oKGFsbERhdGEpID0+IHtcbiAgICAgIC8vICAgICBzZXRBbGxEYXRhKGFsbERhdGEpXG4gICAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygneWVzaCcpXG4gICAgICAvLyAgIH0pXG5cbiAgfSwgW10pXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN5YmVyUG9rZUFQSTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBbiBBUEkgc2VydmluZyBkYXRhIGFib3V0IGN5YmVycHVuayBzdHlsZSBtb25zXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCJmYXZpY29uLmljbz92PTEuMVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3snICd9XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+cGFnZXMvaW5kZXgudHN4PC9jb2RlPlxuICAgICAgICA8L3A+ICovfVxuICAgICAgICB7LyogPEltYWdlIFxuICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiIFxuICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgIFxuICAgICAgICAvPiAqL31cbiAgICAgICAgIHtkYXRhID8gPEltYWdlIHNyYz17ZGF0YS5pbWFnZVVybH0gXG4gICAgICAgICBcbiAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCIgXG4gICAgICAgICB3aWR0aD17JzEwMCUnfSBcbiAgICAgICAgIGhlaWdodD17JzEwMCUnfSAvPiA6IFwiXCJ9XG4gICAgICAgIDxwPjwvcD5cblxuXG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5MZWFybiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5FeGFtcGxlcyAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5EZXBsb3kgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJkYXRhMiIsInNldERhdGEyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsInR5cGUiLCJzaXplcyIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJmb290ZXIiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
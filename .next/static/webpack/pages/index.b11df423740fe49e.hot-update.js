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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data2 = ref1[0], setData2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), allData = ref3[0], setAllData = ref3[1];\n    console.log(data);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        // fetch('/api/mons/aero')\n        //   .then((res) => res.json())\n        //   .then((data) => {\n        //     setData(data)\n        //     setLoading(false)\n        //     console.log(data)\n        //   })\n        // fetch('/api/mons/abra')\n        //   .then((res) => res.json())\n        //   .then((data2) => {\n        //     setData2(data2)\n        //     setLoading(false)\n        //     // console.log('yesh')\n        //   })\n        fetch(\"/api/mons/allMonData\").then(function(res) {\n            return res.json();\n        }).then(function(allData) {\n            setAllData(allData);\n            setLoading(false);\n            console.log(allData);\n        });\n    // fetch('/api/mons/allMonData')\n    //   .then((res) => res.json())\n    //   .then((allData) => {\n    //     setAllData(allData)\n    //     setLoading(false)\n    //     console.log('yesh')\n    //   })\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CyberPokeAPI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An API serving data about cyberpunk style mons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"32x32\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: data.imageUrl,\n                        alt: \"Vercel Logo\",\n                        width: \"100%\",\n                        height: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 18\n                    }, _this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"lDAu1TS+N36UT9nNoCbD8we1aOQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsR0FBQzs7Ozs2QkFBSzs7Ozs7O3FCQWlDRjswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ3BCLFNBQVMsRUFBRXBCLHVFQUFhOzBCQUM5Qiw0RUFBQ2lDLEdBQUM7b0JBQ0FILElBQUksRUFBQyx3R0FBd0c7b0JBQzdHVyxNQUFNLEVBQUMsUUFBUTtvQkFDZmQsR0FBRyxFQUFDLHFCQUFxQjs7d0JBQzFCLFlBQ1c7d0JBQUMsR0FBRztzQ0FDZCw4REFBQ2UsTUFBSTs0QkFBQ3RCLFNBQVMsRUFBRXBCLHFFQUFXO3NDQUMxQiw0RUFBQ0QsbURBQUs7Z0NBQUNtQyxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0UsR0FBRyxFQUFDLGFBQWE7Z0NBQUNDLEtBQUssRUFBRSxFQUFFO2dDQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7cUNBQUk7Ozs7O2lDQUMvRDs7Ozs7O3lCQUNMOzs7OztxQkFDRzs7Ozs7O2FBQ0wsQ0FDUDtDQUNGO0dBL0hLbEMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBaUlWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuXG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuXG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2RhdGEyLCBzZXREYXRhMl0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxEYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIFxuICBjb25zb2xlLmxvZyhkYXRhKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAgIC8vIGZldGNoKCcvYXBpL21vbnMvYWVybycpXG4gICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAvLyAgICAgc2V0RGF0YShkYXRhKVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBcbiAgICAvLyAgIH0pXG5cbiAgICAgIFxuICAgIC8vIGZldGNoKCcvYXBpL21vbnMvYWJyYScpXG4gICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKGRhdGEyKSA9PiB7XG4gICAgLy8gICAgIHNldERhdGEyKGRhdGEyKVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygneWVzaCcpXG4gICAgLy8gICB9KVxuICAgIGZldGNoKCcvYXBpL21vbnMvYWxsTW9uRGF0YScpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGFsbERhdGEpID0+IHtcbiAgICAgICAgc2V0QWxsRGF0YShhbGxEYXRhKVxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICBjb25zb2xlLmxvZyhhbGxEYXRhKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgXG4gICAgICAvLyBmZXRjaCgnL2FwaS9tb25zL2FsbE1vbkRhdGEnKVxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLy8gICAudGhlbigoYWxsRGF0YSkgPT4ge1xuICAgICAgLy8gICAgIHNldEFsbERhdGEoYWxsRGF0YSlcbiAgICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd5ZXNoJylcbiAgICAgIC8vICAgfSlcblxuICB9LCBbXSlcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3liZXJQb2tlQVBJPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkFuIEFQSSBzZXJ2aW5nIGRhdGEgYWJvdXQgY3liZXJwdW5rIHN0eWxlIG1vbnNcIiAvPlxuICAgICAgICBcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cImZhdmljb24uaWNvP3Y9MS4xXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnXCI+TmV4dC5qcyE8L2E+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICBHZXQgc3RhcnRlZCBieSBlZGl0aW5neycgJ31cbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9e3N0eWxlcy5jb2RlfT5wYWdlcy9pbmRleC50c3g8L2NvZGU+XG4gICAgICAgIDwvcD4gKi99XG4gICAgICAgIHsvKiA8SW1hZ2UgXG4gICAgICAgIHNyYz1cIi92ZXJjZWwuc3ZnXCIgXG4gICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCJcbiAgICAgICAgXG4gICAgICAgIC8+ICovfVxuICAgICAgICAge2RhdGEgPyA8SW1hZ2Ugc3JjPXtkYXRhLmltYWdlVXJsfSBcbiAgICAgICAgIFxuICAgICAgICAgYWx0PVwiVmVyY2VsIExvZ29cIiBcbiAgICAgICAgIHdpZHRoPXsnMTAwJSd9IFxuICAgICAgICAgaGVpZ2h0PXsnMTAwJSd9IC8+IDogXCJcIn1cbiAgICAgICAgPHA+PC9wPlxuXG5cblxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2RvY3NcIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5Eb2N1bWVudGF0aW9uICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5GaW5kIGluLWRlcHRoIGluZm9ybWF0aW9uIGFib3V0IE5leHQuanMgZmVhdHVyZXMgYW5kIEFQSS48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgPGgyPkxlYXJuICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5MZWFybiBhYm91dCBOZXh0LmpzIGluIGFuIGludGVyYWN0aXZlIGNvdXJzZSB3aXRoIHF1aXp6ZXMhPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkV4YW1wbGVzICZyYXJyOzwvaDI+XG4gICAgICAgICAgICA8cD5EaXNjb3ZlciBhbmQgZGVwbG95IGJvaWxlcnBsYXRlIGV4YW1wbGUgTmV4dC5qcyBwcm9qZWN0cy48L3A+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20vbmV3P3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGgyPkRlcGxveSAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEluc3RhbnRseSBkZXBsb3kgeW91ciBOZXh0LmpzIHNpdGUgdG8gYSBwdWJsaWMgVVJMIHdpdGggVmVyY2VsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImRhdGEyIiwic2V0RGF0YTIiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWxsRGF0YSIsInNldEFsbERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsInR5cGUiLCJzaXplcyIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJmb290ZXIiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
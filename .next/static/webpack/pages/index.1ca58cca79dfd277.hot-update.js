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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data2 = ref1[0], setData2 = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), allData = ref3[0], setAllData = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        fetch(\"/api/mons/aero\").then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            setData(data);\n            setLoading(false);\n        // console.log(data)\n        });\n        // fetch('/api/mons/abra')\n        //   .then((res) => res.json())\n        //   .then((data2) => {\n        //     setData2(data2)\n        //     setLoading(false)\n        //     // console.log('yesh')\n        //   })\n        fetch(\"/api/mons/allMonData\").then(function(res) {\n            return res.json();\n        }).then(function(data2) {\n            setAllData(data2);\n            setLoading(false);\n        // console.log('yesh')\n        });\n    // fetch('/api/mons/allMonData')\n    //   .then((res) => res.json())\n    //   .then((allData) => {\n    //     setAllData(allData)\n    //     setLoading(false)\n    //     console.log('yesh')\n    //   })\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"CyberPokeAPI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"An API serving data about cyberpunk style mons\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/png\",\n                        sizes: \"32x32\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 22\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: data.imageUrl,\n                        alt: \"Vercel Logo\",\n                        width: \"100%\",\n                        height: \"100%\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 18\n                    }, _this) : \"\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/cyberpokeapi/pages/index.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"lDAu1TS+N36UT9nNoCbD8we1aOQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2JDLE1BQU0sRUFBRSxNQUFNOzs7Ozs2QkFBSSxHQUFHLEVBQUU7a0NBQ3hCLDhEQUFDQyxHQUFDOzs7OzZCQUFLOzs7Ozs7cUJBaUNGOzBCQUVQLDhEQUFDQyxRQUFNO2dCQUFDcEIsU0FBUyxFQUFFbEIsdUVBQWE7MEJBQzlCLDRFQUFDK0IsR0FBQztvQkFDQUgsSUFBSSxFQUFDLHdHQUF3RztvQkFDN0dXLE1BQU0sRUFBQyxRQUFRO29CQUNmZCxHQUFHLEVBQUMscUJBQXFCOzt3QkFDMUIsWUFDVzt3QkFBQyxHQUFHO3NDQUNkLDhEQUFDZSxNQUFJOzRCQUFDdEIsU0FBUyxFQUFFbEIscUVBQVc7c0NBQzFCLDRFQUFDRCxtREFBSztnQ0FBQ2lDLEdBQUcsRUFBQyxhQUFhO2dDQUFDRSxHQUFHLEVBQUMsYUFBYTtnQ0FBQ0MsS0FBSyxFQUFFLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztxQ0FBSTs7Ozs7aUNBQy9EOzs7Ozs7eUJBQ0w7Ozs7O3FCQUNHOzs7Ozs7YUFDTCxDQUNQO0NBQ0Y7R0E3SEtoQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUErSFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZGF0YTIsIHNldERhdGEyXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICBmZXRjaCgnL2FwaS9tb25zL2Flcm8nKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldERhdGEoZGF0YSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgXG4gICAgICB9KVxuICAgIC8vIGZldGNoKCcvYXBpL21vbnMvYWJyYScpXG4gICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLnRoZW4oKGRhdGEyKSA9PiB7XG4gICAgLy8gICAgIHNldERhdGEyKGRhdGEyKVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygneWVzaCcpXG4gICAgLy8gICB9KVxuICAgIGZldGNoKCcvYXBpL21vbnMvYWxsTW9uRGF0YScpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEyKSA9PiB7XG4gICAgICAgIHNldEFsbERhdGEoZGF0YTIpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd5ZXNoJylcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIFxuICAgICAgLy8gZmV0Y2goJy9hcGkvbW9ucy9hbGxNb25EYXRhJylcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC8vICAgLnRoZW4oKGFsbERhdGEpID0+IHtcbiAgICAgIC8vICAgICBzZXRBbGxEYXRhKGFsbERhdGEpXG4gICAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygneWVzaCcpXG4gICAgICAvLyAgIH0pXG5cbiAgfSwgW10pXG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkN5YmVyUG9rZUFQSTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBbiBBUEkgc2VydmluZyBkYXRhIGFib3V0IGN5YmVycHVuayBzdHlsZSBtb25zXCIgLz5cbiAgICAgICAgXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCJmYXZpY29uLmljbz92PTEuMVwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgR2V0IHN0YXJ0ZWQgYnkgZWRpdGluZ3snICd9XG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtzdHlsZXMuY29kZX0+cGFnZXMvaW5kZXgudHN4PC9jb2RlPlxuICAgICAgICA8L3A+ICovfVxuICAgICAgICB7LyogPEltYWdlIFxuICAgICAgICBzcmM9XCIvdmVyY2VsLnN2Z1wiIFxuICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgIFxuICAgICAgICAvPiAqL31cbiAgICAgICAgIHtkYXRhID8gPEltYWdlIHNyYz17ZGF0YS5pbWFnZVVybH0gXG4gICAgICAgICBcbiAgICAgICAgIGFsdD1cIlZlcmNlbCBMb2dvXCIgXG4gICAgICAgICB3aWR0aD17JzEwMCUnfSBcbiAgICAgICAgIGhlaWdodD17JzEwMCUnfSAvPiA6IFwiXCJ9XG4gICAgICAgIDxwPjwvcD5cblxuXG5cbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5MZWFybiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5FeGFtcGxlcyAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5EZXBsb3kgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJkYXRhMiIsInNldERhdGEyIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImFsbERhdGEiLCJzZXRBbGxEYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsInR5cGUiLCJzaXplcyIsImhyZWYiLCJtYWluIiwiaDEiLCJhIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJmb290ZXIiLCJ0YXJnZXQiLCJzcGFuIiwibG9nbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
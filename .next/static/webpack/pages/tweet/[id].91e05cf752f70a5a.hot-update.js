"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _lib_client_useMutate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client/useMutate */ \"./lib/client/useMutate.ts\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar TweetDetail = function() {\n    var _this1 = _this;\n    var ref, ref1, ref2, ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id, \"/detail\") : \"\"), data = ref4.data, mutate = ref4.mutate;\n    var ref5 = _slicedToArray((0,_lib_client_useMutate__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id, \"/fav\") : \"\"), 1), toggleFav = ref5[0];\n    var onFavClick = function() {\n        toggleFav({});\n        mutate(function(prev) {\n            return _objectSpread({}, prev);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"border-r-[1px] md:ml-48 ml-24 md:w-[37.5rem] w-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[rgba(255,255,255,0.9)] backdrop-blur-sm flex px-5 py-3 justify-start items-center fixed top-0 md:w-[37.5rem] w-96\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mr-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            className: \"h-6 w-6\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            stroke: \"currentColor\",\n                            strokeWidth: \"2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M7 16l-4-4m0 0l4-4m-4 4h18\"\n                            }, void 0, false, {\n                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xl font-semibold\",\n                        children: \"NextWeet\"\n                    }, void 0, false, {\n                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20 grid grid-cols-[2fr_11fr] p-4 border-[1px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-10 h-10 rounded-full bg-blue-600\"\n                    }, void 0, false, {\n                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"font-semibold\",\n                                                children: data === null || data === void 0 ? void 0 : (ref = data.tweetInfo) === null || ref === void 0 ? void 0 : ref.writer.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-gray-600 ml-3\",\n                                                children: [\n                                                    \"@\",\n                                                    data === null || data === void 0 ? void 0 : (ref1 = data.tweetInfo) === null || ref1 === void 0 ? void 0 : ref1.writer.email.split(\"@\")[0]\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: data === null || data === void 0 ? void 0 : (ref2 = data.tweetInfo) === null || ref2 === void 0 ? void 0 : ref2.message.split(\"\\n\").map(function(item) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 88\n                                            }, _this1);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex text-gray-600 text-sm justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex space-x-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                className: \"text-gray-600 h-5 w-5\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                    lineNumber: 49,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"2\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"flex space-x-2 cursor-pointer\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                onClick: onFavClick,\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                className: \"text-gray-600 h-5 w-5\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                stroke: \"currentColor\",\n                                                strokeWidth: \"2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 33\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 29\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: data === null || data === void 0 ? void 0 : (ref3 = data.tweetInfo) === null || ref3 === void 0 ? void 0 : ref3.like\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 29\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"cursor-pointer\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"text-gray-600 h-5 w-5\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            \"stroke-width\": \"2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 33\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/auddnjs2008/project/NextWeet/pages/tweet/[id].tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(TweetDetail, \"M53U7cWUXIiUC/MfWH4Ha1jzqfs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        _lib_client_useMutate__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = TweetDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TweetDetail);\nvar _c;\n$RefreshReg$(_c, \"TweetDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0M7QUFDZjtBQUMwQjs7QUFZbkQsSUFBTUcsV0FBVyxHQUFHLFdBQU07O1FBMEJtQ0MsR0FBZSxFQUNUQSxJQUFlLEVBQ3REQSxJQUFlLEVBYVJBLElBQWU7O0lBeEM5QyxJQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsSUFBeUJDLElBQW9GLEdBQXBGQSwrQ0FBTSxDQUFnQkksTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsR0FBRyxhQUFZLENBQWtCLE1BQU8sQ0FBdkJGLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLEVBQUMsU0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQXJHSCxJQUFJLEdBQWFILElBQW9GLENBQXJHRyxJQUFJLEVBQUVJLE1BQU0sR0FBS1AsSUFBb0YsQ0FBL0ZPLE1BQU07SUFDcEIsSUFBb0JOLElBQXFFLGtCQUFyRUEsaUVBQVMsQ0FBQ0csTUFBTSxDQUFDQyxLQUFLLENBQUNDLEVBQUUsR0FBRyxhQUFZLENBQWtCLE1BQUksQ0FBcEJGLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxFQUFFLEVBQUMsTUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQWxGRSxTQUFTLEdBQUlQLElBQXFFLEdBQXpFO0lBR2hCLElBQU1RLFVBQVUsR0FBRyxXQUFNO1FBQ3JCRCxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZEQsTUFBTSxDQUFDRyxTQUFBQSxJQUFJO21CQUFLLGtCQUFLQSxJQUFJLENBQUc7U0FBQyxDQUFDO0tBQ2pDO0lBRUQscUJBQ0ksOERBQUNDLE1BQUk7UUFBQ0MsU0FBUyxFQUFDLG1EQUFtRDs7MEJBQy9ELDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsdUhBQXlIOztrQ0FDcEksOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxNQUFNO2tDQUNqQiw0RUFBQ0UsS0FBRzs0QkFBQ0MsS0FBSyxFQUFDLDRCQUE0Qjs0QkFBQ0gsU0FBUyxFQUFDLFNBQVM7NEJBQUNJLElBQUksRUFBQyxNQUFNOzRCQUFDQyxPQUFPLEVBQUMsV0FBVzs0QkFBQ0MsTUFBTSxFQUFDLGNBQWM7NEJBQUNDLFdBQVcsRUFBQyxHQUFHO3NDQUM3SCw0RUFBQ0MsTUFBSTtnQ0FBQ0MsYUFBYSxFQUFDLE9BQU87Z0NBQUNDLGNBQWMsRUFBQyxPQUFPO2dDQUFDQyxDQUFDLEVBQUMsNEJBQTRCOzs7OztxQ0FBRzs7Ozs7aUNBQ2xGOzs7Ozs2QkFDSjtrQ0FDTiw4REFBQ1YsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLHVCQUF1QjtrQ0FBQyxVQUFROzs7Ozs2QkFBTTs7Ozs7O3FCQUNuRDswQkFDTiw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLGtEQUFrRDs7a0NBQzdELDhEQUFDQyxLQUFHO3dCQUFDRCxTQUFTLEVBQUMsb0NBQW9DOzs7Ozs2QkFBRztrQ0FDdEQsOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyxXQUFXOzswQ0FDdEIsOERBQUNDLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyxXQUFXOztrREFDdEIsOERBQUNDLEtBQUc7OzBEQUNBLDhEQUFDVyxNQUFJO2dEQUFDWixTQUFTLEVBQUMsZUFBZTswREFBRVQsSUFBSSxhQUFKQSxJQUFJLFdBQVcsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxHQUFlLEdBQWZBLElBQUksQ0FBRXNCLFNBQVMsY0FBZnRCLEdBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxHQUFlLENBQUV1QixNQUFNLENBQUNDLElBQUk7Ozs7O3FEQUFROzBEQUNyRSw4REFBQ0gsTUFBSTtnREFBQ1osU0FBUyxFQUFDLG9CQUFvQjs7b0RBQUMsR0FBQztvREFBQ1QsSUFBSSxhQUFKQSxJQUFJLFdBQVcsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxJQUFlLEdBQWZBLElBQUksQ0FBRXNCLFNBQVMsY0FBZnRCLElBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxJQUFlLENBQUV1QixNQUFNLENBQUNFLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7O3FEQUFROzs7Ozs7NkNBQU07a0RBQ3BHLDhEQUFDQyxHQUFDO2tEQUFFM0IsSUFBSSxhQUFKQSxJQUFJLFdBQVcsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxJQUFlLEdBQWZBLElBQUksQ0FBRXNCLFNBQVMsY0FBZnRCLElBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxJQUFlLENBQUU0QixPQUFPLENBQUNGLEtBQUssQ0FBQyxJQUFJLEVBQUVHLEdBQUcsQ0FBQyxTQUFDQyxJQUFZO2lFQUFLLDhEQUFDSCxHQUFDOzBEQUFFRyxJQUFJOzs7OztzREFBSzt5Q0FBQSxDQUFDOzs7Ozs2Q0FBSzs7Ozs7O3FDQUNoRjswQ0FDTiw4REFBQ0MsSUFBRTtnQ0FBQ3RCLFNBQVMsRUFBQyw0Q0FBNEM7O2tEQUN0RCw4REFBQ3VCLElBQUU7d0NBQUN2QixTQUFTLEVBQUMsK0JBQStCOzswREFDekMsOERBQUNFLEtBQUc7Z0RBQUNDLEtBQUssRUFBQyw0QkFBNEI7Z0RBQUNILFNBQVMsRUFBQyx1QkFBdUI7Z0RBQUNJLElBQUksRUFBQyxNQUFNO2dEQUFDQyxPQUFPLEVBQUMsV0FBVztnREFBQ0MsTUFBTSxFQUFDLGNBQWM7Z0RBQUNDLFdBQVcsRUFBQyxHQUFHOzBEQUMzSSw0RUFBQ0MsTUFBSTtvREFBQ0MsYUFBYSxFQUFDLE9BQU87b0RBQUNDLGNBQWMsRUFBQyxPQUFPO29EQUFDQyxDQUFDLEVBQUMsK0pBQStKOzs7Ozt5REFBRzs7Ozs7cURBQ3JOOzBEQUNOLDhEQUFDQyxNQUFJOzBEQUFDLEdBQUM7Ozs7O3FEQUFPOzs7Ozs7NkNBQ2I7a0RBQ0wsOERBQUNXLElBQUU7d0NBQUN2QixTQUFTLEVBQUMsK0JBQStCOzswREFDekMsOERBQUNFLEtBQUc7Z0RBQUNzQixPQUFPLEVBQUUzQixVQUFVO2dEQUFFTSxLQUFLLEVBQUMsNEJBQTRCO2dEQUFDSCxTQUFTLEVBQUMsdUJBQXVCO2dEQUFDSSxJQUFJLEVBQUMsTUFBTTtnREFBQ0MsT0FBTyxFQUFDLFdBQVc7Z0RBQUNDLE1BQU0sRUFBQyxjQUFjO2dEQUFDQyxXQUFXLEVBQUMsR0FBRzswREFDaEssNEVBQUNDLE1BQUk7b0RBQUNDLGFBQWEsRUFBQyxPQUFPO29EQUFDQyxjQUFjLEVBQUMsT0FBTztvREFBQ0MsQ0FBQyxFQUFDLDZIQUE2SDs7Ozs7eURBQUc7Ozs7O3FEQUNuTDswREFDTiw4REFBQ0MsTUFBSTswREFBRXJCLElBQUksYUFBSkEsSUFBSSxXQUFXLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsSUFBZSxHQUFmQSxJQUFJLENBQUVzQixTQUFTLGNBQWZ0QixJQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsSUFBZSxDQUFFa0MsSUFBSTs7Ozs7cURBQVE7Ozs7Ozs2Q0FDbkM7a0RBQ0wsOERBQUNGLElBQUU7d0NBQUN2QixTQUFTLEVBQUMsZ0JBQWdCO2tEQUMxQiw0RUFBQ0UsS0FBRzs0Q0FBQ0MsS0FBSyxFQUFDLDRCQUE0Qjs0Q0FBQ0gsU0FBUyxFQUFDLHVCQUF1Qjs0Q0FBQ0ksSUFBSSxFQUFDLE1BQU07NENBQUNDLE9BQU8sRUFBQyxXQUFXOzRDQUFDQyxNQUFNLEVBQUMsY0FBYzs0Q0FBQ29CLGNBQVksRUFBQyxHQUFHO3NEQUM1SSw0RUFBQ2xCLE1BQUk7Z0RBQUNDLGFBQWEsRUFBQyxPQUFPO2dEQUFDQyxjQUFjLEVBQUMsT0FBTztnREFBQ0MsQ0FBQyxFQUFDLGdFQUFnRTs7Ozs7cURBQUc7Ozs7O2lEQUN0SDs7Ozs7NkNBQ0w7Ozs7OztxQ0FDSjs7Ozs7OzZCQUNIOzs7Ozs7cUJBQ0o7Ozs7OzthQUNILENBQ1Y7Q0FHSjtHQXZES3JCLFdBQVc7O1FBQ0VILGtEQUFTO1FBQ0NDLDJDQUFNO1FBQ1hDLDZEQUFTOzs7QUFIM0JDLEtBQUFBLFdBQVc7QUEwRGpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYXYsIFR3ZWV0IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHVzZU11dGF0ZSBmcm9tICcuLi8uLi9saWIvY2xpZW50L3VzZU11dGF0ZSc7XG5cbmludGVyZmFjZSBUd2VldFdpdGhGYXYgZXh0ZW5kcyBUd2VldCB7XG4gICAgZmF2OiBGYXY7XG59XG5cbmludGVyZmFjZSBJRGV0YWlsUmVzdWx0IHtcbiAgICBvazogYm9vbGVhbjtcbiAgICB0d2VldEluZm86IFR3ZWV0V2l0aEZhdjtcbn1cblxuXG5jb25zdCBUd2VldERldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGRhdGEsIG11dGF0ZSB9ID0gdXNlU1dSPElEZXRhaWxSZXN1bHQ+KHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfS9kZXRhaWxgIDogXCJcIik7XG4gICAgY29uc3QgW3RvZ2dsZUZhdl0gPSB1c2VNdXRhdGUocm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvdHdlZXQvJHtyb3V0ZXIucXVlcnkuaWR9L2ZhdmAgOiBcIlwiKTtcblxuXG4gICAgY29uc3Qgb25GYXZDbGljayA9ICgpID0+IHtcbiAgICAgICAgdG9nZ2xlRmF2KHt9KTtcbiAgICAgICAgbXV0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgfSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYm9yZGVyLXItWzFweF0gbWQ6bWwtNDggbWwtMjQgbWQ6dy1bMzcuNXJlbV0gdy05NlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bcmdiYSgyNTUsMjU1LDI1NSwwLjkpXSBiYWNrZHJvcC1ibHVyLXNtICBmbGV4ICBweC01IHB5LTMganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZml4ZWQgdG9wLTAgbWQ6dy1bMzcuNXJlbV0gdy05NlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJoLTYgdy02XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk03IDE2bC00LTRtMCAwbDQtNG0tNCA0aDE4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5OZXh0V2VldDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwIGdyaWQgZ3JpZC1jb2xzLVsyZnJfMTFmcl0gcC00IGJvcmRlci1bMXB4XVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1ibHVlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPntkYXRhPy50d2VldEluZm8/LndyaXRlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIG1sLTNcIj5Ae2RhdGE/LnR3ZWV0SW5mbz8ud3JpdGVyLmVtYWlsLnNwbGl0KFwiQFwiKVswXX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YT8udHdlZXRJbmZvPy5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpLm1hcCgoaXRlbTogc3RyaW5nKSA9PiA8cD57aXRlbX08L3A+KX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWdyYXktNjAwIHRleHQtc20ganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGgtNSB3LTVcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNOCAxMmguMDFNMTIgMTJoLjAxTTE2IDEyaC4wMU0yMSAxMmMwIDQuNDE4LTQuMDMgOC05IDhhOS44NjMgOS44NjMgMCAwMS00LjI1NS0uOTQ5TDMgMjBsMS4zOTUtMy43MkMzLjUxMiAxNS4wNDIgMyAxMy41NzQgMyAxMmMwLTQuNDE4IDQuMDMtOCA5LThzOSAzLjU4MiA5IDh6XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgb25DbGljaz17b25GYXZDbGlja30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaC01IHctNVwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnR3ZWV0SW5mbz8ubGlrZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBoLTUgdy01XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgZD1cIk00IDE2djFhMyAzIDAgMDAzIDNoMTBhMyAzIDAgMDAzLTN2LTFtLTQtOGwtNC00bTAgMEw4IDhtNC00djEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIClcblxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVHdlZXREZXRhaWw7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsInVzZU11dGF0ZSIsIlR3ZWV0RGV0YWlsIiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJtdXRhdGUiLCJ0b2dnbGVGYXYiLCJvbkZhdkNsaWNrIiwicHJldiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCIsInNwYW4iLCJ0d2VldEluZm8iLCJ3cml0ZXIiLCJuYW1lIiwiZW1haWwiLCJzcGxpdCIsInAiLCJtZXNzYWdlIiwibWFwIiwiaXRlbSIsInVsIiwibGkiLCJvbkNsaWNrIiwibGlrZSIsInN0cm9rZS13aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
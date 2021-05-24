webpackHotUpdate_N_E("pages/contact",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var _DarkToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DarkToggle */ "./components/DarkToggle.tsx");



var _jsxFileName = "C:\\Users\\danghuyhoang\\Desktop\\CV\\components\\Header.tsx",
    _s = $RefreshSig$();








function Header() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      subHeader = _useState[0],
      setSubHeader = _useState[1];

  var resizeSubHeader = function resizeSubHeader() {
    if (window.scrollY >= 60) {
      setSubHeader(0);
    } else {
      setSubHeader(1);
    }
  };

  if (true) {
    window.addEventListener('scroll', resizeSubHeader);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "block sticky top-0 lg:hidden h-auto bg-gray-900 dark:bg-black",
      id: "header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-between px-4  py-2 text-white dark:text-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
          as: "div",
          className: "relative inline-block text-left pt-1",
          children: function children(_ref) {
            var open = _ref.open;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Button, {
                  className: "focus:outline-none",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoMenuSharp"], {
                    className: "text-3xl",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Transition"], {
                show: open,
                as: react__WEBPACK_IMPORTED_MODULE_2__["Fragment"],
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Items, {
                  "static": true,
                  className: "absolute left-2 w-60 origin-top-right bg-white dark:bg-black dark:shadow-xl rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "px-1 py-1 ",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoAlertCircleOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 79,
                          columnNumber: 27
                        }, _this), "About"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 75,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 74,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/education-skills",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoSchoolOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 27
                        }, _this), "Education & Skills"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/experience",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoBriefcaseOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
                          columnNumber: 27
                        }, _this), "Experience"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/projects",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoAlbumsOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 106,
                          columnNumber: 27
                        }, _this), "Projects"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/awards-certification",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoRibbonOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 115,
                          columnNumber: 27
                        }, _this), "Awards & Certifications"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/blogs",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoChatboxEllipsesOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 124,
                          columnNumber: 27
                        }, _this), "Blogs"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "/contact",
                        className: "bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-2 text-sm",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoMailOutline"], {
                          className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 133,
                          columnNumber: 27
                        }, _this), "Contact"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        href: "https://dntandan.ml",
                        className: "text-center border-t bg-violet-500 text-gray-900 group flex rounded-md items-center w-full px-2 py-3 mt-1 text-sm",
                        children: "Made with \uD83D\uDC99 by @dntandan"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)]
            }, void 0, true);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex gap-2 items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoCode"], {
              className: "text-2xl"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "text-lg font-bold",
              children: "johndoe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {
            classE: "text-white"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden lg:block h-auto bg-gray-900 dark:bg-black",
      id: "header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex flex-row justify-between px-8 py-4 text-white dark:text-white",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: ["Made with \uD83D\uDC99 by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/",
              children: "@hoangdh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 31
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex gap-2 items-center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoCode"], {
              className: "text-2xl"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
              className: "text-lg font-bold",
              children: "HoangDh"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "pt-1",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-white text-xl flex gap-5 dark:text-white",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://twitter.com/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLogoTwitter"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://linkedin.com/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLogoLinkedin"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://github.com/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLogoGithub"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://facebook.com/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLogoFacebook"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://instagram.com/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoLogoInstagram"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "https://telegram.me/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoPaperPlane"], {
                className: "hover:text-blue-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "hidden lg:block sticky top-0 bg-white h-auto border-b dark:bg-gray-800 dark:border-black",
      id: "sub-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: subHeader ? 'pt-8 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75' : 'pt-2 gap-6 text-md xl:text-lg flex flex-col lg:flex-row justify-center transition ease-in-out duration-75',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: router.pathname == '/' ? 'p-2 w-auto flex border-b border-red-500 items-center' : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoAlertCircleOutline"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 226,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "ml-2",
              children: "About"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/education-skills",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: router.pathname == '/education-skills' ? 'p-2 w-auto flex border-b border-red-500 items-center' : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoSchoolOutline"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "ml-2",
              children: "Education & Skills"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/experience",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: router.pathname == '/experience' ? 'p-2 w-auto flex border-b border-red-500 items-center' : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoBriefcaseOutline"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "ml-2",
              children: "Experience"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 251,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/projects",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: router.pathname == '/projects' ? 'p-2 w-auto flex border-b border-red-500 items-center' : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoAlbumsOutline"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "ml-2",
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/contact",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: router.pathname == '/contact' ? 'p-2 w-auto flex border-b border-red-500 items-center' : 'p-2 w-auto flex border-b border-transparent  hover:border-gray-400 items-center',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__["IoMailOutline"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 274,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "ml-2",
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 275,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "p-2 ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkToggle__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 279,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Header, "ANsZyFhkaOH9aPRS2boOqaw/wp8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwic3ViSGVhZGVyIiwic2V0U3ViSGVhZGVyIiwicmVzaXplU3ViSGVhZGVyIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuIiwiRnJhZ21lbnQiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRCtCLGtCQUVHQyxzREFBUSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BRXhCQyxTQUZ3QjtBQUFBLE1BRWJDLFlBRmE7O0FBSS9CLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJQyxNQUFNLENBQUNDLE9BQVAsSUFBa0IsRUFBdEIsRUFBMEI7QUFDeEJILGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGtCQUFZLENBQUMsQ0FBRCxDQUFaO0FBQ0Q7QUFDRixHQU5EOztBQVFBLFlBQW1DO0FBQ2pDRSxVQUFNLENBQUNFLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDSCxlQUFsQztBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBRUU7QUFDRSxlQUFTLEVBQUMsK0RBRFo7QUFFRSxRQUFFLEVBQUMsUUFGTDtBQUFBLDZCQUlFO0FBQUssaUJBQVMsRUFBQyw0REFBZjtBQUFBLGdDQUNFLHFFQUFDLHNEQUFEO0FBQU0sWUFBRSxFQUFDLEtBQVQ7QUFBZSxtQkFBUyxFQUFDLHNDQUF6QjtBQUFBLG9CQUNHO0FBQUEsZ0JBQUdJLElBQUgsUUFBR0EsSUFBSDtBQUFBLGdDQUNDO0FBQUEs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O0FBQUE7QUFBQTtBQUFBLGdCQTNDRixlQXVERSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUNQWCxNQUFNLENBQUNXLFFBQVAsSUFBbUIsVUFBbkIsR0FDSSxzREFESixHQUVJLGlGQUpSO0FBQUEsb0NBT0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFQRixlQVFFO0FBQUksdUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkRGLGVBbUVFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0UscUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuS0Y7QUFBQSxrQkFERjtBQW1QRDs7R0FuUXVCWixNO1VBQ1BFLHFEOzs7S0FET0YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jb250YWN0LmY1MjliNjA2MjdmODM0OWU5ODgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBJb0FsZXJ0Q2lyY2xlT3V0bGluZSxcbiAgSW9Cb29rT3V0bGluZSxcbiAgSW9BbGJ1bXNPdXRsaW5lLFxuICBJb0J1bGJPdXRsaW5lLFxuICBJb01haWxPdXRsaW5lLFxuICBJb01lbnVTaGFycCxcbiAgSW9DaGF0Ym94RWxsaXBzZXNPdXRsaW5lLFxuICBJb1JpYmJvbk91dGxpbmUsXG4gIElvU2Nob29sT3V0bGluZSxcbiAgSW9CcmllZmNhc2VPdXRsaW5lLFxuICBJb0xvZ29Ud2l0dGVyLFxuICBJb0xvZ29MaW5rZWRpbixcbiAgSW9Mb2dvR2l0aHViLFxuICBJb0xvZ29GYWNlYm9vayxcbiAgSW9Mb2dvSW5zdGFncmFtLFxuICBJb1BhcGVyUGxhbmUsXG4gIElvQ29kZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcbmltcG9ydCBEYXJrVG9nZ2xlIGZyb20gJy4vRGFya1RvZ2dsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzdWJIZWFkZXIsIHNldFN1YkhlYWRlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByZXNpemVTdWJIZWFkZXIgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDYwKSB7XG4gICAgICBzZXRTdWJIZWFkZXIoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFN1YkhlYWRlcigxKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHJlc2l6ZVN1YkhlYWRlcik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogTW9iaWxlIE5hdiBTdGFydHMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHN0aWNreSB0b3AtMCBsZzpoaWRkZW4gaC1hdXRvIGJnLWdyYXktOTAwIGRhcms6YmctYmxhY2tcIlxuICAgICAgICBpZD1cImhlYWRlclwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNCAgcHktMiB0ZXh0LXdoaXRlIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgIDxNZW51IGFzPVwiZGl2XCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaW5saW5lLWJsb2NrIHRleHQtbGVmdCBwdC0xXCI+XG4gICAgICAgICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxNZW51LkJ1dHRvbiBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPElvTWVudVNoYXJwIGNsYXNzTmFtZT1cInRleHQtM3hsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgIHNob3c9e29wZW59XG4gICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMTAwXCJcbiAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cInRyYW5zZm9ybSBvcGFjaXR5LTAgc2NhbGUtOTVcIlxuICAgICAgICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zZm9ybSBvcGFjaXR5LTEwMCBzY2FsZS0xMDBcIlxuICAgICAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tNzVcIlxuICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNmb3JtIG9wYWNpdHktMTAwIHNjYWxlLTEwMFwiXG4gICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwidHJhbnNmb3JtIG9wYWNpdHktMCBzY2FsZS05NVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbXNcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiB3LTYwIG9yaWdpbi10b3AtcmlnaHQgYmctd2hpdGUgZGFyazpiZy1ibGFjayBkYXJrOnNoYWRvdy14bCByb3VuZGVkLW1kIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTEgcHktMSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIHRleHQtZ3JheS05MDAgZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9BbGVydENpcmNsZU91dGxpbmUgY2xhc3NOYW1lPVwidy01IGgtNSBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9lZHVjYXRpb24tc2tpbGxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwMCB0ZXh0LWdyYXktOTAwIGdyb3VwIGZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB4LTIgcHktMiB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElvU2Nob29sT3V0bGluZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb24gJiBTa2lsbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9leHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdmlvbGV0LTUwMCB0ZXh0LWdyYXktOTAwIGdyb3VwIGZsZXggcm91bmRlZC1tZCBpdGVtcy1jZW50ZXIgdy1mdWxsIHB4LTIgcHktMiB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElvQnJpZWZjYXNlT3V0bGluZSBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvcHJvamVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIHRleHQtZ3JheS05MDAgZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9BbGJ1bXNPdXRsaW5lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYXdhcmRzLWNlcnRpZmljYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIHRleHQtZ3JheS05MDAgZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9SaWJib25PdXRsaW5lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF3YXJkcyAmIENlcnRpZmljYXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYmxvZ3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy12aW9sZXQtNTAwIHRleHQtZ3JheS05MDAgZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0yIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW9DaGF0Ym94RWxsaXBzZXNPdXRsaW5lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXZpb2xldC01MDAgdGV4dC1ncmF5LTkwMCBncm91cCBmbGV4IHJvdW5kZWQtbWQgaXRlbXMtY2VudGVyIHctZnVsbCBweC0yIHB5LTIgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJb01haWxPdXRsaW5lIGNsYXNzTmFtZT1cInctNSBoLTUgbXItMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG50YW5kYW4ubWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBib3JkZXItdCBiZy12aW9sZXQtNTAwIHRleHQtZ3JheS05MDAgZ3JvdXAgZmxleCByb3VuZGVkLW1kIGl0ZW1zLWNlbnRlciB3LWZ1bGwgcHgtMiBweS0zIG10LTEgdGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1hZGUgd2l0aCDwn5KZIGJ5IEBkbnRhbmRhblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvTWVudS5JdGVtcz5cbiAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPElvQ29kZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIC8+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPmpvaG5kb2U8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxuICAgICAgICAgICAgPERhcmtUb2dnbGUgY2xhc3NFPVwidGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogTW9iaWxlIE5hdiBFbmRzICovfVxuXG4gICAgICB7LyogTGFyZ2UgU2NyZWVuIE5hdiBTdGFydHMgKi99XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBoLWF1dG8gYmctZ3JheS05MDAgZGFyazpiZy1ibGFja1wiXG4gICAgICAgIGlkPVwiaGVhZGVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweC04IHB5LTQgdGV4dC13aGl0ZSBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE1hZGUgd2l0aCDwn5KZIGJ5IDxMaW5rIGhyZWY9XCIvXCI+QGhvYW5nZGg8L0xpbms+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPElvQ29kZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiIC8+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPkhvYW5nRGg8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmbGV4IGdhcC01IGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIj5cbiAgICAgICAgICAgICAgICA8SW9Mb2dvVHdpdHRlciBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtMzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vXCI+XG4gICAgICAgICAgICAgICAgPElvTG9nb0xpbmtlZGluIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmx1ZS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vXCI+XG4gICAgICAgICAgICAgICAgPElvTG9nb0dpdGh1YiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtMzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vXCI+XG4gICAgICAgICAgICAgICAgPElvTG9nb0ZhY2Vib29rIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmx1ZS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2luc3RhZ3JhbS5jb20vXCI+XG4gICAgICAgICAgICAgICAgPElvTG9nb0luc3RhZ3JhbSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LWJsdWUtMzAwXCIgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9cIj5cbiAgICAgICAgICAgICAgICA8SW9QYXBlclBsYW5lIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtYmx1ZS0zMDBcIiAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiBTdWJoZWFkZXIgU3RhcnRzICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgc3RpY2t5IHRvcC0wIGJnLXdoaXRlIGgtYXV0byBib3JkZXItYiBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWJsYWNrXCJcbiAgICAgICAgaWQ9XCJzdWItaGVhZGVyXCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICBzdWJIZWFkZXJcbiAgICAgICAgICAgICAgPyAncHQtOCBnYXAtNiB0ZXh0LW1kIHhsOnRleHQtbGcgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTc1J1xuICAgICAgICAgICAgICA6ICdwdC0yIGdhcC02IHRleHQtbWQgeGw6dGV4dC1sZyBmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tNzUnXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gJy8nXG4gICAgICAgICAgICAgICAgICA/ICdwLTIgdy1hdXRvIGZsZXggYm9yZGVyLWIgYm9yZGVyLXJlZC01MDAgaXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgOiAncC0yIHctYXV0byBmbGV4IGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCAgaG92ZXI6Ym9yZGVyLWdyYXktNDAwIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW9BbGVydENpcmNsZU91dGxpbmUgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTJcIj5BYm91dDwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lZHVjYXRpb24tc2tpbGxzXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09ICcvZWR1Y2F0aW9uLXNraWxscydcbiAgICAgICAgICAgICAgICAgID8gJ3AtMiB3LWF1dG8gZmxleCBib3JkZXItYiBib3JkZXItcmVkLTUwMCBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgICAgICA6ICdwLTIgdy1hdXRvIGZsZXggYm9yZGVyLWIgYm9yZGVyLXRyYW5zcGFyZW50ICBob3Zlcjpib3JkZXItZ3JheS00MDAgaXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJb1NjaG9vbE91dGxpbmUgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTJcIj5FZHVjYXRpb24gJiBTa2lsbHM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhwZXJpZW5jZVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSAnL2V4cGVyaWVuY2UnXG4gICAgICAgICAgICAgICAgICA/ICdwLTIgdy1hdXRvIGZsZXggYm9yZGVyLWIgYm9yZGVyLXJlZC01MDAgaXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgOiAncC0yIHctYXV0byBmbGV4IGJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCAgaG92ZXI6Ym9yZGVyLWdyYXktNDAwIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SW9CcmllZmNhc2VPdXRsaW5lIC8+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtbC0yXCI+RXhwZXJpZW5jZTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PSAnL3Byb2plY3RzJ1xuICAgICAgICAgICAgICAgICAgPyAncC0yIHctYXV0byBmbGV4IGJvcmRlci1iIGJvcmRlci1yZWQtNTAwIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgICAgIDogJ3AtMiB3LWF1dG8gZmxleCBib3JkZXItYiBib3JkZXItdHJhbnNwYXJlbnQgIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElvQWxidW1zT3V0bGluZSAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWwtMlwiPlByb2plY3RzPC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT0gJy9jb250YWN0J1xuICAgICAgICAgICAgICAgICAgPyAncC0yIHctYXV0byBmbGV4IGJvcmRlci1iIGJvcmRlci1yZWQtNTAwIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgICAgIDogJ3AtMiB3LWF1dG8gZmxleCBib3JkZXItYiBib3JkZXItdHJhbnNwYXJlbnQgIGhvdmVyOmJvcmRlci1ncmF5LTQwMCBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPElvTWFpbE91dGxpbmUgLz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTJcIj5Db250YWN0PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBcIj5cbiAgICAgICAgICAgIDxEYXJrVG9nZ2xlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogTGFyZ2UgU2NyZWVuIE5hdiBFbmRzICovfVxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
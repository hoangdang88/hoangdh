webpackHotUpdate_N_E("pages/experience",{

/***/ "./components/InternshipCard.tsx":
/*!***************************************!*\
  !*** ./components/InternshipCard.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InternshipCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");


var _jsxFileName = "C:\\Users\\danghuyhoang\\Desktop\\CV\\components\\InternshipCard.tsx";



function InternshipCard(props) {
  var _this = this;

  var isDemoLink = props.link;
  var demoLink;

  if (isDemoLink) {
    demoLink = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: isDemoLink,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex pt-3 gap-1 items-center ",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoUnlinkOutline"], {
          className: "flex-none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-sm text-blue-800 hover:text-blue-600 hover:underline",
          children: props.linkText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this);
  } else {
    demoLink = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-4",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex gap-2 items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoNewspaperOutline"], {
          className: "flex-none text-2xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "lg:text-xl font-semibold",
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:ml-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "pt-2 lg:text-lg",
          children: props.place
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "pb-2 text-sm lg:text-md",
          children: props.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:ml-8",
        children: props.projects.map(function (el, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "pt-2 lg:text-lg",
            children: el.projectName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = InternshipCard;

var _c;

$RefreshReg$(_c, "InternshipCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRlcm5zaGlwQ2FyZC50c3giXSwibmFtZXMiOlsiSW50ZXJuc2hpcENhcmQiLCJwcm9wcyIsImlzRGVtb0xpbmsiLCJsaW5rIiwiZGVtb0xpbmsiLCJsaW5rVGV4dCIsInRpdGxlIiwicGxhY2UiLCJkYXRlIiwicHJvamVjdHMiLCJtYXAiLCJlbCIsImluZGV4IiwicHJvamVjdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM1QyxNQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsSUFBekI7QUFDQSxNQUFJQyxRQUFKOztBQUNBLE1BQUlGLFVBQUosRUFBZ0I7QUFDZEUsWUFBUSxnQkFDTixxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUYsVUFBWjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNFLHFFQUFDLCtEQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQywyREFBYjtBQUFBLG9CQUNHRCxLQUFLLENBQUNJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFVRCxHQVhELE1BV087QUFDTEQsWUFBUSxnQkFBRyx1SkFBWDtBQUNEOztBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFLHFFQUFDLGtFQUFEO0FBQW9CLG1CQUFTLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQywwQkFBZDtBQUFBLG9CQUEwQ0gsS0FBSyxDQUFDSztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSxvQkFBaUNMLEtBQUssQ0FBQ007QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBLG9CQUF5Q04sS0FBSyxDQUFDTztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxrQkFDR1AsS0FBSyxDQUFDUSxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMO0FBQUEsOEJBQ2xCO0FBQUkscUJBQVMsRUFBQyxpQkFBZDtBQUFBLHNCQUFpQ0QsRUFBRSxDQUFDRTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURrQjtBQUFBLFNBQW5CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JEO0tBckN1QmIsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmllbmNlLmVhYjhiZmUwZjllYmU2MWM2MTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElvTmV3c3BhcGVyT3V0bGluZSxcbiAgSW9TY2hvb2xPdXRsaW5lLFxuICBJb1VubGlua091dGxpbmUsXG59IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVybnNoaXBDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGlzRGVtb0xpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgZGVtb0xpbms7XG4gIGlmIChpc0RlbW9MaW5rKSB7XG4gICAgZGVtb0xpbmsgPSAoXG4gICAgICA8TGluayBocmVmPXtpc0RlbW9MaW5rfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB0LTMgZ2FwLTEgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgIDxJb1VubGlua091dGxpbmUgY2xhc3NOYW1lPVwiZmxleC1ub25lXCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgIHtwcm9wcy5saW5rVGV4dH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZGVtb0xpbmsgPSA8PjwvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPElvTmV3c3BhcGVyT3V0bGluZSBjbGFzc05hbWU9XCJmbGV4LW5vbmUgdGV4dC0yeGxcIiAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWwtOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdC0yIGxnOnRleHQtbGdcIj57cHJvcHMucGxhY2V9PC9oMz5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMiB0ZXh0LXNtIGxnOnRleHQtbWRcIj57cHJvcHMuZGF0ZX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptbC04XCI+XG4gICAgICAgICAge3Byb3BzLnByb2plY3RzLm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHQtMiBsZzp0ZXh0LWxnXCI+e2VsLnByb2plY3ROYW1lfTwvaDM+XG4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
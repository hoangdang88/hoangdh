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
      }, this), props.projects.map(function (el, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:ml-8",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            className: "pt-2 lg:text-lg",
            children: el.projectName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "pb-2 text-sm lg:text-md",
            children: el.teamSize
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "pb-2 text-sm lg:text-md",
            children: el.position
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "pb-2 text-sm lg:text-md",
            children: el.responsibilities
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "pb-2 text-sm lg:text-md",
            children: el.desc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
            className: "pb-2 text-sm lg:text-md",
            children: el.tech
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this);
      })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRlcm5zaGlwQ2FyZC50c3giXSwibmFtZXMiOlsiSW50ZXJuc2hpcENhcmQiLCJwcm9wcyIsImlzRGVtb0xpbmsiLCJsaW5rIiwiZGVtb0xpbmsiLCJsaW5rVGV4dCIsInRpdGxlIiwicGxhY2UiLCJkYXRlIiwicHJvamVjdHMiLCJtYXAiLCJlbCIsImluZGV4IiwicHJvamVjdE5hbWUiLCJ0ZWFtU2l6ZSIsInBvc2l0aW9uIiwicmVzcG9uc2liaWxpdGllcyIsImRlc2MiLCJ0ZWNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTWUsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFDNUMsTUFBTUMsVUFBVSxHQUFHRCxLQUFLLENBQUNFLElBQXpCO0FBQ0EsTUFBSUMsUUFBSjs7QUFDQSxNQUFJRixVQUFKLEVBQWdCO0FBQ2RFLFlBQVEsZ0JBQ04scUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUVGLFVBQVo7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxnQ0FDRSxxRUFBQywrREFBRDtBQUFpQixtQkFBUyxFQUFDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLG1CQUFTLEVBQUMsMkRBQWI7QUFBQSxvQkFDR0QsS0FBSyxDQUFDSTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBVUQsR0FYRCxNQVdPO0FBQ0xELFlBQVEsZ0JBQUcsdUpBQVg7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxnQ0FDRSxxRUFBQyxrRUFBRDtBQUFvQixtQkFBUyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsMEJBQWQ7QUFBQSxvQkFBMENILEtBQUssQ0FBQ0s7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBQyxTQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsb0JBQWlDTCxLQUFLLENBQUNNO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMseUJBQWQ7QUFBQSxvQkFBeUNOLEtBQUssQ0FBQ087QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixFQVNLUCxLQUFLLENBQUNRLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxFQUFELEVBQUtDLEtBQUw7QUFBQSw0QkFDbEI7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQkFBaUNELEVBQUUsQ0FBQ0U7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUkscUJBQVMsRUFBQyx5QkFBZDtBQUFBLHNCQUF5Q0YsRUFBRSxDQUFDRztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0k7QUFBSSxxQkFBUyxFQUFDLHlCQUFkO0FBQUEsc0JBQXlDSCxFQUFFLENBQUNJO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEosZUFJSTtBQUFJLHFCQUFTLEVBQUMseUJBQWQ7QUFBQSxzQkFBeUNKLEVBQUUsQ0FBQ0s7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQUtJO0FBQUkscUJBQVMsRUFBQyx5QkFBZDtBQUFBLHNCQUF5Q0wsRUFBRSxDQUFDTTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLGVBTUk7QUFBSSxxQkFBUyxFQUFDLHlCQUFkO0FBQUEsc0JBQXlDTixFQUFFLENBQUNPO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQjtBQUFBLE9BQW5CLENBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3QkQ7S0F6Q3VCbEIsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leHBlcmllbmNlLjFiZDQzNDcyN2FmMDc5NTg5YTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIElvTmV3c3BhcGVyT3V0bGluZSxcbiAgSW9TY2hvb2xPdXRsaW5lLFxuICBJb1VubGlua091dGxpbmUsXG59IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVybnNoaXBDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGlzRGVtb0xpbmsgPSBwcm9wcy5saW5rO1xuICBsZXQgZGVtb0xpbms7XG4gIGlmIChpc0RlbW9MaW5rKSB7XG4gICAgZGVtb0xpbmsgPSAoXG4gICAgICA8TGluayBocmVmPXtpc0RlbW9MaW5rfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB0LTMgZ2FwLTEgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICAgIDxJb1VubGlua091dGxpbmUgY2xhc3NOYW1lPVwiZmxleC1ub25lXCIgLz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtYmx1ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgIHtwcm9wcy5saW5rVGV4dH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZGVtb0xpbmsgPSA8PjwvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPElvTmV3c3BhcGVyT3V0bGluZSBjbGFzc05hbWU9XCJmbGV4LW5vbmUgdGV4dC0yeGxcIiAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj57cHJvcHMudGl0bGV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWwtOFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdC0yIGxnOnRleHQtbGdcIj57cHJvcHMucGxhY2V9PC9oMz5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMiB0ZXh0LXNtIGxnOnRleHQtbWRcIj57cHJvcHMuZGF0ZX08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cHJvcHMucHJvamVjdHMubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWwtOFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdC0yIGxnOnRleHQtbGdcIj57ZWwucHJvamVjdE5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMiB0ZXh0LXNtIGxnOnRleHQtbWRcIj57ZWwudGVhbVNpemV9PC9oNT5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMiB0ZXh0LXNtIGxnOnRleHQtbWRcIj57ZWwucG9zaXRpb259PC9oNT5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwicGItMiB0ZXh0LXNtIGxnOnRleHQtbWRcIj57ZWwucmVzcG9uc2liaWxpdGllc308L2g1PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYi0yIHRleHQtc20gbGc6dGV4dC1tZFwiPntlbC5kZXNjfTwvaDU+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInBiLTIgdGV4dC1zbSBsZzp0ZXh0LW1kXCI+e2VsLnRlY2h9PC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
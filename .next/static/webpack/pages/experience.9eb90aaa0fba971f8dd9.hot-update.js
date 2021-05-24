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
/* harmony import */ var _components_ProjectCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProjectCards */ "./components/ProjectCards.tsx");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");


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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoUnlinkOutline"], {
          className: "flex-none"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-sm text-blue-800 hover:text-blue-600 hover:underline",
          children: props.linkText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoNewspaperOutline"], {
          className: "flex-none text-2xl"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "lg:text-xl font-semibold",
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:ml-8",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          className: "pt-2 lg:text-lg",
          children: props.place
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          className: "pb-2 text-sm lg:text-md",
          children: props.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), props.projects.map(function (el, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ProjectCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: el.projectName,
          subTitle: el.position,
          desc: el.desc,
          link: true,
          linkText: true,
          stacks: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRlcm5zaGlwQ2FyZC50c3giXSwibmFtZXMiOlsiSW50ZXJuc2hpcENhcmQiLCJwcm9wcyIsImlzRGVtb0xpbmsiLCJsaW5rIiwiZGVtb0xpbmsiLCJsaW5rVGV4dCIsInRpdGxlIiwicGxhY2UiLCJkYXRlIiwicHJvamVjdHMiLCJtYXAiLCJlbCIsImluZGV4IiwicHJvamVjdE5hbWUiLCJwb3NpdGlvbiIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFNZSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM1QyxNQUFNQyxVQUFVLEdBQUdELEtBQUssQ0FBQ0UsSUFBekI7QUFDQSxNQUFJQyxRQUFKOztBQUNBLE1BQUlGLFVBQUosRUFBZ0I7QUFDZEUsWUFBUSxnQkFDTixxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUYsVUFBWjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNFLHFFQUFDLCtEQUFEO0FBQWlCLG1CQUFTLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsbUJBQVMsRUFBQywyREFBYjtBQUFBLG9CQUNHRCxLQUFLLENBQUNJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFVRCxHQVhELE1BV087QUFDTEQsWUFBUSxnQkFBRyx1SkFBWDtBQUNEOztBQUNELHNCQUNFO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFLHFFQUFDLGtFQUFEO0FBQW9CLG1CQUFTLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQywwQkFBZDtBQUFBLG9CQUEwQ0gsS0FBSyxDQUFDSztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSxvQkFBaUNMLEtBQUssQ0FBQ007QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUksbUJBQVMsRUFBQyx5QkFBZDtBQUFBLG9CQUF5Q04sS0FBSyxDQUFDTztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLEVBU0tQLEtBQUssQ0FBQ1EsUUFBTixDQUFlQyxHQUFmLENBQW1CLFVBQUNDLEVBQUQsRUFBS0MsS0FBTDtBQUFBLDRCQUNsQixxRUFBQyxnRUFBRDtBQUNBLGVBQUssRUFBRUQsRUFBRSxDQUFDRSxXQURWO0FBRUEsa0JBQVEsRUFBRUYsRUFBRSxDQUFDRyxRQUZiO0FBR0EsY0FBSSxFQUFFSCxFQUFFLENBQUNJLElBSFQ7QUFJQSxjQUFJLE1BSko7QUFLQSxrQkFBUSxNQUxSO0FBTUEsZ0JBQU07QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURrQjtBQUFBLE9BQW5CLENBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUF3QkQ7S0F6Q3VCZixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaWVuY2UuOWViOTBhYWEwZmJhOTcxZjhkZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvamVjdENhcmRzIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZHMnO1xuaW1wb3J0IHtcbiAgSW9OZXdzcGFwZXJPdXRsaW5lLFxuICBJb1NjaG9vbE91dGxpbmUsXG4gIElvVW5saW5rT3V0bGluZSxcbn0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50ZXJuc2hpcENhcmQocHJvcHMpIHtcbiAgY29uc3QgaXNEZW1vTGluayA9IHByb3BzLmxpbms7XG4gIGxldCBkZW1vTGluaztcbiAgaWYgKGlzRGVtb0xpbmspIHtcbiAgICBkZW1vTGluayA9IChcbiAgICAgIDxMaW5rIGhyZWY9e2lzRGVtb0xpbmt9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHQtMyBnYXAtMSBpdGVtcy1jZW50ZXIgXCI+XG4gICAgICAgICAgPElvVW5saW5rT3V0bGluZSBjbGFzc05hbWU9XCJmbGV4LW5vbmVcIiAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ibHVlLTgwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAge3Byb3BzLmxpbmtUZXh0fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpbms+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBkZW1vTGluayA9IDw+PC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8SW9OZXdzcGFwZXJPdXRsaW5lIGNsYXNzTmFtZT1cImZsZXgtbm9uZSB0ZXh0LTJ4bFwiIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptbC04XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB0LTIgbGc6dGV4dC1sZ1wiPntwcm9wcy5wbGFjZX08L2gzPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwYi0yIHRleHQtc20gbGc6dGV4dC1tZFwiPntwcm9wcy5kYXRlfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtwcm9wcy5wcm9qZWN0cy5tYXAoKGVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2plY3RDYXJkc1xuICAgICAgICAgICAgdGl0bGU9e2VsLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgc3ViVGl0bGU9e2VsLnBvc2l0aW9ufVxuICAgICAgICAgICAgZGVzYz17ZWwuZGVzY31cbiAgICAgICAgICAgIGxpbmtcbiAgICAgICAgICAgIGxpbmtUZXh0XG4gICAgICAgICAgICBzdGFja3NcbiAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
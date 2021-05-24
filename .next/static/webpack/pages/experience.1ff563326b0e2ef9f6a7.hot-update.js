webpackHotUpdate_N_E("pages/experience",{

/***/ "./components/MentorshipCard.tsx":
false,

/***/ "./components/VolunteerCard.tsx":
false,

/***/ "./pages/experience.tsx":
/*!******************************!*\
  !*** ./pages/experience.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return skillsAndExperience; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_InternshipCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/InternshipCard */ "./components/InternshipCard.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\danghuyhoang\\Desktop\\CV\\pages\\experience.tsx";




function skillsAndExperience() {
  var sxperienceDatas = [{
    title: 'CelebMark (Event & Celebrity Management Platform)',
    date: 'Feb 2019 – May 2019',
    place: 'Mumbai, India',
    desc: 'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
    link: 'https://github.com/dntandan/celebmark',
    linkText: 'Github Repository'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Expereience :: HoangDh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      border: "border-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "text-lg font-semibold mt-3",
        children: "Internships"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InternshipCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: internData.celebmark.title,
        date: internData.celebmark.date,
        place: internData.celebmark.place,
        desc: internData.celebmark.desc,
        link: internData.celebmark.link,
        linkText: internData.celebmark.linkText
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpZW5jZS50c3giXSwibmFtZXMiOlsic2tpbGxzQW5kRXhwZXJpZW5jZSIsInN4cGVyaWVuY2VEYXRhcyIsInRpdGxlIiwiZGF0ZSIsInBsYWNlIiwiZGVzYyIsImxpbmsiLCJsaW5rVGV4dCIsImludGVybkRhdGEiLCJjZWxlYm1hcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFFZSxTQUFTQSxtQkFBVCxHQUErQjtBQUM1QyxNQUFNQyxlQUFlLEdBQUcsQ0FDdEI7QUFDRUMsU0FBSyxFQUFFLG1EQURUO0FBRUVDLFFBQUksRUFBRSxxQkFGUjtBQUdFQyxTQUFLLEVBQUUsZUFIVDtBQUlFQyxRQUFJLEVBQ0YsNkhBTEo7QUFNRUMsUUFBSSxFQUFFLHVDQU5SO0FBT0VDLFlBQVEsRUFBRTtBQVBaLEdBRHNCLENBQXhCO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMsMERBQUQ7QUFBUSxZQUFNLEVBQUMsVUFBZjtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBQyw0QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsa0VBQUQ7QUFDRSxhQUFLLEVBQUVDLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQlAsS0FEOUI7QUFFRSxZQUFJLEVBQUVNLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQk4sSUFGN0I7QUFHRSxhQUFLLEVBQUVLLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQkwsS0FIOUI7QUFJRSxZQUFJLEVBQUVJLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQkosSUFKN0I7QUFLRSxZQUFJLEVBQUVHLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQkgsSUFMN0I7QUFNRSxnQkFBUSxFQUFFRSxVQUFVLENBQUNDLFNBQVgsQ0FBcUJGO0FBTmpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBa0JEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaWVuY2UuMWZmNTYzMzI2YjBlMmVmOWY2YTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEludGVybnNoaXBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9JbnRlcm5zaGlwQ2FyZCc7XG5pbXBvcnQgTWVudG9yc2hpcENhcmQgZnJvbSAnQC9jb21wb25lbnRzL01lbnRvcnNoaXBDYXJkJztcbmltcG9ydCBWb2x1bnRlZXJDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Wb2x1bnRlZXJDYXJkJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNraWxsc0FuZEV4cGVyaWVuY2UoKSB7XG4gIGNvbnN0IHN4cGVyaWVuY2VEYXRhcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0NlbGViTWFyayAoRXZlbnQgJiBDZWxlYnJpdHkgTWFuYWdlbWVudCBQbGF0Zm9ybSknLFxuICAgICAgZGF0ZTogJ0ZlYiAyMDE5IOKAkyBNYXkgMjAxOScsXG4gICAgICBwbGFjZTogJ011bWJhaSwgSW5kaWEnLFxuICAgICAgZGVzYzpcbiAgICAgICAgJ0RldmVsb3BlZCBSZWFjdCBhbmQgRGphbmdvIGJhc2VkIHdlYiBhcHBsaWNhdGlvbiB3aXRoIENSVUQgQVBJLCB1c2VyIHNpZ251cCwgYm9va2luZ3MsIHJlZ2lzdHJhdGlvbiBhbmQgZXZlbnQgbGlzdGluZywgZXRjLicsXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2RudGFuZGFuL2NlbGVibWFyaycsXG4gICAgICBsaW5rVGV4dDogJ0dpdGh1YiBSZXBvc2l0b3J5JyxcbiAgICB9LFxuICBdO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FeHBlcmVpZW5jZSA6OiBIb2FuZ0RoPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgYm9yZGVyPVwiYm9yZGVyLTJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC0zXCI+SW50ZXJuc2hpcHM8L2gzPlxuICAgICAgICA8SW50ZXJuc2hpcENhcmRcbiAgICAgICAgICB0aXRsZT17aW50ZXJuRGF0YS5jZWxlYm1hcmsudGl0bGV9XG4gICAgICAgICAgZGF0ZT17aW50ZXJuRGF0YS5jZWxlYm1hcmsuZGF0ZX1cbiAgICAgICAgICBwbGFjZT17aW50ZXJuRGF0YS5jZWxlYm1hcmsucGxhY2V9XG4gICAgICAgICAgZGVzYz17aW50ZXJuRGF0YS5jZWxlYm1hcmsuZGVzY31cbiAgICAgICAgICBsaW5rPXtpbnRlcm5EYXRhLmNlbGVibWFyay5saW5rfVxuICAgICAgICAgIGxpbmtUZXh0PXtpbnRlcm5EYXRhLmNlbGVibWFyay5saW5rVGV4dH1cbiAgICAgICAgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
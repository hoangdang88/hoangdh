webpackHotUpdate_N_E("pages/experience",{

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
  var _this = this;

  var sxperienceDatas = [{
    title: 'NewSaigonSoft Corporation (NSS)',
    date: '10/2016 – 04/2018',
    place: '',
    desc: 'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
    link: '',
    linkText: '',
    projects: [{
      projectName: '',
      desc: '',
      teamSize: '',
      position: '',
      responsibilities: '',
      tech: ''
    }]
  }, {
    title: 'FPT Infomation System',
    date: '06/2018 – 10/2019',
    place: '',
    desc: 'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
    link: '',
    linkText: '',
    projects: [{
      projectName: '',
      desc: '',
      teamSize: '',
      position: '',
      responsibilities: '',
      tech: ''
    }]
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Expereience :: HoangDh"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      border: "border-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "text-lg font-semibold mt-3",
        children: "Java Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), sxperienceDatas.map(function (el, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InternshipCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: el.title,
          date: el.date,
          place: el.place,
          desc: el.desc,
          link: el.link,
          linkText: el.linkText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpZW5jZS50c3giXSwibmFtZXMiOlsic2tpbGxzQW5kRXhwZXJpZW5jZSIsInN4cGVyaWVuY2VEYXRhcyIsInRpdGxlIiwiZGF0ZSIsInBsYWNlIiwiZGVzYyIsImxpbmsiLCJsaW5rVGV4dCIsInByb2plY3RzIiwicHJvamVjdE5hbWUiLCJ0ZWFtU2l6ZSIsInBvc2l0aW9uIiwicmVzcG9uc2liaWxpdGllcyIsInRlY2giLCJtYXAiLCJlbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDNUMsTUFBTUMsZUFBZSxHQUFHLENBQ3RCO0FBQ0VDLFNBQUssRUFBRSxpQ0FEVDtBQUVFQyxRQUFJLEVBQUUsbUJBRlI7QUFHRUMsU0FBSyxFQUFFLEVBSFQ7QUFJRUMsUUFBSSxFQUNGLDZIQUxKO0FBTUVDLFFBQUksRUFBRSxFQU5SO0FBT0VDLFlBQVEsRUFBRSxFQVBaO0FBUUVDLFlBQVEsRUFBQyxDQUFDO0FBQ1JDLGlCQUFXLEVBQUMsRUFESjtBQUVSSixVQUFJLEVBQUMsRUFGRztBQUdSSyxjQUFRLEVBQUMsRUFIRDtBQUlSQyxjQUFRLEVBQUMsRUFKRDtBQUtSQyxzQkFBZ0IsRUFBQyxFQUxUO0FBTVJDLFVBQUksRUFBQztBQU5HLEtBQUQ7QUFSWCxHQURzQixFQWtCdEI7QUFDRVgsU0FBSyxFQUFFLHVCQURUO0FBRUVDLFFBQUksRUFBRSxtQkFGUjtBQUdFQyxTQUFLLEVBQUUsRUFIVDtBQUlFQyxRQUFJLEVBQ0YsNkhBTEo7QUFNRUMsUUFBSSxFQUFFLEVBTlI7QUFPRUMsWUFBUSxFQUFFLEVBUFo7QUFRRUMsWUFBUSxFQUFDLENBQUM7QUFDUkMsaUJBQVcsRUFBQyxFQURKO0FBRVJKLFVBQUksRUFBQyxFQUZHO0FBR1JLLGNBQVEsRUFBQyxFQUhEO0FBSVJDLGNBQVEsRUFBQyxFQUpEO0FBS1JDLHNCQUFnQixFQUFDLEVBTFQ7QUFNUkMsVUFBSSxFQUFDO0FBTkcsS0FBRDtBQVJYLEdBbEJzQixDQUF4QjtBQXNDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSxxRUFBQywwREFBRDtBQUFRLFlBQU0sRUFBQyxVQUFmO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLDRCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR1osZUFBZSxDQUFDYSxHQUFoQixDQUFvQixVQUFDQyxFQUFELEVBQUtDLEtBQUw7QUFBQSw0QkFDbkIscUVBQUMsa0VBQUQ7QUFDQSxlQUFLLEVBQUVELEVBQUUsQ0FBQ2IsS0FEVjtBQUVBLGNBQUksRUFBRWEsRUFBRSxDQUFDWixJQUZUO0FBR0EsZUFBSyxFQUFFWSxFQUFFLENBQUNYLEtBSFY7QUFJQSxjQUFJLEVBQUVXLEVBQUUsQ0FBQ1YsSUFKVDtBQUtBLGNBQUksRUFBRVUsRUFBRSxDQUFDVCxJQUxUO0FBTUEsa0JBQVEsRUFBRVMsRUFBRSxDQUFDUjtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG1CO0FBQUEsT0FBcEIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBcUJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4cGVyaWVuY2UuNzBhOWM5NzZkYmY4NWFlZGZkNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEludGVybnNoaXBDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9JbnRlcm5zaGlwQ2FyZCc7XG5pbXBvcnQgTWVudG9yc2hpcENhcmQgZnJvbSAnQC9jb21wb25lbnRzL01lbnRvcnNoaXBDYXJkJztcbmltcG9ydCBWb2x1bnRlZXJDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Wb2x1bnRlZXJDYXJkJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNraWxsc0FuZEV4cGVyaWVuY2UoKSB7XG4gIGNvbnN0IHN4cGVyaWVuY2VEYXRhcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ05ld1NhaWdvblNvZnQgQ29ycG9yYXRpb24gKE5TUyknLFxuICAgICAgZGF0ZTogJzEwLzIwMTYg4oCTIDA0LzIwMTgnLFxuICAgICAgcGxhY2U6ICcnLFxuICAgICAgZGVzYzpcbiAgICAgICAgJ0RldmVsb3BlZCBSZWFjdCBhbmQgRGphbmdvIGJhc2VkIHdlYiBhcHBsaWNhdGlvbiB3aXRoIENSVUQgQVBJLCB1c2VyIHNpZ251cCwgYm9va2luZ3MsIHJlZ2lzdHJhdGlvbiBhbmQgZXZlbnQgbGlzdGluZywgZXRjLicsXG4gICAgICBsaW5rOiAnJyxcbiAgICAgIGxpbmtUZXh0OiAnJyxcbiAgICAgIHByb2plY3RzOlt7XG4gICAgICAgIHByb2plY3ROYW1lOicnLFxuICAgICAgICBkZXNjOicnLFxuICAgICAgICB0ZWFtU2l6ZTonJyxcbiAgICAgICAgcG9zaXRpb246JycsXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6JycsXG4gICAgICAgIHRlY2g6JydcbiAgICAgIH0sXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdGUFQgSW5mb21hdGlvbiBTeXN0ZW0nLFxuICAgICAgZGF0ZTogJzA2LzIwMTgg4oCTIDEwLzIwMTknLFxuICAgICAgcGxhY2U6ICcnLFxuICAgICAgZGVzYzpcbiAgICAgICAgJ0RldmVsb3BlZCBSZWFjdCBhbmQgRGphbmdvIGJhc2VkIHdlYiBhcHBsaWNhdGlvbiB3aXRoIENSVUQgQVBJLCB1c2VyIHNpZ251cCwgYm9va2luZ3MsIHJlZ2lzdHJhdGlvbiBhbmQgZXZlbnQgbGlzdGluZywgZXRjLicsXG4gICAgICBsaW5rOiAnJyxcbiAgICAgIGxpbmtUZXh0OiAnJyxcbiAgICAgIHByb2plY3RzOlt7XG4gICAgICAgIHByb2plY3ROYW1lOicnLFxuICAgICAgICBkZXNjOicnLFxuICAgICAgICB0ZWFtU2l6ZTonJyxcbiAgICAgICAgcG9zaXRpb246JycsXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6JycsXG4gICAgICAgIHRlY2g6JydcbiAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FeHBlcmVpZW5jZSA6OiBIb2FuZ0RoPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgYm9yZGVyPVwiYm9yZGVyLTJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC0zXCI+SmF2YSBEZXZlbG9wZXI8L2gzPlxuICAgICAgICB7c3hwZXJpZW5jZURhdGFzLm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEludGVybnNoaXBDYXJkXG4gICAgICAgICAgdGl0bGU9e2VsLnRpdGxlfVxuICAgICAgICAgIGRhdGU9e2VsLmRhdGV9XG4gICAgICAgICAgcGxhY2U9e2VsLnBsYWNlfVxuICAgICAgICAgIGRlc2M9e2VsLmRlc2N9XG4gICAgICAgICAgbGluaz17ZWwubGlua31cbiAgICAgICAgICBsaW5rVGV4dD17ZWwubGlua1RleHR9XG4gICAgICAgIC8+XG4gICAgICAgICAgICkpfVxuICAgICAgICBcbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
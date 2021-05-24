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
      projectName: 'NeoDVC',
      desc: 'This is the website of HO CHI MINH CITY DEPARTMENT OF INDUSTRY AND TRADE',
      teamSize: '8',
      position: 'Developer',
      responsibilities: 'Design, code and bug fix',
      tech: ': Liferay portal 6.1, Java, jQuery, AlloyUI , Primefaces,JSP, Postgresql, Apache Solr, Apache Tomcat'
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
        lineNumber: 49,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      border: "border-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "text-lg font-semibold mt-3",
        children: "Java Developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), sxperienceDatas.map(function (el, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_InternshipCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: el.title,
          date: el.date,
          place: el.place,
          desc: el.desc,
          link: el.link,
          linkText: el.linkText,
          projects: el.projects
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhwZXJpZW5jZS50c3giXSwibmFtZXMiOlsic2tpbGxzQW5kRXhwZXJpZW5jZSIsInN4cGVyaWVuY2VEYXRhcyIsInRpdGxlIiwiZGF0ZSIsInBsYWNlIiwiZGVzYyIsImxpbmsiLCJsaW5rVGV4dCIsInByb2plY3RzIiwicHJvamVjdE5hbWUiLCJ0ZWFtU2l6ZSIsInBvc2l0aW9uIiwicmVzcG9uc2liaWxpdGllcyIsInRlY2giLCJtYXAiLCJlbCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFDNUMsTUFBTUMsZUFBZSxHQUFHLENBQ3RCO0FBQ0VDLFNBQUssRUFBRSxpQ0FEVDtBQUVFQyxRQUFJLEVBQUUsbUJBRlI7QUFHRUMsU0FBSyxFQUFFLEVBSFQ7QUFJRUMsUUFBSSxFQUNGLDZIQUxKO0FBTUVDLFFBQUksRUFBRSxFQU5SO0FBT0VDLFlBQVEsRUFBRSxFQVBaO0FBUUVDLFlBQVEsRUFBQyxDQUFDO0FBQ1JDLGlCQUFXLEVBQUMsUUFESjtBQUVSSixVQUFJLEVBQUMsMEVBRkc7QUFHUkssY0FBUSxFQUFDLEdBSEQ7QUFJUkMsY0FBUSxFQUFDLFdBSkQ7QUFLUkMsc0JBQWdCLEVBQUMsMEJBTFQ7QUFNUkMsVUFBSSxFQUFDO0FBTkcsS0FBRDtBQVJYLEdBRHNCLEVBa0J0QjtBQUNFWCxTQUFLLEVBQUUsdUJBRFQ7QUFFRUMsUUFBSSxFQUFFLG1CQUZSO0FBR0VDLFNBQUssRUFBRSxFQUhUO0FBSUVDLFFBQUksRUFDRiw2SEFMSjtBQU1FQyxRQUFJLEVBQUUsRUFOUjtBQU9FQyxZQUFRLEVBQUUsRUFQWjtBQVFFQyxZQUFRLEVBQUMsQ0FBQztBQUNSQyxpQkFBVyxFQUFDLEVBREo7QUFFUkosVUFBSSxFQUFDLEVBRkc7QUFHUkssY0FBUSxFQUFDLEVBSEQ7QUFJUkMsY0FBUSxFQUFDLEVBSkQ7QUFLUkMsc0JBQWdCLEVBQUMsRUFMVDtBQU1SQyxVQUFJLEVBQUM7QUFORyxLQUFEO0FBUlgsR0FsQnNCLENBQXhCO0FBc0NBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLDBEQUFEO0FBQVEsWUFBTSxFQUFDLFVBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsNEJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHWixlQUFlLENBQUNhLEdBQWhCLENBQW9CLFVBQUNDLEVBQUQsRUFBS0MsS0FBTDtBQUFBLDRCQUNuQixxRUFBQyxrRUFBRDtBQUNFLGVBQUssRUFBRUQsRUFBRSxDQUFDYixLQURaO0FBRUUsY0FBSSxFQUFFYSxFQUFFLENBQUNaLElBRlg7QUFHRSxlQUFLLEVBQUVZLEVBQUUsQ0FBQ1gsS0FIWjtBQUlFLGNBQUksRUFBRVcsRUFBRSxDQUFDVixJQUpYO0FBS0UsY0FBSSxFQUFFVSxFQUFFLENBQUNULElBTFg7QUFNRSxrQkFBUSxFQUFFUyxFQUFFLENBQUNSLFFBTmY7QUFPRSxrQkFBUSxFQUFFUSxFQUFFLENBQUNQO0FBUGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEbUI7QUFBQSxPQUFwQixDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFzQkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhwZXJpZW5jZS45YjI4MzQwZWMxODk5M2ExYWE1Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgSW50ZXJuc2hpcENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0ludGVybnNoaXBDYXJkJztcbmltcG9ydCBQcm9qZWN0Q2FyZHMgZnJvbSAnQC9jb21wb25lbnRzL1Byb2plY3RDYXJkcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBza2lsbHNBbmRFeHBlcmllbmNlKCkge1xuICBjb25zdCBzeHBlcmllbmNlRGF0YXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdOZXdTYWlnb25Tb2Z0IENvcnBvcmF0aW9uIChOU1MpJyxcbiAgICAgIGRhdGU6ICcxMC8yMDE2IOKAkyAwNC8yMDE4JyxcbiAgICAgIHBsYWNlOiAnJyxcbiAgICAgIGRlc2M6XG4gICAgICAgICdEZXZlbG9wZWQgUmVhY3QgYW5kIERqYW5nbyBiYXNlZCB3ZWIgYXBwbGljYXRpb24gd2l0aCBDUlVEIEFQSSwgdXNlciBzaWdudXAsIGJvb2tpbmdzLCByZWdpc3RyYXRpb24gYW5kIGV2ZW50IGxpc3RpbmcsIGV0Yy4nLFxuICAgICAgbGluazogJycsXG4gICAgICBsaW5rVGV4dDogJycsXG4gICAgICBwcm9qZWN0czpbe1xuICAgICAgICBwcm9qZWN0TmFtZTonTmVvRFZDJyxcbiAgICAgICAgZGVzYzonVGhpcyBpcyB0aGUgd2Vic2l0ZSBvZiBITyBDSEkgTUlOSCBDSVRZIERFUEFSVE1FTlQgT0YgSU5EVVNUUlkgQU5EIFRSQURFJyxcbiAgICAgICAgdGVhbVNpemU6JzgnLFxuICAgICAgICBwb3NpdGlvbjonRGV2ZWxvcGVyJyxcbiAgICAgICAgcmVzcG9uc2liaWxpdGllczonRGVzaWduLCBjb2RlIGFuZCBidWcgZml4JyxcbiAgICAgICAgdGVjaDonOiBMaWZlcmF5IHBvcnRhbCA2LjEsIEphdmEsIGpRdWVyeSwgQWxsb3lVSSAsIFByaW1lZmFjZXMsSlNQLCBQb3N0Z3Jlc3FsLCBBcGFjaGUgU29sciwgQXBhY2hlIFRvbWNhdCdcbiAgICAgIH0sXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdGUFQgSW5mb21hdGlvbiBTeXN0ZW0nLFxuICAgICAgZGF0ZTogJzA2LzIwMTgg4oCTIDEwLzIwMTknLFxuICAgICAgcGxhY2U6ICcnLFxuICAgICAgZGVzYzpcbiAgICAgICAgJ0RldmVsb3BlZCBSZWFjdCBhbmQgRGphbmdvIGJhc2VkIHdlYiBhcHBsaWNhdGlvbiB3aXRoIENSVUQgQVBJLCB1c2VyIHNpZ251cCwgYm9va2luZ3MsIHJlZ2lzdHJhdGlvbiBhbmQgZXZlbnQgbGlzdGluZywgZXRjLicsXG4gICAgICBsaW5rOiAnJyxcbiAgICAgIGxpbmtUZXh0OiAnJyxcbiAgICAgIHByb2plY3RzOlt7XG4gICAgICAgIHByb2plY3ROYW1lOicnLFxuICAgICAgICBkZXNjOicnLFxuICAgICAgICB0ZWFtU2l6ZTonJyxcbiAgICAgICAgcG9zaXRpb246JycsXG4gICAgICAgIHJlc3BvbnNpYmlsaXRpZXM6JycsXG4gICAgICAgIHRlY2g6JydcbiAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdO1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5FeHBlcmVpZW5jZSA6OiBIb2FuZ0RoPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQgYm9yZGVyPVwiYm9yZGVyLTJcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtdC0zXCI+SmF2YSBEZXZlbG9wZXI8L2gzPlxuICAgICAgICB7c3hwZXJpZW5jZURhdGFzLm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEludGVybnNoaXBDYXJkXG4gICAgICAgICAgICB0aXRsZT17ZWwudGl0bGV9XG4gICAgICAgICAgICBkYXRlPXtlbC5kYXRlfVxuICAgICAgICAgICAgcGxhY2U9e2VsLnBsYWNlfVxuICAgICAgICAgICAgZGVzYz17ZWwuZGVzY31cbiAgICAgICAgICAgIGxpbms9e2VsLmxpbmt9XG4gICAgICAgICAgICBsaW5rVGV4dD17ZWwubGlua1RleHR9XG4gICAgICAgICAgICBwcm9qZWN0cz17ZWwucHJvamVjdHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICAgKSl9XG4gICAgICAgIFxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
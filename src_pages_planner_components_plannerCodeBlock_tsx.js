/* LFTSTART */
"use strict";
(self["webpackChunkpraxon"] = self["webpackChunkpraxon"] || []).push([["src_pages_planner_components_plannerCodeBlock_tsx"],{

/***/ "./src/liftoscriptLanguage.ts":
/*!************************************!*\
  !*** ./src/liftoscriptLanguage.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "liftoscriptLanguage": () => (/* binding */ liftoscriptLanguage),
/* harmony export */   "liftoscriptParserWithMetadata": () => (/* binding */ liftoscriptParserWithMetadata)
/* harmony export */ });
/* harmony import */ var _liftoscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liftoscript */ "./src/liftoscript.ts");
/* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codemirror/language */ "./node_modules/@codemirror/language/dist/index.js");
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lezer/highlight */ "./node_modules/@lezer/highlight/dist/index.js");




const liftoscriptParserWithMetadata = _liftoscript__WEBPACK_IMPORTED_MODULE_1__.parser.configure({
  props: [
    (0,_lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.styleTags)({
      StateVariable: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.variableName,
      Number: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.number,
      LineComment: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.lineComment,
      Unit: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.unit,
      Keyword: _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.tags.keyword
    }),
    _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.indentNodeProp.add({
      IfExpression: (context) => context.column(context.node.from) + context.unit
    }),
    _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.foldNodeProp.add({
      IfExpression: _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.foldInside
    })
  ]
});
const liftoscriptLanguage = _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.LRLanguage.define({
  name: "liftoscript",
  parser: liftoscriptParserWithMetadata
});


/***/ }),

/***/ "./src/pages/planner/components/plannerCodeBlock.tsx":
/*!***********************************************************!*\
  !*** ./src/pages/planner/components/plannerCodeBlock.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannerCodeBlock": () => (/* binding */ PlannerCodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _plannerHighlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../plannerHighlighter */ "./src/pages/planner/plannerHighlighter.ts");



function PlannerCodeBlock(props) {
  const { script } = props;
  const highlightedScript = (0,_plannerHighlighter__WEBPACK_IMPORTED_MODULE_1__.PlannerHighlighter_highlight)(script);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "block whitespace-pre code", dangerouslySetInnerHTML: { __html: highlightedScript } });
}


/***/ }),

/***/ "./src/pages/planner/plannerHighlighter.ts":
/*!*************************************************!*\
  !*** ./src/pages/planner/plannerHighlighter.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannerHighlighter_highlight": () => (/* binding */ PlannerHighlighter_highlight)
/* harmony export */ });
/* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lezer/highlight */ "./node_modules/@lezer/highlight/dist/index.js");
/* harmony import */ var _plannerExerciseParser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plannerExerciseParser */ "./src/pages/planner/plannerExerciseParser.ts");
/* harmony import */ var _plannerExerciseStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plannerExerciseStyles */ "./src/pages/planner/plannerExerciseStyles.ts");
/* harmony import */ var _lezer_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lezer/common */ "./node_modules/@lezer/common/dist/index.js");
/* harmony import */ var _liftoscriptLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../liftoscriptLanguage */ "./src/liftoscriptLanguage.ts");






const parserWithMetadata = _plannerExerciseParser__WEBPACK_IMPORTED_MODULE_2__.parser.configure({
  props: [(0,_lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.styleTags)(_plannerExerciseStyles__WEBPACK_IMPORTED_MODULE_3__.plannerExerciseStyles)],
  wrap: (0,_lezer_common__WEBPACK_IMPORTED_MODULE_1__.parseMixed)((node) => {
    return node.name === "Liftoscript" ? { parser: _liftoscriptLanguage__WEBPACK_IMPORTED_MODULE_4__.liftoscriptLanguage.parser } : null;
  })
});
function PlannerHighlighter_highlight(script) {
  const tree = parserWithMetadata.parse(script);
  const ranges = [];
  (0,_lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.highlightTree)(tree, _lezer_highlight__WEBPACK_IMPORTED_MODULE_0__.classHighlighter, (from, to, classes) => {
    ranges.push({ from, to, clazz: classes });
  });
  const highlightedSource = ranges.reduceRight((acc, range) => {
    const clazz = range.clazz;
    const highlighted = `<span class="${clazz}">${acc.slice(range.from, range.to)}</span>`;
    return acc.slice(0, range.from) + highlighted + acc.slice(range.to);
  }, script);
  return highlightedSource;
}


/***/ })

}]);
/* LFTEND */
//# sourceMappingURL=src_pages_planner_components_plannerCodeBlock_tsx.js.map?version=18a7dd1
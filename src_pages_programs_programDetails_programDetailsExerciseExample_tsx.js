/* LFTSTART */
"use strict";
(self["webpackChunkpraxon"] = self["webpackChunkpraxon"] || []).push([["src_pages_programs_programDetails_programDetailsExerciseExample_tsx"],{

/***/ "./src/components/input.tsx":
/*!**********************************!*\
  !*** ./src/components/input.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "inputClassName": () => (/* binding */ inputClassName),
/* harmony export */   "selectInputOnFocus": () => (/* binding */ selectInputOnFocus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/generator */ "./src/utils/generator.ts");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/string */ "./src/utils/string.ts");

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




const inputClassName = "inline-block w-full px-4 text-base py-2 leading-normal bg-background-default border border-border-prominent rounded-lg appearance-none focus:outline-none focus:shadow-outline text-base";
function selectInputOnFocus(e) {
  const target = e.target;
  if (target instanceof HTMLInputElement) {
    const handleNumber = target.type === "number";
    if (handleNumber) {
      target.type = "text";
    }
    const value = target.value;
    target.setSelectionRange(0, value.length);
    if (handleNumber) {
      target.type = "number";
    }
    return false;
  }
  return void 0;
}
const Input = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => {
  var _b;
  const _a = props, {
    inputSize,
    label,
    changeHandler,
    errorMessage,
    patternMessage,
    requiredMessage,
    changeType: changeTypeProp,
    isLabelOutside,
    labelSize: labelSizeProp,
    identifier: identifierProp,
    multiline,
    value: valueProp,
    defaultValue: _defaultValue
  } = _a, otherProps = __objRest(_a, [
    "inputSize",
    "label",
    "changeHandler",
    "errorMessage",
    "patternMessage",
    "requiredMessage",
    "changeType",
    "isLabelOutside",
    "labelSize",
    "identifier",
    "multiline",
    "value",
    "defaultValue"
  ]);
  const changeType = changeTypeProp || "onblur";
  const identifier = identifierProp || (0,_utils_string__WEBPACK_IMPORTED_MODULE_2__.StringUtils_dashcase)((_b = label || (0,_utils_generator__WEBPACK_IMPORTED_MODULE_3__.UidFactory_generateUid)(8)) == null ? void 0 : _b.toLowerCase());
  const [validationErrors, setValidationErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/* @__PURE__ */ new Set());
  const size = inputSize || "md";
  const isControlled = valueProp !== void 0;
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(valueProp);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isControlled) {
      setLocalValue(valueProp);
    }
  }, [valueProp, isControlled]);
  const onInputHandler = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (e) => {
      const target = e.target;
      if (target instanceof HTMLInputElement) {
        const errors = /* @__PURE__ */ new Set();
        if (target.validity.patternMismatch) {
          errors.add("pattern-mismatch");
        }
        if (target.validity.valueMissing) {
          errors.add("required");
        }
        setValidationErrors(errors);
        if (changeHandler != null) {
          if (errors.size > 0) {
            changeHandler({ success: false, error: errors });
          } else {
            const value = e.target.value;
            changeHandler({ success: true, data: value });
          }
        }
      }
    },
    [changeHandler]
  );
  let className = "relative block w-full text-left border rounded-lg appearance-none ";
  if (errorMessage || validationErrors.size > 0) {
    className += " border-text-error";
  } else {
    className += " border-form-inputstroke";
  }
  const errorMessages = [];
  if (errorMessage) {
    errorMessages.push(errorMessage);
  }
  for (const error of validationErrors) {
    if (error === "required") {
      errorMessages.push(requiredMessage);
    } else if (error === "pattern-mismatch") {
      errorMessages.push(patternMessage);
    }
  }
  let containerClassName = "inline-block bg-background-default rounded-lg";
  if (className.indexOf("w-full") !== -1) {
    containerClassName += " w-full";
  }
  const labelSizeVal = labelSizeProp || "sm";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: containerClassName, children: [
    label && isLabelOutside && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `leading-none ${labelSizeVal === "xs" ? "text-xs" : "text-sm"} text-text-secondary pb-1`, children: label }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "label",
      {
        "data-cy": `${identifier}-label`,
        className,
        style: {
          minHeight: size === "md" ? isLabelOutside ? "40px" : "48px" : isLabelOutside ? "32px" : "40px"
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          "div",
          {
            className: `relative ${isLabelOutside ? "mx-2" : "mx-4"} ${size === "md" ? "my-1" : ""}`,
            style: size !== "md" ? { marginTop: "1px", marginBottom: "1px" } : {},
            children: [
              label && !isLabelOutside && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "div",
                {
                  className: `leading-none relative ${labelSizeVal === "xs" ? "text-xs" : "text-sm"} text-text-secondary`,
                  style: { top: "2px", left: "0" },
                  children: label
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "relative flex", style: { top: label ? "3px" : "8px", left: "0" }, children: multiline ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "textarea",
                __spreadValues({
                  "data-cy": `${identifier}-input`,
                  ref,
                  value: isControlled ? localValue : void 0,
                  defaultValue: !isControlled ? props.defaultValue : void 0,
                  onChange: (e) => {
                    if (isControlled) {
                      setLocalValue(e.target.value);
                    }
                  },
                  onBlur: changeType === "onblur" ? onInputHandler : void 0,
                  onInput: changeType === "oninput" ? onInputHandler : void 0,
                  onFocus: selectInputOnFocus,
                  className: "flex-1 w-0 min-w-0 text-base border-none focus:outline-none bg-background-default",
                  style: { fontSize: size === "md" ? "16px" : "15px", height: `${multiline * 25}px` }
                }, otherProps)
              ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                "input",
                __spreadValues({
                  "data-cy": `${identifier}-input`,
                  ref,
                  value: isControlled ? localValue : void 0,
                  defaultValue: !isControlled ? props.defaultValue : void 0,
                  onChange: (e) => {
                    if (isControlled) {
                      setLocalValue(e.target.value);
                    }
                  },
                  onBlur: changeType === "onblur" ? onInputHandler : void 0,
                  onInput: changeType === "oninput" ? onInputHandler : void 0,
                  onFocus: selectInputOnFocus,
                  className: "flex-1 w-0 min-w-0 text-base border-none focus:outline-none bg-background-default",
                  style: { height: "1.25rem", fontSize: size === "md" ? "16px" : "15px" }
                }, otherProps)
              ) })
            ]
          }
        )
      }
    ),
    errorMessages.map((message) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-xs text-left text-text-error", children: message }, message))
  ] });
});


/***/ }),

/***/ "./src/components/scroller.tsx":
/*!*************************************!*\
  !*** ./src/components/scroller.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scroller": () => (/* binding */ Scroller)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Scroller(props) {
  const [atLeft, setAtLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [atRight, setAtRight] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const tabsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const previousOffset = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(void 0);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a, _b, _c, _d;
    if (!tabsRef.current || tabsRef.current.clientWidth >= tabsRef.current.scrollWidth) {
      setAtLeft(true);
      setAtRight(true);
    } else {
      setAtLeft(((_a = tabsRef.current) == null ? void 0 : _a.scrollLeft) === 0);
      const diff = Math.abs(
        ((_b = tabsRef.current) == null ? void 0 : _b.scrollLeft) - (((_c = tabsRef.current) == null ? void 0 : _c.scrollWidth) - ((_d = tabsRef.current) == null ? void 0 : _d.clientWidth))
      );
      setAtRight(diff < 3);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _a;
    if (props.scrollOffset !== previousOffset.current) {
      (_a = tabsRef.current) == null ? void 0 : _a.scrollTo({ left: props.scrollOffset, behavior: "smooth" });
    }
    previousOffset.current = props.scrollOffset;
  }, [props.scrollOffset]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "relative flex-1 min-w-0", children: [
    !atLeft && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        className: "absolute left-0 z-20 flex items-center justify-center w-8 h-8 px-4 ml-auto bg-background-default rounded-full outline-none focus:outline-none nm-scroller-left",
        style: {
          boxShadow: "0 0 1px 2px rgba(0,0,0,0.05)",
          top: "50%",
          transform: `translateY(${-50 + (props.arrowYOffsetPct || 0)}%)`
        },
        onClick: () => {
          var _a;
          (_a = tabsRef.current) == null ? void 0 : _a.scrollTo({ left: 0, behavior: "smooth" });
        },
        children: "<"
      }
    ),
    !atRight && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "button",
      {
        className: "absolute right-0 z-20 flex items-center justify-center w-8 h-8 px-4 ml-auto bg-background-default rounded-full outline-none focus:outline-none nm-scroller-right",
        style: {
          boxShadow: "0 0 1px 2px rgba(0,0,0,0.05)",
          top: "50%",
          transform: `translateY(${-50 + (props.arrowYOffsetPct || 0)}%)`
        },
        onClick: () => {
          var _a, _b, _c;
          const scrollLeft = (_a = tabsRef.current) == null ? void 0 : _a.scrollLeft;
          const clientWidth = (_b = tabsRef.current) == null ? void 0 : _b.clientWidth;
          if (scrollLeft != null && clientWidth != null) {
            (_c = tabsRef.current) == null ? void 0 : _c.scrollTo({ left: scrollLeft + clientWidth, behavior: "smooth" });
          }
        },
        children: ">"
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        className: "overflow-x-auto scrollbar-hide",
        ref: tabsRef,
        onScroll: () => {
          var _a, _b, _c, _d, _e, _f, _g;
          setAtLeft(((_a = tabsRef.current) == null ? void 0 : _a.scrollLeft) === 0);
          const scrollLeft = (_c = (_b = tabsRef.current) == null ? void 0 : _b.scrollLeft) != null ? _c : 0;
          const scrollWidth = (_e = (_d = tabsRef.current) == null ? void 0 : _d.scrollWidth) != null ? _e : 0;
          const clientWidth = (_g = (_f = tabsRef.current) == null ? void 0 : _f.clientWidth) != null ? _g : 0;
          const diff = Math.abs(scrollLeft - (scrollWidth - clientWidth));
          setAtRight(diff < 3);
        },
        children: props.children
      }
    )
  ] });
}


/***/ }),

/***/ "./src/pages/programs/programDetails/programDetailsExerciseExample.tsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/programs/programDetails/programDetailsExerciseExample.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramDetailsExerciseExample": () => (/* binding */ ProgramDetailsExerciseExample)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_exerciseImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/exerciseImage */ "./src/components/exerciseImage.tsx");
/* harmony import */ var _components_historyRecordSets__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/historyRecordSets */ "./src/components/historyRecordSets.tsx");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/input */ "./src/components/input.tsx");
/* harmony import */ var _components_scroller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/scroller */ "./src/components/scroller.tsx");
/* harmony import */ var _models_exercise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/exercise */ "./src/models/exercise.ts");
/* harmony import */ var _models_program__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/program */ "./src/models/program.ts");
/* harmony import */ var _programDetailsExerciseExampleGraph__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programDetailsExerciseExampleGraph */ "./src/pages/programs/programDetails/programDetailsExerciseExampleGraph.tsx");
/* harmony import */ var _models_weight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/weight */ "./src/models/weight.ts");
/* harmony import */ var _models_pp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/pp */ "./src/models/pp.ts");
/* harmony import */ var _utils_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/collection */ "./src/utils/collection.ts");
/* harmony import */ var _planner_models_plannerProgramExercise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../planner/models/plannerProgramExercise */ "./src/pages/planner/models/plannerProgramExercise.ts");
/* harmony import */ var _models_stats__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/stats */ "./src/models/stats.ts");
/* harmony import */ var _models_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/progress */ "./src/models/progress.ts");
/* harmony import */ var _utils_generator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/generator */ "./src/utils/generator.ts");

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
















function ProgramDetailsExerciseExample(props) {
  const exerciseType = props.exerciseType;
  const exercise = (0,_models_exercise__WEBPACK_IMPORTED_MODULE_2__.Exercise_get)(exerciseType, props.settings.exercises);
  let dayInWeek;
  const weekSetup = props.weekSetup || props.program.weeks.map((w, i) => ({ name: w.name, weekIndex: i }));
  (0,_models_pp__WEBPACK_IMPORTED_MODULE_3__.PP_iterate2)(props.program.weeks, (ex, weekIndex, dayInWeekIndex, dayIndex) => {
    if (ex.key === props.programExerciseKey) {
      dayInWeek = dayInWeekIndex + 1;
      return true;
    }
    return false;
  });
  dayInWeek = dayInWeek != null ? dayInWeek : 1;
  const defaultOnerm = props.defaultOnerm ? (0,_models_weight__WEBPACK_IMPORTED_MODULE_4__.Weight_build)(props.defaultOnerm, props.settings.units) : (0,_models_exercise__WEBPACK_IMPORTED_MODULE_2__.Exercise_onerm)(props.exerciseType, props.settings);
  const [onerm, setOnerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultOnerm);
  const settings = __spreadProps(__spreadValues({}, props.settings), {
    exerciseData: __spreadProps(__spreadValues({}, props.settings.exerciseData), { [(0,_models_exercise__WEBPACK_IMPORTED_MODULE_2__.Exercise_toKey)(props.exerciseType)]: { rm1: onerm } })
  });
  const weekEntries = (0,_utils_collection__WEBPACK_IMPORTED_MODULE_5__.CollectionUtils_compact)(
    weekSetup.map((w, i) => {
      var _a, _b;
      const weekIndex = (_a = w.weekIndex) != null ? _a : i;
      const week = props.program.weeks[weekIndex];
      const programDay = week.days[(dayInWeek != null ? dayInWeek : 1) - 1];
      const dayExercises = (0,_models_program__WEBPACK_IMPORTED_MODULE_6__.Program_getProgramDayExercises)(programDay);
      const programExercise = (0,_planner_models_plannerProgramExercise__WEBPACK_IMPORTED_MODULE_7__.PlannerProgramExercise_toUsed)(
        (0,_utils_collection__WEBPACK_IMPORTED_MODULE_5__.CollectionUtils_findBy)(dayExercises, "key", props.programExerciseKey)
      );
      const entry = programExercise ? (0,_models_program__WEBPACK_IMPORTED_MODULE_6__.Program_nextHistoryEntry)(
        props.program,
        programDay.dayData,
        weekIndex,
        programExercise,
        (0,_models_stats__WEBPACK_IMPORTED_MODULE_8__.Stats_getEmpty)(),
        settings
      ) : {
        vtype: "history_entry",
        id: (0,_models_progress__WEBPACK_IMPORTED_MODULE_9__.Progress_getEntryId)(exerciseType, programExercise),
        exercise: exerciseType,
        index: weekIndex,
        warmupSets: [],
        sets: [
          {
            id: (0,_utils_generator__WEBPACK_IMPORTED_MODULE_10__.UidFactory_generateUid)(6),
            vtype: "set",
            index: 0,
            isUnilateral: (0,_models_exercise__WEBPACK_IMPORTED_MODULE_2__.Exercise_getIsUnilateral)(exerciseType, settings),
            originalWeight: (0,_models_weight__WEBPACK_IMPORTED_MODULE_4__.Weight_build)(0, settings.units),
            weight: (0,_models_weight__WEBPACK_IMPORTED_MODULE_4__.Weight_build)(0, settings.units),
            reps: 0
          }
        ]
      };
      return { label: (_b = w.name) != null ? _b : week.name, entry };
    })
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "mx-auto mt-2", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-48 mx-auto mb-2", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_input__WEBPACK_IMPORTED_MODULE_11__.Input,
      {
        label: `Enter 1RM weight (${onerm.unit})`,
        value: onerm.value,
        changeHandler: (r) => {
          if (r.success) {
            const value = parseFloat(r.data);
            if (!isNaN(value)) {
              setOnerm((0,_models_weight__WEBPACK_IMPORTED_MODULE_4__.Weight_build)(value, props.settings.units));
            }
          }
        }
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "relative flex-1 px-2 mx-auto rounded-lg bg-background-purpledark", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "items-start block sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex pt-2", style: { minWidth: "4rem", maxWidth: "16rem" }, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { width: "40px" }, className: "box-content px-2 mr-1", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_exerciseImage__WEBPACK_IMPORTED_MODULE_12__.ExerciseImage, { settings: props.settings, className: "w-full", exerciseType, size: "small" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "flex-1 ml-auto", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex-1 mr-1 font-bold", children: exercise.name }) }),
          exercise.equipment && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "text-sm text-text-secondary", children: (0,_models_exercise__WEBPACK_IMPORTED_MODULE_2__.equipmentName)(exercise.equipment) })
        ] })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_scroller__WEBPACK_IMPORTED_MODULE_13__.Scroller, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { className: "relative flex items-center mt-1 ml-2", children: weekEntries.map((week, i) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
          i !== 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "h-12 mr-2 border-l border-border-neutral" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "px-2 text-xs text-center whitespace-nowrap text-text-secondary", children: week.label }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "flex flex-no-wrap justify-center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_historyRecordSets__WEBPACK_IMPORTED_MODULE_14__.HistoryRecordSetsView, { sets: week.entry.sets, isNext: true, settings: props.settings }) })
          ] })
        ] }, i);
      }) }) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "mb-2", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _programDetailsExerciseExampleGraph__WEBPACK_IMPORTED_MODULE_15__.ProgramDetailsExerciseExampleGraph,
      {
        weeksData: weekEntries,
        title: "Weight week over week",
        yAxisLabel: "Weight",
        color: "red",
        getValue: (entry) => {
          var _a, _b;
          return (_b = (_a = entry.sets[0].weight) == null ? void 0 : _a.value) != null ? _b : 0;
        }
      },
      onerm.value
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _programDetailsExerciseExampleGraph__WEBPACK_IMPORTED_MODULE_15__.ProgramDetailsExerciseExampleGraph,
      {
        weeksData: weekEntries,
        title: "Volume (reps * weight) week over week",
        yAxisLabel: "Volume",
        color: "orange",
        getValue: (entry) => entry.sets.reduce((acc, s) => {
          var _a, _b, _c;
          return acc + ((_a = s.reps) != null ? _a : 0) * ((_c = (_b = s.weight) == null ? void 0 : _b.value) != null ? _c : 0);
        }, 0)
      },
      onerm.value
    ) })
  ] }) });
}


/***/ }),

/***/ "./src/pages/programs/programDetails/programDetailsExerciseExampleGraph.tsx":
/*!**********************************************************************************!*\
  !*** ./src/pages/programs/programDetails/programDetailsExerciseExampleGraph.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramDetailsExerciseExampleGraph": () => (/* binding */ ProgramDetailsExerciseExampleGraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uplot */ "./node_modules/uplot/dist/uPlot.esm.js");
/* harmony import */ var _utils_graphsPlugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/graphsPlugins */ "./src/utils/graphsPlugins.ts");





function ProgramDetailsExerciseExampleGraph(props) {
  const graphRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const legendRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!graphRef.current) {
      return;
    }
    const rect = graphRef.current.getBoundingClientRect();
    const opts = {
      title: props.title,
      class: "graph-program-details-example",
      width: rect.width,
      height: rect.height,
      cursor: {
        y: false,
        lock: true
      },
      legend: {
        show: true
      },
      series: [
        {
          label: "Week"
        },
        {
          label: props.yAxisLabel,
          value: (self, rawValue) => rawValue,
          stroke: props.color,
          width: 1,
          spanGaps: true
        }
      ],
      plugins: [(0,_utils_graphsPlugins__WEBPACK_IMPORTED_MODULE_3__.GraphsPlugins_zoom)()],
      scales: {
        x: {
          time: false
        }
      },
      axes: [
        {
          space: 20,
          incrs: [1]
        }
      ]
    };
    const weekNumbers = props.weeksData.map((weekData) => {
      const match = weekData.label.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    });
    const data = [
      weekNumbers,
      props.weeksData.map((weekData) => {
        return props.getValue(weekData.entry);
      })
    ];
    const uplot = new uplot__WEBPACK_IMPORTED_MODULE_2__["default"](opts, data, graphRef.current);
    const underEl = graphRef.current.querySelector(".over");
    const underRect = underEl == null ? void 0 : underEl.getBoundingClientRect();
    function handler() {
      function onMove(event) {
        const offset = window.pageYOffset;
        const touch = event.touches[0];
        uplot.setCursor({ left: touch.clientX - underRect.left, top: touch.clientY - underRect.top + offset });
      }
      function onEnd() {
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
      }
      window.addEventListener("touchmove", onMove);
      window.addEventListener("touchend", onEnd);
    }
    if (underEl != null) {
      underEl.addEventListener("touchstart", handler);
    }
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "relative z-0 pt-2", "data-cy": "graph", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "w-full", "data-cy": "graph-data", style: { height: "10em" }, ref: graphRef }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { "data-cy": "graph-legend", className: "box-content px-8 pt-8 pb-2 text-sm", ref: legendRef })
  ] });
}


/***/ }),

/***/ "./src/utils/graphsPlugins.ts":
/*!************************************!*\
  !*** ./src/utils/graphsPlugins.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphsPlugins_programLines": () => (/* binding */ GraphsPlugins_programLines),
/* harmony export */   "GraphsPlugins_zoom": () => (/* binding */ GraphsPlugins_zoom)
/* harmony export */ });
/* harmony import */ var _tailwindConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tailwindConfig */ "./src/utils/tailwindConfig.ts");


function GraphsPlugins_zoom() {
  function init(u) {
    const over = u.over;
    let rect;
    let oxRange;
    let xVal;
    let fr = { x: 0, y: 0, dx: 0, dy: 0, d: 0 };
    let to = { x: 0, y: 0, dx: 0, dy: 0, d: 0 };
    function getPos(e) {
      const t = { x: 0, y: 0, dx: 0, dy: 0, d: 0 };
      const ts = e.touches;
      const t0 = ts[0];
      const t0x = t0.clientX - rect.left;
      const t0y = t0.clientY - rect.top;
      if (ts.length === 1) {
        t.x = t0x;
        t.y = t0y;
        t.d = t.dx = t.dy = 1;
      } else {
        const t1 = e.touches[1];
        const t1x = t1.clientX - rect.left;
        const t1y = t1.clientY - rect.top;
        const xMin = Math.min(t0x, t1x);
        const yMin = Math.min(t0y, t1y);
        const xMax = Math.max(t0x, t1x);
        const yMax = Math.max(t0y, t1y);
        t.y = (yMin + yMax) / 2;
        t.x = (xMin + xMax) / 2;
        t.dx = xMax - xMin;
        t.dy = yMax - yMin;
        t.d = Math.sqrt(t.dx * t.dx + t.dy * t.dy);
      }
      return t;
    }
    let rafPending = false;
    function zoom() {
      rafPending = false;
      const left = to.x;
      const xFactor = fr.dx / to.dx;
      const leftPct = left / rect.width;
      const nxRange = oxRange * xFactor;
      const nxMin = xVal - leftPct * nxRange;
      const nxMax = nxMin + nxRange;
      u.batch(() => {
        u.setScale("x", {
          min: nxMin,
          max: nxMax
        });
      });
    }
    function track() {
      rafPending = false;
      const left = to.x;
      const top = to.y;
      u.setCursor({ left, top }, true);
    }
    function touchmove(e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
      to = getPos(e);
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(e.touches.length > 1 ? zoom : track);
      }
    }
    over.addEventListener("touchstart", function(e) {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
      rect = over.getBoundingClientRect();
      fr = getPos(e);
      oxRange = (u.scales.x.max || 0) - (u.scales.x.min || 0);
      const left = fr.x;
      xVal = u.posToVal(left, "x");
      document.addEventListener("touchmove", touchmove, { passive: false });
    });
    over.addEventListener("touchend", function(e) {
      document.removeEventListener("touchmove", touchmove);
    });
  }
  return {
    hooks: {
      init
    }
  };
}
function GraphsPlugins_programLines(programTimes) {
  return {
    hooks: {
      draw: [
        (self) => {
          let programsOverlay = self.over.querySelector(".programs-overlay");
          if (programsOverlay == null) {
            programsOverlay = document.createElement("div");
            programsOverlay.classList.add("programs-overlay");
            programsOverlay.style.position = "absolute";
            programsOverlay.style.top = "0";
            programsOverlay.style.left = "0";
            programsOverlay.style.bottom = "0";
            programsOverlay.style.right = "0";
            self.over.appendChild(programsOverlay);
          }
          programsOverlay.innerHTML = "";
          const lineColor = (0,_tailwindConfig__WEBPACK_IMPORTED_MODULE_0__.Tailwind_semantic)().border.neutral;
          const textColor = (0,_tailwindConfig__WEBPACK_IMPORTED_MODULE_0__.Tailwind_semantic)().text.secondary;
          const changeProgramPos = programTimes.map((i) => [self.valToPos(i[0], "x"), i[1]]);
          for (let i = 0; i < changeProgramPos.length; i += 1) {
            const [pos, programName] = changeProgramPos[i];
            if (pos > 0 && pos < self.over.clientWidth) {
              const posEl = document.createElement("div");
              posEl.style.position = "absolute";
              posEl.style.top = "0";
              posEl.style.bottom = "0";
              posEl.style.left = `${pos}px`;
              posEl.style.width = `1px`;
              posEl.style.backgroundColor = lineColor;
              programsOverlay.appendChild(posEl);
              const shouldShiftRight = pos < 15;
              const neighborPos = shouldShiftRight ? changeProgramPos[i + 1] : changeProgramPos[i - 1];
              if (neighborPos == null || Math.abs(neighborPos[0] - pos) > 15) {
                const textEl = document.createElement("div");
                textEl.textContent = programName;
                textEl.style.position = "absolute";
                textEl.style.top = shouldShiftRight ? "-15px" : "0";
                textEl.style.left = `${pos}px`;
                textEl.style.fontSize = "10px";
                textEl.style.color = textColor;
                textEl.style.transform = "rotate(90deg)";
                textEl.style.transformOrigin = shouldShiftRight ? "0 100%" : "0 0";
                textEl.style.whiteSpace = "nowrap";
                programsOverlay.appendChild(textEl);
              }
            }
          }
        }
      ]
    }
  };
}


/***/ })

}]);
/* LFTEND */
//# sourceMappingURL=src_pages_programs_programDetails_programDetailsExerciseExample_tsx.js.map?version=3feb0ec
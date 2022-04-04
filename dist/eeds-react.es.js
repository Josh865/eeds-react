var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
var __objRest = (source2, exclude) => {
  var target = {};
  for (var prop in source2)
    if (__hasOwnProp.call(source2, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source2[prop];
  if (source2 != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source2)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source2, prop))
        target[prop] = source2[prop];
    }
  return target;
};
import * as React from "react";
import React__default, { createContext, forwardRef, useEffect, useCallback, useMemo, useContext, useState, useRef, useReducer, Fragment, useLayoutEffect, isValidElement, cloneElement, createElement, createRef, useDebugValue } from "react";
import { createPortal } from "react-dom";
var i = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function r(r2) {
  return i.get(r2);
}
function a(i2) {
  var r2 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(i2);
  return r2 ? r2[1] ? 1 : r2[2] ? 2 : r2[3] ? 3 : 5 : 0;
}
function t(i2, r2) {
  var a2 = /^(?:(pos)|(cli)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(i2);
  return a2 ? a2[1] ? /^sti/i.test(r2) ? 1 : 0 : a2[2] ? /^pat/i.test(r2) ? 1 : 0 : a2[3] ? /^image-/i.test(r2) ? 1 : 0 : a2[4] ? r2[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(r2) ? 4 : 0 : 0;
}
var includes = (value, search) => !!~value.indexOf(search);
var join = (parts, separator = "-") => parts.join(separator);
var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
var tail = (array, startIndex = 1) => array.slice(startIndex);
var identity = (value) => value;
var noop$1 = () => {
};
var capitalize = (value) => value[0].toUpperCase() + tail(value);
var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
var evalThunk = (value, context) => {
  while (typeof value == "function") {
    value = value(context);
  }
  return value;
};
var ensureMaxSize = (map, max) => {
  if (map.size > max) {
    map.delete(map.keys().next().value);
  }
};
var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
var merge$1 = (target, source2, context) => source2 ? Object.keys(source2).reduce((target2, key) => {
  const value = evalThunk(source2[key], context);
  if (isCSSProperty(key, value)) {
    target2[hyphenate(key)] = value;
  } else {
    target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge$1(target2[key] || {}, value, context);
  }
  return target2;
}, target) : target;
var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
var buildMediaQuery = (screen) => {
  if (!Array.isArray(screen)) {
    screen = [screen];
  }
  return "@media " + join(screen.map((screen2) => {
    if (typeof screen2 == "string") {
      screen2 = { min: screen2 };
    }
    return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
  }), ",");
};
var cyrb32 = (value) => {
  for (var h = 9, index = value.length; index--; ) {
    h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
  }
  return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
};
var sortedInsertionIndex = (array, element) => {
  for (var low = 0, high = array.length; low < high; ) {
    const pivot = high + low >> 1;
    if (array[pivot] <= element) {
      low = pivot + 1;
    } else {
      high = pivot;
    }
  }
  return high;
};
var groupings;
var rules;
var startGrouping = (value = "") => {
  groupings.push(value);
  return "";
};
var endGrouping = (isWhitespace) => {
  groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
};
var onlyPrefixes = (s) => s && !includes("!:", s[0]);
var onlyVariants = (s) => s[0] == ":";
var addRule = (directive2, negate) => {
  rules.push({
    v: groupings.filter(onlyVariants),
    d: directive2,
    n: negate,
    i: includes(groupings, "!"),
    $: ""
  });
};
var saveRule = (buffer) => {
  const negate = buffer[0] == "-";
  if (negate) {
    buffer = tail(buffer);
  }
  const prefix = join(groupings.filter(onlyPrefixes));
  addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
  return "";
};
var parseString = (token, isVariant) => {
  let buffer = "";
  for (let char, dynamic = false, position2 = 0; char = token[position2++]; ) {
    if (dynamic || char == "[") {
      buffer += char;
      dynamic = char != "]";
      continue;
    }
    switch (char) {
      case ":":
        buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
        break;
      case "(":
        buffer = buffer && startGrouping(buffer);
        startGrouping();
        break;
      case "!":
        startGrouping(char);
        break;
      case ")":
      case " ":
      case "	":
      case "\n":
      case "\r":
        buffer = buffer && saveRule(buffer);
        endGrouping(char !== ")");
        break;
      default:
        buffer += char;
    }
  }
  if (buffer) {
    if (isVariant) {
      startGrouping(":" + buffer);
    } else if (buffer.slice(-1) == "-") {
      startGrouping(buffer.slice(0, -1));
    } else {
      saveRule(buffer);
    }
  }
};
var parseGroupedToken = (token) => {
  startGrouping();
  parseToken(token);
  endGrouping();
};
var parseGroup = (key, token) => {
  if (token) {
    startGrouping();
    const isVariant = includes("tbu", (typeof token)[1]);
    parseString(key, isVariant);
    if (isVariant) {
      parseGroupedToken(token);
    }
    endGrouping();
  }
};
var parseToken = (token) => {
  switch (typeof token) {
    case "string":
      parseString(token);
      break;
    case "function":
      addRule(token);
      break;
    case "object":
      if (Array.isArray(token)) {
        token.forEach(parseGroupedToken);
      } else if (token) {
        Object.keys(token).forEach((key) => {
          parseGroup(key, token[key]);
        });
      }
  }
};
var staticsCaches = /* @__PURE__ */ new WeakMap();
var buildStatics = (strings) => {
  let statics = staticsCaches.get(strings);
  if (!statics) {
    let slowModeIndex = NaN;
    let buffer = "";
    statics = strings.map((token, index) => {
      if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index + 1] || "")[0]))) {
        slowModeIndex = index;
      }
      if (index >= slowModeIndex) {
        return (interpolation) => {
          if (index == slowModeIndex) {
            buffer = "";
          }
          buffer += token;
          if (includes("rg", (typeof interpolation)[5])) {
            buffer += interpolation;
          } else if (interpolation) {
            parseString(buffer);
            buffer = "";
            parseToken(interpolation);
          }
          if (index == strings.length - 1) {
            parseString(buffer);
          }
        };
      }
      const staticRules = rules = [];
      parseString(token);
      const activeGroupings = [...groupings];
      rules = [];
      return (interpolation) => {
        rules.push(...staticRules);
        groupings = [...activeGroupings];
        if (interpolation) {
          parseToken(interpolation);
        }
      };
    });
    staticsCaches.set(strings, statics);
  }
  return statics;
};
var parse = (tokens) => {
  groupings = [];
  rules = [];
  if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
    buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
  } else {
    parseToken(tokens);
  }
  return rules;
};
var isFunctionFree;
var detectFunction = (key, value) => {
  if (typeof value == "function") {
    isFunctionFree = false;
  }
  return value;
};
var stringify = (data2) => {
  isFunctionFree = true;
  const key = JSON.stringify(data2, detectFunction);
  return isFunctionFree && key;
};
var cacheByFactory = /* @__PURE__ */ new WeakMap();
var directive = (factory, data2) => {
  const key = stringify(data2);
  let directive2;
  if (key) {
    var cache2 = cacheByFactory.get(factory);
    if (!cache2) {
      cacheByFactory.set(factory, cache2 = /* @__PURE__ */ new Map());
    }
    directive2 = cache2.get(key);
  }
  if (!directive2) {
    directive2 = Object.defineProperty((params, context) => {
      context = Array.isArray(params) ? context : params;
      return evalThunk(factory(data2, context), context);
    }, "toJSON", {
      value: () => key || data2
    });
    if (cache2) {
      cache2.set(key, directive2);
      ensureMaxSize(cache2, 1e4);
    }
  }
  return directive2;
};
var applyFactory = (tokens, { css }) => css(parse(tokens));
var apply = (...tokens) => directive(applyFactory, tokens);
var positions = (resolve) => (value, position2, prefix, suffix) => {
  if (value) {
    const properties = position2 && resolve(position2);
    if (properties && properties.length > 0) {
      return properties.reduce((declarations, property2) => {
        declarations[joinTruthy([prefix, property2, suffix])] = value;
        return declarations;
      }, {});
    }
  }
};
var corners = /* @__PURE__ */ positions((key) => ({
  t: ["top-left", "top-right"],
  r: ["top-right", "bottom-right"],
  b: ["bottom-left", "bottom-right"],
  l: ["bottom-left", "top-left"],
  tl: ["top-left"],
  tr: ["top-right"],
  bl: ["bottom-left"],
  br: ["bottom-right"]
})[key]);
var expandEdges = (key) => {
  const parts = ({ x: "lr", y: "tb" }[key] || key || "").split("").sort();
  for (let index = parts.length; index--; ) {
    if (!(parts[index] = {
      t: "top",
      r: "right",
      b: "bottom",
      l: "left"
    }[parts[index]]))
      return;
  }
  if (parts.length)
    return parts;
};
var edges = /* @__PURE__ */ positions(expandEdges);
var _$1;
var __;
var $;
var toColumnsOrRows = (x2) => x2 == "cols" ? "columns" : "rows";
var property = (property2) => (params, context, id) => ({
  [property2]: id + ((_$1 = join(params)) && "-" + _$1)
});
var propertyValue = (property2, separator) => (params, context, id) => (_$1 = join(params, separator)) && {
  [property2 || id]: _$1
};
var themeProperty = (section) => (params, { theme: theme2 }, id) => (_$1 = theme2(section || id, params)) && {
  [section || id]: _$1
};
var themePropertyFallback = (section, separator) => (params, { theme: theme2 }, id) => (_$1 = theme2(section || id, params, join(params, separator))) && {
  [section || id]: _$1
};
var alias = (handler, name) => (params, context) => handler(params, context, name);
var display = property("display");
var position = property("position");
var textTransform = property("textTransform");
var textDecoration = property("textDecoration");
var fontStyle = property("fontStyle");
var fontVariantNumeric = (key) => (params, context, id) => ({
  ["--tw-" + key]: id,
  fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
});
var inset = (params, { theme: theme2 }, id) => (_$1 = theme2("inset", params)) && { [id]: _$1 };
var opacityProperty = (params, theme2, id, section = id) => (_$1 = theme2(section + "Opacity", tail(params))) && {
  [`--tw-${id}-opacity`]: _$1
};
var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
var asRGBA = (color, opacityProperty2, opacityDefault) => {
  if (color && color[0] == "#" && (_$1 = (color.length - 1) / 3) && ($ = [17, 1, 0.062272][_$1 - 1])) {
    return `rgba(${parseColorComponent(color.substr(1, _$1), $)},${parseColorComponent(color.substr(1 + _$1, _$1), $)},${parseColorComponent(color.substr(1 + 2 * _$1, _$1), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
  }
  return color;
};
var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_$1 = asRGBA(color, kind + "-opacity")) && _$1 !== color ? {
  [`--tw-${kind}-opacity`]: "1",
  [property2]: [color, _$1]
} : { [property2]: color } : void 0;
var transparentTo = (color) => ($ = asRGBA(color, "", "0")) == _$1 ? "transparent" : $;
var reversableEdge = (params, { theme: theme2 }, id, section, prefix, suffix) => (_$1 = { x: ["right", "left"], y: ["bottom", "top"] }[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
  [$]: "1"
} : {
  [$]: "0",
  [joinTruthy([prefix, _$1[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
  [joinTruthy([prefix, _$1[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
} : void 0;
var placeHelper = (property2, params) => params[0] && {
  [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
};
var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? { [property2]: "flex-" + params[0] } : placeHelper(property2, params);
var gridPlugin = (kind) => (params, { theme: theme2 }) => {
  if (_$1 = theme2("grid" + capitalize(kind), params, "")) {
    return { ["grid-" + kind]: _$1 };
  }
  switch (params[0]) {
    case "span":
      return params[1] && {
        ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
      };
    case "start":
    case "end":
      return (_$1 = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
        [`grid-${kind}-${params[0]}`]: _$1
      };
  }
};
var border = (params, { theme: theme2 }, id) => {
  switch (params[0]) {
    case "solid":
    case "dashed":
    case "dotted":
    case "double":
    case "none":
      return propertyValue("borderStyle")(params);
    case "collapse":
    case "separate":
      return propertyValue("borderCollapse")(params);
    case "opacity":
      return opacityProperty(params, theme2, id);
  }
  return (_$1 = theme2(id + "Width", params, "")) ? { borderWidth: _$1 } : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
};
var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
var transformXYFunction = (params, context, id) => params[0] && (_$1 = context.theme(id, params[1] || params[0])) && {
  [`--tw-${id}-x`]: params[0] !== "y" && _$1,
  [`--tw-${id}-y`]: params[0] !== "x" && _$1,
  transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_$1})`, transform()]
};
var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
var padding = edgesPluginFor("padding");
var margin = edgesPluginFor("margin");
var minMax = (params, { theme: theme2 }, id) => (_$1 = { w: "width", h: "height" }[params[0]]) && {
  [_$1 = `${id}${capitalize(_$1)}`]: theme2(_$1, tail(params))
};
var filter = (params, { theme: theme2 }, id) => {
  const parts = id.split("-");
  const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
  if (!prefix) {
    params.unshift(...parts);
  }
  if (params[0] == "filter") {
    const filters = [
      "blur",
      "brightness",
      "contrast",
      "grayscale",
      "hue-rotate",
      "invert",
      prefix && "opacity",
      "saturate",
      "sepia",
      !prefix && "drop-shadow"
    ].filter(Boolean);
    return params[1] == "none" ? { [prefix + "filter"]: "none" } : filters.reduce((css, key) => {
      css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
      return css;
    }, {
      [prefix + "filter"]: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
    });
  }
  $ = params.shift();
  if (includes(["hue", "drop"], $))
    $ += capitalize(params.shift());
  return (_$1 = theme2(prefix ? "backdrop" + capitalize($) : $, params)) && {
    ["--tw-" + prefix + $]: (Array.isArray(_$1) ? _$1 : [_$1]).map((_4) => `${hyphenate($)}(${_4})`).join(" ")
  };
};
var corePlugins = {
  group: (params, { tag }, id) => tag(join([id, ...params])),
  hidden: alias(display, "none"),
  inline: display,
  block: display,
  contents: display,
  flow: display,
  table: (params, context, id) => includes(["auto", "fixed"], params[0]) ? { tableLayout: params[0] } : display(params, context, id),
  flex(params, context, id) {
    switch (params[0]) {
      case "row":
      case "col":
        return {
          flexDirection: join(params[0] == "col" ? ["column", ...tail(params)] : params)
        };
      case "nowrap":
      case "wrap":
        return { flexWrap: join(params) };
      case "grow":
      case "shrink":
        _$1 = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
        return _$1 != null && {
          ["flex-" + params[0]]: "" + _$1
        };
    }
    return (_$1 = context.theme("flex", params, "")) ? { flex: _$1 } : display(params, context, id);
  },
  grid(params, context, id) {
    switch (params[0]) {
      case "cols":
      case "rows":
        return (_$1 = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
          ["gridTemplate-" + toColumnsOrRows(params[0])]: _$1
        };
      case "flow":
        return params.length > 1 && {
          gridAutoFlow: join(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
        };
    }
    return display(params, context, id);
  },
  auto: (params, { theme: theme2 }) => includes(["cols", "rows"], params[0]) && (_$1 = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
    ["gridAuto-" + toColumnsOrRows(params[0])]: _$1
  },
  static: position,
  fixed: position,
  absolute: position,
  relative: position,
  sticky: position,
  visible: { visibility: "visible" },
  invisible: { visibility: "hidden" },
  antialiased: {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  },
  "subpixel-antialiased": {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  },
  truncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  "sr-only": {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  },
  "not-sr-only": {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  },
  resize: (params) => ({
    resize: { x: "horizontal", y: "vertical" }[params[0]] || params[0] || "both"
  }),
  box: (params) => params[0] && { boxSizing: params[0] + "-box" },
  appearance: propertyValue(),
  cursor: themePropertyFallback(),
  float: propertyValue(),
  clear: propertyValue(),
  decoration: propertyValue("boxDecorationBreak"),
  isolate: { isolation: "isolate" },
  isolation: propertyValue(),
  "mix-blend": propertyValue("mixBlendMode"),
  top: inset,
  right: inset,
  bottom: inset,
  left: inset,
  inset: (params, { theme: theme2 }) => (_$1 = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_$1 = theme2("inset", params)) && {
    top: _$1,
    right: _$1,
    bottom: _$1,
    left: _$1
  },
  underline: textDecoration,
  "line-through": textDecoration,
  "no-underline": alias(textDecoration, "none"),
  "text-underline": alias(textDecoration, "underline"),
  "text-no-underline": alias(textDecoration, "none"),
  "text-line-through": alias(textDecoration, "line-through"),
  uppercase: textTransform,
  lowercase: textTransform,
  capitalize: textTransform,
  "normal-case": alias(textTransform, "none"),
  "text-normal-case": alias(textTransform, "none"),
  italic: fontStyle,
  "not-italic": alias(fontStyle, "normal"),
  "font-italic": alias(fontStyle, "italic"),
  "font-not-italic": alias(fontStyle, "normal"),
  font: (params, context, id) => (_$1 = context.theme("fontFamily", params, "")) ? { fontFamily: _$1 } : themeProperty("fontWeight")(params, context, id),
  items: (params) => params[0] && {
    alignItems: includes(["start", "end"], params[0]) ? "flex-" + params[0] : join(params)
  },
  "justify-self": propertyValue(),
  "justify-items": propertyValue(),
  justify: contentPluginFor("justifyContent"),
  content: contentPluginFor("alignContent"),
  self: contentPluginFor("alignSelf"),
  place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
  overscroll: (params) => params[0] && {
    ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
  },
  col: gridPlugin("column"),
  row: gridPlugin("row"),
  duration: themeProperty("transitionDuration"),
  delay: themeProperty("transitionDelay"),
  tracking: themeProperty("letterSpacing"),
  leading: themeProperty("lineHeight"),
  z: themeProperty("zIndex"),
  opacity: themeProperty(),
  ease: themeProperty("transitionTimingFunction"),
  p: padding,
  py: padding,
  px: padding,
  pt: padding,
  pr: padding,
  pb: padding,
  pl: padding,
  m: margin,
  my: margin,
  mx: margin,
  mt: margin,
  mr: margin,
  mb: margin,
  ml: margin,
  w: themeProperty("width"),
  h: themeProperty("height"),
  min: minMax,
  max: minMax,
  fill: themeProperty(),
  order: themeProperty(),
  origin: themePropertyFallback("transformOrigin", " "),
  select: propertyValue("userSelect"),
  "pointer-events": propertyValue(),
  align: propertyValue("verticalAlign"),
  whitespace: propertyValue("whiteSpace"),
  "normal-nums": { fontVariantNumeric: "normal" },
  ordinal: fontVariantNumeric("ordinal"),
  "slashed-zero": fontVariantNumeric("slashed-zero"),
  "lining-nums": fontVariantNumeric("numeric-figure"),
  "oldstyle-nums": fontVariantNumeric("numeric-figure"),
  "proportional-nums": fontVariantNumeric("numeric-spacing"),
  "tabular-nums": fontVariantNumeric("numeric-spacing"),
  "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
  "stacked-fractions": fontVariantNumeric("numeric-fraction"),
  overflow: (params, context, id) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? { ["overflow-" + params[0]]: params[1] } : propertyValue()(params, context, id),
  transform: (params) => params[0] == "none" ? { transform: "none" } : {
    "--tw-translate-x": "0",
    "--tw-translate-y": "0",
    "--tw-rotate": "0",
    "--tw-skew-x": "0",
    "--tw-skew-y": "0",
    "--tw-scale-x": "1",
    "--tw-scale-y": "1",
    transform: transform(params[0] == "gpu")
  },
  rotate: (params, { theme: theme2 }) => (_$1 = theme2("rotate", params)) && {
    "--tw-rotate": _$1,
    transform: [`rotate(${_$1})`, transform()]
  },
  scale: transformXYFunction,
  translate: transformXYFunction,
  skew: transformXYFunction,
  gap: (params, context, id) => (_$1 = { x: "column", y: "row" }[params[0]]) ? { [_$1 + "Gap"]: context.theme("gap", tail(params)) } : themeProperty("gap")(params, context, id),
  stroke: (params, context, id) => (_$1 = context.theme("stroke", params, "")) ? { stroke: _$1 } : themeProperty("strokeWidth")(params, context, id),
  outline: (params, { theme: theme2 }) => (_$1 = theme2("outline", params)) && {
    outline: _$1[0],
    outlineOffset: _$1[1]
  },
  "break-normal": {
    wordBreak: "normal",
    overflowWrap: "normal"
  },
  "break-words": { overflowWrap: "break-word" },
  "break-all": { wordBreak: "break-all" },
  text(params, { theme: theme2 }, id) {
    switch (params[0]) {
      case "left":
      case "center":
      case "right":
      case "justify":
        return { textAlign: params[0] };
      case "uppercase":
      case "lowercase":
      case "capitalize":
        return textTransform([], _$1, params[0]);
      case "opacity":
        return opacityProperty(params, theme2, id);
    }
    const fontSize = theme2("fontSize", params, "");
    if (fontSize) {
      return typeof fontSize == "string" ? { fontSize } : __spreadValues({
        fontSize: fontSize[0]
      }, typeof fontSize[1] == "string" ? { lineHeight: fontSize[1] } : fontSize[1]);
    }
    return withOpacityFallback("color", "text", theme2("textColor", params));
  },
  bg(params, { theme: theme2 }, id) {
    switch (params[0]) {
      case "fixed":
      case "local":
      case "scroll":
        return propertyValue("backgroundAttachment", ",")(params);
      case "bottom":
      case "center":
      case "left":
      case "right":
      case "top":
        return propertyValue("backgroundPosition", " ")(params);
      case "no":
        return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
      case "repeat":
        return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : { backgroundRepeat: params[1] || params[0] };
      case "opacity":
        return opacityProperty(params, theme2, id, "background");
      case "clip":
      case "origin":
        return params[1] && {
          ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
        };
      case "blend":
        return propertyValue("background-blend-mode")(tail(params));
      case "gradient":
        if (params[1] == "to" && (_$1 = expandEdges(params[2]))) {
          return {
            backgroundImage: `linear-gradient(to ${join(_$1, " ")},var(--tw-gradient-stops))`
          };
        }
    }
    return (_$1 = theme2("backgroundPosition", params, "")) ? { backgroundPosition: _$1 } : (_$1 = theme2("backgroundSize", params, "")) ? { backgroundSize: _$1 } : (_$1 = theme2("backgroundImage", params, "")) ? { backgroundImage: _$1 } : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
  },
  from: (params, { theme: theme2 }) => (_$1 = theme2("gradientColorStops", params)) && {
    "--tw-gradient-from": _$1,
    "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_$1)})`
  },
  via: (params, { theme: theme2 }) => (_$1 = theme2("gradientColorStops", params)) && {
    "--tw-gradient-stops": `var(--tw-gradient-from),${_$1},var(--tw-gradient-to,${transparentTo(_$1)})`
  },
  to: (params, { theme: theme2 }) => (_$1 = theme2("gradientColorStops", params)) && {
    "--tw-gradient-to": _$1
  },
  border: (params, context, id) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
  divide: (params, context, id) => (_$1 = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
    "&>:not([hidden])~:not([hidden])": _$1
  },
  space: (params, context, id) => (_$1 = reversableEdge(params, context, id, "space", "margin")) && {
    "&>:not([hidden])~:not([hidden])": _$1
  },
  placeholder: (params, { theme: theme2 }, id) => (_$1 = params[0] == "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
    "&::placeholder": _$1
  },
  shadow: (params, { theme: theme2 }) => (_$1 = theme2("boxShadow", params)) && {
    ":global": {
      "*": {
        "--tw-shadow": "0 0 transparent"
      }
    },
    "--tw-shadow": _$1 == "none" ? "0 0 transparent" : _$1,
    boxShadow: [
      _$1,
      `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
    ]
  },
  animate: (params, { theme: theme2, tag }) => {
    if ($ = theme2("animation", params)) {
      const parts = $.split(" ");
      if ((_$1 = theme2("keyframes", parts[0], __ = {})) !== __) {
        return ($ = tag(parts[0])) && {
          animation: $ + " " + join(tail(parts), " "),
          ["@keyframes " + $]: _$1
        };
      }
      return { animation: $ };
    }
  },
  ring(params, { theme: theme2 }, id) {
    switch (params[0]) {
      case "inset":
        return { "--tw-ring-inset": "inset" };
      case "opacity":
        return opacityProperty(params, theme2, id);
      case "offset":
        return (_$1 = theme2("ringOffsetWidth", tail(params), "")) ? {
          "--tw-ring-offset-width": _$1
        } : {
          "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
        };
    }
    return (_$1 = theme2("ringWidth", params, "")) ? {
      "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
      "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_$1} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
      boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
      ":global": {
        "*": {
          "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
          "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
          "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
          "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
          "--tw-ring-offset-shadow": "0 0 transparent",
          "--tw-ring-shadow": "0 0 transparent"
        }
      }
    } : {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
    };
  },
  object: (params, context, id) => includes(["contain", "cover", "fill", "none", "scale-down"], join(params)) ? { objectFit: join(params) } : themePropertyFallback("objectPosition", " ")(params, context, id),
  list: (params, context, id) => join(params) == "item" ? display(params, context, id) : includes(["inside", "outside"], join(params)) ? { listStylePosition: params[0] } : themePropertyFallback("listStyleType")(params, context, id),
  rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
  "transition-none": { transitionProperty: "none" },
  transition: (params, { theme: theme2 }) => ({
    transitionProperty: theme2("transitionProperty", params),
    transitionTimingFunction: theme2("transitionTimingFunction", ""),
    transitionDuration: theme2("transitionDuration", "")
  }),
  container: (params, { theme: theme2 }) => {
    const { screens = theme2("screens"), center, padding: padding2 } = theme2("container");
    const paddingFor = (screen) => (_$1 = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
      paddingRight: _$1,
      paddingLeft: _$1
    } : {};
    return Object.keys(screens).reduce((rules2, screen) => {
      if (($ = screens[screen]) && typeof $ == "string") {
        rules2[buildMediaQuery($)] = {
          "&": __spreadValues({
            "max-width": $
          }, paddingFor(screen))
        };
      }
      return rules2;
    }, __spreadValues(__spreadValues({
      width: "100%"
    }, center ? { marginRight: "auto", marginLeft: "auto" } : {}), paddingFor("xs")));
  },
  filter,
  blur: filter,
  brightness: filter,
  contrast: filter,
  grayscale: filter,
  "hue-rotate": filter,
  invert: filter,
  saturate: filter,
  sepia: filter,
  "drop-shadow": filter,
  backdrop: filter
};
var createPreflight = (theme2) => ({
  ":root": { tabSize: 4 },
  "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" },
  button: { backgroundColor: "transparent", backgroundImage: "none" },
  'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" },
  "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] },
  "fieldset,ol,ul,legend": { padding: "0" },
  "ol,ul": { listStyle: "none" },
  html: {
    lineHeight: "1.5",
    WebkitTextSizeAdjust: "100%",
    fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
  },
  body: { fontFamily: "inherit", lineHeight: "inherit" },
  "*,::before,::after": {
    boxSizing: "border-box",
    border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
  },
  hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
  img: { borderStyle: "solid" },
  textarea: { resize: "vertical" },
  "input::placeholder,textarea::placeholder": {
    opacity: "1",
    color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
  },
  'button,[role="button"]': { cursor: "pointer" },
  table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" },
  "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
  a: { color: "inherit", textDecoration: "inherit" },
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    margin: "0",
    padding: "0",
    lineHeight: "inherit",
    color: "inherit"
  },
  "button,select": { textTransform: "none" },
  "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
  ":-moz-focusring": { outline: "1px dotted ButtonText" },
  ":-moz-ui-invalid": { boxShadow: "none" },
  progress: { verticalAlign: "baseline" },
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" },
  '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
  "::-webkit-search-decoration": { WebkitAppearance: "none" },
  "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" },
  summary: { display: "list-item" },
  "abbr[title]": { textDecoration: "underline dotted" },
  "b,strong": { fontWeight: "bolder" },
  "pre,code,kbd,samp": {
    fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
    fontSize: "1em"
  },
  "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" },
  sub: { bottom: "-0.25em" },
  sup: { top: "-0.5em" },
  "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" },
  "img,video": { maxWidth: "100%", height: "auto" }
});
var coreVariants = {
  dark: "@media (prefers-color-scheme:dark)",
  sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
  "motion-reduce": "@media (prefers-reduced-motion:reduce)",
  "motion-safe": "@media (prefers-reduced-motion:no-preference)",
  first: "&:first-child",
  last: "&:last-child",
  even: "&:nth-child(2n)",
  odd: "&:nth-child(odd)",
  children: "&>*",
  siblings: "&~*",
  sibling: "&+*",
  override: "&&"
};
var STYLE_ELEMENT_ID = "__twind";
var getStyleElement = (nonce) => {
  let element = self[STYLE_ELEMENT_ID];
  if (!element) {
    element = document.head.appendChild(document.createElement("style"));
    element.id = STYLE_ELEMENT_ID;
    nonce && (element.nonce = nonce);
    element.appendChild(document.createTextNode(""));
  }
  return element;
};
var cssomSheet = ({
  nonce,
  target = getStyleElement(nonce).sheet
} = {}) => {
  const offset = target.cssRules.length;
  return {
    target,
    insert: (rule, index) => target.insertRule(rule, offset + index)
  };
};
var voidSheet = () => ({
  target: null,
  insert: noop$1
});
var mode = (report) => ({
  unknown(section, key = [], optional, context) {
    if (!optional) {
      this.report({ id: "UNKNOWN_THEME_VALUE", key: section + "." + join(key) }, context);
    }
  },
  report(_a2) {
    var _b = _a2, { id } = _b, info = __objRest(_b, ["id"]);
    return report(`[${id}] ${JSON.stringify(info)}`);
  }
});
var warn = /* @__PURE__ */ mode((message) => console.warn(message));
var strict = /* @__PURE__ */ mode((message) => {
  throw new Error(message);
});
var silent = /* @__PURE__ */ mode(noop$1);
var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
var autoprefix = (property2, value, important) => {
  let cssText = "";
  const propertyAlias = r(property2);
  if (propertyAlias)
    cssText += `${noprefix(propertyAlias, value, important)};`;
  let flags = a(property2);
  if (flags & 1)
    cssText += `-webkit-${noprefix(property2, value, important)};`;
  if (flags & 2)
    cssText += `-moz-${noprefix(property2, value, important)};`;
  if (flags & 4)
    cssText += `-ms-${noprefix(property2, value, important)};`;
  flags = t(property2, value);
  if (flags & 1)
    cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
  if (flags & 2)
    cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
  if (flags & 4)
    cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
  cssText += noprefix(property2, value, important);
  return cssText;
};
var ratios = (start, end) => {
  const result = {};
  do {
    for (let dividend = 1; dividend < start; dividend++) {
      result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
    }
  } while (++start <= end);
  return result;
};
var exponential = (stop, unit, start = 0) => {
  const result = {};
  for (; start <= stop; start = start * 2 || 1) {
    result[start] = start + unit;
  }
  return result;
};
var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
  for (; start <= stop; start += step) {
    result[start] = start / divideBy + unit;
  }
  return result;
};
var alias2 = (section) => (theme2) => theme2(section);
var defaultTheme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d"
    },
    yellow: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f"
    },
    green: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81"
    },
    purple: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843"
    }
  },
  spacing: __spreadProps(__spreadValues(__spreadProps(__spreadValues(__spreadValues({
    px: "1px",
    0: "0px"
  }, /* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5)), /* @__PURE__ */ linear(12, "rem", 4, 5)), {
    14: "3.5rem"
  }), /* @__PURE__ */ linear(64, "rem", 4, 16, 4)), {
    72: "18rem",
    80: "20rem",
    96: "24rem"
  }),
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite"
  },
  backdropBlur: /* @__PURE__ */ alias2("blur"),
  backdropBrightness: /* @__PURE__ */ alias2("brightness"),
  backdropContrast: /* @__PURE__ */ alias2("contrast"),
  backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
  backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
  backdropInvert: /* @__PURE__ */ alias2("invert"),
  backdropOpacity: /* @__PURE__ */ alias2("opacity"),
  backdropSaturate: /* @__PURE__ */ alias2("saturate"),
  backdropSepia: /* @__PURE__ */ alias2("sepia"),
  backgroundColor: /* @__PURE__ */ alias2("colors"),
  backgroundImage: {
    none: "none"
  },
  backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    0: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  brightness: __spreadProps(__spreadValues(__spreadValues({}, /* @__PURE__ */ linear(200, "", 100, 0, 50)), /* @__PURE__ */ linear(110, "", 100, 90, 5)), {
    75: "0.75",
    125: "1.25"
  }),
  borderColor: (theme2) => __spreadProps(__spreadValues({}, theme2("colors")), {
    DEFAULT: theme2("colors.gray.200", "currentColor")
  }),
  borderOpacity: /* @__PURE__ */ alias2("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "1/2": "50%",
    full: "9999px"
  },
  borderWidth: __spreadValues({
    DEFAULT: "1px"
  }, /* @__PURE__ */ exponential(8, "px")),
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    none: "none"
  },
  contrast: __spreadProps(__spreadValues({}, /* @__PURE__ */ linear(200, "", 100, 0, 50)), {
    75: "0.75",
    125: "1.25"
  }),
  divideColor: /* @__PURE__ */ alias2("borderColor"),
  divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
  divideWidth: /* @__PURE__ */ alias2("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgba(0,0,0,0.05)",
    DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
    md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
    lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
    xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
    "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
    none: "0 0 #0000"
  },
  fill: { current: "currentColor" },
  grayscale: {
    0: "0",
    DEFAULT: "100%"
  },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  invert: {
    0: "0",
    DEFAULT: "100%"
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: ["0.75rem", "1rem"],
    sm: ["0.875rem", "1.25rem"],
    base: ["1rem", "1.5rem"],
    lg: ["1.125rem", "1.75rem"],
    xl: ["1.25rem", "1.75rem"],
    "2xl": ["1.5rem", "2rem"],
    "3xl": ["1.875rem", "2.25rem"],
    "4xl": ["2.25rem", "2.5rem"],
    "5xl": ["3rem", "1"],
    "6xl": ["3.75rem", "1"],
    "7xl": ["4.5rem", "1"],
    "8xl": ["6rem", "1"],
    "9xl": ["8rem", "1"]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridAutoColumns: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridAutoRows: {
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridColumn: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gridRow: {
    auto: "auto",
    "span-full": "1 / -1"
  },
  gap: /* @__PURE__ */ alias2("spacing"),
  gradientColorStops: /* @__PURE__ */ alias2("colors"),
  height: (theme2) => __spreadProps(__spreadValues(__spreadValues({
    auto: "auto"
  }, theme2("spacing")), ratios(2, 6)), {
    full: "100%",
    screen: "100vh"
  }),
  inset: (theme2) => __spreadProps(__spreadValues(__spreadValues({
    auto: "auto"
  }, theme2("spacing")), ratios(2, 4)), {
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: __spreadValues({
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  }, /* @__PURE__ */ linear(10, "rem", 4, 3)),
  margin: (theme2) => __spreadValues({
    auto: "auto"
  }, theme2("spacing")),
  maxHeight: (theme2) => __spreadProps(__spreadValues({}, theme2("spacing")), {
    full: "100%",
    screen: "100vh"
  }),
  maxWidth: (theme2, { breakpoints }) => __spreadValues({
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    prose: "65ch"
  }, breakpoints(theme2("screens"))),
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content"
  },
  opacity: __spreadProps(__spreadValues({}, /* @__PURE__ */ linear(100, "", 100, 0, 10)), {
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  }),
  order: __spreadValues({
    first: "-9999",
    last: "9999",
    none: "0"
  }, /* @__PURE__ */ linear(12, "", 1, 1)),
  outline: {
    none: ["2px solid transparent", "2px"],
    white: ["2px dotted white", "2px"],
    black: ["2px dotted black", "2px"]
  },
  padding: /* @__PURE__ */ alias2("spacing"),
  placeholderColor: /* @__PURE__ */ alias2("colors"),
  placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
  ringColor: (theme2) => __spreadValues({
    DEFAULT: theme2("colors.blue.500", "#3b82f6")
  }, theme2("colors")),
  ringOffsetColor: /* @__PURE__ */ alias2("colors"),
  ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
  ringOpacity: (theme2) => __spreadValues({
    DEFAULT: "0.5"
  }, theme2("opacity")),
  ringWidth: __spreadValues({
    DEFAULT: "3px"
  }, /* @__PURE__ */ exponential(8, "px")),
  rotate: __spreadValues(__spreadValues(__spreadValues({}, /* @__PURE__ */ exponential(2, "deg")), /* @__PURE__ */ exponential(12, "deg", 3)), /* @__PURE__ */ exponential(180, "deg", 45)),
  saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
  scale: __spreadProps(__spreadValues(__spreadValues({}, /* @__PURE__ */ linear(150, "", 100, 0, 50)), /* @__PURE__ */ linear(110, "", 100, 90, 5)), {
    75: "0.75",
    125: "1.25"
  }),
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: __spreadValues(__spreadValues({}, /* @__PURE__ */ exponential(2, "deg")), /* @__PURE__ */ exponential(12, "deg", 3)),
  space: /* @__PURE__ */ alias2("spacing"),
  stroke: {
    current: "currentColor"
  },
  strokeWidth: /* @__PURE__ */ linear(2),
  textColor: /* @__PURE__ */ alias2("colors"),
  textOpacity: /* @__PURE__ */ alias2("opacity"),
  transitionDuration: (theme2) => __spreadValues({
    DEFAULT: "150ms"
  }, theme2("durations")),
  transitionDelay: /* @__PURE__ */ alias2("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    colors: "background-color,border-color,color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: (theme2) => __spreadProps(__spreadValues(__spreadValues({}, theme2("spacing")), ratios(2, 4)), {
    full: "100%"
  }),
  width: (theme2) => __spreadProps(__spreadValues(__spreadValues(__spreadValues({
    auto: "auto"
  }, theme2("spacing")), ratios(2, 6)), ratios(12, 12)), {
    screen: "100vw",
    full: "100%",
    min: "min-content",
    max: "max-content"
  }),
  zIndex: __spreadValues({
    auto: "auto"
  }, /* @__PURE__ */ linear(50, "", 1, 0, 10))
};
var flattenColorPalette = (colors, target = {}, prefix = []) => {
  Object.keys(colors).forEach((property2) => {
    const value = colors[property2];
    if (property2 == "DEFAULT") {
      target[join(prefix)] = value;
      target[join(prefix, ".")] = value;
    }
    const key = [...prefix, property2];
    target[join(key)] = value;
    target[join(key, ".")] = value;
    if (value && typeof value == "object") {
      flattenColorPalette(value, target, key);
    }
  }, target);
  return target;
};
var resolveContext = {
  negative: () => ({}),
  breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
    target["screen-" + key] = screens[key];
    return target;
  }, {})
};
var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
var makeThemeResolver = (config) => {
  const cache2 = /* @__PURE__ */ new Map();
  const theme2 = __spreadValues(__spreadValues({}, defaultTheme), config);
  const deref = (theme3, section) => {
    const base = theme3 && theme3[section];
    const value = typeof base == "function" ? base(resolve, resolveContext) : base;
    return value && section == "colors" ? flattenColorPalette(value) : value;
  };
  const resolve = (section, key, defaultValue) => {
    const keypath = section.split(".");
    section = keypath[0];
    if (keypath.length > 1) {
      defaultValue = key;
      key = join(tail(keypath), ".");
    }
    let base = cache2.get(section);
    if (!base) {
      cache2.set(section, base = __spreadValues({}, deref(theme2, section)));
      Object.assign(base, deref(theme2.extend, section));
    }
    if (key != null) {
      key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
      const value = handleArbitraryValues(section, key) || base[key];
      return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline", "dropShadow"], section) ? join(value, ",") : value;
    }
    return base;
  };
  return resolve;
};
var translate = (plugins, context) => (rule, isTranslating) => {
  if (typeof rule.d == "function") {
    return rule.d(context);
  }
  const parameters = rule.d.split(/-(?![^[]*])/g);
  if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
    return rule.$;
  }
  for (let index = parameters.length; index; index--) {
    const id = join(parameters.slice(0, index));
    const plugin = plugins[id];
    if (plugin) {
      return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
    }
  }
};
var _2;
var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
var NOT_PREFIX_RE = /^(:not)-(.+)/;
var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
var decorate = (darkMode, variants, { theme: theme2, tag }) => {
  const applyVariant = (translation, variant) => {
    if (_2 = theme2("screens", tail(variant), "")) {
      return { [buildMediaQuery(_2)]: translation };
    }
    if (variant == ":dark" && darkMode == "class") {
      return { ".dark &": translation };
    }
    if (_2 = GROUP_RE.exec(variant)) {
      return { [`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation };
    }
    return {
      [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
    };
  };
  return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
};
var _3;
var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
var seperatorPrecedence = (string) => {
  _3 = 0;
  for (let index = string.length; index--; ) {
    _3 += includes("-:,", string[index]);
  }
  return _3;
};
var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
var PRECEDENCES_BY_PSEUDO_CLASS = [
  "rst",
  "st",
  "en",
  "d",
  "nk",
  "sited",
  "pty",
  "ecked",
  "cus-w",
  "ver",
  "cus",
  "cus-v",
  "tive",
  "sable",
  "ad-on",
  "tiona",
  "quire"
];
var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;
var stringifyBlock = (body, selector) => selector + "{" + body + "}";
var serialize$1 = (prefix, variants, context) => {
  const { theme: theme2, tag } = context;
  const tagVar = (_4, property2) => "--" + tag(property2);
  const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
  const stringifyDeclaration = (property2, value, important) => {
    property2 = tagVars(property2);
    return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
  };
  let rules2;
  const stringify3 = (atRules, selector, presedence, css, important) => {
    if (Array.isArray(css)) {
      css.forEach((css2) => css2 && stringify3(atRules, selector, presedence, css2, important));
      return;
    }
    let declarations = "";
    let maxPropertyPresedence = 0;
    let numberOfDeclarations = 0;
    if (css["@apply"]) {
      css = merge$1(evalThunk(apply(css["@apply"]), context), __spreadProps(__spreadValues({}, css), { "@apply": void 0 }), context);
    }
    Object.keys(css).forEach((key) => {
      const value = evalThunk(css[key], context);
      if (isCSSProperty(key, value)) {
        if (value !== "" && key.length > 1) {
          const property2 = hyphenate(key);
          numberOfDeclarations += 1;
          maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
          declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
        }
      } else if (value) {
        if (key == ":global") {
          key = "@global";
        }
        if (key[0] == "@") {
          if (key[1] == "g") {
            stringify3([], "", 0, value, important);
          } else if (key[1] == "f") {
            stringify3([], key, 0, value, important);
          } else if (key[1] == "k") {
            const currentSize = rules2.length;
            stringify3([], "", 0, value, important);
            const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
            rules2.push({
              r: stringifyBlock(join(waypoints.map((p2) => p2.r), ""), key),
              p: waypoints.reduce((sum, p2) => sum + p2.p, 0)
            });
          } else if (key[1] == "i") {
            (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({ p: 0, r: `${key} ${value2};` }));
          } else {
            if (key[2] == "c") {
              key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
            }
            stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
          }
        } else {
          stringify3(atRules, selector ? join(selector.split(/,(?![^[]*])/g).map((selectorPart) => join(key.split(/,(?![^[]*])/g).map((keyPart) => includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart), ",")), ",") : key, presedence, value, important);
        }
      }
    });
    if (numberOfDeclarations) {
      rules2.push({
        r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
        p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
      });
    }
  };
  const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
  return (css, className, rule, layer = 0) => {
    layer <<= 28;
    rules2 = [];
    stringify3([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
    return rules2;
  };
};
var inject = (sheet, mode2, init, context) => {
  let sortedPrecedences;
  init((value = []) => sortedPrecedences = value);
  let insertedRules;
  init((value = /* @__PURE__ */ new Set()) => insertedRules = value);
  return ({ r: css, p: presedence }) => {
    if (!insertedRules.has(css)) {
      insertedRules.add(css);
      const index = sortedInsertionIndex(sortedPrecedences, presedence);
      try {
        sheet.insert(css, index);
        sortedPrecedences.splice(index, 0, presedence);
      } catch (error) {
        if (!/:-[mwo]/.test(css)) {
          mode2.report({ id: "INJECT_CSS_ERROR", css, error }, context);
        }
      }
    }
  };
};
var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
var loadMode = (mode2) => (typeof mode2 == "string" ? { t: strict, a: warn, i: silent }[mode2[1]] : mode2) || warn;
var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
var stringify2 = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
var COMPONENT_PROPS = { _: { value: "", writable: true } };
var configure = (config = {}) => {
  const theme2 = makeThemeResolver(config.theme);
  const mode2 = loadMode(config.mode);
  const hash = sanitize(config.hash, false, false, cyrb32);
  const important = config.important;
  let activeRule = { v: [] };
  let translateDepth = 0;
  const lastTranslations = [];
  const context = {
    tw: (...tokens) => process2(tokens),
    theme: (section, key, defaultValue) => {
      var _a2;
      const value = (_a2 = theme2(section, key, defaultValue)) != null ? _a2 : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
      return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
    },
    tag: (value) => hash ? hash(value) : value,
    css: (rules2) => {
      translateDepth++;
      const lastTranslationsIndex = lastTranslations.length;
      try {
        ;
        (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
        const css = Object.create(null, COMPONENT_PROPS);
        for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
          const translation = lastTranslations[index];
          if (translation) {
            switch (typeof translation) {
              case "object":
                merge$1(css, translation, context);
                break;
              case "string":
                css._ += (css._ && " ") + translation;
            }
          }
        }
        return css;
      } finally {
        lastTranslations.length = lastTranslationsIndex;
        translateDepth--;
      }
    }
  };
  const translate2 = translate(__spreadValues(__spreadValues({}, corePlugins), config.plugins), context);
  const doTranslate = (rule) => {
    const parentRule = activeRule;
    activeRule = rule;
    try {
      return evalThunk(translate2(rule), context);
    } finally {
      activeRule = parentRule;
    }
  };
  const variants = __spreadValues(__spreadValues({}, coreVariants), config.variants);
  const decorate2 = decorate(config.darkMode || "media", variants, context);
  const serialize2 = serialize$1(sanitize(config.prefix, autoprefix, noprefix), variants, context);
  const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
  const { init = (callback) => callback() } = sheet;
  const inject2 = inject(sheet, mode2, init, context);
  let idToClassName;
  init((value = /* @__PURE__ */ new Map()) => idToClassName = value);
  const inlineDirectiveName = /* @__PURE__ */ new WeakMap();
  const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
  const convert = (rule) => {
    if (!translateDepth && activeRule.v.length) {
      rule = __spreadProps(__spreadValues({}, rule), { v: [...activeRule.v, ...rule.v], $: "" });
    }
    if (!rule.$) {
      rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
    }
    let className = translateDepth ? null : idToClassName.get(rule.$);
    if (className == null) {
      let translation = doTranslate(rule);
      if (!rule.$) {
        rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
        inlineDirectiveName.set(rule.d, rule.$);
        rule.$ = stringify2(rule, rule.$);
      }
      if (translation && typeof translation == "object") {
        rule.v = rule.v.map(prepareVariantSelector);
        if (important)
          rule.i = important;
        translation = decorate2(translation, rule);
        if (translateDepth) {
          lastTranslations.push(translation);
        } else {
          const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
          className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
          serialize2(translation, className, rule, layer).forEach(inject2);
          if (translation._) {
            className += " " + translation._;
          }
        }
      } else {
        if (typeof translation == "string") {
          className = translation;
        } else {
          className = rule.$;
          mode2.report({ id: "UNKNOWN_DIRECTIVE", rule: className }, context);
        }
        if (translateDepth && typeof rule.d !== "function") {
          lastTranslations.push(className);
        }
      }
      if (!translateDepth) {
        idToClassName.set(rule.$, className);
        ensureMaxSize(idToClassName, 3e4);
      }
    }
    return className;
  };
  const process2 = (tokens) => join(parse(tokens).map(convert).filter(Boolean), " ");
  const preflight = sanitize(config.preflight, identity, false);
  if (preflight) {
    const css = createPreflight(theme2);
    const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : __spreadValues(__spreadValues({}, css), preflight));
    init((injected = (styles.forEach(inject2), true)) => injected);
  }
  return {
    init: () => mode2.report({ id: "LATE_SETUP_CALL" }, context),
    process: process2
  };
};
var create = (config) => {
  let process2 = (tokens) => {
    init();
    return process2(tokens);
  };
  let init = (config2) => {
    ({ process: process2, init } = configure(config2));
  };
  if (config)
    init(config);
  let context;
  const fromContext = (key) => () => {
    if (!context) {
      process2([
        (_4) => {
          context = _4;
          return "";
        }
      ]);
    }
    return context[key];
  };
  return {
    tw: Object.defineProperties((...tokens) => process2(tokens), {
      theme: {
        get: fromContext("theme")
      }
    }),
    setup: (config2) => init(config2)
  };
};
var { tw, setup } = /* @__PURE__ */ create();
function k$1() {
  let e = [], t2 = [], r2 = { enqueue(o) {
    t2.push(o);
  }, requestAnimationFrame(...o) {
    let n2 = requestAnimationFrame(...o);
    r2.add(() => cancelAnimationFrame(n2));
  }, nextFrame(...o) {
    r2.requestAnimationFrame(() => {
      r2.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n2 = setTimeout(...o);
    r2.add(() => clearTimeout(n2));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t2.splice(0))
      await o();
  } };
  return r2;
}
function Q() {
  let [e] = useState(k$1);
  return useEffect(() => () => e.dispose(), [e]), e;
}
var x = typeof window != "undefined" ? useLayoutEffect : useEffect;
var yt = { serverHandoffComplete: false };
function q$1() {
  let [e, t2] = useState(yt.serverHandoffComplete);
  return useEffect(() => {
    e !== true && t2(true);
  }, [e]), useEffect(() => {
    yt.serverHandoffComplete === false && (yt.serverHandoffComplete = true);
  }, []), e;
}
var or = 0;
function to() {
  return ++or;
}
function A() {
  let e = q$1(), [t2, r2] = useState(e ? to : null);
  return x(() => {
    t2 === null && r2(to());
  }, [t2]), t2 != null ? "" + t2 : void 0;
}
function ke(e) {
  let t2 = useRef(e);
  return useEffect(() => {
    t2.current = e;
  }, [e]), t2;
}
function ee(e, t2) {
  let [r2, o] = useState(e), n2 = ke(e);
  return x(() => o(n2.current), [n2, o, ...t2]), r2;
}
function I(...e) {
  let t2 = useRef(e);
  return useEffect(() => {
    t2.current = e;
  }, [e]), useCallback((r2) => {
    for (let o of t2.current)
      o != null && (typeof o == "function" ? o(r2) : o.current = r2);
  }, [t2]);
}
function S(e, t2, ...r2) {
  if (e in t2) {
    let n2 = t2[e];
    return typeof n2 == "function" ? n2(...r2) : n2;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t2).map((n2) => `"${n2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, S), o;
}
function E({ props: e, slot: t2, defaultTag: r2, features: o, visible: n2 = true, name: i2 }) {
  if (n2)
    return _e(e, t2, r2, i2);
  let a2 = o != null ? o : 0;
  if (a2 & 2) {
    let _a2 = e, { static: l2 = false } = _a2, s = __objRest(_a2, ["static"]);
    if (l2)
      return _e(s, t2, r2, i2);
  }
  if (a2 & 1) {
    let _b = e, { unmount: l2 = true } = _b, s = __objRest(_b, ["unmount"]);
    return S(l2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return _e(__spreadProps(__spreadValues({}, s), { hidden: true, style: { display: "none" } }), t2, r2, i2);
    } });
  }
  return _e(e, t2, r2, i2);
}
function _e(e, t2 = {}, r2, o) {
  let _a2 = gt(e, ["unmount", "static"]), { as: n2 = r2, children: i2, refName: a2 = "ref" } = _a2, l2 = __objRest(_a2, ["as", "children", "refName"]), s = e.ref !== void 0 ? { [a2]: e.ref } : {}, u = typeof i2 == "function" ? i2(t2) : i2;
  if (l2.className && typeof l2.className == "function" && (l2.className = l2.className(t2)), n2 === Fragment && Object.keys(l2).length > 0) {
    if (!isValidElement(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l2).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    return cloneElement(u, Object.assign({}, fr(mr(gt(l2, ["ref"])), u.props, ["onClick"]), s));
  }
  return createElement(n2, Object.assign({}, gt(l2, ["ref"]), n2 !== Fragment && s), u);
}
function fr(e, t2, r2) {
  let o = Object.assign({}, e);
  for (let n2 of r2)
    e[n2] !== void 0 && t2[n2] !== void 0 && Object.assign(o, { [n2](i2) {
      i2.defaultPrevented || e[n2](i2), i2.defaultPrevented || t2[n2](i2);
    } });
  return o;
}
function D(e) {
  var t2;
  return Object.assign(forwardRef(e), { displayName: (t2 = e.displayName) != null ? t2 : e.name });
}
function mr(e) {
  let t2 = Object.assign({}, e);
  for (let r2 in t2)
    t2[r2] === void 0 && delete t2[r2];
  return t2;
}
function gt(e, t2 = []) {
  let r2 = Object.assign({}, e);
  for (let o of t2)
    o in r2 && delete r2[o];
  return r2;
}
function br(e) {
  throw new Error("Unexpected object: " + e);
}
function ae(e, t2) {
  let r2 = t2.resolveItems();
  if (r2.length <= 0)
    return null;
  let o = t2.resolveActiveIndex(), n2 = o != null ? o : -1, i2 = (() => {
    switch (e.focus) {
      case 0:
        return r2.findIndex((a2) => !t2.resolveDisabled(a2));
      case 1: {
        let a2 = r2.slice().reverse().findIndex((l2, s, u) => n2 !== -1 && u.length - s - 1 >= n2 ? false : !t2.resolveDisabled(l2));
        return a2 === -1 ? a2 : r2.length - 1 - a2;
      }
      case 2:
        return r2.findIndex((a2, l2) => l2 <= n2 ? false : !t2.resolveDisabled(a2));
      case 3: {
        let a2 = r2.slice().reverse().findIndex((l2) => !t2.resolveDisabled(l2));
        return a2 === -1 ? a2 : r2.length - 1 - a2;
      }
      case 4:
        return r2.findIndex((a2) => t2.resolveId(a2) === e.id);
      case 5:
        return null;
      default:
        br(e);
    }
  })();
  return i2 === -1 ? o : i2;
}
function G(e) {
  let t2 = e.parentElement, r2 = null;
  for (; t2 && !(t2 instanceof HTMLFieldSetElement); )
    t2 instanceof HTMLLegendElement && (r2 = t2), t2 = t2.parentElement;
  let o = (t2 == null ? void 0 : t2.getAttribute("disabled")) === "";
  return o && Tr(r2) ? false : o;
}
function Tr(e) {
  if (!e)
    return false;
  let t2 = e.previousElementSibling;
  for (; t2 !== null; ) {
    if (t2 instanceof HTMLLegendElement)
      return false;
    t2 = t2.previousElementSibling;
  }
  return true;
}
function w(e, t2, r2) {
  let o = useRef(t2);
  o.current = t2, useEffect(() => {
    function n2(i2) {
      o.current.call(window, i2);
    }
    return window.addEventListener(e, n2, r2), () => window.removeEventListener(e, n2, r2);
  }, [e, r2]);
}
var Pt = createContext(null);
Pt.displayName = "OpenClosedContext";
function _() {
  return useContext(Pt);
}
function W({ value: e, children: t2 }) {
  return React__default.createElement(Pt.Provider, { value: e }, t2);
}
function ro(e) {
  var r2;
  if (e.type)
    return e.type;
  let t2 = (r2 = e.as) != null ? r2 : "button";
  if (typeof t2 == "string" && t2.toLowerCase() === "button")
    return "button";
}
function U(e, t2) {
  let [r2, o] = useState(() => ro(e));
  return x(() => {
    o(ro(e));
  }, [e.type, e.as]), x(() => {
    r2 || !t2.current || t2.current instanceof HTMLButtonElement && !t2.current.hasAttribute("type") && o("button");
  }, [r2, t2]), r2;
}
function se({ container: e, accept: t2, walk: r2, enabled: o = true }) {
  let n2 = useRef(t2), i2 = useRef(r2);
  useEffect(() => {
    n2.current = t2, i2.current = r2;
  }, [t2, r2]), x(() => {
    if (!e || !o)
      return;
    let a2 = n2.current, l2 = i2.current, s = Object.assign((c) => a2(c), { acceptNode: a2 }), u = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, false);
    for (; u.nextNode(); )
      l2(u.currentNode);
  }, [e, o, n2, i2]);
}
var Ar = { [1](e) {
  return e.disabled || e.comboboxState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: null, comboboxState: 1 });
}, [0](e) {
  return e.disabled || e.comboboxState === 0 ? e : __spreadProps(__spreadValues({}, e), { comboboxState: 0 });
}, [2](e, t2) {
  return e.disabled === t2.disabled ? e : __spreadProps(__spreadValues({}, e), { disabled: t2.disabled });
}, [3](e, t2) {
  if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && e.comboboxState === 1)
    return e;
  let r2 = ae(t2, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.activeOptionIndex === r2 ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: r2 });
}, [4]: (e, t2) => {
  var i2;
  let r2 = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, o = Array.from((i2 = e.optionsRef.current) == null ? void 0 : i2.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a2, l2, s) => Object.assign(a2, { [l2.id]: s }), {}), n2 = [...e.options, { id: t2.id, dataRef: t2.dataRef }].sort((a2, l2) => o[a2.id] - o[l2.id]);
  return __spreadProps(__spreadValues({}, e), { options: n2, activeOptionIndex: (() => r2 === null ? null : n2.indexOf(r2))() });
}, [5]: (e, t2) => {
  let r2 = e.options.slice(), o = e.activeOptionIndex !== null ? r2[e.activeOptionIndex] : null, n2 = r2.findIndex((i2) => i2.id === t2.id);
  return n2 !== -1 && r2.splice(n2, 1), __spreadProps(__spreadValues({}, e), { options: r2, activeOptionIndex: (() => n2 === e.activeOptionIndex || o === null ? null : r2.indexOf(o))() });
} }, vt = createContext(null);
vt.displayName = "ComboboxContext";
function pe(e) {
  let t2 = useContext(vt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, pe), r2;
  }
  return t2;
}
var Rt = createContext(null);
Rt.displayName = "ComboboxActions";
function Ue() {
  let e = useContext(Rt);
  if (e === null) {
    let t2 = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t2, Ue), t2;
  }
  return e;
}
function hr(e, t2) {
  return S(t2.type, Ar, e, t2);
}
var Or = Fragment, Ir = D(function(t2, r2) {
  let _a2 = t2, { value: o, onChange: n2, disabled: i2 = false } = _a2, a2 = __objRest(_a2, ["value", "onChange", "disabled"]), l2 = useRef({ value: o, onChange: n2 }), s = useRef({ static: false, hold: false }), u = useRef({ displayValue: void 0 }), c = useReducer(hr, { comboboxState: 1, comboboxPropsRef: l2, optionsPropsRef: s, inputPropsRef: u, labelRef: createRef(), inputRef: createRef(), buttonRef: createRef(), optionsRef: createRef(), disabled: i2, options: [], activeOptionIndex: null }), [{ comboboxState: m2, options: b, activeOptionIndex: T, optionsRef: y, inputRef: p2, buttonRef: f2 }, d] = c;
  x(() => {
    l2.current.value = o;
  }, [o, l2]), x(() => {
    l2.current.onChange = n2;
  }, [n2, l2]), x(() => d({ type: 2, disabled: i2 }), [i2]), w("mousedown", (O) => {
    var N, K, V;
    let L = O.target;
    m2 === 0 && (((N = f2.current) == null ? void 0 : N.contains(L)) || ((K = p2.current) == null ? void 0 : K.contains(L)) || ((V = y.current) == null ? void 0 : V.contains(L)) || d({ type: 1 }));
  });
  let P = T === null ? null : b[T].dataRef.current.value, C = useMemo(() => ({ open: m2 === 0, disabled: i2, activeIndex: T, activeOption: P }), [m2, i2, b, T]), R = useCallback(() => {
    if (!p2.current || o === void 0)
      return;
    let O = u.current.displayValue;
    typeof O == "function" ? p2.current.value = O(o) : typeof o == "string" && (p2.current.value = o);
  }, [o, p2, u]), g = useCallback((O) => {
    let L = b.find((K) => K.id === O);
    if (!L)
      return;
    let { dataRef: N } = L;
    l2.current.onChange(N.current.value), R();
  }, [b, l2, p2]), v = useCallback(() => {
    if (T !== null) {
      let { dataRef: O } = b[T];
      l2.current.onChange(O.current.value), R();
    }
  }, [T, b, l2, p2]), h = useMemo(() => ({ selectOption: g, selectActiveOption: v }), [g, v]);
  return x(() => {
    m2 === 1 && R();
  }, [R, m2]), x(R, [R]), React__default.createElement(Rt.Provider, { value: h }, React__default.createElement(vt.Provider, { value: c }, React__default.createElement(W, { value: S(m2, { [0]: 0, [1]: 1 }) }, E({ props: r2 === null ? a2 : __spreadProps(__spreadValues({}, a2), { ref: r2 }), slot: C, defaultTag: Or, name: "Combobox" }))));
}), Lr = "input", Dr = D(function(t2, r2) {
  var R, g;
  let _a2 = t2, { value: o, onChange: n2, displayValue: i2 } = _a2, a2 = __objRest(_a2, ["value", "onChange", "displayValue"]), [l2, s] = pe("Combobox.Input"), u = Ue(), c = I(l2.inputRef, r2), m2 = l2.inputPropsRef, b = `headlessui-combobox-input-${A()}`, T = Q(), y = ke(n2);
  x(() => {
    m2.current.displayValue = i2;
  }, [i2, m2]);
  let p2 = useCallback((v) => {
    switch (v.key) {
      case "Enter":
        v.preventDefault(), v.stopPropagation(), u.selectActiveOption(), s({ type: 1 });
        break;
      case "ArrowDown":
        return v.preventDefault(), v.stopPropagation(), S(l2.comboboxState, { [0]: () => s({ type: 3, focus: 2 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l2.comboboxPropsRef.current.value || s({ type: 3, focus: 0 });
          });
        } });
      case "ArrowUp":
        return v.preventDefault(), v.stopPropagation(), S(l2.comboboxState, { [0]: () => s({ type: 3, focus: 1 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l2.comboboxPropsRef.current.value || s({ type: 3, focus: 3 });
          });
        } });
      case "Home":
      case "PageUp":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 0 });
      case "End":
      case "PageDown":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 3 });
      case "Escape":
        return v.preventDefault(), l2.optionsRef.current && !l2.optionsPropsRef.current.static && v.stopPropagation(), s({ type: 1 });
      case "Tab":
        u.selectActiveOption(), s({ type: 1 });
        break;
    }
  }, [T, s, l2, u]), f2 = useCallback((v) => {
    var h;
    s({ type: 0 }), (h = y.current) == null || h.call(y, v);
  }, [s, y]), d = ee(() => {
    if (!!l2.labelRef.current)
      return [l2.labelRef.current.id].join(" ");
  }, [l2.labelRef.current]), P = useMemo(() => ({ open: l2.comboboxState === 0, disabled: l2.disabled }), [l2]), C = { ref: c, id: b, role: "combobox", type: "text", "aria-controls": (R = l2.optionsRef.current) == null ? void 0 : R.id, "aria-expanded": l2.disabled ? void 0 : l2.comboboxState === 0, "aria-activedescendant": l2.activeOptionIndex === null || (g = l2.options[l2.activeOptionIndex]) == null ? void 0 : g.id, "aria-labelledby": d, disabled: l2.disabled, onKeyDown: p2, onChange: f2 };
  return E({ props: __spreadValues(__spreadValues({}, a2), C), slot: P, defaultTag: Lr, name: "Combobox.Input" });
}), Mr = "button", Fr = D(function(t2, r2) {
  var p2;
  let [o, n2] = pe("Combobox.Button"), i2 = Ue(), a2 = I(o.buttonRef, r2), l2 = `headlessui-combobox-button-${A()}`, s = Q(), u = useCallback((f2) => {
    switch (f2.key) {
      case "ArrowDown":
        return f2.preventDefault(), f2.stopPropagation(), o.comboboxState === 1 && (n2({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n2({ type: 3, focus: 0 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "ArrowUp":
        return f2.preventDefault(), f2.stopPropagation(), o.comboboxState === 1 && (n2({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n2({ type: 3, focus: 3 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "Escape":
        return f2.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && f2.stopPropagation(), n2({ type: 1 }), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
    }
  }, [s, n2, o, i2]), c = useCallback((f2) => {
    if (G(f2.currentTarget))
      return f2.preventDefault();
    o.comboboxState === 0 ? n2({ type: 1 }) : (f2.preventDefault(), n2({ type: 0 })), s.nextFrame(() => {
      var d;
      return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    });
  }, [n2, s, o]), m2 = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, l2].join(" ");
  }, [o.labelRef.current, l2]), b = useMemo(() => ({ open: o.comboboxState === 0, disabled: o.disabled }), [o]), T = t2, y = { ref: a2, id: l2, type: U(t2, o.buttonRef), tabIndex: -1, "aria-haspopup": true, "aria-controls": (p2 = o.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o.disabled ? void 0 : o.comboboxState === 0, "aria-labelledby": m2, disabled: o.disabled, onClick: c, onKeyDown: u };
  return E({ props: __spreadValues(__spreadValues({}, T), y), slot: b, defaultTag: Mr, name: "Combobox.Button" });
}), wr = "label";
function kr(e) {
  let [t2] = pe("Combobox.Label"), r2 = `headlessui-combobox-label-${A()}`, o = useCallback(() => {
    var a2;
    return (a2 = t2.inputRef.current) == null ? void 0 : a2.focus({ preventScroll: true });
  }, [t2.inputRef]), n2 = useMemo(() => ({ open: t2.comboboxState === 0, disabled: t2.disabled }), [t2]), i2 = { ref: t2.labelRef, id: r2, onClick: o };
  return E({ props: __spreadValues(__spreadValues({}, e), i2), slot: n2, defaultTag: wr, name: "Combobox.Label" });
}
var _r = "ul", Gr = 1 | 2, Hr = D(function(t2, r2) {
  var y;
  let _a2 = t2, { hold: o = false } = _a2, n2 = __objRest(_a2, ["hold"]), [i2] = pe("Combobox.Options"), { optionsPropsRef: a2 } = i2, l2 = I(i2.optionsRef, r2), s = `headlessui-combobox-options-${A()}`, u = _(), c = (() => u !== null ? u === 0 : i2.comboboxState === 0)();
  x(() => {
    var p2;
    a2.current.static = (p2 = t2.static) != null ? p2 : false;
  }, [a2, t2.static]), x(() => {
    a2.current.hold = o;
  }, [o, a2]), se({ container: i2.optionsRef.current, enabled: i2.comboboxState === 0, accept(p2) {
    return p2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p2) {
    p2.setAttribute("role", "none");
  } });
  let m2 = ee(() => {
    var p2, f2, d;
    return (d = (p2 = i2.labelRef.current) == null ? void 0 : p2.id) != null ? d : (f2 = i2.buttonRef.current) == null ? void 0 : f2.id;
  }, [i2.labelRef.current, i2.buttonRef.current]), b = useMemo(() => ({ open: i2.comboboxState === 0 }), [i2]), T = { "aria-activedescendant": i2.activeOptionIndex === null || (y = i2.options[i2.activeOptionIndex]) == null ? void 0 : y.id, "aria-labelledby": m2, role: "listbox", id: s, ref: l2 };
  return E({ props: __spreadValues(__spreadValues({}, n2), T), slot: b, defaultTag: _r, features: Gr, visible: c, name: "Combobox.Options" });
}), Ur = "li";
function Br(e) {
  let _a2 = e, { disabled: t2 = false, value: r2 } = _a2, o = __objRest(_a2, ["disabled", "value"]), [n2, i2] = pe("Combobox.Option"), a2 = Ue(), l2 = `headlessui-combobox-option-${A()}`, s = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === l2 : false, u = n2.comboboxPropsRef.current.value === r2, c = useRef({ disabled: t2, value: r2 });
  x(() => {
    c.current.disabled = t2;
  }, [c, t2]), x(() => {
    c.current.value = r2;
  }, [c, r2]), x(() => {
    var P, C;
    c.current.textValue = (C = (P = document.getElementById(l2)) == null ? void 0 : P.textContent) == null ? void 0 : C.toLowerCase();
  }, [c, l2]);
  let m2 = useCallback(() => a2.selectOption(l2), [a2, l2]);
  x(() => (i2({ type: 4, id: l2, dataRef: c }), () => i2({ type: 5, id: l2 })), [c, l2]), x(() => {
    n2.comboboxState === 0 && (!u || i2({ type: 3, focus: 4, id: l2 }));
  }, [n2.comboboxState, u, l2]), x(() => {
    if (n2.comboboxState !== 0 || !s)
      return;
    let P = k$1();
    return P.requestAnimationFrame(() => {
      var C, R;
      (R = (C = document.getElementById(l2)) == null ? void 0 : C.scrollIntoView) == null || R.call(C, { block: "nearest" });
    }), P.dispose;
  }, [l2, s, n2.comboboxState, n2.activeOptionIndex]);
  let b = useCallback((P) => {
    if (t2)
      return P.preventDefault();
    m2(), i2({ type: 1 }), k$1().nextFrame(() => {
      var C;
      return (C = n2.inputRef.current) == null ? void 0 : C.focus({ preventScroll: true });
    });
  }, [i2, n2.inputRef, t2, m2]), T = useCallback(() => {
    if (t2)
      return i2({ type: 3, focus: 5 });
    i2({ type: 3, focus: 4, id: l2 });
  }, [t2, l2, i2]), y = useCallback(() => {
    t2 || s || i2({ type: 3, focus: 4, id: l2 });
  }, [t2, s, l2, i2]), p2 = useCallback(() => {
    t2 || !s || n2.optionsPropsRef.current.hold || i2({ type: 3, focus: 5 });
  }, [t2, s, i2, n2.comboboxState, n2.comboboxPropsRef]), f2 = useMemo(() => ({ active: s, selected: u, disabled: t2 }), [s, u, t2]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: l2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": u === true ? true : void 0, disabled: void 0, onClick: b, onFocus: T, onPointerMove: y, onMouseMove: y, onPointerLeave: p2, onMouseLeave: p2 }), slot: f2, defaultTag: Ur, name: "Combobox.Option" });
}
var Na = Object.assign(Ir, { Input: Dr, Button: Fr, Label: kr, Options: Hr, Option: Br });
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
function xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et));
}
function de(e, t2 = 0) {
  return e === document.body ? false : S(t2, { [0]() {
    return e.matches(Et);
  }, [1]() {
    let r2 = e;
    for (; r2 !== null; ) {
      if (r2.matches(Et))
        return true;
      r2 = r2.parentElement;
    }
    return false;
  } });
}
function ce(e) {
  e == null || e.focus({ preventScroll: true });
}
function M(e, t2) {
  let r2 = Array.isArray(e) ? e.slice().sort((c, m2) => {
    let b = c.compareDocumentPosition(m2);
    return b & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e), o = document.activeElement, n2 = (() => {
    if (t2 & (1 | 4))
      return 1;
    if (t2 & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i2 = (() => {
    if (t2 & 1)
      return 0;
    if (t2 & 2)
      return Math.max(0, r2.indexOf(o)) - 1;
    if (t2 & 4)
      return Math.max(0, r2.indexOf(o)) + 1;
    if (t2 & 8)
      return r2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a2 = t2 & 32 ? { preventScroll: true } : {}, l2 = 0, s = r2.length, u;
  do {
    if (l2 >= s || l2 + s <= 0)
      return 0;
    let c = i2 + l2;
    if (t2 & 16)
      c = (c + s) % s;
    else {
      if (c < 0)
        return 3;
      if (c >= s)
        return 1;
    }
    u = r2[c], u == null || u.focus(a2), l2 += n2;
  } while (u !== document.activeElement);
  return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2;
}
function Be() {
  let e = useRef(false);
  return useEffect(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function Ne(e, t2 = 30, { initialFocus: r2, containers: o } = {}) {
  let n2 = useRef(typeof window != "undefined" ? document.activeElement : null), i2 = useRef(null), a2 = Be(), l2 = Boolean(t2 & 16), s = Boolean(t2 & 2);
  useEffect(() => {
    !l2 || (n2.current = document.activeElement);
  }, [l2]), useEffect(() => {
    if (!!l2)
      return () => {
        ce(n2.current), n2.current = null;
      };
  }, [l2]), useEffect(() => {
    if (!s || !e.current)
      return;
    let u = document.activeElement;
    if (r2 == null ? void 0 : r2.current) {
      if ((r2 == null ? void 0 : r2.current) === u) {
        i2.current = u;
        return;
      }
    } else if (e.current.contains(u)) {
      i2.current = u;
      return;
    }
    (r2 == null ? void 0 : r2.current) ? ce(r2.current) : M(e.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i2.current = document.activeElement;
  }, [e, r2, s]), w("keydown", (u) => {
    !(t2 & 4) || !e.current || u.key === "Tab" && (u.preventDefault(), M(e.current, (u.shiftKey ? 2 : 4) | 16) === 2 && (i2.current = document.activeElement));
  }), w("focus", (u) => {
    if (!(t2 & 8))
      return;
    let c = new Set(o == null ? void 0 : o.current);
    if (c.add(e), !c.size)
      return;
    let m2 = i2.current;
    if (!m2 || !a2.current)
      return;
    let b = u.target;
    b && b instanceof HTMLElement ? Kr(c, b) ? (i2.current = b, ce(b)) : (u.preventDefault(), u.stopPropagation(), ce(m2)) : ce(i2.current);
  }, true);
}
function Kr(e, t2) {
  var r2;
  for (let o of e)
    if ((r2 = o.current) == null ? void 0 : r2.contains(t2))
      return true;
  return false;
}
var fe = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map();
function po(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function co(e) {
  let t2 = J.get(e);
  !t2 || (t2["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t2["aria-hidden"]), e.inert = t2.inert);
}
function fo(e, t2 = true) {
  x(() => {
    if (!t2 || !e.current)
      return;
    let r2 = e.current;
    fe.add(r2);
    for (let o of J.keys())
      o.contains(r2) && (co(o), J.delete(o));
    return document.querySelectorAll("body > *").forEach((o) => {
      if (o instanceof HTMLElement) {
        for (let n2 of fe)
          if (o.contains(n2))
            return;
        fe.size === 1 && (J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o));
      }
    }), () => {
      if (fe.delete(r2), fe.size > 0)
        document.querySelectorAll("body > *").forEach((o) => {
          if (o instanceof HTMLElement && !J.has(o)) {
            for (let n2 of fe)
              if (o.contains(n2))
                return;
            J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o);
          }
        });
      else
        for (let o of J.keys())
          co(o), J.delete(o);
    };
  }, [t2]);
}
var mo = createContext(false);
function bo() {
  return useContext(mo);
}
function At(e) {
  return React__default.createElement(mo.Provider, { value: e.force }, e.children);
}
function Xr() {
  let e = bo(), t2 = useContext(Po), [r2, o] = useState(() => {
    if (!e && t2 !== null || typeof window == "undefined")
      return null;
    let n2 = document.getElementById("headlessui-portal-root");
    if (n2)
      return n2;
    let i2 = document.createElement("div");
    return i2.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i2);
  });
  return useEffect(() => {
    r2 !== null && (document.body.contains(r2) || document.body.appendChild(r2));
  }, [r2]), useEffect(() => {
    e || t2 !== null && o(t2.current);
  }, [t2, o, e]), r2;
}
var Jr = Fragment;
function We(e) {
  let t2 = e, r2 = Xr(), [o] = useState(() => typeof window == "undefined" ? null : document.createElement("div")), n2 = q$1();
  return x(() => {
    if (!!r2 && !!o)
      return r2.appendChild(o), () => {
        var i2;
        !r2 || !o || (r2.removeChild(o), r2.childNodes.length <= 0 && ((i2 = r2.parentElement) == null || i2.removeChild(r2)));
      };
  }, [r2, o]), n2 ? !r2 || !o ? null : createPortal(E({ props: t2, defaultTag: Jr, name: "Portal" }), o) : null;
}
var Zr = Fragment, Po = createContext(null);
function en(e) {
  let _a2 = e, { target: t2 } = _a2, r2 = __objRest(_a2, ["target"]);
  return React__default.createElement(Po.Provider, { value: t2 }, E({ props: r2, defaultTag: Zr, name: "Popover.Group" }));
}
We.Group = en;
var vo = createContext(null);
function Ro() {
  let e = useContext(vo);
  if (e === null) {
    let t2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t2, Ro), t2;
  }
  return e;
}
function re() {
  let [e, t2] = useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, useMemo(() => function(o) {
    let n2 = useCallback((a2) => (t2((l2) => [...l2, a2]), () => t2((l2) => {
      let s = l2.slice(), u = s.indexOf(a2);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i2 = useMemo(() => ({ register: n2, slot: o.slot, name: o.name, props: o.props }), [n2, o.slot, o.name, o.props]);
    return React__default.createElement(vo.Provider, { value: i2 }, o.children);
  }, [t2])];
}
var an = "p";
function me(e) {
  let t2 = Ro(), r2 = `headlessui-description-${A()}`;
  x(() => t2.register(r2), [r2, t2.register]);
  let o = e, n2 = __spreadProps(__spreadValues({}, t2.props), { id: r2 });
  return E({ props: __spreadValues(__spreadValues({}, o), n2), slot: t2.slot || {}, defaultTag: an, name: t2.name || "Description" });
}
var ht = createContext(() => {
});
ht.displayName = "StackContext";
function cn() {
  return useContext(ht);
}
function Eo({ children: e, onUpdate: t2, type: r2, element: o }) {
  let n2 = cn(), i2 = useCallback((...a2) => {
    t2 == null || t2(...a2), n2(...a2);
  }, [n2, t2]);
  return x(() => (i2(0, r2, o), () => i2(1, r2, o)), [i2, r2, o]), React__default.createElement(ht.Provider, { value: i2 }, e);
}
var yn = { [0](e, t2) {
  return e.titleId === t2.id ? e : __spreadProps(__spreadValues({}, e), { titleId: t2.id });
} }, Ve = createContext(null);
Ve.displayName = "DialogContext";
function It(e) {
  let t2 = useContext(Ve);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, It), r2;
  }
  return t2;
}
function gn(e, t2) {
  return S(t2.type, yn, e, t2);
}
var Pn = "div", xn = 1 | 2, vn = D(function(t2, r2) {
  let _a2 = t2, { open: o, onClose: n2, initialFocus: i2 } = _a2, a2 = __objRest(_a2, ["open", "onClose", "initialFocus"]), [l2, s] = useState(0), u = _();
  o === void 0 && u !== null && (o = S(u, { [0]: true, [1]: false }));
  let c = useRef(/* @__PURE__ */ new Set()), m2 = useRef(null), b = I(m2, r2), T = t2.hasOwnProperty("open") || u !== null, y = t2.hasOwnProperty("onClose");
  if (!T && !y)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
  if (typeof n2 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n2}`);
  let p2 = o ? 0 : 1, f2 = (() => u !== null ? u === 0 : p2 === 0)(), [d, P] = useReducer(gn, { titleId: null, descriptionId: null }), C = useCallback(() => n2(false), [n2]), R = useCallback((F) => P({ type: 0, id: F }), [P]), v = q$1() && p2 === 0, h = l2 > 1, O = useContext(Ve) !== null;
  Ne(m2, v ? S(h ? "parent" : "leaf", { parent: 16, leaf: 30 }) : 1, { initialFocus: i2, containers: c }), fo(m2, h ? v : false), w("mousedown", (F) => {
    var H;
    let $2 = F.target;
    p2 === 0 && (h || ((H = m2.current) == null ? void 0 : H.contains($2)) || C());
  }), w("keydown", (F) => {
    F.key === "Escape" && p2 === 0 && (h || (F.preventDefault(), F.stopPropagation(), C()));
  }), useEffect(() => {
    if (p2 !== 0 || O)
      return;
    let F = document.documentElement.style.overflow, $2 = document.documentElement.style.paddingRight, H = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H}px`, () => {
      document.documentElement.style.overflow = F, document.documentElement.style.paddingRight = $2;
    };
  }, [p2, O]), useEffect(() => {
    if (p2 !== 0 || !m2.current)
      return;
    let F = new IntersectionObserver(($2) => {
      for (let H of $2)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && C();
    });
    return F.observe(m2.current), () => F.disconnect();
  }, [p2, m2, C]);
  let [N, K] = re(), V = `headlessui-dialog-${A()}`, Fe = useMemo(() => [{ dialogState: p2, close: C, setTitleId: R }, d], [p2, d, C, R]), ge = useMemo(() => ({ open: p2 === 0 }), [p2]), we = { ref: b, id: V, role: "dialog", "aria-modal": p2 === 0 ? true : void 0, "aria-labelledby": d.titleId, "aria-describedby": N, onClick(F) {
    F.stopPropagation();
  } }, X = a2;
  return React__default.createElement(Eo, { type: "Dialog", element: m2, onUpdate: useCallback((F, $2, H) => {
    $2 === "Dialog" && S(F, { [0]() {
      c.current.add(H), s((Pe) => Pe + 1);
    }, [1]() {
      c.current.add(H), s((Pe) => Pe - 1);
    } });
  }, []) }, React__default.createElement(At, { force: true }, React__default.createElement(We, null, React__default.createElement(Ve.Provider, { value: Fe }, React__default.createElement(We.Group, { target: m2 }, React__default.createElement(At, { force: false }, React__default.createElement(K, { slot: ge, name: "Dialog.Description" }, E({ props: __spreadValues(__spreadValues({}, X), we), slot: ge, defaultTag: Pn, features: xn, visible: f2, name: "Dialog" }))))))));
}), Rn = "div", En = D(function(t2, r2) {
  let [{ dialogState: o, close: n2 }] = It("Dialog.Overlay"), i2 = I(r2), a2 = `headlessui-dialog-overlay-${A()}`, l2 = useCallback((m2) => {
    if (m2.target === m2.currentTarget) {
      if (G(m2.currentTarget))
        return m2.preventDefault();
      m2.preventDefault(), m2.stopPropagation(), n2();
    }
  }, [n2]), s = useMemo(() => ({ open: o === 0 }), [o]);
  return E({ props: __spreadValues(__spreadValues({}, t2), { ref: i2, id: a2, "aria-hidden": true, onClick: l2 }), slot: s, defaultTag: Rn, name: "Dialog.Overlay" });
}), Cn = "h2";
function Sn(e) {
  let [{ dialogState: t2, setTitleId: r2 }] = It("Dialog.Title"), o = `headlessui-dialog-title-${A()}`;
  useEffect(() => (r2(o), () => r2(null)), [o, r2]);
  let n2 = useMemo(() => ({ open: t2 === 0 }), [t2]);
  return E({ props: __spreadValues(__spreadValues({}, e), { id: o }), slot: n2, defaultTag: Cn, name: "Dialog.Title" });
}
var An = Object.assign(vn, { Overlay: En, Title: Sn, Description: me });
var Ln = { [0]: (e) => __spreadProps(__spreadValues({}, e), { disclosureState: S(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : __spreadProps(__spreadValues({}, e), { disclosureState: 1 }), [4](e) {
  return e.linkedPanel === true ? e : __spreadProps(__spreadValues({}, e), { linkedPanel: true });
}, [5](e) {
  return e.linkedPanel === false ? e : __spreadProps(__spreadValues({}, e), { linkedPanel: false });
}, [2](e, t2) {
  return e.buttonId === t2.buttonId ? e : __spreadProps(__spreadValues({}, e), { buttonId: t2.buttonId });
}, [3](e, t2) {
  return e.panelId === t2.panelId ? e : __spreadProps(__spreadValues({}, e), { panelId: t2.panelId });
} }, Mt = createContext(null);
Mt.displayName = "DisclosureContext";
function Ft(e) {
  let t2 = useContext(Mt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Ft), r2;
  }
  return t2;
}
var wt = createContext(null);
wt.displayName = "DisclosureAPIContext";
function Ao(e) {
  let t2 = useContext(wt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Ao), r2;
  }
  return t2;
}
var kt = createContext(null);
kt.displayName = "DisclosurePanelContext";
function Dn() {
  return useContext(kt);
}
function Mn(e, t2) {
  return S(t2.type, Ln, e, t2);
}
var Fn = Fragment;
function Ye(e) {
  let _a2 = e, { defaultOpen: t2 = false } = _a2, r2 = __objRest(_a2, ["defaultOpen"]), o = `headlessui-disclosure-button-${A()}`, n2 = `headlessui-disclosure-panel-${A()}`, i2 = useReducer(Mn, { disclosureState: t2 ? 0 : 1, linkedPanel: false, buttonId: o, panelId: n2 }), [{ disclosureState: a2 }, l2] = i2;
  useEffect(() => l2({ type: 2, buttonId: o }), [o, l2]), useEffect(() => l2({ type: 3, panelId: n2 }), [n2, l2]);
  let s = useCallback((m2) => {
    l2({ type: 1 });
    let b = (() => m2 ? m2 instanceof HTMLElement ? m2 : m2.current instanceof HTMLElement ? m2.current : document.getElementById(o) : document.getElementById(o))();
    b == null || b.focus();
  }, [l2, o]), u = useMemo(() => ({ close: s }), [s]), c = useMemo(() => ({ open: a2 === 0, close: s }), [a2, s]);
  return React__default.createElement(Mt.Provider, { value: i2 }, React__default.createElement(wt.Provider, { value: u }, React__default.createElement(W, { value: S(a2, { [0]: 0, [1]: 1 }) }, E({ props: r2, slot: c, defaultTag: Fn, name: "Disclosure" }))));
}
var wn = "button", kn = D(function(t2, r2) {
  let [o, n2] = Ft("Disclosure.Button"), i2 = useRef(null), a2 = I(i2, r2), l2 = Dn(), s = l2 === null ? false : l2 === o.panelId, u = useCallback((f2) => {
    var d;
    if (s) {
      if (o.disclosureState === 1)
        return;
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus();
          break;
      }
    } else
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 });
          break;
      }
  }, [n2, s, o.disclosureState, o.buttonId]), c = useCallback((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), m2 = useCallback((f2) => {
    var d;
    G(f2.currentTarget) || t2.disabled || (s ? (n2({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus()) : n2({ type: 0 }));
  }, [n2, t2.disabled, o.buttonId, s]), b = useMemo(() => ({ open: o.disclosureState === 0 }), [o]), T = U(t2, i2), y = t2, p2 = s ? { ref: a2, type: T, onKeyDown: u, onClick: m2 } : { ref: a2, id: o.buttonId, type: T, "aria-expanded": t2.disabled ? void 0 : o.disclosureState === 0, "aria-controls": o.linkedPanel ? o.panelId : void 0, onKeyDown: u, onKeyUp: c, onClick: m2 };
  return E({ props: __spreadValues(__spreadValues({}, y), p2), slot: b, defaultTag: wn, name: "Disclosure.Button" });
}), _n = "div", Gn = 1 | 2, Hn = D(function(t2, r2) {
  let [o, n2] = Ft("Disclosure.Panel"), { close: i2 } = Ao("Disclosure.Panel"), a2 = I(r2, () => {
    o.linkedPanel || n2({ type: 4 });
  }), l2 = _(), s = (() => l2 !== null ? l2 === 0 : o.disclosureState === 0)();
  useEffect(() => () => n2({ type: 5 }), [n2]), useEffect(() => {
    var b;
    o.disclosureState === 1 && ((b = t2.unmount) != null ? b : true) && n2({ type: 5 });
  }, [o.disclosureState, t2.unmount, n2]);
  let u = useMemo(() => ({ open: o.disclosureState === 0, close: i2 }), [o, i2]), c = { ref: a2, id: o.panelId }, m2 = t2;
  return React__default.createElement(kt.Provider, { value: o.panelId }, E({ props: __spreadValues(__spreadValues({}, m2), c), slot: u, defaultTag: _n, features: Gn, visible: s, name: "Disclosure.Panel" }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = { [1](e) {
  return e.disabled || e.listboxState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeOptionIndex: null, listboxState: 1 });
}, [0](e) {
  return e.disabled || e.listboxState === 0 ? e : __spreadProps(__spreadValues({}, e), { listboxState: 0 });
}, [2](e, t2) {
  return e.disabled === t2.disabled ? e : __spreadProps(__spreadValues({}, e), { disabled: t2.disabled });
}, [3](e, t2) {
  return e.orientation === t2.orientation ? e : __spreadProps(__spreadValues({}, e), { orientation: t2.orientation });
}, [4](e, t2) {
  if (e.disabled || e.listboxState === 1)
    return e;
  let r2 = ae(t2, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeOptionIndex === r2 ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", activeOptionIndex: r2 });
}, [5]: (e, t2) => {
  if (e.disabled || e.listboxState === 1)
    return e;
  let o = e.searchQuery !== "" ? 0 : 1, n2 = e.searchQuery + t2.value.toLowerCase(), a2 = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find((s) => {
    var u;
    return !s.dataRef.current.disabled && ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n2));
  }), l2 = a2 ? e.options.indexOf(a2) : -1;
  return l2 === -1 || l2 === e.activeOptionIndex ? __spreadProps(__spreadValues({}, e), { searchQuery: n2 }) : __spreadProps(__spreadValues({}, e), { searchQuery: n2, activeOptionIndex: l2 });
}, [6](e) {
  return e.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "" });
}, [7]: (e, t2) => {
  var n2;
  let r2 = Array.from((n2 = e.optionsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i2, a2, l2) => Object.assign(i2, { [a2.id]: l2 }), {}), o = [...e.options, { id: t2.id, dataRef: t2.dataRef }].sort((i2, a2) => r2[i2.id] - r2[a2.id]);
  return __spreadProps(__spreadValues({}, e), { options: o });
}, [8]: (e, t2) => {
  let r2 = e.options.slice(), o = e.activeOptionIndex !== null ? r2[e.activeOptionIndex] : null, n2 = r2.findIndex((i2) => i2.id === t2.id);
  return n2 !== -1 && r2.splice(n2, 1), __spreadProps(__spreadValues({}, e), { options: r2, activeOptionIndex: (() => n2 === e.activeOptionIndex || o === null ? null : r2.indexOf(o))() });
} }, Gt = createContext(null);
Gt.displayName = "ListboxContext";
function Re(e) {
  let t2 = useContext(Gt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Re), r2;
  }
  return t2;
}
function Qn(e, t2) {
  return S(t2.type, $n, e, t2);
}
var qn = Fragment;
function Ee(e) {
  let _a2 = e, { value: t2, onChange: r2, disabled: o = false, horizontal: n2 = false } = _a2, i2 = __objRest(_a2, ["value", "onChange", "disabled", "horizontal"]), a2 = n2 ? "horizontal" : "vertical", l2 = useReducer(Qn, { listboxState: 1, propsRef: { current: { value: t2, onChange: r2 } }, labelRef: createRef(), buttonRef: createRef(), optionsRef: createRef(), disabled: o, orientation: a2, options: [], searchQuery: "", activeOptionIndex: null }), [{ listboxState: s, propsRef: u, optionsRef: c, buttonRef: m2 }, b] = l2;
  x(() => {
    u.current.value = t2;
  }, [t2, u]), x(() => {
    u.current.onChange = r2;
  }, [r2, u]), x(() => b({ type: 2, disabled: o }), [o]), x(() => b({ type: 3, orientation: a2 }), [a2]), w("mousedown", (y) => {
    var f2, d, P;
    let p2 = y.target;
    s === 0 && (((f2 = m2.current) == null ? void 0 : f2.contains(p2)) || ((d = c.current) == null ? void 0 : d.contains(p2)) || (b({ type: 1 }), de(p2, 1) || (y.preventDefault(), (P = m2.current) == null || P.focus())));
  });
  let T = useMemo(() => ({ open: s === 0, disabled: o }), [s, o]);
  return React__default.createElement(Gt.Provider, { value: l2 }, React__default.createElement(W, { value: S(s, { [0]: 0, [1]: 1 }) }, E({ props: i2, slot: T, defaultTag: qn, name: "Listbox" })));
}
var zn = "button", Yn = D(function(t2, r2) {
  var p2;
  let [o, n2] = Re("Listbox.Button"), i2 = I(o.buttonRef, r2), a2 = `headlessui-listbox-button-${A()}`, l2 = Q(), s = useCallback((f2) => {
    switch (f2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f2.preventDefault(), n2({ type: 0 }), l2.nextFrame(() => {
          o.propsRef.current.value || n2({ type: 4, focus: 0 });
        });
        break;
      case "ArrowUp":
        f2.preventDefault(), n2({ type: 0 }), l2.nextFrame(() => {
          o.propsRef.current.value || n2({ type: 4, focus: 3 });
        });
        break;
    }
  }, [n2, o, l2]), u = useCallback((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), c = useCallback((f2) => {
    if (G(f2.currentTarget))
      return f2.preventDefault();
    o.listboxState === 0 ? (n2({ type: 1 }), l2.nextFrame(() => {
      var d;
      return (d = o.buttonRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    })) : (f2.preventDefault(), n2({ type: 0 }));
  }, [n2, l2, o]), m2 = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, a2].join(" ");
  }, [o.labelRef.current, a2]), b = useMemo(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]), T = t2, y = { ref: i2, id: a2, type: U(t2, o.buttonRef), "aria-haspopup": true, "aria-controls": (p2 = o.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o.disabled ? void 0 : o.listboxState === 0, "aria-labelledby": m2, disabled: o.disabled, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: __spreadValues(__spreadValues({}, T), y), slot: b, defaultTag: zn, name: "Listbox.Button" });
}), Xn = "label";
function Jn(e) {
  let [t2] = Re("Listbox.Label"), r2 = `headlessui-listbox-label-${A()}`, o = useCallback(() => {
    var a2;
    return (a2 = t2.buttonRef.current) == null ? void 0 : a2.focus({ preventScroll: true });
  }, [t2.buttonRef]), n2 = useMemo(() => ({ open: t2.listboxState === 0, disabled: t2.disabled }), [t2]), i2 = { ref: t2.labelRef, id: r2, onClick: o };
  return E({ props: __spreadValues(__spreadValues({}, e), i2), slot: n2, defaultTag: Xn, name: "Listbox.Label" });
}
var Zn = "ul", ei = 1 | 2, ti = D(function(t2, r2) {
  var f2;
  let [o, n2] = Re("Listbox.Options"), i2 = I(o.optionsRef, r2), a2 = `headlessui-listbox-options-${A()}`, l2 = Q(), s = Q(), u = _(), c = (() => u !== null ? u === 0 : o.listboxState === 0)();
  x(() => {
    let d = o.optionsRef.current;
    !d || o.listboxState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.listboxState, o.optionsRef]);
  let m2 = useCallback((d) => {
    switch (s.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n2({ type: 5, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), o.activeOptionIndex !== null) {
          let { dataRef: P } = o.options[o.activeOptionIndex];
          o.propsRef.current.onChange(P.current.value);
        }
        k$1().nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
        break;
      case S(o.orientation, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 2 });
      case S(o.orientation, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 4, focus: 3 });
      case "Escape":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), l2.nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n2({ type: 5, value: d.key }), s.setTimeout(() => n2({ type: 6 }), 350));
        break;
    }
  }, [l2, n2, s, o]), b = ee(() => {
    var d, P, C;
    return (C = (d = o.labelRef.current) == null ? void 0 : d.id) != null ? C : (P = o.buttonRef.current) == null ? void 0 : P.id;
  }, [o.labelRef.current, o.buttonRef.current]), T = useMemo(() => ({ open: o.listboxState === 0 }), [o]), y = { "aria-activedescendant": o.activeOptionIndex === null || (f2 = o.options[o.activeOptionIndex]) == null ? void 0 : f2.id, "aria-labelledby": b, "aria-orientation": o.orientation, id: a2, onKeyDown: m2, role: "listbox", tabIndex: 0, ref: i2 };
  return E({ props: __spreadValues(__spreadValues({}, t2), y), slot: T, defaultTag: Zn, features: ei, visible: c, name: "Listbox.Options" });
}), oi = "li";
function ri(e) {
  let _a2 = e, { disabled: t2 = false, value: r2 } = _a2, o = __objRest(_a2, ["disabled", "value"]), [n2, i2] = Re("Listbox.Option"), a2 = `headlessui-listbox-option-${A()}`, l2 = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === a2 : false, s = n2.propsRef.current.value === r2, u = useRef({ disabled: t2, value: r2 });
  x(() => {
    u.current.disabled = t2;
  }, [u, t2]), x(() => {
    u.current.value = r2;
  }, [u, r2]), x(() => {
    var d, P;
    u.current.textValue = (P = (d = document.getElementById(a2)) == null ? void 0 : d.textContent) == null ? void 0 : P.toLowerCase();
  }, [u, a2]);
  let c = useCallback(() => n2.propsRef.current.onChange(r2), [n2.propsRef, r2]);
  x(() => (i2({ type: 7, id: a2, dataRef: u }), () => i2({ type: 8, id: a2 })), [u, a2]), x(() => {
    var d, P;
    n2.listboxState === 0 && (!s || (i2({ type: 4, focus: 4, id: a2 }), (P = (d = document.getElementById(a2)) == null ? void 0 : d.focus) == null || P.call(d)));
  }, [n2.listboxState]), x(() => {
    if (n2.listboxState !== 0 || !l2)
      return;
    let d = k$1();
    return d.requestAnimationFrame(() => {
      var P, C;
      (C = (P = document.getElementById(a2)) == null ? void 0 : P.scrollIntoView) == null || C.call(P, { block: "nearest" });
    }), d.dispose;
  }, [a2, l2, n2.listboxState, n2.activeOptionIndex]);
  let m2 = useCallback((d) => {
    if (t2)
      return d.preventDefault();
    c(), i2({ type: 1 }), k$1().nextFrame(() => {
      var P;
      return (P = n2.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
    });
  }, [i2, n2.buttonRef, t2, c]), b = useCallback(() => {
    if (t2)
      return i2({ type: 4, focus: 5 });
    i2({ type: 4, focus: 4, id: a2 });
  }, [t2, a2, i2]), T = useCallback(() => {
    t2 || l2 || i2({ type: 4, focus: 4, id: a2 });
  }, [t2, l2, a2, i2]), y = useCallback(() => {
    t2 || !l2 || i2({ type: 4, focus: 5 });
  }, [t2, l2, i2]), p2 = useMemo(() => ({ active: l2, selected: s, disabled: t2 }), [l2, s, t2]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: a2, role: "option", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, "aria-selected": s === true ? true : void 0, disabled: void 0, onClick: m2, onFocus: b, onPointerMove: T, onMouseMove: T, onPointerLeave: y, onMouseLeave: y }), slot: p2, defaultTag: oi, name: "Listbox.Option" });
}
Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = { [1](e) {
  return e.menuState === 1 ? e : __spreadProps(__spreadValues({}, e), { activeItemIndex: null, menuState: 1 });
}, [0](e) {
  return e.menuState === 0 ? e : __spreadProps(__spreadValues({}, e), { menuState: 0 });
}, [2]: (e, t2) => {
  let r2 = ae(t2, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeItemIndex === r2 ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", activeItemIndex: r2 });
}, [3]: (e, t2) => {
  let o = e.searchQuery !== "" ? 0 : 1, n2 = e.searchQuery + t2.value.toLowerCase(), a2 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find((s) => {
    var u;
    return ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n2)) && !s.dataRef.current.disabled;
  }), l2 = a2 ? e.items.indexOf(a2) : -1;
  return l2 === -1 || l2 === e.activeItemIndex ? __spreadProps(__spreadValues({}, e), { searchQuery: n2 }) : __spreadProps(__spreadValues({}, e), { searchQuery: n2, activeItemIndex: l2 });
}, [4](e) {
  return e.searchQuery === "" ? e : __spreadProps(__spreadValues({}, e), { searchQuery: "", searchActiveItemIndex: null });
}, [5]: (e, t2) => {
  var n2;
  let r2 = Array.from((n2 = e.itemsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i2, a2, l2) => Object.assign(i2, { [a2.id]: l2 }), {}), o = [...e.items, { id: t2.id, dataRef: t2.dataRef }].sort((i2, a2) => r2[i2.id] - r2[a2.id]);
  return __spreadProps(__spreadValues({}, e), { items: o });
}, [6]: (e, t2) => {
  let r2 = e.items.slice(), o = e.activeItemIndex !== null ? r2[e.activeItemIndex] : null, n2 = r2.findIndex((i2) => i2.id === t2.id);
  return n2 !== -1 && r2.splice(n2, 1), __spreadProps(__spreadValues({}, e), { items: r2, activeItemIndex: (() => n2 === e.activeItemIndex || o === null ? null : r2.indexOf(o))() });
} }, Ht = createContext(null);
Ht.displayName = "MenuContext";
function Je(e) {
  let t2 = useContext(Ht);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Je), r2;
  }
  return t2;
}
function pi(e, t2) {
  return S(t2.type, ui, e, t2);
}
var di = Fragment;
function Ze(e) {
  let t2 = useReducer(pi, { menuState: 1, buttonRef: createRef(), itemsRef: createRef(), items: [], searchQuery: "", activeItemIndex: null }), [{ menuState: r2, itemsRef: o, buttonRef: n2 }, i2] = t2;
  w("mousedown", (l2) => {
    var u, c, m2;
    let s = l2.target;
    r2 === 0 && (((u = n2.current) == null ? void 0 : u.contains(s)) || ((c = o.current) == null ? void 0 : c.contains(s)) || (i2({ type: 1 }), de(s, 1) || (l2.preventDefault(), (m2 = n2.current) == null || m2.focus())));
  });
  let a2 = useMemo(() => ({ open: r2 === 0 }), [r2]);
  return React__default.createElement(Ht.Provider, { value: t2 }, React__default.createElement(W, { value: S(r2, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: a2, defaultTag: di, name: "Menu" })));
}
var ci = "button", fi = D(function(t2, r2) {
  var y;
  let [o, n2] = Je("Menu.Button"), i2 = I(o.buttonRef, r2), a2 = `headlessui-menu-button-${A()}`, l2 = Q(), s = useCallback((p2) => {
    switch (p2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l2.nextFrame(() => n2({ type: 2, focus: 0 }));
        break;
      case "ArrowUp":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l2.nextFrame(() => n2({ type: 2, focus: 3 }));
        break;
    }
  }, [n2, l2]), u = useCallback((p2) => {
    switch (p2.key) {
      case " ":
        p2.preventDefault();
        break;
    }
  }, []), c = useCallback((p2) => {
    if (G(p2.currentTarget))
      return p2.preventDefault();
    t2.disabled || (o.menuState === 0 ? (n2({ type: 1 }), l2.nextFrame(() => {
      var f2;
      return (f2 = o.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 })));
  }, [n2, l2, o, t2.disabled]), m2 = useMemo(() => ({ open: o.menuState === 0 }), [o]), b = t2, T = { ref: i2, id: a2, type: U(t2, o.buttonRef), "aria-haspopup": true, "aria-controls": (y = o.itemsRef.current) == null ? void 0 : y.id, "aria-expanded": t2.disabled ? void 0 : o.menuState === 0, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: __spreadValues(__spreadValues({}, b), T), slot: m2, defaultTag: ci, name: "Menu.Button" });
}), mi = "div", bi = 1 | 2, Ti = D(function(t2, r2) {
  var p2, f2;
  let [o, n2] = Je("Menu.Items"), i2 = I(o.itemsRef, r2), a2 = `headlessui-menu-items-${A()}`, l2 = Q(), s = _(), u = (() => s !== null ? s === 0 : o.menuState === 0)();
  useEffect(() => {
    let d = o.itemsRef.current;
    !d || o.menuState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.menuState, o.itemsRef]), se({ container: o.itemsRef.current, enabled: o.menuState === 0, accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  let c = useCallback((d) => {
    var P;
    switch (l2.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n2({ type: 3, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), o.activeItemIndex !== null) {
          let { id: C } = o.items[o.activeItemIndex];
          (P = document.getElementById(C)) == null || P.click();
        }
        k$1().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 2 });
      case "ArrowUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n2({ type: 2, focus: 3 });
      case "Escape":
        d.preventDefault(), d.stopPropagation(), n2({ type: 1 }), k$1().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n2({ type: 3, value: d.key }), l2.setTimeout(() => n2({ type: 4 }), 350));
        break;
    }
  }, [n2, l2, o]), m2 = useCallback((d) => {
    switch (d.key) {
      case " ":
        d.preventDefault();
        break;
    }
  }, []), b = useMemo(() => ({ open: o.menuState === 0 }), [o]), T = { "aria-activedescendant": o.activeItemIndex === null || (p2 = o.items[o.activeItemIndex]) == null ? void 0 : p2.id, "aria-labelledby": (f2 = o.buttonRef.current) == null ? void 0 : f2.id, id: a2, onKeyDown: c, onKeyUp: m2, role: "menu", tabIndex: 0, ref: i2 };
  return E({ props: __spreadValues(__spreadValues({}, t2), T), slot: b, defaultTag: mi, features: bi, visible: u, name: "Menu.Items" });
}), yi = Fragment;
function gi(e) {
  let _a2 = e, { disabled: t2 = false, onClick: r2 } = _a2, o = __objRest(_a2, ["disabled", "onClick"]), [n2, i2] = Je("Menu.Item"), a2 = `headlessui-menu-item-${A()}`, l2 = n2.activeItemIndex !== null ? n2.items[n2.activeItemIndex].id === a2 : false;
  x(() => {
    if (n2.menuState !== 0 || !l2)
      return;
    let p2 = k$1();
    return p2.requestAnimationFrame(() => {
      var f2, d;
      (d = (f2 = document.getElementById(a2)) == null ? void 0 : f2.scrollIntoView) == null || d.call(f2, { block: "nearest" });
    }), p2.dispose;
  }, [a2, l2, n2.menuState, n2.activeItemIndex]);
  let s = useRef({ disabled: t2 });
  x(() => {
    s.current.disabled = t2;
  }, [s, t2]), x(() => {
    var p2, f2;
    s.current.textValue = (f2 = (p2 = document.getElementById(a2)) == null ? void 0 : p2.textContent) == null ? void 0 : f2.toLowerCase();
  }, [s, a2]), x(() => (i2({ type: 5, id: a2, dataRef: s }), () => i2({ type: 6, id: a2 })), [s, a2]);
  let u = useCallback((p2) => {
    if (t2)
      return p2.preventDefault();
    if (i2({ type: 1 }), k$1().nextFrame(() => {
      var f2;
      return (f2 = n2.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    }), r2)
      return r2(p2);
  }, [i2, n2.buttonRef, t2, r2]), c = useCallback(() => {
    if (t2)
      return i2({ type: 2, focus: 5 });
    i2({ type: 2, focus: 4, id: a2 });
  }, [t2, a2, i2]), m2 = useCallback(() => {
    t2 || l2 || i2({ type: 2, focus: 4, id: a2 });
  }, [t2, l2, a2, i2]), b = useCallback(() => {
    t2 || !l2 || i2({ type: 2, focus: 5 });
  }, [t2, l2, i2]), T = useMemo(() => ({ active: l2, disabled: t2 }), [l2, t2]);
  return E({ props: __spreadValues(__spreadValues({}, o), { id: a2, role: "menuitem", tabIndex: t2 === true ? void 0 : -1, "aria-disabled": t2 === true ? true : void 0, disabled: void 0, onClick: u, onFocus: c, onPointerMove: m2, onMouseMove: m2, onPointerLeave: b, onMouseLeave: b }), slot: T, defaultTag: yi, name: "Menu.Item" });
}
Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = { [0]: (e) => __spreadProps(__spreadValues({}, e), { popoverState: S(e.popoverState, { [0]: 1, [1]: 0 }) }), [1](e) {
  return e.popoverState === 1 ? e : __spreadProps(__spreadValues({}, e), { popoverState: 1 });
}, [2](e, t2) {
  return e.button === t2.button ? e : __spreadProps(__spreadValues({}, e), { button: t2.button });
}, [3](e, t2) {
  return e.buttonId === t2.buttonId ? e : __spreadProps(__spreadValues({}, e), { buttonId: t2.buttonId });
}, [4](e, t2) {
  return e.panel === t2.panel ? e : __spreadProps(__spreadValues({}, e), { panel: t2.panel });
}, [5](e, t2) {
  return e.panelId === t2.panelId ? e : __spreadProps(__spreadValues({}, e), { panelId: t2.panelId });
} }, Ut = createContext(null);
Ut.displayName = "PopoverContext";
function ot(e) {
  let t2 = useContext(Ut);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, ot), r2;
  }
  return t2;
}
var Bt = createContext(null);
Bt.displayName = "PopoverAPIContext";
function Mo(e) {
  let t2 = useContext(Bt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Mo), r2;
  }
  return t2;
}
var Nt = createContext(null);
Nt.displayName = "PopoverGroupContext";
function Fo() {
  return useContext(Nt);
}
var Wt = createContext(null);
Wt.displayName = "PopoverPanelContext";
function Ri() {
  return useContext(Wt);
}
function Ei(e, t2) {
  return S(t2.type, vi, e, t2);
}
var Ci = "div";
function Te(e) {
  let t2 = `headlessui-popover-button-${A()}`, r2 = `headlessui-popover-panel-${A()}`, o = useReducer(Ei, { popoverState: 1, button: null, buttonId: t2, panel: null, panelId: r2 }), [{ popoverState: n2, button: i2, panel: a2 }, l2] = o;
  useEffect(() => l2({ type: 3, buttonId: t2 }), [t2, l2]), useEffect(() => l2({ type: 5, panelId: r2 }), [r2, l2]);
  let s = useMemo(() => ({ buttonId: t2, panelId: r2, close: () => l2({ type: 1 }) }), [t2, r2, l2]), u = Fo(), c = u == null ? void 0 : u.registerPopover, m2 = useCallback(() => {
    var p2;
    return (p2 = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? p2 : (i2 == null ? void 0 : i2.contains(document.activeElement)) || (a2 == null ? void 0 : a2.contains(document.activeElement));
  }, [u, i2, a2]);
  useEffect(() => c == null ? void 0 : c(s), [c, s]), w("focus", () => {
    n2 === 0 && (m2() || !i2 || !a2 || l2({ type: 1 }));
  }, true), w("mousedown", (p2) => {
    let f2 = p2.target;
    n2 === 0 && ((i2 == null ? void 0 : i2.contains(f2)) || (a2 == null ? void 0 : a2.contains(f2)) || (l2({ type: 1 }), de(f2, 1) || (p2.preventDefault(), i2 == null || i2.focus())));
  });
  let b = useCallback((p2) => {
    l2({ type: 1 });
    let f2 = (() => p2 ? p2 instanceof HTMLElement ? p2 : p2.current instanceof HTMLElement ? p2.current : i2 : i2)();
    f2 == null || f2.focus();
  }, [l2, i2]), T = useMemo(() => ({ close: b }), [b]), y = useMemo(() => ({ open: n2 === 0, close: b }), [n2, b]);
  return React__default.createElement(Ut.Provider, { value: o }, React__default.createElement(Bt.Provider, { value: T }, React__default.createElement(W, { value: S(n2, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: y, defaultTag: Ci, name: "Popover" }))));
}
var Si = "button", Ai = D(function(t2, r2) {
  let [o, n2] = ot("Popover.Button"), i2 = useRef(null), a2 = Fo(), l2 = a2 == null ? void 0 : a2.closeOthers, s = Ri(), u = s === null ? false : s === o.panelId, c = I(i2, r2, u ? null : (g) => n2({ type: 2, button: g })), m2 = I(i2, r2), b = useRef(null), T = useRef(typeof window == "undefined" ? null : document.activeElement);
  w("focus", () => {
    T.current = b.current, b.current = document.activeElement;
  }, true);
  let y = useCallback((g) => {
    var v, h;
    if (u) {
      if (o.popoverState === 1)
        return;
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), n2({ type: 1 }), (v = o.button) == null || v.focus();
          break;
      }
    } else
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), o.popoverState === 1 && (l2 == null || l2(o.buttonId)), n2({ type: 0 });
          break;
        case "Escape":
          if (o.popoverState !== 0)
            return l2 == null ? void 0 : l2(o.buttonId);
          if (!i2.current || !i2.current.contains(document.activeElement))
            return;
          g.preventDefault(), g.stopPropagation(), n2({ type: 1 });
          break;
        case "Tab":
          if (o.popoverState !== 0 || !o.panel || !o.button)
            return;
          if (g.shiftKey) {
            if (!T.current || ((h = o.button) == null ? void 0 : h.contains(T.current)) || o.panel.contains(T.current))
              return;
            let O = xe(), L = O.indexOf(T.current);
            if (O.indexOf(o.button) > L)
              return;
            g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          } else
            g.preventDefault(), g.stopPropagation(), M(o.panel, 1);
          break;
      }
  }, [n2, o.popoverState, o.buttonId, o.button, o.panel, i2, l2, u]), p2 = useCallback((g) => {
    var v;
    if (!u && (g.key === " " && g.preventDefault(), o.popoverState === 0 && !!o.panel && !!o.button))
      switch (g.key) {
        case "Tab":
          if (!T.current || ((v = o.button) == null ? void 0 : v.contains(T.current)) || o.panel.contains(T.current))
            return;
          let h = xe(), O = h.indexOf(T.current);
          if (h.indexOf(o.button) > O)
            return;
          g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          break;
      }
  }, [o.popoverState, o.panel, o.button, u]), f2 = useCallback((g) => {
    var v, h;
    G(g.currentTarget) || t2.disabled || (u ? (n2({ type: 1 }), (v = o.button) == null || v.focus()) : (o.popoverState === 1 && (l2 == null || l2(o.buttonId)), (h = o.button) == null || h.focus(), n2({ type: 0 })));
  }, [n2, o.button, o.popoverState, o.buttonId, t2.disabled, l2, u]), d = useMemo(() => ({ open: o.popoverState === 0 }), [o]), P = U(t2, i2), C = t2, R = u ? { ref: m2, type: P, onKeyDown: y, onClick: f2 } : { ref: c, id: o.buttonId, type: P, "aria-expanded": t2.disabled ? void 0 : o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, onKeyDown: y, onKeyUp: p2, onClick: f2 };
  return E({ props: __spreadValues(__spreadValues({}, C), R), slot: d, defaultTag: Si, name: "Popover.Button" });
}), hi = "div", Oi = 1 | 2, Ii = D(function(t2, r2) {
  let [{ popoverState: o }, n2] = ot("Popover.Overlay"), i2 = I(r2), a2 = `headlessui-popover-overlay-${A()}`, l2 = _(), s = (() => l2 !== null ? l2 === 0 : o === 0)(), u = useCallback((T) => {
    if (G(T.currentTarget))
      return T.preventDefault();
    n2({ type: 1 });
  }, [n2]), c = useMemo(() => ({ open: o === 0 }), [o]);
  return E({ props: __spreadValues(__spreadValues({}, t2), { ref: i2, id: a2, "aria-hidden": true, onClick: u }), slot: c, defaultTag: hi, features: Oi, visible: s, name: "Popover.Overlay" });
}), Li = "div", Di = 1 | 2, Mi = D(function(t2, r2) {
  let _a2 = t2, { focus: o = false } = _a2, n2 = __objRest(_a2, ["focus"]), [i2, a2] = ot("Popover.Panel"), { close: l2 } = Mo("Popover.Panel"), s = useRef(null), u = I(s, r2, (p2) => {
    a2({ type: 4, panel: p2 });
  }), c = _(), m2 = (() => c !== null ? c === 0 : i2.popoverState === 0)(), b = useCallback((p2) => {
    var f2;
    switch (p2.key) {
      case "Escape":
        if (i2.popoverState !== 0 || !s.current || !s.current.contains(document.activeElement))
          return;
        p2.preventDefault(), p2.stopPropagation(), a2({ type: 1 }), (f2 = i2.button) == null || f2.focus();
        break;
    }
  }, [i2, s, a2]);
  useEffect(() => () => a2({ type: 4, panel: null }), [a2]), useEffect(() => {
    var p2;
    t2.static || i2.popoverState === 1 && ((p2 = t2.unmount) != null ? p2 : true) && a2({ type: 4, panel: null });
  }, [i2.popoverState, t2.unmount, t2.static, a2]), useEffect(() => {
    if (!o || i2.popoverState !== 0 || !s.current)
      return;
    let p2 = document.activeElement;
    s.current.contains(p2) || M(s.current, 1);
  }, [o, s, i2.popoverState]), w("keydown", (p2) => {
    var d;
    if (i2.popoverState !== 0 || !s.current || p2.key !== "Tab" || !document.activeElement || !s.current || !s.current.contains(document.activeElement))
      return;
    p2.preventDefault();
    let f2 = M(s.current, p2.shiftKey ? 2 : 4);
    if (f2 === 3)
      return (d = i2.button) == null ? void 0 : d.focus();
    if (f2 === 1) {
      if (!i2.button)
        return;
      let P = xe(), C = P.indexOf(i2.button), R = P.splice(C + 1).filter((g) => {
        var v;
        return !((v = s.current) == null ? void 0 : v.contains(g));
      });
      M(R, 1) === 0 && M(document.body, 1);
    }
  }), w("focus", () => {
    var p2;
    !o || i2.popoverState === 0 && (!s.current || ((p2 = s.current) == null ? void 0 : p2.contains(document.activeElement)) || a2({ type: 1 }));
  }, true);
  let T = useMemo(() => ({ open: i2.popoverState === 0, close: l2 }), [i2, l2]), y = { ref: u, id: i2.panelId, onKeyDown: b };
  return React__default.createElement(Wt.Provider, { value: i2.panelId }, E({ props: __spreadValues(__spreadValues({}, n2), y), slot: T, defaultTag: Li, features: Di, visible: m2, name: "Popover.Panel" }));
}), Fi = "div";
function wi(e) {
  let t2 = useRef(null), [r2, o] = useState([]), n2 = useCallback((b) => {
    o((T) => {
      let y = T.indexOf(b);
      if (y !== -1) {
        let p2 = T.slice();
        return p2.splice(y, 1), p2;
      }
      return T;
    });
  }, [o]), i2 = useCallback((b) => (o((T) => [...T, b]), () => n2(b)), [o, n2]), a2 = useCallback(() => {
    var T;
    let b = document.activeElement;
    return ((T = t2.current) == null ? void 0 : T.contains(b)) ? true : r2.some((y) => {
      var p2, f2;
      return ((p2 = document.getElementById(y.buttonId)) == null ? void 0 : p2.contains(b)) || ((f2 = document.getElementById(y.panelId)) == null ? void 0 : f2.contains(b));
    });
  }, [t2, r2]), l2 = useCallback((b) => {
    for (let T of r2)
      T.buttonId !== b && T.close();
  }, [r2]), s = useMemo(() => ({ registerPopover: i2, unregisterPopover: n2, isFocusWithinPopoverGroup: a2, closeOthers: l2 }), [i2, n2, a2, l2]), u = useMemo(() => ({}), []), c = { ref: t2 }, m2 = e;
  return React__default.createElement(Nt.Provider, { value: s }, E({ props: __spreadValues(__spreadValues({}, m2), c), slot: u, defaultTag: Fi, name: "Popover.Group" }));
}
Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;
function wo(e = 0) {
  let [t2, r2] = useState(e), o = useCallback((l2) => r2((s) => s | l2), [r2]), n2 = useCallback((l2) => Boolean(t2 & l2), [t2]), i2 = useCallback((l2) => r2((s) => s & ~l2), [r2]), a2 = useCallback((l2) => r2((s) => s ^ l2), [r2]);
  return { addFlag: o, hasFlag: n2, removeFlag: i2, toggleFlag: a2 };
}
var _o = createContext(null);
function Go() {
  let e = useContext(_o);
  if (e === null) {
    let t2 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t2, Go), t2;
  }
  return e;
}
function Ae() {
  let [e, t2] = useState([]);
  return [e.length > 0 ? e.join(" ") : void 0, useMemo(() => function(o) {
    let n2 = useCallback((a2) => (t2((l2) => [...l2, a2]), () => t2((l2) => {
      let s = l2.slice(), u = s.indexOf(a2);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i2 = useMemo(() => ({ register: n2, slot: o.slot, name: o.name, props: o.props }), [n2, o.slot, o.name, o.props]);
    return React__default.createElement(_o.Provider, { value: i2 }, o.children);
  }, [t2])];
}
var Ni = "label";
function nt(e) {
  let _a2 = e, { passive: t2 = false } = _a2, r2 = __objRest(_a2, ["passive"]), o = Go(), n2 = `headlessui-label-${A()}`;
  x(() => o.register(n2), [n2, o.register]);
  let i2 = __spreadProps(__spreadValues({}, o.props), { id: n2 }), a2 = __spreadValues(__spreadValues({}, r2), i2);
  return t2 && delete a2.onClick, E({ props: a2, slot: o.slot || {}, defaultTag: Ni, name: o.name || "Label" });
}
var Vi = { [0](e, t2) {
  return __spreadProps(__spreadValues({}, e), { options: [...e.options, { id: t2.id, element: t2.element, propsRef: t2.propsRef }] });
}, [1](e, t2) {
  let r2 = e.options.slice(), o = e.options.findIndex((n2) => n2.id === t2.id);
  return o === -1 ? e : (r2.splice(o, 1), __spreadProps(__spreadValues({}, e), { options: r2 }));
} }, jt = createContext(null);
jt.displayName = "RadioGroupContext";
function Ho(e) {
  let t2 = useContext(jt);
  if (t2 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, Ho), r2;
  }
  return t2;
}
function $i(e, t2) {
  return S(t2.type, Vi, e, t2);
}
var Qi = "div";
function lt(e) {
  let _a2 = e, { value: t2, onChange: r2, disabled: o = false } = _a2, n2 = __objRest(_a2, ["value", "onChange", "disabled"]), [{ options: i2 }, a2] = useReducer($i, { options: [] }), [l2, s] = Ae(), [u, c] = re(), m2 = `headlessui-radiogroup-${A()}`, b = useRef(null), T = useMemo(() => i2.find((R) => !R.propsRef.current.disabled), [i2]), y = useMemo(() => i2.some((R) => R.propsRef.current.value === t2), [i2, t2]), p2 = useCallback((R) => {
    var v;
    if (o || R === t2)
      return false;
    let g = (v = i2.find((h) => h.propsRef.current.value === R)) == null ? void 0 : v.propsRef.current;
    return (g == null ? void 0 : g.disabled) ? false : (r2(R), true);
  }, [r2, t2, o, i2]);
  se({ container: b.current, accept(R) {
    return R.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : R.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(R) {
    R.setAttribute("role", "none");
  } });
  let f2 = useCallback((R) => {
    if (!b.current)
      return;
    let v = i2.filter((h) => h.propsRef.current.disabled === false).map((h) => h.element.current);
    switch (R.key) {
      case "ArrowLeft":
      case "ArrowUp":
        if (R.preventDefault(), R.stopPropagation(), M(v, 2 | 16) === 2) {
          let O = i2.find((L) => L.element.current === document.activeElement);
          O && p2(O.propsRef.current.value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (R.preventDefault(), R.stopPropagation(), M(v, 4 | 16) === 2) {
          let O = i2.find((L) => L.element.current === document.activeElement);
          O && p2(O.propsRef.current.value);
        }
        break;
      case " ":
        {
          R.preventDefault(), R.stopPropagation();
          let h = i2.find((O) => O.element.current === document.activeElement);
          h && p2(h.propsRef.current.value);
        }
        break;
    }
  }, [b, i2, p2]), d = useCallback((R) => (a2(__spreadValues({ type: 0 }, R)), () => a2({ type: 1, id: R.id })), [a2]), P = useMemo(() => ({ registerOption: d, firstOption: T, containsCheckedOption: y, change: p2, disabled: o, value: t2 }), [d, T, y, p2, o, t2]), C = { ref: b, id: m2, role: "radiogroup", "aria-labelledby": l2, "aria-describedby": u, onKeyDown: f2 };
  return React__default.createElement(c, { name: "RadioGroup.Description" }, React__default.createElement(s, { name: "RadioGroup.Label" }, React__default.createElement(jt.Provider, { value: P }, E({ props: __spreadValues(__spreadValues({}, n2), C), defaultTag: Qi, name: "RadioGroup" }))));
}
var qi = "div";
function zi(e) {
  let t2 = useRef(null), r2 = `headlessui-radiogroup-option-${A()}`, [o, n2] = Ae(), [i2, a2] = re(), { addFlag: l2, removeFlag: s, hasFlag: u } = wo(1), _a2 = e, { value: c, disabled: m2 = false } = _a2, b = __objRest(_a2, ["value", "disabled"]), T = useRef({ value: c, disabled: m2 });
  x(() => {
    T.current.value = c;
  }, [c, T]), x(() => {
    T.current.disabled = m2;
  }, [m2, T]);
  let { registerOption: y, disabled: p2, change: f2, firstOption: d, containsCheckedOption: P, value: C } = Ho("RadioGroup.Option");
  x(() => y({ id: r2, element: t2, propsRef: T }), [r2, y, t2, e]);
  let R = useCallback(() => {
    var V;
    !f2(c) || (l2(2), (V = t2.current) == null || V.focus());
  }, [l2, f2, c]), g = useCallback(() => l2(2), [l2]), v = useCallback(() => s(2), [s]), h = (d == null ? void 0 : d.id) === r2, O = p2 || m2, L = C === c, N = { ref: t2, id: r2, role: "radio", "aria-checked": L ? "true" : "false", "aria-labelledby": o, "aria-describedby": i2, "aria-disabled": O ? true : void 0, tabIndex: (() => O ? -1 : L || !P && h ? 0 : -1)(), onClick: O ? void 0 : R, onFocus: O ? void 0 : g, onBlur: O ? void 0 : v }, K = useMemo(() => ({ checked: L, disabled: O, active: u(2) }), [L, O, u]);
  return React__default.createElement(a2, { name: "RadioGroup.Description" }, React__default.createElement(n2, { name: "RadioGroup.Label" }, E({ props: __spreadValues(__spreadValues({}, b), N), slot: K, defaultTag: qi, name: "RadioGroup.Option" })));
}
lt.Option = zi;
lt.Label = nt;
lt.Description = me;
var $t = createContext(null);
$t.displayName = "GroupContext";
var zt = createContext(null);
zt.displayName = "TabsContext";
function Bo() {
  let e = useRef(true);
  return useEffect(() => {
    e.current = false;
  }, []), e.current;
}
function No(e) {
  let t2 = { called: false };
  return (...r2) => {
    if (!t2.called)
      return t2.called = true, e(...r2);
  };
}
function Yt(e, ...t2) {
  e && t2.length > 0 && e.classList.add(...t2);
}
function ut(e, ...t2) {
  e && t2.length > 0 && e.classList.remove(...t2);
}
function El(e, t2) {
  let r2 = k$1();
  if (!e)
    return r2.dispose;
  let { transitionDuration: o, transitionDelay: n2 } = getComputedStyle(e), [i2, a2] = [o, n2].map((l2) => {
    let [s = 0] = l2.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return i2 !== 0 ? r2.setTimeout(() => {
    t2("finished");
  }, i2 + a2) : t2("finished"), r2.add(() => t2("cancelled")), r2.dispose;
}
function Xt(e, t2, r2, o, n2, i2) {
  let a2 = k$1(), l2 = i2 !== void 0 ? No(i2) : () => {
  };
  return ut(e, ...n2), Yt(e, ...t2, ...r2), a2.nextFrame(() => {
    ut(e, ...r2), Yt(e, ...o), a2.add(El(e, (s) => (ut(e, ...o, ...t2), Yt(e, ...n2), l2(s))));
  }), a2.add(() => ut(e, ...t2, ...r2, ...o, ...n2)), a2.add(() => l2("cancelled")), a2.dispose;
}
function le(e = "") {
  return useMemo(() => e.split(" ").filter((t2) => t2.trim().length > 1), [e]);
}
var dt = createContext(null);
dt.displayName = "TransitionContext";
function Cl() {
  let e = useContext(dt);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Sl() {
  let e = useContext(ct);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
var ct = createContext(null);
ct.displayName = "NestingContext";
function ft(e) {
  return "children" in e ? ft(e.children) : e.current.filter(({ state: t2 }) => t2 === "visible").length > 0;
}
function $o(e) {
  let t2 = useRef(e), r2 = useRef([]), o = Be();
  useEffect(() => {
    t2.current = e;
  }, [e]);
  let n2 = useCallback((a2, l2 = 1) => {
    var u;
    let s = r2.current.findIndex(({ id: c }) => c === a2);
    s !== -1 && (S(l2, { [0]() {
      r2.current.splice(s, 1);
    }, [1]() {
      r2.current[s].state = "hidden";
    } }), !ft(r2) && o.current && ((u = t2.current) == null || u.call(t2)));
  }, [t2, o, r2]), i2 = useCallback((a2) => {
    let l2 = r2.current.find(({ id: s }) => s === a2);
    return l2 ? l2.state !== "visible" && (l2.state = "visible") : r2.current.push({ id: a2, state: "visible" }), () => n2(a2, 0);
  }, [r2, n2]);
  return useMemo(() => ({ children: r2, register: i2, unregister: n2 }), [i2, n2, r2]);
}
function Al() {
}
var hl = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qo(e) {
  var r2;
  let t2 = {};
  for (let o of hl)
    t2[o] = (r2 = e[o]) != null ? r2 : Al;
  return t2;
}
function Ol(e) {
  let t2 = useRef(Qo(e));
  return useEffect(() => {
    t2.current = Qo(e);
  }, [e]), t2;
}
var Il = "div", qo = 1;
function zo(e) {
  let _a2 = e, { beforeEnter: t2, afterEnter: r2, beforeLeave: o, afterLeave: n2, enter: i2, enterFrom: a2, enterTo: l2, entered: s, leave: u, leaveFrom: c, leaveTo: m2 } = _a2, b = __objRest(_a2, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]), T = useRef(null), [y, p2] = useState("visible"), f2 = b.unmount ? 0 : 1, { show: d, appear: P, initial: C } = Cl(), { register: R, unregister: g } = Sl(), v = A(), h = useRef(false), O = $o(() => {
    h.current || (p2("hidden"), g(v), X.current.afterLeave());
  });
  x(() => {
    if (!!v)
      return R(v);
  }, [R, v]), x(() => {
    if (f2 === 1 && !!v) {
      if (d && y !== "visible") {
        p2("visible");
        return;
      }
      S(y, { hidden: () => g(v), visible: () => R(v) });
    }
  }, [y, v, R, g, d, f2]);
  let L = le(i2), N = le(a2), K = le(l2), V = le(s), Fe = le(u), ge = le(c), we = le(m2), X = Ol({ beforeEnter: t2, afterEnter: r2, beforeLeave: o, afterLeave: n2 }), F = q$1();
  useEffect(() => {
    if (F && y === "visible" && T.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, y, F]);
  let $2 = C && !P;
  x(() => {
    let bt = T.current;
    if (!!bt && !$2)
      return h.current = true, d && X.current.beforeEnter(), d || X.current.beforeLeave(), d ? Xt(bt, L, N, K, V, (Tt) => {
        h.current = false, Tt === "finished" && X.current.afterEnter();
      }) : Xt(bt, Fe, ge, we, V, (Tt) => {
        h.current = false, Tt === "finished" && (ft(O) || (p2("hidden"), g(v), X.current.afterLeave()));
      });
  }, [X, v, h, g, O, T, $2, d, L, N, K, Fe, ge, we]);
  let H = { ref: T }, Pe = b;
  return React__default.createElement(ct.Provider, { value: O }, React__default.createElement(W, { value: S(y, { visible: 0, hidden: 1 }) }, E({ props: __spreadValues(__spreadValues({}, Pe), H), defaultTag: Il, features: qo, visible: y === "visible", name: "Transition.Child" })));
}
function mt(e) {
  let _a2 = e, { show: t2, appear: r2 = false, unmount: o } = _a2, n2 = __objRest(_a2, ["show", "appear", "unmount"]), i2 = _();
  if (t2 === void 0 && i2 !== null && (t2 = S(i2, { [0]: true, [1]: false })), ![true, false].includes(t2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a2, l2] = useState(t2 ? "visible" : "hidden"), s = $o(() => {
    l2("hidden");
  }), u = Bo(), c = useMemo(() => ({ show: t2, appear: r2 || !u, initial: u }), [t2, r2, u]);
  useEffect(() => {
    t2 ? l2("visible") : ft(s) || l2("hidden");
  }, [t2, s]);
  let m2 = { unmount: o };
  return React__default.createElement(ct.Provider, { value: s }, React__default.createElement(dt.Provider, { value: c }, E({ props: __spreadProps(__spreadValues({}, m2), { as: Fragment, children: React__default.createElement(zo, __spreadValues(__spreadValues({}, m2), n2)) }), defaultTag: Fragment, features: qo, visible: a2 === "visible", name: "Transition" })));
}
mt.Child = function(t2) {
  let r2 = useContext(dt) !== null, o = _() !== null;
  return !r2 && o ? React__default.createElement(mt, __spreadValues({}, t2)) : React__default.createElement(zo, __spreadValues({}, t2));
};
mt.Root = mt;
function SearchIcon(props, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }));
}
const ForwardRef = React.forwardRef(SearchIcon);
var SearchIcon$1 = ForwardRef;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$2 = freeGlobal || freeSelf || Function("return this")();
var _root = root$2;
var root$1 = _root;
var now$1 = function() {
  return root$1.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var root = _root;
var Symbol$3 = root.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$1 = Object.prototype;
var hasOwnProperty = objectProto$1.hasOwnProperty;
var nativeObjectToString$1 = objectProto$1.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag = _baseGetTag, isObjectLike = isObjectLike_1;
var symbolTag = "[object Symbol]";
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
var isSymbol_1 = isSymbol$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce;
function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    function onKeydown(event) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((currentOpenState) => !currentOpenState);
      }
    }
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);
  return [isOpen, setIsOpen];
}
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i2 = 0; i2 < args.length; i2++) {
      args[i2] = arguments[i2];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return Array.isArray(val);
}
function isUndefined$1(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return toString.call(val) === "[object FormData]";
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction$1(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction$1(val.pipe);
}
function isURLSearchParams(val) {
  return toString.call(val) === "[object URLSearchParams]";
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i2 = 0, l2 = obj.length; i2 < l2; i2++) {
      fn.call(null, obj[i2], i2, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i2 = 0, l2 = arguments.length; i2 < l2; i2++) {
    forEach(arguments[i2], assignValue);
  }
  return result;
}
function extend(a2, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a2[key] = bind$1(val, thisArg);
    } else {
      a2[key] = val;
    }
  });
  return a2;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined: isUndefined$1,
  isDate,
  isFile,
  isBlob,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize2(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config, code, request2, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i2;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i2 = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i2)).toLowerCase();
    val = utils$9.trim(line.substr(i2 + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var transitionalDefaults$1 = transitional;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config.auth) {
      var username = config.auth.username || "";
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config.baseURL, config.url);
    request2.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
    request2.timeout = config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      var transitional3 = config.transitional || transitionalDefaults$1;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config, transitional3.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config.withCredentials)) {
      request2.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request2.addEventListener("progress", config.onDownloadProgress);
    }
    if (typeof config.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config.onUploadProgress);
    }
    if (config.cancelToken || config.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var transitionalDefaults = transitional;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional3 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional3 && transitional3.silentJSONParsing;
    var forcedJSONParsing = transitional3 && transitional3.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform2(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = config.headers || {};
  config.data = transformData2.call(config, config.data, config.headers, config.transformRequest);
  config.headers = utils$4.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults$1.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData2.call(config, response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config, reason.response.data, reason.response.headers, config.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
};
var data = {
  "version": "0.26.1"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i2) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i2 < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional2(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i2 = keys.length;
  while (i2-- > 0) {
    var opt = keys[i2];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(configOrUrl, config) {
  if (typeof configOrUrl === "string") {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }
  config = mergeConfig$1(this.defaults, config);
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  var transitional3 = config.transitional;
  if (transitional3 !== void 0) {
    validator.assertOptions(transitional3, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config) {
  config = mergeConfig$1(this.defaults, config);
  return buildURL2(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config) {
    return this.request(mergeConfig$1(config || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i2;
    var l2 = token._listeners.length;
    for (i2 = 0; i2 < l2; i2++) {
      token._listeners[i2](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var utils$1 = utils$e;
var isAxiosError = function isAxiosError2(payload) {
  return utils$1.isObject(payload) && payload.isAxiosError === true;
};
var utils = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig2) {
  var context = new Axios(defaultConfig2);
  var instance = bind2(Axios.prototype.request, context);
  utils.extend(instance, Axios.prototype, context);
  utils.extend(instance, context);
  instance.create = function create2(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig2, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _4 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y, t2, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n2) {
    return function(v) {
      return step([n2, v]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_4)
      try {
        if (f2 = 1, y && (t2 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t2 = y["return"]) && t2.call(y), 0) : y.next) && !(t2 = t2.call(y, op[1])).done)
          return t2;
        if (y = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _4.label++;
            return { value: op[1], done: false };
          case 5:
            _4.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _4.ops.pop();
            _4.trys.pop();
            continue;
          default:
            if (!(t2 = _4.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _4 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _4.label = op[1];
              break;
            }
            if (op[0] === 6 && _4.label < t2[1]) {
              _4.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _4.label < t2[2]) {
              _4.label = t2[2];
              _4.ops.push(op);
              break;
            }
            if (t2[2])
              _4.ops.pop();
            _4.trys.pop();
            continue;
        }
        op = body.call(thisArg, _4);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var noop = function() {
};
var UNDEFINED = noop();
var OBJECT = Object;
var isUndefined = function(v) {
  return v === UNDEFINED;
};
var isFunction = function(v) {
  return typeof v == "function";
};
var mergeObjects = function(a2, b) {
  return OBJECT.assign({}, a2, b);
};
var STR_UNDEFINED = "undefined";
var hasWindow = function() {
  return typeof window != STR_UNDEFINED;
};
var hasDocument = function() {
  return typeof document != STR_UNDEFINED;
};
var hasRequestAnimationFrame = function() {
  return hasWindow() && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
};
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = function(arg) {
  var type = typeof arg;
  var constructor = arg && arg.constructor;
  var isDate2 = constructor == Date;
  var result;
  var index;
  if (OBJECT(arg) === arg && !isDate2 && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      var keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate2 ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var online = true;
var isOnline = function() {
  return online;
};
var hasWin = hasWindow();
var hasDoc = hasDocument();
var onWindowEvent = hasWin && window.addEventListener ? window.addEventListener.bind(window) : noop;
var onDocumentEvent = hasDoc ? document.addEventListener.bind(document) : noop;
var offWindowEvent = hasWin && window.removeEventListener ? window.removeEventListener.bind(window) : noop;
var offDocumentEvent = hasDoc ? document.removeEventListener.bind(document) : noop;
var isVisible = function() {
  var visibilityState = hasDoc && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = function(callback) {
  onDocumentEvent("visibilitychange", callback);
  onWindowEvent("focus", callback);
  return function() {
    offDocumentEvent("visibilitychange", callback);
    offWindowEvent("focus", callback);
  };
};
var initReconnect = function(callback) {
  var onOnline = function() {
    online = true;
    callback();
  };
  var onOffline = function() {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return function() {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_SERVER = !hasWindow() || "Deno" in window;
var rAF = function(f2) {
  return hasRequestAnimationFrame() ? window["requestAnimationFrame"](f2) : setTimeout(f2, 1);
};
var useIsomorphicLayoutEffect = IS_SERVER ? useEffect : useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && (["slow-2g", "2g"].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = function(key) {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  var args = [].concat(key);
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  var infoKey = key ? "$swr$" + key : "";
  return [key, args, infoKey];
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var broadcastState = function(cache2, key, data2, error, isValidating, revalidate, broadcast) {
  if (broadcast === void 0) {
    broadcast = true;
  }
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], FETCH = _a2[3];
  var revalidators = EVENT_REVALIDATORS[key];
  var updaters = STATE_UPDATERS[key];
  if (broadcast && updaters) {
    for (var i2 = 0; i2 < updaters.length; ++i2) {
      updaters[i2](data2, error, isValidating);
    }
  }
  if (revalidate) {
    delete FETCH[key];
    if (revalidators && revalidators[0]) {
      return revalidators[0](MUTATE_EVENT).then(function() {
        return cache2.get(key);
      });
    }
  }
  return cache2.get(key);
};
var __timestamp = 0;
var getTimestamp = function() {
  return ++__timestamp;
};
var internalMutate = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var cache2, _key, _data, _opts, options, populateCache, revalidate, rollbackOnError, optimisticData, _a2, key, keyInfo, _b, MUTATION, data2, error, beforeMutationTs, hasOptimisticData, rollbackData, res;
    return __generator(this, function(_c) {
      switch (_c.label) {
        case 0:
          cache2 = args[0], _key = args[1], _data = args[2], _opts = args[3];
          options = typeof _opts === "boolean" ? { revalidate: _opts } : _opts || {};
          populateCache = isUndefined(options.populateCache) ? true : options.populateCache;
          revalidate = options.revalidate !== false;
          rollbackOnError = options.rollbackOnError !== false;
          optimisticData = options.optimisticData;
          _a2 = serialize(_key), key = _a2[0], keyInfo = _a2[2];
          if (!key)
            return [2];
          _b = SWRGlobalState.get(cache2), MUTATION = _b[2];
          if (args.length < 3) {
            return [2, broadcastState(cache2, key, cache2.get(key), UNDEFINED, UNDEFINED, revalidate, true)];
          }
          data2 = _data;
          beforeMutationTs = getTimestamp();
          MUTATION[key] = [beforeMutationTs, 0];
          hasOptimisticData = !isUndefined(optimisticData);
          rollbackData = cache2.get(key);
          if (hasOptimisticData) {
            cache2.set(key, optimisticData);
            broadcastState(cache2, key, optimisticData);
          }
          if (isFunction(data2)) {
            try {
              data2 = data2(cache2.get(key));
            } catch (err) {
              error = err;
            }
          }
          if (!(data2 && isFunction(data2.then)))
            return [3, 2];
          return [
            4,
            data2.catch(function(err) {
              error = err;
            })
          ];
        case 1:
          data2 = _c.sent();
          if (beforeMutationTs !== MUTATION[key][0]) {
            if (error)
              throw error;
            return [2, data2];
          } else if (error && hasOptimisticData && rollbackOnError) {
            populateCache = true;
            data2 = rollbackData;
            cache2.set(key, rollbackData);
          }
          _c.label = 2;
        case 2:
          if (populateCache) {
            if (!error) {
              if (isFunction(populateCache)) {
                data2 = populateCache(data2, rollbackData);
              }
              cache2.set(key, data2);
            }
            cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), { error }));
          }
          MUTATION[key][1] = getTimestamp();
          return [
            4,
            broadcastState(cache2, key, data2, error, UNDEFINED, revalidate, !!populateCache)
          ];
        case 3:
          res = _c.sent();
          if (error)
            throw error;
          return [2, populateCache ? res : data2];
      }
    });
  });
};
var revalidateAllKeys = function(revalidators, type) {
  for (var key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = function(provider, options) {
  if (!SWRGlobalState.has(provider)) {
    var opts = mergeObjects(defaultConfigOptions, options);
    var EVENT_REVALIDATORS = {};
    var mutate2 = internalMutate.bind(UNDEFINED, provider);
    var unmount = noop;
    SWRGlobalState.set(provider, [EVENT_REVALIDATORS, {}, {}, {}, mutate2]);
    if (!IS_SERVER) {
      var releaseFocus_1 = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
      var releaseReconnect_1 = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
      unmount = function() {
        releaseFocus_1 && releaseFocus_1();
        releaseReconnect_1 && releaseReconnect_1();
        SWRGlobalState.delete(provider);
      };
    }
    return [provider, mutate2, unmount];
  }
  return [provider, SWRGlobalState.get(provider)[4]];
};
var onErrorRetry = function(_4, __2, config, revalidate, opts) {
  var maxRetryCount = config.errorRetryCount;
  var currentRetryCount = opts.retryCount;
  var timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var _a = initCache(/* @__PURE__ */ new Map()), cache = _a[0], mutate = _a[1];
var defaultConfig = mergeObjects({
  onLoadingSlow: noop,
  onSuccess: noop,
  onError: noop,
  onErrorRetry,
  onDiscarded: noop,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  revalidateIfStale: true,
  shouldRetryOnError: true,
  errorRetryInterval: slowConnection ? 1e4 : 5e3,
  focusThrottleInterval: 5 * 1e3,
  dedupingInterval: 2 * 1e3,
  loadingTimeout: slowConnection ? 5e3 : 3e3,
  compare: function(currentData, newData) {
    return stableHash(currentData) == stableHash(newData);
  },
  isPaused: function() {
    return false;
  },
  cache,
  mutate,
  fallback: {}
}, preset);
var mergeConfigs = function(a2, b) {
  var v = mergeObjects(a2, b);
  if (b) {
    var u1 = a2.use, f1 = a2.fallback;
    var u2 = b.use, f2 = b.fallback;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = createContext({});
var SWRConfig$1 = function(props) {
  var value = props.value;
  var extendedConfig = mergeConfigs(useContext(SWRConfigContext), value);
  var provider = value && value.provider;
  var cacheContext = useState(function() {
    return provider ? initCache(provider(extendedConfig.cache || cache), value) : UNDEFINED;
  })[0];
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(function() {
    return cacheContext ? cacheContext[2] : UNDEFINED;
  }, []);
  return createElement(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var useStateWithDeps = function(state, unmountedRef) {
  var rerender = useState({})[1];
  var stateRef = useRef(state);
  var stateDependenciesRef = useRef({
    data: false,
    error: false,
    isValidating: false
  });
  var setState = useCallback(function(payload) {
    var shouldRerender = false;
    var currentState = stateRef.current;
    for (var _4 in payload) {
      var k2 = _4;
      if (currentState[k2] !== payload[k2]) {
        currentState[k2] = payload[k2];
        if (stateDependenciesRef.current[k2]) {
          shouldRerender = true;
        }
      }
    }
    if (shouldRerender && !unmountedRef.current) {
      rerender({});
    }
  }, []);
  useIsomorphicLayoutEffect(function() {
    stateRef.current = state;
  });
  return [stateRef, stateDependenciesRef.current, setState];
};
var normalize = function(args) {
  return isFunction(args[1]) ? [args[0], args[1], args[2] || {}] : [args[0], null, (args[1] === null ? args[2] : args[1]) || {}];
};
var useSWRConfig = function() {
  return mergeObjects(defaultConfig, useContext(SWRConfigContext));
};
var withArgs = function(hook) {
  return function useSWRArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var fallbackConfig = useSWRConfig();
    var _a2 = normalize(args), key = _a2[0], fn = _a2[1], _config = _a2[2];
    var config = mergeConfigs(fallbackConfig, _config);
    var next = hook;
    var use2 = config.use;
    if (use2) {
      for (var i2 = use2.length; i2-- > 0; ) {
        next = use2[i2](next);
      }
    }
    return next(key, fn || config.fetcher, config);
  };
};
var subscribeCallback = function(key, callbacks, callback) {
  var keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return function() {
    var index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
var WITH_DEDUPE = { dedupe: true };
var useSWRHandler = function(_key, fetcher, config) {
  var cache2 = config.cache, compare = config.compare, fallbackData = config.fallbackData, suspense = config.suspense, revalidateOnMount = config.revalidateOnMount, refreshInterval = config.refreshInterval, refreshWhenHidden = config.refreshWhenHidden, refreshWhenOffline = config.refreshWhenOffline;
  var _a2 = SWRGlobalState.get(cache2), EVENT_REVALIDATORS = _a2[0], STATE_UPDATERS = _a2[1], MUTATION = _a2[2], FETCH = _a2[3];
  var _b = serialize(_key), key = _b[0], fnArgs = _b[1], keyInfo = _b[2];
  var initialMountedRef = useRef(false);
  var unmountedRef = useRef(false);
  var keyRef = useRef(key);
  var fetcherRef = useRef(fetcher);
  var configRef = useRef(config);
  var getConfig = function() {
    return configRef.current;
  };
  var isActive = function() {
    return getConfig().isVisible() && getConfig().isOnline();
  };
  var patchFetchInfo = function(info2) {
    return cache2.set(keyInfo, mergeObjects(cache2.get(keyInfo), info2));
  };
  var cached = cache2.get(key);
  var fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  var data2 = isUndefined(cached) ? fallback : cached;
  var info = cache2.get(keyInfo) || {};
  var error = info.error;
  var isInitialMount = !initialMountedRef.current;
  var shouldRevalidate = function() {
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    return suspense ? !isUndefined(data2) : isUndefined(data2) || config.revalidateIfStale;
  };
  var resolveValidating = function() {
    if (!key || !fetcher)
      return false;
    if (info.isValidating)
      return true;
    return isInitialMount && shouldRevalidate();
  };
  var isValidating = resolveValidating();
  var _c = useStateWithDeps({
    data: data2,
    error,
    isValidating
  }, unmountedRef), stateRef = _c[0], stateDependencies = _c[1], setState = _c[2];
  var revalidate = useCallback(function(revalidateOpts) {
    return __awaiter(void 0, void 0, void 0, function() {
      var currentFetcher, newData, startAt, loading, opts, shouldStartNewRequest, isCurrentKeyMounted, cleanupState, newState, finishRequestAndUpdateState, mutationInfo, err_1;
      var _a3;
      return __generator(this, function(_b2) {
        switch (_b2.label) {
          case 0:
            currentFetcher = fetcherRef.current;
            if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
              return [2, false];
            }
            loading = true;
            opts = revalidateOpts || {};
            shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
            isCurrentKeyMounted = function() {
              return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
            };
            cleanupState = function() {
              var requestInfo = FETCH[key];
              if (requestInfo && requestInfo[1] === startAt) {
                delete FETCH[key];
              }
            };
            newState = { isValidating: false };
            finishRequestAndUpdateState = function() {
              patchFetchInfo({ isValidating: false });
              if (isCurrentKeyMounted()) {
                setState(newState);
              }
            };
            patchFetchInfo({
              isValidating: true
            });
            setState({ isValidating: true });
            _b2.label = 1;
          case 1:
            _b2.trys.push([1, 3, , 4]);
            if (shouldStartNewRequest) {
              broadcastState(cache2, key, stateRef.current.data, stateRef.current.error, true);
              if (config.loadingTimeout && !cache2.get(key)) {
                setTimeout(function() {
                  if (loading && isCurrentKeyMounted()) {
                    getConfig().onLoadingSlow(key, config);
                  }
                }, config.loadingTimeout);
              }
              FETCH[key] = [currentFetcher.apply(void 0, fnArgs), getTimestamp()];
            }
            _a3 = FETCH[key], newData = _a3[0], startAt = _a3[1];
            return [4, newData];
          case 2:
            newData = _b2.sent();
            if (shouldStartNewRequest) {
              setTimeout(cleanupState, config.dedupingInterval);
            }
            if (!FETCH[key] || FETCH[key][1] !== startAt) {
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }
              return [2, false];
            }
            patchFetchInfo({
              error: UNDEFINED
            });
            newState.error = UNDEFINED;
            mutationInfo = MUTATION[key];
            if (!isUndefined(mutationInfo) && (startAt <= mutationInfo[0] || startAt <= mutationInfo[1] || mutationInfo[1] === 0)) {
              finishRequestAndUpdateState();
              if (shouldStartNewRequest) {
                if (isCurrentKeyMounted()) {
                  getConfig().onDiscarded(key);
                }
              }
              return [2, false];
            }
            if (!compare(stateRef.current.data, newData)) {
              newState.data = newData;
            } else {
              newState.data = stateRef.current.data;
            }
            if (!compare(cache2.get(key), newData)) {
              cache2.set(key, newData);
            }
            if (shouldStartNewRequest) {
              if (isCurrentKeyMounted()) {
                getConfig().onSuccess(newData, key, config);
              }
            }
            return [3, 4];
          case 3:
            err_1 = _b2.sent();
            cleanupState();
            if (!getConfig().isPaused()) {
              patchFetchInfo({ error: err_1 });
              newState.error = err_1;
              if (shouldStartNewRequest && isCurrentKeyMounted()) {
                getConfig().onError(err_1, key, config);
                if (typeof config.shouldRetryOnError === "boolean" && config.shouldRetryOnError || isFunction(config.shouldRetryOnError) && config.shouldRetryOnError(err_1)) {
                  if (isActive()) {
                    getConfig().onErrorRetry(err_1, key, config, revalidate, {
                      retryCount: (opts.retryCount || 0) + 1,
                      dedupe: true
                    });
                  }
                }
              }
            }
            return [3, 4];
          case 4:
            loading = false;
            finishRequestAndUpdateState();
            if (isCurrentKeyMounted() && shouldStartNewRequest) {
              broadcastState(cache2, key, newState.data, newState.error, false);
            }
            return [2, true];
        }
      });
    });
  }, [key]);
  var boundMutate = useCallback(internalMutate.bind(UNDEFINED, cache2, function() {
    return keyRef.current;
  }), []);
  useIsomorphicLayoutEffect(function() {
    fetcherRef.current = fetcher;
    configRef.current = config;
  });
  useIsomorphicLayoutEffect(function() {
    if (!key)
      return;
    var keyChanged = key !== keyRef.current;
    var softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    var onStateUpdate = function(updatedData, updatedError, updatedIsValidating) {
      setState(mergeObjects({
        error: updatedError,
        isValidating: updatedIsValidating
      }, compare(stateRef.current.data, updatedData) ? UNDEFINED : {
        data: updatedData
      }));
    };
    var nextFocusRevalidatedAt = 0;
    var onRevalidate = function(type) {
      if (type == FOCUS_EVENT) {
        var now2 = Date.now();
        if (getConfig().revalidateOnFocus && now2 > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now2 + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == MUTATE_EVENT) {
        return revalidate();
      }
      return;
    };
    var unsubUpdate = subscribeCallback(key, STATE_UPDATERS, onStateUpdate);
    var unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    if (keyChanged) {
      setState({
        data: data2,
        error,
        isValidating
      });
    }
    if (shouldRevalidate()) {
      if (isUndefined(data2) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return function() {
      unmountedRef.current = true;
      unsubUpdate();
      unsubEvents();
    };
  }, [key, revalidate]);
  useIsomorphicLayoutEffect(function() {
    var timer;
    function next() {
      var interval = isFunction(refreshInterval) ? refreshInterval(data2) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!stateRef.current.error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return function() {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [refreshInterval, refreshWhenHidden, refreshWhenOffline, revalidate]);
  useDebugValue(data2);
  if (suspense && isUndefined(data2) && key) {
    fetcherRef.current = fetcher;
    configRef.current = config;
    unmountedRef.current = false;
    throw isUndefined(error) ? revalidate(WITH_DEDUPE) : error;
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return data2;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    }
  };
};
OBJECT.defineProperty(SWRConfig$1, "default", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);
const getResults = async (key, { searchString, searchType }) => {
  const [firstName, ...rest] = searchString.split(" ");
  const lastName = rest.join(" ");
  const response = await axios.get("ajax_functions.aspx", {
    params: {
      Function_ID: 135,
      First_Name: firstName,
      Last_Name: lastName,
      Do_Search_for_Coordinator: searchType === "coordinator"
    }
  });
  return response.data;
};
const useSearch = ({ searchString, searchType }) => {
  const { data: data2, error } = useSWR(searchString ? ["getResults", { searchString, searchType }] : null, getResults);
  return {
    results: data2,
    isError: error,
    isLoading: searchString && !data2 && !error
  };
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React__default, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a2, g) {
  var b, d = {}, e = null, h = null;
  g !== void 0 && (e = "" + g);
  a2.key !== void 0 && (e = "" + a2.key);
  a2.ref !== void 0 && (h = a2.ref);
  for (b in a2)
    m.call(a2, b) && !p.hasOwnProperty(b) && (d[b] = a2[b]);
  if (c && c.defaultProps)
    for (b in a2 = c.defaultProps, a2)
      d[b] === void 0 && (d[b] = a2[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
setup({
  hash: true
});
function PersonSearch() {
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState("coordinator");
  const [showInactives, setShowInactives] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState();
  const [isOpen, setIsOpen] = useIsOpen();
  const {
    results,
    isLoading,
    isError
  } = useSearch({
    searchString,
    searchType
  });
  const isCoordinatorSearch = searchType === "coordinator";
  const inactiveCount = useMemo(() => isCoordinatorSearch && (results == null ? void 0 : results.length) > 0 ? results.filter((r2) => !r2.Is_Active).length : 0, [results, isCoordinatorSearch]);
  const searchInput = useRef();
  const debouncedChangeHandler = useMemo(() => debounce_1((e) => setSearchString(e.target.value.trim()), 300), []);
  useEffect(() => {
    if (!selectedPerson)
      return;
    if (selectedPerson == null ? void 0 : selectedPerson.PassID) {
      window.location.href = `/interface_customer_overview.aspx?PassID=${selectedPerson.PassID}`;
      return;
    }
    window.location.href = `/interface_physician_3.asp?PIN=${selectedPerson.PIN}`;
  }, [selectedPerson]);
  function resetSearchState() {
    setSearchString("");
    setShowInactives(false);
  }
  return /* @__PURE__ */ jsx(mt.Root, {
    show: isOpen,
    as: Fragment,
    afterLeave: resetSearchState,
    children: /* @__PURE__ */ jsxs(An, {
      className: tw`fixed inset-0 z-10 overflow-y-auto p-4 pt-[25vh]`,
      initialFocus: searchInput,
      onClose: setIsOpen,
      children: [/* @__PURE__ */ jsx(mt.Child, {
        as: Fragment,
        enter: tw`ease-out duration-300`,
        enterFrom: tw`opacity-0`,
        enterTo: tw`opacity-100`,
        leave: tw`ease-in duration-200`,
        leaveFrom: tw`opacity-100`,
        leaveTo: tw`opacity-0`,
        children: /* @__PURE__ */ jsx(An.Overlay, {
          className: tw`fixed inset-0 bg-gray-500 bg-opacity-75`
        })
      }), /* @__PURE__ */ jsx(mt.Child, {
        as: Fragment,
        enter: tw`ease-out duration-300`,
        enterFrom: tw`opacity-0 scale-95`,
        enterTo: tw`opacity-100 scale-100`,
        leave: tw`ease-in duration-200`,
        leaveFrom: tw`opacity-100 scale-100`,
        leaveTo: tw`opacity-0 scale-95`,
        children: /* @__PURE__ */ jsxs(Na, {
          as: "div",
          value: selectedPerson,
          className: tw`relative mx-auto w-full max-w-xl divide-y overflow-hidden rounded-xl bg-white text-sm shadow-2xl ring ring-black ring-opacity-5`,
          onChange: setSelectedPerson,
          children: [/* @__PURE__ */ jsx(SearchTypeSelection, {
            searchType,
            onChange: setSearchType
          }), /* @__PURE__ */ jsxs("div", {
            className: tw`relative flex items-center px-4`,
            children: [/* @__PURE__ */ jsx(SearchIcon$1, {
              className: tw`h-6 w-6 text-gray-500`
            }), /* @__PURE__ */ jsx(Na.Input, {
              ref: searchInput,
              type: "search",
              className: tw`h-12 w-full bg-transparent p-2 focus:outline-none`,
              placeholder: "Search...",
              displayValue: (person) => person ? selectedPerson.Name : "",
              onChange: debouncedChangeHandler
            }), isLoading && /* @__PURE__ */ jsx(Spinner, {})]
          }), isCoordinatorSearch && inactiveCount > 0 && /* @__PURE__ */ jsx("div", {
            className: tw`flex justify-end p-4`,
            children: /* @__PURE__ */ jsxs("label", {
              className: tw`mb-0 flex items-center gap-x-1 font-normal`,
              children: [/* @__PURE__ */ jsx("input", {
                type: "checkbox",
                checked: showInactives,
                onChange: (e) => setShowInactives(e.target.checked)
              }), /* @__PURE__ */ jsxs("span", {
                className: tw`text-gray-600`,
                children: ["Include ", inactiveCount, " Inactives"]
              })]
            })
          }), isError && /* @__PURE__ */ jsx("div", {
            className: tw`p-4 text-sm text-red-600`,
            children: "There was an error retrieving results"
          }), (results == null ? void 0 : results.length) > 0 && /* @__PURE__ */ jsx(Na.Options, {
            className: tw`max-h-96 divide-y overflow-y-auto py-4 text-sm`,
            static: true,
            children: results.map((person) => isCoordinatorSearch ? (person.Is_Active || showInactives) && /* @__PURE__ */ jsx(CoordinatorOption, {
              person
            }, person.PassID) : /* @__PURE__ */ jsx(ParticipantOption, {
              person
            }, person.PIN))
          }), searchString && !isLoading && (results == null ? void 0 : results.length) === 0 && /* @__PURE__ */ jsx("p", {
            className: tw`p-4 text-sm text-gray-600`,
            children: "No results found."
          })]
        })
      })]
    })
  });
}
function SearchTypeSelection({
  searchType,
  onChange
}) {
  return /* @__PURE__ */ jsxs(lt, {
    value: searchType,
    className: tw`flex items-center gap-2 p-2`,
    onChange,
    children: [/* @__PURE__ */ jsx(lt.Label, {
      className: tw`sr-only`,
      children: "Search Type"
    }), /* @__PURE__ */ jsx(lt.Option, {
      value: "coordinator",
      className: tw`flex-1 cursor-pointer rounded-lg ring-purple-500 ring-offset-1 focus:outline-none focus:ring-2`,
      children: ({
        checked
      }) => /* @__PURE__ */ jsx("div", {
        className: tw`rounded-lg border p-2 text-center transition ${checked ? "border-purple-500 bg-purple-100" : "border-transparent hover:bg-gray-100"}`,
        children: "Coordinator"
      })
    }), /* @__PURE__ */ jsx(lt.Option, {
      value: "provider",
      className: tw`flex-1 cursor-pointer rounded-lg ring-purple-500 ring-offset-1 focus:outline-none focus:ring-2`,
      children: ({
        checked
      }) => /* @__PURE__ */ jsx("div", {
        className: tw`rounded-lg border p-2 text-center transition ${checked ? "border-purple-500 bg-purple-100" : "border-transparent hover:bg-gray-100"}`,
        children: "Provider"
      })
    })]
  });
}
function CoordinatorOption({
  person
}) {
  return /* @__PURE__ */ jsx(Na.Option, {
    value: person,
    className: tw`cursor-pointer`,
    children: ({
      active
    }) => /* @__PURE__ */ jsxs("div", {
      className: tw`flex items-center justify-between px-4 py-2 ${active ? "bg-purple-600" : "bg-white"}`,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsxs("div", {
          className: tw`flex items-center gap-x-1`,
          children: [/* @__PURE__ */ jsx("div", {
            className: tw({
              "text-white": active,
              "line-through": !person.Is_Active
            }),
            children: person.Name
          }), person.Is_Full_Sponsor && /* @__PURE__ */ jsx(Badge, {
            active,
            children: "Admin"
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: tw`flex text-xs ${active ? "text-purple-200" : "text-gray-500"}`,
          children: /* @__PURE__ */ jsx("span", {
            children: person.Sponsor_Name
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: tw`flex flex-col tabular-nums items-end${active && "text-white"}`,
        children: /* @__PURE__ */ jsx("span", {
          className: tw`tabular-nums`,
          children: person.PassID
        })
      })]
    })
  });
}
function ParticipantOption({
  person
}) {
  return /* @__PURE__ */ jsx(Na.Option, {
    value: person,
    className: tw`cursor-pointer`,
    children: ({
      active
    }) => /* @__PURE__ */ jsxs("div", {
      className: tw`flex items-center justify-between px-4 py-2 ${active ? "bg-purple-600" : "bg-white"}`,
      children: [/* @__PURE__ */ jsxs("div", {
        children: [/* @__PURE__ */ jsx("div", {
          className: tw`${active && "text-white"}`,
          children: person.Name
        }), /* @__PURE__ */ jsxs("div", {
          className: tw`text-xs ${active ? "text-purple-200" : "text-gray-500"}`,
          children: [person.City, ", ", person.State]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: tw`tabular-nums ${active && "text-white"}`,
        children: person.PIN
      })]
    })
  });
}
function Badge({
  active,
  children
}) {
  return /* @__PURE__ */ jsx("span", {
    className: tw`rounded-lg px-1 text-xs font-medium ${active ? "bg-white text-purple-600" : "bg-purple-50 text-purple-500"}`,
    children
  });
}
function Spinner() {
  return /* @__PURE__ */ jsxs("svg", {
    className: tw`absolute right-5 h-5 w-5 animate-spin text-gray-700`,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [/* @__PURE__ */ jsx("circle", {
      className: tw`opacity-25`,
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }), /* @__PURE__ */ jsx("path", {
      className: tw`opacity-75`,
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    })]
  });
}
var personSearch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": PersonSearch
}, Symbol.toStringTag, { value: "Module" }));
export { personSearch as PersonSearch };

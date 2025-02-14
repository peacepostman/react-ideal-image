"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Composes styles and/or classes
 *
 * For classes it will concat them in in one string
 * and return as `className` property.
 * Alternative is https://github.com/JedWatson/classnames
 *
 * For objects it will merge them in one object
 * and return as `style` property.
 *
 * Usage:
 * Asume you have `theme` object, which can be css-module
 * or object or other css-in-js compatible with css-module
 *
 * <a {...compose(theme.link, theme.active, {color: "#000"})}>link</a>
 *
 * @returns {{className: string, style: object}} - params for React component
 */
var _default = function _default() {
  var classes = [];
  var style;

  for (var _len = arguments.length, stylesOrClasses = new Array(_len), _key = 0; _key < _len; _key++) {
    stylesOrClasses[_key] = arguments[_key];
  }

  for (var _i = 0, _stylesOrClasses = stylesOrClasses; _i < _stylesOrClasses.length; _i++) {
    var obj = _stylesOrClasses[_i];

    if (obj instanceof Object) {
      Object.assign(style || (style = {}), obj);
    } else if (obj === undefined || obj === false) {// ignore
    } else if (typeof obj === 'string') {
      classes.push(obj);
    } else {
      throw new Error("Unexpected value ".concat(obj));
    }
  }

  return {
    className: classes.length > 1 ? classes.join(' ') : classes[0],
    style: style
  };
};

exports.default = _default;
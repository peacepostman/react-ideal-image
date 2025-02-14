"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#000' : _ref$fill,
      className = _ref.className,
      path = _ref.path;
  return _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className: className
  }, _react.default.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), _react.default.createElement("path", {
    fill: fill,
    d: path
  }));
};

Icon.propTypes = {
  size: _propTypes.default.number,
  fill: _propTypes.default.string,
  className: _propTypes.default.string,
  path: _propTypes.default.string.isRequired
};
var _default = Icon;
exports.default = _default;
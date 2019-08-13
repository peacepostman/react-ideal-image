"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Media = _interopRequireDefault(require("../Media"));

var _icons = _interopRequireDefault(require("../icons"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MediaWithDefaults = function MediaWithDefaults(props) {
  return _react.default.createElement(_Media.default, props);
};

MediaWithDefaults.defaultProps = _objectSpread({}, _Media.default.defaultProps, {
  icons: _icons.default,
  theme: _theme.default // eslint-disable-next-line react/forbid-foreign-prop-types

});
MediaWithDefaults.propTypes = _Media.default.propTypes;
var _default = MediaWithDefaults;
exports.default = _default;
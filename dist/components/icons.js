"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Download = _interopRequireDefault(require("./Icon/Download"));

var _Offline = _interopRequireDefault(require("./Icon/Offline"));

var _Warning = _interopRequireDefault(require("./Icon/Warning"));

var _Loading = _interopRequireDefault(require("./Icon/Loading"));

var _constants = require("./constants");

var _load$loading$loaded$;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var load = _constants.icons.load,
    loading = _constants.icons.loading,
    loaded = _constants.icons.loaded,
    error = _constants.icons.error,
    noicon = _constants.icons.noicon,
    offline = _constants.icons.offline;

var _default = (_load$loading$loaded$ = {}, _defineProperty(_load$loading$loaded$, load, _Download.default), _defineProperty(_load$loading$loaded$, loading, _Loading.default), _defineProperty(_load$loading$loaded$, loaded, null), _defineProperty(_load$loading$loaded$, error, _Warning.default), _defineProperty(_load$loading$loaded$, noicon, null), _defineProperty(_load$loading$loaded$, offline, _Offline.default), _load$loading$loaded$);

exports.default = _default;
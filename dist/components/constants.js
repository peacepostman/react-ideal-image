"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadStates = exports.icons = void 0;
var load = 'load';
var loading = 'loading';
var loaded = 'loaded';
var error = 'error';
var noicon = 'noicon';
var offline = 'offline';
var icons = {
  load: load,
  loading: loading,
  loaded: loaded,
  error: error,
  noicon: noicon,
  offline: offline
};
exports.icons = icons;
var initial = 'initial';
var loadStates = {
  initial: initial,
  loading: loading,
  loaded: loaded,
  error: error
};
exports.loadStates = loadStates;
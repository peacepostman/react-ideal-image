"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.xhrLoader = exports.imageLoader = exports.timeout = exports.combineCancel = void 0;

var _unfetch = require("./unfetch");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var combineCancel = function combineCancel(p1, p2) {
  if (!p2) return p1;
  var result = p1.then(function (x) {
    return x;
  }, function (x) {
    return x;
  });

  result.cancel = function () {
    p1.cancel();
    p2.cancel();
  };

  return result;
};

exports.combineCancel = combineCancel;

var timeout = function timeout(threshold) {
  var timerId;
  var result = new Promise(function (resolve) {
    timerId = setTimeout(resolve, threshold);
  });

  result.cancel = function () {
    // there is a bug with cancel somewhere in the code
    // if (!timerId) throw new Error('Already canceled')
    clearTimeout(timerId);
    timerId = undefined;
  };

  return result;
}; // Caveat: image loader can not cancel download in some browsers


exports.timeout = timeout;

var imageLoader = function imageLoader(src) {
  var img = new Image();
  var result = new Promise(function (resolve, reject) {
    img.onload = resolve; // eslint-disable-next-line no-multi-assign

    img.onabort = img.onerror = function () {
      return reject({});
    };

    img.src = src;
  });

  result.cancel = function () {
    if (!img) throw new Error('Already canceled'); // eslint-disable-next-line no-multi-assign

    img.onload = img.onabort = img.onerror = undefined;
    img.src = '';
    img = undefined;
  };

  return result;
}; // Caveat: XHR loader can cause errors because of 'Access-Control-Allow-Origin'
// Caveat: we still need imageLoader to do actual decoding,
// but if images are uncachable this will lead to two requests


exports.imageLoader = imageLoader;

var xhrLoader = function xhrLoader(url, options) {
  var controller = new _unfetch.UnfetchAbortController();
  var signal = controller.signal;
  var result = new Promise(function (resolve, reject) {
    return (0, _unfetch.unfetch)(url, _objectSpread({}, options, {
      signal: signal
    })).then(function (response) {
      if (response.ok) {
        response.blob().then(function () {
          return imageLoader(url);
        }).then(resolve);
      } else {
        reject({
          status: response.status
        });
      }
    }, reject);
  });

  result.cancel = function () {
    if (!controller) throw new Error('Already canceled');
    controller.abort();
    controller = undefined;
  };

  return result;
}; // Caveat: AbortController only supported in Chrome 66+
// Caveat: we still need imageLoader to do actual decoding,
// but if images are uncachable this will lead to two requests
// export const fetchLoader = (url, options) => {
//   let controller = new AbortController()
//   const signal = controller.signal
//   const result = new Promise((resolve, reject) =>
//     fetch(url, {...options, signal}).then(response => {
//       if (response.ok) {
//         options && options.onMeta && options.onMeta(response.headers)
//         response
//           .blob()
//           .then(() => imageLoader(url))
//           .then(resolve)
//       } else {
//         reject({status: response.status})
//       }
//     }, reject),
//   )
//   result.cancel = () => {
//     if (!controller) throw new Error('Already canceled')
//     controller.abort()
//     controller = undefined
//   }
//   return result
// }


exports.xhrLoader = xhrLoader;
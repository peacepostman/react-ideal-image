"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfetch = exports.UnfetchAbortController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnfetchAbortController = function UnfetchAbortController() {
  var _this = this;

  _classCallCheck(this, UnfetchAbortController);

  this.signal = {
    onabort: function onabort() {}
  };

  this.abort = function () {
    return _this.signal.onabort();
  };
}; // modified version of https://github.com/developit/unfetch
// - ponyfill intead of polyfill
// - add support for AbortController


exports.UnfetchAbortController = UnfetchAbortController;

var unfetch = function unfetch(url, options) {
  options = options || {};
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(options.method || 'get', url, true); // eslint-disable-next-line guard-for-in

    for (var i in options.headers) {
      request.setRequestHeader(i, options.headers[i]);
    }

    request.withCredentials = options.credentials === 'include';

    request.onload = function () {
      resolve(response());
    };

    request.onerror = reject;
    if (options.signal) options.signal.onabort = function () {
      // eslint-disable-next-line no-multi-assign
      request.onerror = request.onload = undefined;
      request.abort();
    };
    request.send(options.body);

    function response() {
      var _keys = [];
      var all = [];
      var headers = {};
      var header;
      request.getAllResponseHeaders().replace(/^(.*?):\s*?([\s\S]*?)$/gm, function (m, key, value) {
        _keys.push(key = key.toLowerCase());

        all.push([key, value]);
        header = headers[key];
        headers[key] = header ? "".concat(header, ",").concat(value) : value;
      });
      return {
        // eslint-disable-next-line no-bitwise
        ok: (request.status / 100 | 0) === 2,
        // 200-299
        status: request.status,
        statusText: request.statusText,
        url: request.responseURL,
        clone: response,
        text: function text() {
          return Promise.resolve(request.responseText);
        },
        json: function json() {
          return Promise.resolve(request.responseText).then(JSON.parse);
        },
        blob: function blob() {
          return Promise.resolve(new Blob([request.response]));
        },
        headers: {
          keys: function keys() {
            return _keys;
          },
          entries: function entries() {
            return all;
          },
          get: function get(n) {
            return headers[n.toLowerCase()];
          },
          has: function has(n) {
            return n.toLowerCase() in headers;
          }
        }
      };
    }
  });
};

exports.unfetch = unfetch;
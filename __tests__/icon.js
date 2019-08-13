"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Download = _interopRequireDefault(require("../components/Icon/Download"));

var _Loading = _interopRequireDefault(require("../components/Icon/Loading"));

var _Offline = _interopRequireDefault(require("../components/Icon/Offline"));

var _Warning = _interopRequireDefault(require("../components/Icon/Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var snapshotTestDescription = 'Should render a snapshot that is good';
describe('Download icon', function () {
  it(snapshotTestDescription, function () {
    var download = _reactTestRenderer.default.create(_react.default.createElement(_Download.default, null)).toJSON();

    expect(download).toMatchSnapshot();
  });
});
describe('Loading icon', function () {
  it(snapshotTestDescription, function () {
    var loading = _reactTestRenderer.default.create(_react.default.createElement(_Loading.default, null)).toJSON();

    expect(loading).toMatchSnapshot();
  });
});
describe('Offline icon', function () {
  it(snapshotTestDescription, function () {
    var offline = _reactTestRenderer.default.create(_react.default.createElement(_Offline.default, null)).toJSON();

    expect(offline).toMatchSnapshot();
  });
});
describe('Warning icon', function () {
  it(snapshotTestDescription, function () {
    var warning = _reactTestRenderer.default.create(_react.default.createElement(_Warning.default, null)).toJSON();

    expect(warning).toMatchSnapshot();
  });
});
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("../components/IdealImageWithDefaults/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IdealImageWithDefaults', function () {
  it('Renders a snapshot that is good', function () {
    var comp = _reactTestRenderer.default.create(_react.default.createElement(_index.default, {
      placeholder: {
        color: 'blue'
      },
      srcSet: [{
        src: 'some-src.jpg',
        width: 3500
      }],
      alt: "doggo",
      width: 3500,
      height: 2095
    })).toJSON();

    expect(comp).toMatchSnapshot();
  });
});
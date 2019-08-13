"use strict";

var _composeStyle = _interopRequireDefault(require("../components/composeStyle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('composeStyle', function () {
  it('Should combine object classes into one className string', function () {
    var theme = {
      base: 'base',
      element: 'base__element'
    };
    var result = (0, _composeStyle.default)(theme.base, theme.element);
    expect(result.className).toEqual("".concat(theme.base, " ").concat(theme.element));
  });
  it('Should return a styles object unmodified', function () {
    var style = {
      color: 'blue',
      margin: '1em 0'
    };
    var result = (0, _composeStyle.default)(style);
    var expected = style;
    expect(result.style).toEqual(expected);
  });
  it('Should throw an error if given a parameter not an object or string', function () {
    var number = 1;

    try {
      (0, _composeStyle.default)(number);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe("Unexpected value ".concat(number));
    }
  });
});
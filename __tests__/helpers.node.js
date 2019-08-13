"use strict";

var _helpers = require("../components/helpers");

/**
 * @jest-environment node
 */
describe('guessMaxImageWidth', function () {
  var expected = 0;
  it("Should return ".concat(expected, " when run in the node environment"), function () {
    var result = (0, _helpers.guessMaxImageWidth)({
      width: 100
    });
    expect(result).toEqual(expected);
  });
});
describe('FallbackParams', function () {
  var props = {
    srcSet: [{
      format: 'webp'
    }, {
      format: 'jpeg'
    }, {
      format: 'png'
    }],
    getUrl: jest.fn()
  };
  it('Should return an object when run in the node environment', function () {
    var result = (0, _helpers.fallbackParams)(props);
    expect(result).not.toEqual({});
    expect(props.getUrl).toHaveBeenCalled();
    expect(result.ssr).toEqual(true);
  });
});
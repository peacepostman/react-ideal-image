"use strict";

var _helpers = require("../components/helpers");

describe('guessMaxImageWidth', function () {
  it('Should calculate the maximum image width', function () {
    var dimensions = {
      width: 400,
      height: 100
    };
    var mockedWindow = {
      screen: {
        width: 100
      },
      innerWidth: 1024,
      innerHeight: 768
    };
    var expected = dimensions.width;
    var result = (0, _helpers.guessMaxImageWidth)(dimensions, mockedWindow);
    expect(result).toEqual(expected);
  });
  it('Should calculate the maximum image width with screen changes', function () {
    var dimensions = {
      width: 400,
      height: 100
    };
    var mockedWindow = {
      screen: {
        width: 100
      },
      innerWidth: 50,
      innerHeight: 30
    };
    var expected = dimensions.width / mockedWindow.innerWidth * mockedWindow.screen.width;
    var result = (0, _helpers.guessMaxImageWidth)(dimensions, mockedWindow);
    expect(result).toEqual(expected);
  });
  it('Should calculate the maximum image width with screen changes and scroll', function () {
    var body = document.getElementsByTagName('body')[0];
    Object.defineProperty(body, 'clientHeight', {
      get: function get() {
        return 400;
      }
    });
    var dimensions = {
      width: 400,
      height: 100
    };
    var mockedWindow = {
      screen: {
        width: 100
      },
      innerWidth: 50,
      innerHeight: 100
    };
    var expected = 450;
    var result = (0, _helpers.guessMaxImageWidth)(dimensions, mockedWindow);
    expect(result).toEqual(expected);
  });
});
describe('bytesToSize', function () {
  var bitsInKB = 1024;
  var bitsInMB = bitsInKB * bitsInKB;
  it('Should correctly calculate size less than a single byte', function () {
    var bytes = 4;
    var result = (0, _helpers.bytesToSize)(bytes);
    expect(result).toEqual("".concat(bytes, " Bytes"));
  });
  it('Should correctly calculate size one bit less than a kilobyte', function () {
    var bytes = bitsInKB - 1;
    var result = (0, _helpers.bytesToSize)(bytes);
    expect(result).toEqual("".concat(bytes, " Bytes"));
  });
  it('Should correctly calculate size of exactly a kilobyte', function () {
    var expected = '1.0 KB';
    var result = (0, _helpers.bytesToSize)(bitsInKB);
    expect(result).toEqual(expected);
  });
  it('Should correctly calculate decimal value of exactly a kilobyte plus 100 bits', function () {
    var expected = '1.1 KB';
    var result = (0, _helpers.bytesToSize)(bitsInKB + 100);
    expect(result).toEqual(expected);
  });
  it('Should correctly calculate size of exactly a megabybte', function () {
    var expected = '1.0 MB';
    var result = (0, _helpers.bytesToSize)(bitsInMB);
    expect(result).toEqual(expected);
  });
});
describe('selectSrc', function () {
  it('Should throw if provided no srcSet', function () {
    var props = {
      srcSet: []
    };

    try {
      (0, _helpers.selectSrc)(props);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Need at least one item in srcSet');
    }
  });
  it('Should throw if provided no supported formats in srcSet', function () {
    var props = {
      srcSet: [{
        format: 'webp'
      }]
    };

    try {
      (0, _helpers.selectSrc)(props);
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe('Need at least one supported format item in srcSet');
    }
  });
  it('Should select the right source with an image greater than the max width', function () {
    var srcThatShouldBeSelected = {
      format: 'jpeg',
      width: 100
    };
    var props = {
      srcSet: [srcThatShouldBeSelected],
      maxImageWidth: 100
    };
    var expected = srcThatShouldBeSelected;
    var result = (0, _helpers.selectSrc)(props);
    expect(result).toEqual(expected);
  });
  it('Should select the right source with an image less than the max width', function () {
    var srcThatShouldBeSelected = {
      format: 'jpeg',
      width: 99
    };
    var srcThatShouldNotBeSelected = {
      format: 'jpeg',
      width: 98
    };
    var props = {
      srcSet: [srcThatShouldBeSelected, srcThatShouldNotBeSelected],
      maxImageWidth: 100
    };
    var expected = srcThatShouldBeSelected;
    var result = (0, _helpers.selectSrc)(props);
    expect(result).toEqual(expected);
  });
  it('Should use webp images if supported', function () {
    var srcThatShouldBeSelected = {
      format: 'webp',
      width: 99
    };
    var srcThatShouldNotBeSelected = {
      format: 'webp',
      width: 98
    };
    var props = {
      srcSet: [srcThatShouldBeSelected, srcThatShouldNotBeSelected],
      supportsWebp: true,
      maxImageWidth: 100
    };
    var expected = srcThatShouldBeSelected;
    var result = (0, _helpers.selectSrc)(props);
    expect(result).toEqual(expected);
  });
});
describe('fallbackParams', function () {
  it('Should return an empty object when run in the browser environment', function () {
    var result = (0, _helpers.fallbackParams)({
      srcSet: [{
        format: 'webp'
      }]
    });
    expect(result).toEqual({});
  });
});
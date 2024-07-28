const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calcul.js', function () {
  it('should perform add op', function () {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should perform sub op', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('should perform div op', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('should perform return 0 when div by 0', function () {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});

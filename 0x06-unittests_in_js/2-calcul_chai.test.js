const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('2-calcul_chai.js', function () {
  it('should perform add op', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('should perform sub op', function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should perform div op', function () {
  expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should perform return 0 when div by 0', function () {
  expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('3-payment.js', function () {
  it('sendPaymentApi uses the calculateNumber of the Utils obj successfully', function () {
    const spy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.calledOnce).to.be.true;
    spy.calculateNumber.restore();
  });
});

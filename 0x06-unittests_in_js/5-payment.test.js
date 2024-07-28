const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('4-payment.js', function () {
  let spy;

  beforeEach(() => {
    if (!spy) {
      spy = sinon.spy(console);
    }
  });

  this.afterEach(() => {
    spy.log.resetHistory();
  });

  it('sendPaymentToApi with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20)
    expect(spy.log.calledWith('The total is: 120')).to.be.true
    expect(spy.log.callCount).to.be.equal(1)
  });
  it('sendPaymentToApi with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10)
    expect(spy.log.calledWith('The total is: 20')).to.be.true
    expect(spy.log.callCount).to.be.equal(1)
  });
});

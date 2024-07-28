const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('4-payment.js', function () {
  it('sendPaymentApi uses the calculateNumber of the Utils obj successfully', function () {
    const spy = sinon.spy(console)
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10)
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1)
    expect(spy.log.calledWith('The total is: 10')).to.be.true
    expect(spy.log.callCount).to.be.equal(1)
    spy.log.restore()
    stub.restore()
  });
});

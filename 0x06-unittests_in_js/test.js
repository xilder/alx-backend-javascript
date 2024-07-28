const assert = require('assert');
const { expect } = require('chai');
const sinon = require('sinon')
const indexPage = require('./app.contoller')

describe('smoke test', function () {
  it('should return true', function () {
    assert.equal('true', 'true');
  });
  it('should return true', function () {
    expect(true).to.be.true;
  });
});

describe('getIndexPage', function () {
  it('should return index page', function () {
    let req = {};
    let res = {
      send: sinon.spy(),
    };
    indexPage.getIndexPage(req, res);
    console.log(res.send)
    expect(res.send.calledOnce).to.be.true
    expect(res.send.firstCall.args[0].to.equal('Hey'))
  });
});

const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('should return the correct output when homepage is accessed', () =>
    new Promise((done) => {
      request.get(`${API_URL}/`, (_, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    }));
});

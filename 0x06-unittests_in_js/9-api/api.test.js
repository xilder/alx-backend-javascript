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

  it('should return correct output when accessing the cart route', () =>
    new Promise((done) => {
      request.get(`${API_URL}/cart/5`, (_, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 5');
        done();
      });
    }));

  it('should return an error page when trying to access the cart route without a number', () =>
    new Promise((done) => {
      request.get(`${API_URL}/cart/tolu`, (_, res, __) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    }));

  it('should return an error page when trying to access the cart route with a neg number', () =>
    new Promise((done) => {
      request.get(`${API_URL}/cart/-7`, (_, res, __) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    }));
});

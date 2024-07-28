const getPaymentTokenFromApi = require('./6-payment_token');
const chai = require('chai');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', function () {
  it('getPaymentTokenFromAPI successful output', () =>
    new Promise((done) => {
      getPaymentTokenFromApi(true).then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
    }));
});

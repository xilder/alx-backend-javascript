const getPaymentTokenFromApi = (success) => {
  return new Promise((res, rej) => {
    if (success) {
      res({ data: 'Successful response from the API' });
    }
  });
};

module.exports = getPaymentTokenFromApi;

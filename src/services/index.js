const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const QuotationService = () => {
  sleep(50);
  return 35000;
};

const BlacklistService = (registerNumber) => {
  sleep(50);
  return registerNumber === 'AA123AA';
};

module.exports = {
  QuotationService,
  BlacklistService,
};

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const QuotationService = async () => {
  sleep(50);
  return 35000;
};

const BlackListService = async (registerNumber) => {
  sleep(50);
  return registerNumber === 'AA123AA';
};

module.export = {
  QuotationService,
  BlackListService,
};

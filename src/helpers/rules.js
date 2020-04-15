const { QuotationService, BlacklistService } = require('../services');

const nameLength = name => {
  return name.length > 2;
}

const alphaRate = email => {
  const re = /[a-zA-Z0-9]/g;
  const alphaLength = (email.match(re) || []).length;
  const coreEmailLength = email.split('@')[0].length;
  const rate = alphaLength / coreEmailLength;
  console.log(rate);
  return rate > 0.7;
};

const numberRate = email => {
  const re = /[\d]/g;
  const emailNumberLength = (email.match(re) || []).length;
  const coreEmailLength = email.split('@')[0].length;
  const rate = emailNumberLength / coreEmailLength;

  return rate < 0.3;
}

const quotationRate = price => {
  const quotation = QuotationService();
  const minRange = quotation - (quotation * 0.2);
  const maxRange = quotation + (quotation * 0.2);

  if (price >= minRange && price <= maxRange) {
    return true;
  }
  return false;
}

const isBlacklisted = registerNumber => {
  return BlacklistService(registerNumber);
}

module.exports = {
  nameLength,
  alphaRate,
  numberRate,
  quotationRate,
  isBlacklisted
};
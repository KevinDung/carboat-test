const { QuotationService, BlacklistService } = require('../services');

const hasCharactersRequired = (name, required = 2) => name.length > required;

const hasAlphaRate = (email) => {
  const re = /[a-zA-Z0-9]/g;
  const alphaLength = (email.match(re) || []).length;
  const coreEmailLength = email.split('@')[0].length;
  const rate = alphaLength / coreEmailLength;

  return rate > process.env.ALPHA_RATE;
};

const hasNumberRate = (email) => {
  const re = /[\d]/g;
  const emailNumberLength = (email.match(re) || []).length;
  const coreEmailLength = email.split('@')[0].length;
  const rate = emailNumberLength / coreEmailLength;

  return rate < process.env.NUMBER_RATE;
};

const hasQuotationRate = (price) => {
  const quotation = QuotationService();
  const minRange = quotation - quotation * 0.2;
  const maxRange = quotation + quotation * 0.2;

  if (price >= minRange && price <= maxRange) {
    return true;
  }
  return false;
};

const isNotBlacklisted = (registerNumber) => !BlacklistService(registerNumber);

module.exports = {
  hasCharactersRequired,
  hasAlphaRate,
  hasNumberRate,
  hasQuotationRate,
  isNotBlacklisted,
};

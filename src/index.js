const Logger = require('./helpers/logger');
const {
  hasCharactersRequired,
  hasAlphaRate,
  hasNumberRate,
  hasQuotationRate,
  isNotBlacklisted,
} = require('./helpers/rules');
const data = require('./data.json');

const scamDetector = () => {
  const logger = new Logger(data.reference);
  const checkFirstname = hasCharactersRequired(data.contacts.firstName);
  const checkLastname = hasCharactersRequired(data.contacts.lastName);
  const checkEmailAlphaRate = hasAlphaRate(data.contacts.email);
  const checkEmailNumberRate = hasNumberRate(data.contacts.email);
  const checkPrice = hasQuotationRate(data.vehicle.price);
  const checkRegisterNumber = isNotBlacklisted(data.vehicle.registerNumber);

  if (!checkFirstname) logger.addScamRule('rule::firstname::length');
  if (!checkLastname) logger.addScamRule('rule::lastname::length');
  if (!checkEmailAlphaRate) logger.addScamRule('rule:✉:alpha_rate');
  if (!checkEmailNumberRate) logger.addScamRule('rule:✉:number_rate');
  if (!checkPrice) logger.addScamRule('rule::price::quotation_rate');
  if (!checkRegisterNumber) logger.addScamRule('rule::registernumber::blacklist');

  return logger;
};

console.log(scamDetector());

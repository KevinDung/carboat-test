require('dotenv').config();

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
  const log = new Logger(data.reference);
  const checkFirstname = hasCharactersRequired(data.contacts.firstName);
  const checkLastname = hasCharactersRequired(data.contacts.lastName);
  const checkEmailAlphaRate = hasAlphaRate(data.contacts.email);
  const checkEmailNumberRate = hasNumberRate(data.contacts.email);
  const checkPrice = hasQuotationRate(data.vehicle.price);
  const checkRegisterNumber = isNotBlacklisted(data.vehicle.registerNumber);

  if (!checkFirstname) log.addScamRule('rule::firstname::length');
  if (!checkLastname) log.addScamRule('rule::lastname::length');
  if (!checkEmailAlphaRate) log.addScamRule('rule:✉:alpha_rate');
  if (!checkEmailNumberRate) log.addScamRule('rule:✉:number_rate');
  if (!checkPrice) log.addScamRule('rule::price::quotation_rate');
  if (!checkRegisterNumber) log.addScamRule('rule::registernumber::blacklist');

  return JSON.stringify(log.logger, null, 2);
};

console.log(scamDetector());
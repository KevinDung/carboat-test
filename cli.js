const Logger = require('./src/helpers/logger');
const { alphaRate, quotationRate, isBlacklisted } = require('./src/helpers/rules');

const logger = new Logger("tESTT");

console.log(quotationRate(29000));
console.log(JSON.stringify(logger, '', 2));
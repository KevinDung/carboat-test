class Logger {
  constructor(reference) {
    this.logger = {
      reference: reference,
      scam: false,
      rules: [],
    };
  }

  addScamRule(rule) {
    if (!this.logger.scam) {
      this.logger.scam = true;
    }
    this.logger.rules.push(rule);
  }
}

module.exports = Logger;

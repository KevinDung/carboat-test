const expect = require('chai').expect;

const data = require('./data.json');
const { hasCharactersRequired, hasAlphaRate } = require('../src/helpers/rules');

describe('Rules functions to detect scam announces', () => {
  describe('hasCharactersRequired function', () => {
    it('should be true', () => {
      expect(hasCharactersRequired(data.firstname)).to.be.true;
    });
    it('should be false for 2 characters', () => {
      expect(hasCharactersRequired(data.fakeFirstname)).to.be.false;
    });
  });

  describe('hasAlphaRate function', () => {
    it('should be true', () => {
      expect(hasAlphaRate(data.email)).to.be.true;
    });
    it('should be false', () => {
      expect(hasAlphaRate(data.fakeEmail)).to.be.false;
    });
  });
})
const expect = require('expect.js');
const ai = require('../src/javascripts/ai');

describe('Our AI ', () => {
  it('is a function', () => {
    expect(ai).to.be.a('function');
  });

  it('returns an object', () => {
    const actual = ai();
    expect(actual).to.be.an('object');
  });
});

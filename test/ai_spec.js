const expect = require('expect.js');
const ai = require('../src/javascripts/ai');

describe('Our Ai ', () => {
  it('is a function', () => {
    expect(ai).to.be.a('function');
  });

  it('returns an object', () => {
    const actual = new ai();
    expect(actual).to.be.an('object');
  });

  describe('instance...', () => {
    let instance;
    beforeEach(() => {
      instance = new ai();
    });

    afterEach(() => {
      instance = null;
    });

    describe('.board', () => {
      it('should be an array', () => {
        expect(instance).to.be.an('object');
      });
    });
  });
});

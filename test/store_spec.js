const expect = require('expect.js');
const Store = require('../src/javascripts/store');

describe('Store', () => {
  it('is a function', () => {
    expect(Store).to.be.a('function');
  });
  it('return an object', () => {
    const actual = new Store();
    expect(actual).to.be.an('object');
  })

  describe('instance', () => {
    let instance;
    beforeEach(() => {
      instance = new Store();
    });

    afterEach(() => {
      instance = null;
    });

    describe('.getState', () => {
      it('can return gameboard state', () => {
        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ]);
      });

      it('can return message', () => {
        const actual = instance.getState('message');
        expect(actual).to.eql('');
      })
    });
  });
});

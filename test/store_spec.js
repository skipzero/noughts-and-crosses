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

    describe('.action', () => {
      it('center square is x', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'x',
        })
        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          [0, 0, 0],
          [0, 'x', 0],
          [0, 0, 0],
        ]);
      })

      it('first square last row is o', () => {
        instance.action({
          type: 'turn',
          x: 0,
          y: 2,
          marker: 'o',
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          [0, 0, 0],
          [0, 0, 0],
          ['o', 0, 0],
        ]);
      });

      it('can place x & o', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 0,
          marker: 'o',
        });

        instance.action({
          type: 'turn',
          x: 2,
          y: 2,
          marker: 'x',
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          [0, 'o', 0],
          [0, 0, 0],
          [0, 0, 'x'],
        ]);
      });

      // TODO: refactor to an array of object to test against. map with the array to the test function.
      it ('can\'t place on a marked square', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'o',
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'x',
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          [0, 0, 0],
          [0, 'o', 0],
          [0, 0, 0],
        ]);
      });

      it ('message has text and meaning', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'o',
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'x',
        });

        const actual = instance.getState('message');
        expect(actual).to.be('Pick an unoccupied square, hoser.')
      });
    });

    describe('.register', () => {
      it('throws error without a function', () => {
        expect(function () {
          instance.register();
        }).to.throwError();
      });

      it('callback passed to register is triggered by action', (done) => {
        instance.register(done);
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
          marker: 'x',
        });
      });

      it('shouldnt fire if theres no action', (done) => {
        instance.register(() => {
          expect().to.fail();
        });
        setTimeout(done, 500);
      })
    });
  });
});

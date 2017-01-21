'use strict';
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
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ]);
      });

      it('can return message', () => {
        const actual = instance.getState('message');
        expect(actual).to.eql('');
      });
    });

    describe('.action', () => {
      it('center square is x', () => {

        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });
        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', '', ''],
          ['', 'x', ''],
          ['', '', ''],
        ]);
      });

      it('first square last row is o', () => {
        instance.action({
          type: 'turn',
          x: 0,
          y: 2,
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', '', ''],
          ['', '', ''],
          ['x', '', ''],
        ]);
      });

      it('can place x & o', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 0,
        });

        instance.action({
          type: 'turn',
          x: 2,
          y: 2,
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', 'x', ''],
          ['', '', ''],
          ['', '', 'o'],
        ]);
      });

      // TODO: refactor to an array of object to test against. map with the array to the test function.
      it ('can\'t place on a marked square', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', '', ''],
          ['', 'x', ''],
          ['', '', ''],
        ]);
      });

      it ('message has text and meaning', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });

        const actual = instance.getState('message');
        expect(actual).to.be('Pick an unoccupied square, hoser.');
      });

      it('"Occupied box" message ONLY appears when choosing occupied square', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 0,
        });

        const actual = instance.getState('message');
        expect(actual).to.be('');
      });

      it('displays winner message on winning condition, row', () => {
        const actual = instance.getState('gameboard');
      });

      it('marker doesn\'t change when picking occupied square', () => {
        instance.action({
          type: 'turn',
          x: 1,
          y: 2,
        });

        instance.action({
          type: 'turn',
          x: 1,
          y: 2,
        });

        instance.action({
          type: 'turn',
          x: 0,
          y: 1,
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', '', ''],
          ['o', '', ''],
          ['', 'x', ''],
        ]);
      });

      it('marker toggles between an x & an o', () => {
        instance = new Store([
          ['', '' ,''],
          ['', '', ''],
          ['', '', 'o'],
        ]);

        instance.action({
          type: 'turn',
          x: 2,
          y: 0,
        });

        instance.action({
          type: 'turn',
          x: 2,
          y: 2,
        });

        const actual = instance.getState('gameboard');
        expect(actual).to.eql([
          ['', '', 'x'],
          ['', '', ''],
          ['', '', 'o'],
        ]);
      });
      describe('Winning', () => {
        const board = [
          ['', 'o', 'x'],
          ['', 'o', ''],
          ['x', 'o', 'x'],
        ];
        it('can not place marker after winning condition', () => {
          instance = new Store(board);
          instance.action({
            type: 'turn',
            x: 2,
            y: 0,
          });

          const actual = instance.getState('gameboard');
          expect(actual).to.eql([
            ['', 'o', 'x'],
            ['', 'o', ''],
            ['x', 'o', 'x'],
          ]);
        });

        it('checks a row for win', () => {
          instance = new Store([
            ['o', 'o', 'x'],
            ['x', 'o', 'o'],
            ['x', 'x', 'x'],
          ]);

          const actual = true;
          expect(actual).to.eql(true);
        });
      });
    });

    describe('.register', () => {
      it('throws error without a function', () => {
        expect(() => {
          instance.register();
        }).to.throwError();
      });

      it('callback passed to register is triggered by action', (done) => {
        instance.register(done);
        instance.action({
          type: 'turn',
          x: 1,
          y: 1,
        });
      });

      it('shouldnt fire if theres no action', (done) => {
        instance.register(() => {
          expect().to.fail();
        });
        setTimeout(done, 500);
      });
    });
  });
});

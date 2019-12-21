// 'use strict';
// const expect = require('expect.js');
// const Store = require('../src/javascripts/store').default;
//
// describe('Store APP', () => {
//   it('is a function', () => {
//     expect(Store).to.be.a('function');
//   });
//   it('return an object', () => {
//     const actual = new Store();
//     expect(actual).to.be.an('object');
//   })
//
//   describe('instance', () => {
//     let instance;
//     beforeEach(() => {
//       instance = new Store();
//     });
//
//     afterEach(() => {
//       instance = null;
//     });
//
//     describe('.getState', () => {
//       it('can return gameboard state', () => {
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', ''],
//           ['', '', ''],
//           ['', '', ''],
//         ]);
//       });
//
//       it('can return message', () => {
//         const actual = instance.getState('message');
//         expect(actual).to.eql('');
//       });
//     });
//
//     describe('.action', () => {
//       it('center square is o', () => {
//
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', ''],
//           ['', 'o', ''],
//           ['', '', ''],
//         ]);
//       });
//
//       it('first square last row is o', () => {
//         instance.action({
//           type: 'turn',
//           x: 0,
//           y: 2,
//         });
//
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', ''],
//           ['', '', ''],
//           ['o', '', ''],
//         ]);
//       });
//
//       it('can place x & o', () => {
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 0,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 2,
//           y: 2,
//         });
//
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', 'o', ''],
//           ['', '', ''],
//           ['', '', 'x'],
//         ]);
//       });
//
//       // TODO: refactor to an array of object to test against. map with the array to the test function.
//       it('can\'t place on a marked square', () => {
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', ''],
//           ['', 'o', ''],
//           ['', '', ''],
//         ]);
//       });
//
//       it('message has text and meaning', () => {
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//
//         const actual = instance.getState('message');
//         expect(actual).to.be('Pick an unoccupied square, hoser.');
//       });
//
//       it('"Occupied box" message ONLY appears when choosing occupied square', () => {
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 0,
//         });
//
//         const actual = instance.getState('message');
//         expect(actual).to.be('');
//       });
//
//       it('displays winner message on winning condition, row', () => {
//         const actual = instance.getState('gameboard');
//       });
//
//       it('marker doesn\'t change when picking occupied square', () => {
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 2,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 2,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 0,
//           y: 1,
//         });
//
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', ''],
//           ['x', '', ''],
//           ['', 'o', ''],
//         ]);
//       });
//
//       it('marker toggles between an x & an o', () => {
//         instance = new Store([
//           ['', '', ''],
//           ['', '', ''],
//           ['', '', 'x'],
//         ]);
//
//         instance.action({
//           type: 'turn',
//           x: 2,
//           y: 0,
//         });
//
//         instance.action({
//           type: 'turn',
//           x: 2,
//           y: 2,
//         });
//
//         const actual = instance.getState('gameboard');
//         expect(actual).to.eql([
//           ['', '', 'o'],
//           ['', '', ''],
//           ['', '', 'x'],
//         ]);
//       });
//       describe('Winning', () => {
//         const board = [
//           ['', '', 'x'],
//           ['o', 'o', 'o'],
//           ['x', '', 'x'],
//         ];
//         it('can not place marker after horizontal winning condition', () => {
//           instance = new Store(board);
//           instance.action({
//             type: 'turn',
//             x: 0,
//             y: 0,
//           });
//
//           const actual = instance.getState('gameboard');
//           expect(actual).to.eql([
//             ['', '', 'x'],
//             ['o', 'o', 'o'],
//             ['x', '', 'x'],
//           ]);
//         });
//
//         it('checks a row for win', () => {
//           instance = new Store([
//             ['o', 'o', 'x'],
//             ['x', 'o', 'o'],
//             ['x', 'x', 'x'],
//           ]);
//
//           const actual = true;
//           expect(actual).to.eql(instance.winner);
//         });
//       });
//     });
//
//     describe('.register', () => {
//       it('throws error without a function', () => {
//         expect(() => {
//           instance.register();
//         }).to.throwError();
//       });
//
//       it('callback passed to register is triggered by action', (done) => {
//         instance.register(done);
//         instance.action({
//           type: 'turn',
//           x: 1,
//           y: 1,
//         });
//       });
//
//       it('shouldnt fire if theres no action', (done) => {
//         instance.register(() => {
//           expect().to.fail();
//         });
//         setTimeout(done, 500);
//       });
//     });
//   });
// });

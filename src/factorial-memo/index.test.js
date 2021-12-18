const factorialMemo = require('./');

describe('testing the memoized factorial function', () => {

  test('test F(7, 13, 17, 9)', () => {
    const arr = [ 7, 13, 17, 9 ];
    const result = factorialMemo(arr);
    const expectedResults = [
      5040,
      6227020800,
      355687428096000,
      362880
    ];

    for (let i = 0; i < arr.length; i++) {
      expect(result[i][0]).toBe(expectedResults[i]);
    }
  });

});

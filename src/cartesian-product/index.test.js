const cartesianProd = require('./');

describe('test cartesian product of two arrays', () => {

  test('two by two arrays', () => {
    let arr1 = [ 0, 1 ];
    let arr2 = [ 3, 5 ];
    const testResult = [ [ 0, 3 ], [ 0, 5 ], [ 1, 3 ], [ 1, 5 ] ];
    const result = cartesianProd(arr1, arr2);
    expect(result).toEqual(testResult);
  });

  test('arrays with different lengths', () => {
    let arr1 = [ 1, 2 ];
    let arr2 = [ 1, 2, 3 ];
    const testResult = [
      [ 1, 1 ], [ 1, 2 ], [ 1, 3 ],
      [ 2, 1 ], [ 2, 2 ], [ 2, 3 ],
    ];
    const result = cartesianProd(arr1, arr2);
    expect(result).toEqual(testResult);
  });

});


const nlargestK = require('./');


describe('testing nlargest-k function', () => {

  test('normal case', () => {
    let arr = [ 4, 9, 3, 12, 6, 4, 15 ];
    const result = nlargestK(arr, 4, 3)
    expect(result).toBe(6);
  });

  test('n is larger than array', () => {
    let arr = [ 2, 5, 4 ];
    const result = nlargestK(arr, 5, 2);
    expect(result).toBe(-1);
  });

  test('there are no multiples of k in the array', () => {
    let arr = [ 1, 5, 7, 7, 9, 9 ];
    const result = nlargestK(arr, 2, 2);
    expect(result).toBe(-1);
  });

})

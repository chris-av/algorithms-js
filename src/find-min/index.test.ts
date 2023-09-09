import findMin from './';

describe('testing the find minimum function', () => {

  test('find minimum value of normal array', () => {
    let arr = [ 2, 6, 3, 9, 4 ];
    expect(findMin(arr)).toBe(2);
  });

  test('find minimum value of normal array with two minimum values', () => {
    let arr = [ 2, 6, 3, 9, 2 ];
    expect(findMin(arr)).toBe(2);
  });

});

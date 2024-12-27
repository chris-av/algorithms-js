import findMedian from './';

describe('find median of two sorted arrays', () => {
  test('simple case', () => {
    const arr1 = [1, 3];
    const arr2 = [2];
    expect(findMedian(arr1, arr2)).toEqual(2);
  });
  test('find median of arrays whose combined length is even', () => {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    expect(findMedian(arr1, arr2)).toEqual(3.5);
  });
  test('find median of arrays whose combined length is odd', () => {
    const arr1 = [3, 9, 12];
    const arr2 = [5, 39];
    expect(findMedian(arr1, arr2)).toEqual(9);
  });
});

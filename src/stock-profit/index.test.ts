import findMaxProfit from './';

describe('find the max profit given an array of prices for a stock', () => {
  test('only one value', () => {
    let arr = [ 10, 10, 10 ];
    expect(findMaxProfit(arr)).toBe(0);
  });
  test('ascending order', () => {
    let arr = [ 10, 20, 30 ];
    expect(findMaxProfit(arr)).toBe(20);
  });
  test('descending order', () => {
    let arr = [ 30, 20, 10 ];
    expect(findMaxProfit(arr)).toBe(0);
  });
  test('actual case', () => {
    let arr = [ 3, 12, 80, 44, 7 ];
    expect(findMaxProfit(arr)).toBe(77);
  });
});


import findPairSum from './';

describe("find pair sum", () => {
  test("no pair", () => {
    const arr = [1, 2, 3, 4, 9];
    const result = findPairSum(arr, 8);
    expect(result).toBeNull();
  });
  test("simple pair", () => {
    const arr = [1, 2, 3, 4, 9];
    const result = findPairSum(arr, 7);
    expect(result).toEqual([2, 3]);
  });
  test("repeating integers, just return first two", () => {
    const arr = [1, 1, 1, 1, 1, 1];
    const result = findPairSum(arr, 2);
    expect(result).toEqual([0, 5]);
  });
  test("larger array", () => {
    const arr = [1, 3, 8, 11, 42, 44, 71, 87];
    const result = findPairSum(arr, 50);
    expect(result).toEqual([2, 4]);
  });
});



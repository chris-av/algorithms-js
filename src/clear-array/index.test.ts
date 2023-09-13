import clearArray from './';


describe("clear array", () => {
  test("empty array", () => {
    const testArr: number[] = [];
    const result = clearArray(testArr);
    expect(result).toBe(0);
  });
  test("all zeros", () => {
    const testArr: number[] = [0, 0, 0];
    const result = clearArray(testArr);
    expect(result).toBe(0);
  });
  test("all zeros", () => {
    const testArr: number[] = [0];
    const result = clearArray(testArr);
    expect(result).toBe(0);
  });
  test("single element", () => {
    const testArr = [7];
    const result = clearArray(testArr);
    expect(result).toBe(7);
  });
  test("simple array", () => {
    const testArr = [1, 1, 1];
    const result = clearArray(testArr);
    expect(result).toBe(1);
  });
  test("three stages", () => {
    const testArr = [1, 2, 3];
    const result = clearArray(testArr);
    expect(result).toBe(3);
  });
  test("three stages but four elements", () => {
    const testArr = [1, 2, 2, 3];
    const result = clearArray(testArr);
    expect(result).toBe(3);
  });
  test("six stage solution", () => {
    const testArr = [5, 7, 11, 15, 19];
    const result = clearArray(testArr);
    expect(result).toBe(19);
  });
});


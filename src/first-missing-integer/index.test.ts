import firstLowestInteger from './';

describe("find first lowest posivite number", () => {
  test("numbers spanning across positive and negative", () => {
    const testarr = [-2, -1, 0, 1, 2];
    expect(firstLowestInteger(testarr)).toBe(3);
  });
  test("simple ordered numbers, starting from offset", () => {
    const testarr = [7, 8, 9, 11, 12];
    expect(firstLowestInteger(testarr)).toBe(1);
  });
  test("simple ordered descending numbers", () => {
    const testarr = [3, 2, 1];
    expect(firstLowestInteger(testarr)).toBe(4);
  });
  test("complex case", () => {
    const testarr = [3, 2, 5, 7, 1];
    expect(firstLowestInteger(testarr)).toBe(4);
  });
  test("complex case 2", () => {
    const testarr = [1, 2, 6, 3, 5, 4];
    expect(firstLowestInteger(testarr)).toBe(7);
  });
  test("simple ordered descending numbers, starting from offset", () => {
    const testarr = [9, 8, 7];
    expect(firstLowestInteger(testarr)).toBe(1);
  });
  test("simple ordered descending numbers, starting from offset appended with 1", () => {
    const testarr = [9, 8, 7, 1];
    expect(firstLowestInteger(testarr)).toBe(2);
  });
});


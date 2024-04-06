import commonPrefix from './';

describe("find common prefix", () => {
  test("empty string should return null", () => {
    expect(commonPrefix(["flower", "", "flow"])).toBeNull();
  });
  test("empty array should return null", () => {
    expect(commonPrefix([])).toBeNull();
  });
  test("simple case", () => {
    expect(commonPrefix(["flower", "flight", "flow"])).toBe("fl");
  });
  test("should just return the words", () => {
    expect(commonPrefix(new Array(5).fill("hello"))).toBe("hello");
  });
  test("words with no common prefix should return null", () => {
    expect(commonPrefix(["juicy", "person"])).toBeNull();
  });
});


import romanToInt from './';
describe("converting roman numerals to integers", () => {
  test("simple cases", () => {
    expect(romanToInt("I")).toEqual(1);
    expect(romanToInt("II")).toEqual(2);
    expect(romanToInt("V")).toEqual(5);
    expect(romanToInt("XX")).toEqual(20);
    expect(romanToInt("MM")).toEqual(2000);
  });
  test("numerals with subtraction", () => {
    expect(romanToInt("IV")).toEqual(4);
    expect(romanToInt("LIX")).toEqual(59);
    expect(romanToInt("MIX")).toEqual(1009);
  });
});

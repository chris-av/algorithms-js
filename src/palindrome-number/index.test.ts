import isNumberPalindrome from "./";


describe("test if number is palindrome", () => {
  test("single digit number should return true", () => {
    expect(isNumberPalindrome(1)).toBe(true);
    expect(isNumberPalindrome(7)).toBe(true);
    expect(isNumberPalindrome(8)).toBe(true);
  });
  test("all same digits should return true", () => {
    expect(isNumberPalindrome(1)).toBe(true);
    expect(isNumberPalindrome(11)).toBe(true);
    expect(isNumberPalindrome(777)).toBe(true);
    expect(isNumberPalindrome(999999999)).toBe(true);
  });
  test("test numbers that should fail", () => {
    expect(isNumberPalindrome(12)).toBe(false);
    expect(isNumberPalindrome(123)).toBe(false);
    expect(isNumberPalindrome(122)).toBe(false);
    expect(isNumberPalindrome(8181)).toBe(false);
  });
  test("test numbers that should succeed", () => {
    expect(isNumberPalindrome(121)).toBe(true);
    expect(isNumberPalindrome(1221)).toBe(true);
    expect(isNumberPalindrome(123454321)).toBe(true);
    expect(isNumberPalindrome(1221221)).toBe(true);
  });
});


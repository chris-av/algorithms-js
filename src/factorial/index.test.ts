import factorial from "./";

describe('testing the generic factorial function', () => {

  test('F(7) => 5040', () => {
    expect(factorial(7)).toBe(5040);
  });

  test('F(13) => 6227020800', () => {
    expect(factorial(13)).toBe(6227020800);
  });

  test('F(1) => 6227020800', () => {
    expect(factorial(1)).toBe(1);
  });

  test('F(17) => 355687428096000', () => {
    expect(factorial(17)).toBe(355687428096000);
  });

});

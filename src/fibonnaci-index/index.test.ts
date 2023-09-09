import fibonnaci from './';

describe('test fibonnaci', () => {

  test('testing first few terms', () => {
    expect(fibonnaci(0)).toBe(0);
    expect(fibonnaci(1)).toBe(1);
    expect(fibonnaci(2)).toBe(1);
  });

  test('F(7) => 21', () => expect(fibonnaci(7)).toBe(13));
  test('F(18) => 2584', () => expect(fibonnaci(18)).toBe(2584));
  test('F(18) => 2584', () => expect(fibonnaci(18)).toBe(2584));
  test('F(30) => 832040', () => expect(fibonnaci(30)).toBe(832040));

});


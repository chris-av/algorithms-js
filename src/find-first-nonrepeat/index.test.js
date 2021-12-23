const findFirstNonrepeat = require('./');

describe('find first non-repeat', () => {
  test('abedca -> b', () => {
    expect( findFirstNonrepeat('abedca') ).toBe('b');
  });
  test('hhrrlljhh -> j', () => {
    expect( findFirstNonrepeat('hhrrlljhh') ).toBe('j');
  });
});

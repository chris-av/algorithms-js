const encodeString = require('./');

describe('encode string using run length encoding', () => {
  test('aaabb', () => expect( encodeString('aaabb')).toBe('a3b2') );
  test('aaabba', () => expect( encodeString('aaabba')).toBe('a3b2a1') );
  test('dbhr', () => expect( encodeString('dbhr')).toBe('d1b1h1r1') );
});

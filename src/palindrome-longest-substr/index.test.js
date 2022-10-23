const longestPalindrome = require('./');

describe('test longest substring palindrome', () => {

  test('abab -> aba', () => {
    const result = longestPalindrome('abab');
    expect(result).toBe('aba');
  });

  // this fails ?? 
  test('ghnnd -> nn', () => {
    const result = longestPalindrome('ghnnd');
    expect(result).toBe('nn');
  });

  test('raceccar -> racecar', () => {
    const result = longestPalindrome('racecar');
    expect(result).toBe('racecar');
  });

});


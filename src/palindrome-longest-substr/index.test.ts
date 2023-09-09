import longestPalindrome from './';

describe('test longest substring palindrome', () => {

  test('abab -> aba', () => {
    const result = longestPalindrome('abab');
    expect(result).toBe('aba');
  });

  test('ghnnnd -> nn', () => {
    const result = longestPalindrome('ghnnnd');
    expect(result).toBe('nnn');
  });

  test('raceccar -> racecar', () => {
    const result = longestPalindrome('racecar');
    expect(result).toBe('racecar');
  });

});


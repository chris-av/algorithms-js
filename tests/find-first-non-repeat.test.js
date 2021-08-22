const findFirstNonRep = require('../utils/functions/find-first-nonrepeat');

describe('testing the find first non repeat letter function', () => {
  // feel free to use beforeBeach when initializing shared classes

  test('AABBCDDFF returns "C"', () => {
    expect(findFirstNonRep('AABBCDDFF')).toBe('C');
  });

  test('ANNDJDVV returns "A"', () => {
    expect(findFirstNonRep('ANNDJDVV')).toBe('A');
  });

  test('all letters repeat returns underscore', () => {
    expect(findFirstNonRep('AABBCCDDFF')).toBe('_');
  });

});

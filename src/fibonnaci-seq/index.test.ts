import fibonnaci from './';


describe('testing fibonnaci sequence', () => {

  test('test first term', () => {
    expect(fibonnaci(0)).toEqual( [ 0 ] );
  });
  
  test('test first two terms', () => {
    expect(fibonnaci(1)).toEqual( [ 0, 1 ] );
  });

  test('test first three terms', () => {
    expect(fibonnaci(1)).toEqual( [ 0, 1 ] );
  });

  test('test first twelve terms', () => {
    expect(fibonnaci(12)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
      55, 89
    ]);
  });

});

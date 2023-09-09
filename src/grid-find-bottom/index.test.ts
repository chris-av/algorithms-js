import findBottom from './';

describe('test the grid-find-bottom function', () => {
  let arr1 = [
    [ 0, 1, 1, 1, 1 ],
    [ 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 1, 1, 1, 1, 0 ],
    [ 1, 0, 0, 1, 0 ]
  ];

  let arr2 = [
    [ 0, 1 ],
    [ 0, 1 ]
  ];

  let arr3 = [
    [ 1, 1, 1 ],
    [ 1, 1, 1 ],
    [ 1, 1, 1 ]
  ];

  let arr4 = [
    [ 0, 1, 0, 0, 0, 1 ],
    [ 0, 1, 0, 1, 0, 0 ],
    [ 0, 1, 0, 0, 1, 0 ],
    [ 0, 0, 1, 0, 1, 0 ],
    [ 1, 0, 0, 0, 1, 0 ],
    [ 1, 1, 1, 1, 1, 0 ]
  ];

  test('test a regular case', () => {
    expect(findBottom(arr1)).toEqual(true);
  });

  test('test a small grid with opening', () => {
    expect(findBottom(arr2)).toEqual(true);
  });

  test('test a medium grid with no opening', () => {
    expect(findBottom(arr3)).toEqual(false);
  });

  test('test a larger grid with opening', () => {
    expect(findBottom(arr4)).toEqual(true);
  });

});





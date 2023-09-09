import rotateImage from './';

describe('rotate image', () => {

  let testarr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  test('rotate left', () => {
    const testResult = [ [ 3, 6, 9 ], [ 2, 5, 8 ], [ 1, 4, 7 ] ];
    const result = rotateImage(testarr, 'left');
    expect(result).toEqual(testResult);
  });

  test('rotate right', () => {
    const testResult = [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ];
    const result = rotateImage(testarr, 'right');
    expect(result).toEqual(testResult);
  });


});


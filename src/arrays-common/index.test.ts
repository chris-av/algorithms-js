import commonArr from './';


describe('get common array', () => {

  test('test 1', () => {
    const arrayOfArrays = [
      [ 5, 10, 15, 20 ],
      [ 15, 88, 1, 5, 7 ],
      [ 1, 10, 15, 5, 20 ],
      [ 5, 15 ],
    ];
    const testResult = [ 5, 15 ];
    const result = commonArr(arrayOfArrays);
    expect(result).toEqual(testResult);
  });

  test('test 2', () => {
    const arrayOfArrays = [
      [ 5, 10, 15, 20 ],
      [ 15, 88, 1, 5, 7, 20 ],
      [ 1, 10, 15, 5, 20 ],
      [ 5, 15, 20 ],
    ];
    const testResult = [ 5, 15, 20 ];
    const result = commonArr(arrayOfArrays);
    expect(result).toEqual(testResult);
  });

  test('test 3', () => {
    const arrayOfArrays = [
      [ 1, 2, 3 ],
      [ 2, 3 ],
    ];
    const testResult = [ 2, 3 ];
    const result = commonArr(arrayOfArrays);
    expect(result).toEqual(testResult);
  });

});

const mergeSort = require('../utils/functions/sort-merge');
const quickSort = require('../utils/functions/sort-quick');
const bubbleSort = require('../utils/functions/sort-bubble');

describe('testing the merge sort function', () => {

  test('test normal array', () => {
    let arr = [ -10, 33, 5, 10, 3, -19, -99, 100 ];
    const result = mergeSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual( defaultSortResult );
  });

  test('test with even numbered array', () => {
    let arr = [ 11, 5, 3, 7, 15, 22 ];
    const result = mergeSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with odd numbered array', () => {
    let arr = [ 23, 145, 11, 62, 61, 77, 93 ];
    const result = mergeSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with some duplicated elements', () => {
    let arr = [ 23, 23, 11, 61, 61, 77, 77 ];
    const result = mergeSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

});

describe('testing the quick sort function', () => {

  test('test normal array', () => {
    let arr = [ -10, 33, 5, 10, 3, -19, -99, 100 ];
    const result = quickSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual( defaultSortResult );
  });

  test('test with even numbered array', () => {
    let arr = [ 11, 5, 3, 7, 15, 22 ];
    const result = quickSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with odd numbered array', () => {
    let arr = [ 23, 145, 11, 62, 61, 77, 93 ];
    const result = quickSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with some duplicated elements', () => {
    let arr = [ 23, 23, 11, 61, 61, 77, 77 ];
    const result = quickSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

});


describe('testing the bubble sort function', () => {

  test('test normal array', () => {
    let arr = [ -10, 33, 5, 10, 3, -19, -99, 100 ];
    const result = bubbleSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual( defaultSortResult );
  });

  test('test with even numbered array', () => {
    let arr = [ 11, 5, 3, 7, 15, 22 ];
    const result = bubbleSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with odd numbered array', () => {
    let arr = [ 23, 145, 11, 62, 61, 77, 93 ];
    const result = bubbleSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

  test('test with some duplicated elements', () => {
    let arr = [ 23, 23, 11, 61, 61, 77, 77 ];
    const result = bubbleSort(arr);
    const defaultSortResult = arr.slice().sort((a,b) => a - b);
    expect(result).toEqual(defaultSortResult);
  });

});


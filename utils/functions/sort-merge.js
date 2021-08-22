// recursively split the arr into two
// once you cannot divider any more, sort the elements
// rebuild the array back up

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  if (arr.length === 2) {
    if (arr[0] > arr[1]) return [ arr[1], arr[0] ]
    else return arr;
  }

  // split the array into two
  const middleIndx = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndx);
  const rightArr = arr.slice(middleIndx);

  const leftSortedArray = mergeSort(leftArr);
  const rightSortedArray = mergeSort(rightArr);

  // make sure to combine the above arrays correctly
  let leftArrIndx = 0;
  let rightArrIndx = 0;
  let mergedArr = [];


  // left array will always be the smaller one, because of the math floor
  // if one array is traversed first, it will always be the left one

  while (leftArrIndx < leftSortedArray.length || rightArrIndx < rightSortedArray.length) {
    if (leftArrIndx >= leftSortedArray.length || leftSortedArray[leftArrIndx] > rightSortedArray[rightArrIndx]) {
      mergedArr.push( rightSortedArray[rightArrIndx] );
      rightArrIndx++;
    } else {
      mergedArr.push( leftSortedArray[leftArrIndx] );
      leftArrIndx++;
    }
  }

  return mergedArr;

}


module.exports = mergeSort;


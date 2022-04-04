// recursively split the arr into two
// once you cannot divider any more, sort the elements
// rebuild the array back up

function quickSort(arr) {

  let copiedArr = [ ...arr ];

  if (copiedArr.length <= 1) return copiedArr;

  let smallerElementsArr = [];
  let biggerElementsArr = [];

  // shift returns the first element of the array
  // it also mutates the original array by removing the first element
  let pivot = copiedArr.shift();
  let centerElementsArr = [ pivot ];

  while (copiedArr.length) {

    const currElement = copiedArr.shift();

    if (currElement === pivot) centerElementsArr.push( currElement );
    else if (currElement < pivot) smallerElementsArr.push( currElement );
    else if (currElement > pivot) biggerElementsArr.push( currElement );

  }

  const smallerElementsSortedArr = quickSort(smallerElementsArr);
  const biggerElementsSortedArr = quickSort(biggerElementsArr);

  const result = [
    ...smallerElementsSortedArr,
    ...centerElementsArr,
    ...biggerElementsSortedArr
  ];

  return result;

}

module.exports = quickSort;

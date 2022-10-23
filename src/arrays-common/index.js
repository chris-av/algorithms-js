// given an array of arrays, return one array consisting of the common elements
// between all of the arrays

function intersection(arr1, arr2) {
  let smallerArr = arr1;
  let biggerArr = arr2;

  if (arr2.length < arr1.length) { smallerArr = arr2; biggerArr = arr1; }

  // indeces to keep track of small array and big array
  let i = 0;
  let j = 0;


  while (i < smallerArr.length) {
    let leftCompare = smallerArr[i];

    while (j < biggerArr.length) {
      let rightCompare = biggerArr[j];


      // if we find the same value, go to the next item in the smaller array
      // start over in the big array
      if (leftCompare === rightCompare) {
        leftCompare = smallerArr[++i];
        j = 0;
        continue;
      }

      j++;

    }

    // if you are here, then there were no common items
    smallerArr.splice(i, 1);

    i++;
    j = 0;

  }

  return smallerArr;

}


function vanillaMethod(arrayOfArrays) {
  let accum = [];
  accum = arrayOfArrays[0];

  for (let i = 1; i < arrayOfArrays.length; i++) {
    accum = intersection(accum, arrayOfArrays[i]);
  }

  return accum;

}


// a more concise way using javascript reduce method
function reduceMethod(arrayOfArrays) {
  return arrayOfArrays.reduce((accum, curr) => {
    if (accum.length === 0) { accum = curr; }
    return accum.filter(a => curr.includes(a));
  });
}


module.exports = vanillaMethod;

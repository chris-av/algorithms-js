// go through the array looking at two values at a time
// switch the values so that they are in ascending order
module.exports = function(arr) {
  let resultArr = arr;

  for (let i = 0; i < resultArr.length; i++) {
    for (let j = i + 1; j < resultArr.length; j++) {
      if (resultArr[i] > resultArr[j]) {

        // this is special js syntax for assigning array values in place
        [ resultArr[i], resultArr[j] ] = [ resultArr[j], resultArr[i] ]

      }
    }
  }

  return resultArr;

}

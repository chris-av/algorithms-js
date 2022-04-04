module.exports = function(arr) {
  let minValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) minValue = arr[i];
  }

  return minValue;

}

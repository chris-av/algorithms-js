// encode a string by collapsing repeated characters into alpha numeric
// aaabbc -> a3b2c1
// aaabba -> a3b2a1
module.exports = function(str) {
  if (!str) return '';
  let start = 0;
  let end = 0;
  let encodingMap = '';
  let currentBit = str[start];
  let counter = 0;

  while (end <= str.length) {
    if (str[start] === str[end]) {
      counter++;
      end++;
    } else {
      encodingMap = encodingMap + currentBit + counter;
      counter = 1;
      currentBit = str[end];
      start = end;
      end++;
    }
  }

  return encodingMap;

}

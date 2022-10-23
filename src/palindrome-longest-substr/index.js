// find the lonest palindrome in a string
// palindrome is defined as a string that is the same when reversed


// solution from Nick White, YouTuber
// link: https://youtu.be/y2BD4MJqV20
module.exports = function(str) {

  if (str === null || str.length < 1) return '';

  let start = 0;
  let end = 0;

  // expand out and find the length of the substring
  function calculatePalindrome(substr, left, right) {
    if (substr === null || left > right) { return 0; }

    // while left, right within bounds AND
    // while substrings on either end are equal
    while (left >= 0 && right < substr.length && substr[left] === substr[right]) {
      left--;
      right++;
    }

    return right - left - 1;

  }

  for (let i = 0; i < str.length; i++) {
    let len1 = calculatePalindrome(str, i, i);
    let len2 = calculatePalindrome(str, i, i+1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = Math.round(i - ((len-1)/2));
      end = Math.round(i + (len/2));
    }
  }

  return str.slice(start, end);

}


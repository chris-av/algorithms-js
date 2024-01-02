export default function isNumberPalindrome(num: number) {
  if (num < 0) { return false; }
  if (num % 10 === 0 && num !== 0) { return false; }
  if (num < 10) { return true; }

  let tmp = num;
  let cpy = 0;

  while (num > cpy) {
    const remainder = tmp % 10;   // grab the remainder
    tmp = Math.floor(tmp / 10);   // decrement the number
    cpy = cpy * 10;               // shift the new number
    cpy += remainder;             // add digit onto cpy
    // tmp: 121 --> 12 --> 1  --> 
    // cpy: 0   --> 1  --> 21 --> 121
  }

  return num === cpy;

}

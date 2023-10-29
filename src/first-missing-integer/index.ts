export default function firstLowestInteger(array: number[]) {
  // solution I came up with, not the most optimal
  let missingNumber = 1;
  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    set.add(currentNumber);
    if (currentNumber === missingNumber) {
      missingNumber++;
      let alive = true;
      while (alive) {
        if (set.has(missingNumber)) {
          missingNumber++;
        } else {
          alive = false;
        }
      }
    }
  }
  return missingNumber;
}


// optimal solution according to the internet
export function alternate(array: number[]) {
  // use the given array to store information
  
  const n = array.length;

  // check to see if you can return early
  let contains = 0;
  for (let i = 0; i < n; i++) {
    if (array[i] === 1) {
      contains++;
      break;
    }
  }

  if (contains === 0) {
    return 1;
  }

  // invalid numbers defaulted to a 1
  for (let i = 0; i < n; i++) {
    // negative numbers should be ignored
    // if you think about it, the answer cannot possibly be an integer that is bigger than the length of the array
    if (array[i] <= 0 || array[i] > n) {
      array[i] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    const num = Math.abs(array[i]);
    if (num === n) {
      // if the current number is the same as the length
      // first number equals absolute value of that first number
      // the zero index number will represent the num === n
      array[0] = -1 * Math.abs(array[0]);
    } else {
      // every number between 0 and n will be mapped onto the array
      array[num] = -1 * Math.abs(array[num]);
    }
  }

  // return the first positive number in the array
  // the INDEX of that positive number represents the first missing integer
  // you *have* to start at 1
  // zero index is special
  for (let i = 1; i < n; i++) {
    const num = array[i];
    if (num > 0) {
      return i;
    }
  }

  if (array[0] > 0) {
    return n;
  }

  // if every number from 0 to n is negative, the next positive integer is n+1
  return n + 1;

}


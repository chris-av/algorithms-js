export default function clearArray(arr: number[]): number {
  let sum = 0;
  let currIndx = 0;

  while (currIndx < arr.length) {
    let x;

    // find the first nonzero integer from the left
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (num > 0) {
        x = num;
        currIndx = i;
        break;
      }
    }

    // if we did not find any nonzero numbers, break out of the while loop
    // you're done
    if (x === undefined) {
      break;
    }

    for (let i = currIndx; i < arr.length; i++) {
      if (arr[i] >= x) {
        // decrement the element
        arr[i] = arr[i] - x;
      } else {
        // break out of the loop and start over
        break;
      }
    }

    sum = sum + x;

  }

  return sum;

}

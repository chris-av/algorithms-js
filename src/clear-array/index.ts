// courtesy of my friend Reid, who thought of a way to walk the array only once
function constantSolution(arr: number[]): number {
  if (arr.length === 0) { return 0; }

  let sum = 0;
  let decr = 0;
  let i = 0;

  while (i < arr.length - 1) {
    sum = sum + arr[i];
    decr = decr + arr[i];

    if (arr[i+1] - decr >= 0) {
      arr[i+1] = arr[i+1] - decr;
      arr[i] = 0;
    } else {
      decr = 0;
    }

    i++;

  }

  sum = sum + arr[i];

  return sum;

}


// my solution, more naive
function clearArray(arr: number[]): number {
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

export default constantSolution;


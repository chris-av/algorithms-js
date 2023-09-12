// this works for any unordered array in linear time
function findPairSumLinear(arr: number[], target: number): number[] | null {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    const other = target - num;
    if (map.has(other)) {
      return [i, map.get(other)].sort((a, b) => a - b);
    }

    if (!map.has(num)) {
      map.set(num, i);
    }

  }

  return null;

}


// this works assuming the array is already ordered
function findPairSumCounter(arr: number[], target: number): number[] | null {
  let i = 0;
  let j = arr.length-1;

  while (i < j) {
    const num1 = arr[i];
    const num2 = arr[j];

    if (num1+num2 > target) {
      j--;
    } else if (num1 + num2 < target) {
      i++;
    } else {
      return [i, j];
    }
  }

  return null;

}


export default findPairSumCounter;


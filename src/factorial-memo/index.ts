// given array of numbers, calculate the factorial
// and the number of calculations needed to calculate the factorials
// inspiration for this algorithm came from an online assessment
export default function factorialMemo(nums: number[]) {
  let results = [];
  const cache = new Map();
  let calcCount = 0;

  function calcFactorial(num: number): number {
    if (num <= 1) return 1;
    const cached = cache.get(num);
    if (cached != null) return cached;
    const result = num * calcFactorial(num-1);
    cache.set(num, result)
    calcCount++;
    return result;
  }

  for (let n of nums) {
    const result = calcFactorial(n);
    results.push([ result, calcCount ]);
    calcCount = 0;
  }

  return results;

}


// given array of numbers, calculate the factorial
// and the number of calculations needed to calculate the factorials
// inspiration for this algorithm came from an online assessment
function factorialMemo(nums) {
  let results = [];
  let cache = {}
  let calcCount = 0;

  function calcFactorial(num) {
    if (num <= 1) return 1;
    const cached = cache[num];
    if (cached != null) return cached;
    const result = num * calcFactorial(num-1);
    cache[num] = result;
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


module.exports = factorialMemo;


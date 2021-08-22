// get permutation allowsinng for repeating of elements
function getPermutation(arr, length) {
  if (length === 1) return [ arr ];
  let permutations = [];
  const partialPermutation = getPermutation(arr, length - 1);
  return;
}




module.exports = getPermutation;


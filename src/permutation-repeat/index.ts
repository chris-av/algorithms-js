// get permutation allowsinng for repeating of elements
export default function getPermutation(arr: number[], length: number) {
  if (length === 1) return [ arr ];
  let permutations = [];
  const partialPermutation = getPermutation(arr, length - 1);
  return;
}




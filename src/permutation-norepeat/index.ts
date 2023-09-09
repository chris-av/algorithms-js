// find the permutations of a single set
// this function should return an array of arrays
// type GetPermutationReturn = Array<number[]>
type GetPermutationReturn = number[][];

export default function getPermutation(arr: number[]): GetPermutationReturn {

  if (arr.length === 1) return [ arr ];

  // drill down the initial array until you are left with an array with one element
  // slice removes the first n elements and then returns the new mutated array
  // slice does not mutate the original array
  let permutations: Array<Array<number>> = [];
  const partialPermutations = getPermutation(arr.slice(1));

  const firstOption = arr[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      // permutations = [
      //   ...permutations, 
      //   [ ...permutationInFront, firstOption, ...permutationAfter ]
      // ];
      permutations = permutations.concat(permutations, [
        ...permutationInFront, firstOption, ...permutationAfter
      ]);
    }

  }

  const result = permutations.sort((a, b) => {
    const t1 = a[0];
    const t2 = b[0];
    if (t1 < t2) return -1;
    else if (t1 >= t2) return 1;
    else return 1;
  });

  return result;

}


// find the permutations of a single set
// this function should return an array of arrays
function getPermutation(arr) {

  if (arr.length === 1) return [ arr ];

  // drill down the initial array until you are left with an array with one element
  let permutations = [];
  const partialPermutations = getPermutation(arr.slice(1));

  const firstOption = arr[0];

  for (let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i];

    for (let j = 0; j <= partialPermutation.length; j++) {
      const permutationInFront = partialPermutation.slice(0, j);
      const permutationAfter = partialPermutation.slice(j);
      // permutations.push( permutationInFront.concat([firstOption], permutationAfter) );
      // permutations.push( [ ...permutationInFront, firstOption, ...permutationAfter ] );
      permutations = [
        ...permutations, 
        [ ...permutationInFront, firstOption, ...permutationAfter ]
      ];
    }

  }

  return permutations.sort((a, b) => {
    if (a[0][0] < b[0][0]) return -1;
    if (a[0][0] > b[0][0]) return 1;
    if (a[0][0] == b[0][0]) return 1;
  });

}

module.exports = getPermutation;

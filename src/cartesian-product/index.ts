// a function that will take the cartesian product of two arrays
// product of two arrays should be an array of arrays that contain the combination of each array
export default function(arr1: number[], arr2: number[]) {
  let arrayProd = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arrayProd.push( [ arr1[i], arr2[j] ] );
    }
  }
  return arrayProd;
}

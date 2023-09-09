export default function(values: number[], n: number, k: number) {
  // keep only multiples of k
  // make sure to keep only unique
  let filteredValues = values.filter(x => { return x % k === 0 });
  filteredValues.sort((x, y) => { return x - y });
  filteredValues = [ ...new Set(filteredValues) ];


  // edge cases, just return 0
  if (values.length < n) return -1;
  if (filteredValues.length < n) return -1;
  if (filteredValues.length - n < 0) return -1;

  // return the nth largest from the array if it exists
  return filteredValues[filteredValues.length - n];

}

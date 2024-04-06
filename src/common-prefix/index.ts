export default function commonPrefix(arr: string[]): (string | null) {
  if (arr.length === 0) { return null; }
  let commonPrefix = arr[0];
  const words = arr.slice(1);
  for (const word of words) {
    for (const [indx, letter] of commonPrefix.split("").entries()) {
      if (letter !== word.charAt(indx)) {
        commonPrefix = commonPrefix.substring(0, indx);
        return commonPrefix === "" ? null : commonPrefix;
      }
    }
  }
  return commonPrefix;
}

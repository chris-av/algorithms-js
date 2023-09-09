// find the first character in the string that does not repeat 
// if all of the characters repeat, return an underscore instead of null 
// note: hashmap does not inherent order of keys, hence second iteration

export default function(str: string) {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    let currchar = str[i];
    let hasKey = map.has(currchar);

    if (!hasKey) {
      map.set(currchar, 1);
    } else {
      let currval = map.get(currchar);
      map.set(currchar, currval + 1);
    }

  }

  for (let i = 0; i < str.length; i++) {
    let currchar = str[i];
    if (map.get(currchar) === 1) return currchar;
  }

  return '_';

}


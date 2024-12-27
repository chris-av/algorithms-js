type NumList = number[];
export default function(nums1: NumList, nums2: NumList): number {

  const map = new Map();
  const len1 = nums1.length;
  const len2 = nums2.length;

  let i = 0;
  let j = 0;

  let table_size = 0;

  while ((i <= len1 - 1) || (j <= len2 - 1)) {
    let n1, n2;

    if (i <= len1 - 1) {
      n1 = nums1[i];
    }
    if (j <= len2 - 1) {
      n2 = nums2[j];
    }

    if ((n1 !== undefined) && (n2 !== undefined)) {
      if (n1 >= n2) {
        map.set(table_size, n2);
        table_size++;
        j++;
      } else {
        map.set(table_size, n1);
        table_size++;
        i++;
      }
    } else if (n1 !== undefined) {
      map.set(table_size++, n1);
      i++;
    } else if (n2 !== undefined) {
      map.set(table_size++, n2);
      j++;
    }

  }

  if (table_size % 2 === 0) {
    const mi_i = (table_size / 2) - 1;
    const mi_p = mi_i + 1;
    const m1 = map.get(mi_i);
    const m2 = map.get(mi_p);
    return ((m1 + m2) / 2);
  } else {
    const mi = Math.ceil((table_size / 2)) - 1;
    return map.get(mi);
  }

}

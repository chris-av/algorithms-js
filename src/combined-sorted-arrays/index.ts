import LinkedList from '@/utils/LinkedList';

export default function(list1: LinkedList, list2: LinkedList) {
  // have to allow the lists themselves to be null
  let list1_cpy: LinkedList | null = list1;
  let list2_cpy: LinkedList | null  = list2;


  let merged = new LinkedList();
  let currNode: LinkedList | null = merged;

  while (
    list1_cpy !== null &&
    list2_cpy !== null && 
    list1_cpy.data !== null &&
    list2_cpy.data !== null 
  ) {
    if (list1_cpy.data > list2_cpy.data) {
      currNode.next = list2_cpy;
      list2_cpy = list2_cpy.next;
    } else {
      currNode.next = list1_cpy;
      list1_cpy = list1_cpy.next;
    }
    currNode = currNode.next;
  }


  // point next to the next remaining, longer list
  currNode.next = list1_cpy || list2_cpy;

  // omit the first head which is zero by default
  return merged.next;

}

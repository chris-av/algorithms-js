const LinkedList = require('../../utils/LinkedList');

module.exports = function(list1, list2) {
  let merged = new LinkedList();
  let currNode = merged;

  while (list1 && list2) {
    if (list1.data > list2.data) {
      currNode.next = list2;
      list2 = list2.next;
    } else {
      currNode.next = list1;
      list1 = list1.next;
    }
    currNode = currNode.next;
  }


  // point next to the next remaining, longer list
  currNode.next = list1 || list2;

  // omit the first head which is zero by default
  return merged.next;

}

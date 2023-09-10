import LinkedList from "@/utils/LinkedList";

/*
 * given two linked lists add the two numbers
 * break apart the problem into parts
 * build the new node as you go along
 * note: if the sum is greater than or equal to ten, carry over the remainder and add
 * eg: [ 5, 5, 5 ] + [ 5, 5, 5 ] = [ 0, 1, 1, 1 ]
 * */
export default function(list1: LinkedList, list2: LinkedList) {
  let l1: LinkedList | null = list1;
  let l2: LinkedList | null = list2;
  let newList = new LinkedList()
  let currNew=  newList;
  let currNode1 = l1 as LinkedList | null;
  let currNode2 = l2 as LinkedList | null;
  let carryOver = 0;

  // traverse both ls at the same time
  // add as you go along

  while (currNode1 !== null || currNode2 !== null) {

    let sum = 0;
    let num1 = currNode1 && currNode1.data as number ? currNode1.data as number : 0;
    let num2 = currNode2 && currNode2.data as number ? currNode2.data as number : 0;

    sum = num1 + num2 + carryOver;
    carryOver = 0;
    let finalKeep;

    if (sum >= 10) {
      // if sum is >=10, then keep the ones digit and add the tens digit to the next one
      let tmp = sum.toString().split('');
      carryOver = parseInt(tmp[0]);
      finalKeep = parseInt(tmp[1]);
      currNew.add(finalKeep);
    } else {
      finalKeep = sum;
      currNew.add(finalKeep);
    }

    if (currNode1 !== null) currNode1 = currNode1.next;
    if (currNode2 !== null) currNode2 = currNode2.next;

  }

  if (carryOver > 0) { currNew.add(carryOver); }

  return newList;

}


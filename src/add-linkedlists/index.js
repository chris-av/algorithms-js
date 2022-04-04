const LinkedList = require('@utils/LinkedList');

/*
 * given two linked lists add the two numbers
 * break apart the problem into parts
 * build the new node as you go along
 * note: if the sum is greater than or equal to ten, carry over the remainder and add
 * eg: [ 5, 5, 5 ] + [ 5, 5, 5 ] = [ 0, 1, 1, 1 ]
 * */
module.exports = function(list1, list2) {
  let newList = new LinkedList()
  let currNew=  newList;
  let currNode1 = list1;
  let currNode2 = list2;
  let carryOver = 0;

  // traverse both lists at the same time
  // add as you go along

  while (currNode1 !== null | currNode2 !== null) {

    let sum = 0;
    let num1 = currNode1 && currNode1.data ? currNode1.data : 0;
    let num2 = currNode2 && currNode2.data ? currNode2.data : 0;

    sum = num1 + num2 + carryOver;
    carryOver = 0;
    let finalKeep;

    if (sum >= 10) {
      // if sum is >=10, then keep the ones digit and add the tens digit to the next one
      let tmp = (""+sum).split('');
      carryOver = parseInt(tmp[0]);
      finalKeep = parseInt(tmp[1]);
      currNew.data = finalKeep;
    } else {
      finalKeep = sum;
      currNew.data = finalKeep;
    }

    if (currNode1 !== null) currNode1 = currNode1.next;
    if (currNode2 !== null) currNode2 = currNode2.next;
    if (currNode1 !== null | currNode2 !== null) {
      currNew.next = new LinkedList(0);
      currNew = currNew.next;
    }

  }

  if (carryOver > 0) { currNew.next = new LinkedList(carryOver); }

  return newList;
}


type Data = string | number | null;
type Next = LinkedList | null;


/**
 * Linked List
 * @constructor
 * @param {any} data - any data point that can be stored at a given node
 * @param {LinkedList} next - the next node of the LinkedList
 *
 */
export default class LinkedList {
  data: Data;
  next: Next;
  constructor(data?: Data, next?: Next) {
    this.data = data === undefined ? null : data;
    this.next = (next === undefined ? null : next);
  }

  add(data: Data) {
    if (this.data === null) { this.data = data; return this; }
    let currNode: LinkedList = this;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = new LinkedList(data);

    return this;

  }

  print() {
    let i = 0;
    let currNode: LinkedList = this;
    console.log(`${i} --> ${currNode.data}`);


    while (currNode.next) {
      i++;
      currNode = currNode.next;
      console.log(`${i} --> ${currNode.data}`);
    }

    return this;

  }

}


/**
 * Linked List
 * @constructor
 * @param {any} data - any data point that can be stored at a given node
 * @param {LinkedList} next - the next node of the LinkedList
 *
 */
class LinkedList {
  constructor(data, next) {
    this.data = data;
    this.next = (next === undefined ? null : next);
  }

  /**
   * add node to the list
   * @param {any} data - any data point to be added to the linked list
   * @return {LinkedList} - returns linked list so that you can chain your methods
   */
  add(data) {
    if (this.data == undefined) { this.data = data; return this; }
    let currNode = this;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = new LinkedList(data);

    return this;

  }

}

module.exports = LinkedList;

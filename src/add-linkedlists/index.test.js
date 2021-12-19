const addLinkedList = require('./');
const util = require('util');
const LinkedList = require('../../utils/LinkedList');

describe('adding LinkedLists together', () => {

  test('555 + 555 = 1110', () => {
    let list1 = new LinkedList(5, new LinkedList(5, new LinkedList(5)));
    let list2 = new LinkedList(5, new LinkedList(5, new LinkedList(5)));
    const test = addLinkedList(list1, list2);
    const testResult = new LinkedList(0, new LinkedList(1, new LinkedList(1, new LinkedList(1))));
    expect(test).toEqual(testResult);
  });

  test('23 + 7 = 30', () => {
    let list1 = new LinkedList(3, new LinkedList(2));
    let list2 = new LinkedList(7);
    const test = addLinkedList(list1, list2);
    const testResult = new LinkedList(0, new LinkedList(3));
    expect(test).toEqual(testResult);
  });

});

import addLinkedList from './';
import LinkedList from '@/utils/LinkedList'

describe('adding LinkedLists together', () => {

  test('555 + 555 = 1110', () => {
    let list1 = new LinkedList(5).add(5).add(5);
    let list2 = new LinkedList(5).add(5).add(5);
    const test = addLinkedList(list1, list2);
    const testResult = new LinkedList(1).add(1).add(1).add(0);
    expect(test).toEqual(testResult);
  });

  test('23 + 7 = 30', () => {
    let list1 = new LinkedList(3).add(2);
    let list2 = new LinkedList(7);
    const test = addLinkedList(list1, list2);
    const testResult = new LinkedList(3).add(0)
    expect(test).toEqual(testResult);
  });

});

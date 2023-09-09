import LinkedList from '@/utils/LinkedList';
import mergedLinkedList from './';


describe('test merged-linked-list', () => {

  test('test lists of equal size', () => {
    const list1 = new LinkedList();
    list1.add(23).add(44).add(103);
    const list2 = new LinkedList();
    list2.add(41).add(47).add(100);
    const expectedResult = new LinkedList();
    expectedResult.add(23).add(41).add(44).add(47).add(100).add(103);
    const result = mergedLinkedList(list1, list2);
    expect(result).toEqual(expectedResult);
  });

  test('test where list1.length  > list2.length', () => {});
  test('test where list2.length  > list1.length', () => {});
  test('test where lists are identical', () => {});

});


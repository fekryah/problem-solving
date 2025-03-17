import { LinkedList } from '../../shared/classes/linked-list';
import { convertListToArray } from '../../shared/util/linked-list';
import { mergeTwoListsIterativly } from '../001-merge-two-lists-1';
import { mergeTwoListsRecursively } from '../002-merge-two-lists-2';

const initializeLists = () => {
  // 2 6 7 8
  const list1 = new LinkedList(2);
  list1.next = new LinkedList(6);
  list1.next.next = new LinkedList(7);
  list1.next.next.next = new LinkedList(8);

  // 1 3 4 5 9 10
  const list2 = new LinkedList(1);
  list2.next = new LinkedList(3);
  list2.next.next = new LinkedList(4);
  list2.next.next.next = new LinkedList(5);
  list2.next.next.next.next = new LinkedList(9);
  list2.next.next.next.next.next = new LinkedList(10);

  return { list1, list2 };
};

describe('mergeTwoListsIterativly', () => {
  test('merges two sorted linked lists', () => {
    const { list1, list2 } = initializeLists();

    const mergedHead = mergeTwoListsIterativly(list1, list2);
    expect(convertListToArray(mergedHead)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('mergeTwoListsRecursively', () => {
  test('merges two sorted linked lists', () => {
    const { list1, list2 } = initializeLists();
    const mergedHead = mergeTwoListsRecursively(list1, list2);
    expect(convertListToArray(mergedHead)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

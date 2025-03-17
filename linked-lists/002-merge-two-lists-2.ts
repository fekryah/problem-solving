import { LinkedList } from '../shared/classes/linked-list';
import { printLinkedList } from '../shared/util/linked-list';

export const mergeTwoListsRecursively = (
  headOne: LinkedList | null,
  headTwo: LinkedList | null
) => {
  if (!headOne) return headTwo;
  if (!headTwo) return headOne;

  if (headOne.value < headTwo.value) {
    headOne.next = mergeTwoListsRecursively(headOne.next, headTwo);
    return headOne;
  } else {
    headTwo.next = mergeTwoListsRecursively(headTwo.next, headOne);
    return headTwo;
  }
};

const list1 = new LinkedList(2);
list1.next = new LinkedList(6);
list1.next.next = new LinkedList(7);
list1.next.next.next = new LinkedList(8);

const list2 = new LinkedList(1);
list2.next = new LinkedList(3);
list2.next.next = new LinkedList(4);
list2.next.next.next = new LinkedList(5);
list2.next.next.next.next = new LinkedList(9);
list2.next.next.next.next.next = new LinkedList(10);

const mergedHead = mergeTwoListsRecursively(list1, list2);

printLinkedList(mergedHead);

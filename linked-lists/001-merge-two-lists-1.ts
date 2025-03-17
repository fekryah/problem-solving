import { LinkedList } from '../shared/classes/linked-list';
import { printLinkedList } from '../shared/util/linked-list';

export function mergeTwoListsIterativly(headOne: LinkedList, headTwo: LinkedList) {
  const mainHead = headOne.value < headTwo.value ? headOne : headTwo;

  let mainHeadPointer = mainHead;

  let head1: LinkedList | null = mainHead.next;
  let head2: LinkedList | null = headOne === mainHead ? headTwo : headOne;

  while (true) {
    if (!head1) {
      mainHeadPointer.next = head2;
      break;
    }

    if (!head2) {
      mainHeadPointer.next = head1;
      break;
    }

    if (head1.value < head2.value) {
      mainHeadPointer.next = head1;
      mainHeadPointer = head1;
      head1 = head1.next;
    } else {
      mainHeadPointer.next = head2;
      mainHeadPointer = head2;
      head2 = head2.next;
    }
  }

  return mainHead;
}

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

const mergedHead = mergeTwoListsIterativly(list1, list2);

printLinkedList(mergedHead);

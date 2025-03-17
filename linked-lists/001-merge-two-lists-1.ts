import { LinkedList } from '../shared/classes/linked-list';

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

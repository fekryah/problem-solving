import { LinkedList } from '../shared/classes/linked-list';

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

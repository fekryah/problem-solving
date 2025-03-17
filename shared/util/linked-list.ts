import { LinkedList } from '../classes/linked-list';

export const convertListToArray = (head: LinkedList | null) => {
  const result: number[] = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
};

export const printLinkedList = (head: LinkedList | null) => {
  const values = convertListToArray(head);
  console.log(values.join(' -> '));
};

import { LinkedList } from '../classes/linked-list';

export const printLinkedList = (head: LinkedList | null) => {
  let current = head;
  const values: number[] = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(' -> '));
};

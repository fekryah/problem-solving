import { Item, knapsack } from '../001-knapsack-1';
import { knapsackV2 } from '../002-knapsack-2';

const items: Item[] = [
  {
    value: 4,
    weight: 9,
  },
  {
    value: 78,
    weight: 1,
  },
  {
    value: 6,
    weight: 88,
  },
  {
    value: 14,
    weight: 9,
  },
  {
    value: 18,
    weight: 10,
  },
];

describe('knapsack', () => {
  test('knapsack 1 ', () => {
    expect(knapsack(90, items)).toBe(114);
  }, 1);
  test('knapsack 2 ', () => {
    expect(knapsackV2(90, items)).toBe(114);
  });
});

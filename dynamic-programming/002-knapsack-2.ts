import { Item } from './001-knapsack-1';

const cache: Record<`${number}-${number}`, number> = {};

// O(n) time | O(n ^ 2) space
export const knapsackV2 = (capacity: number, items: Item[]): number => {
  let result: number;
  if (!items.length) return 0;

  const cacheKey = `${capacity}-${items.length}`;

  if (cache[cacheKey]) return cache[cacheKey];

  const canFirstElementPicked = items[0].weight <= capacity;

  if (items.length === 1 && !result) {
    result = canFirstElementPicked ? items[0].value : 0;
  }

  if (!canFirstElementPicked && !result) {
    result = knapsackV2(capacity, items.slice(1));
  }
  if (!result) {
    const profitIfPicked = items[0].value + knapsackV2(capacity - items[0].weight, items.slice(1));
    const profitIfNotPicked = knapsackV2(capacity, items.slice(1));

    result = Math.max(profitIfNotPicked, profitIfPicked);
  }

  cache[cacheKey] = result;

  return result;
};

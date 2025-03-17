export type Item = { value: number; weight: number };

// O(2 ^ n) time | O(n ^ 2) space
export const knapsack = (capacity: number, items: Item[]): number => {
  const canFirstElementPicked = items[0].weight <= capacity;

  if (items.length === 1) return canFirstElementPicked ? items[0].value : 0;

  if (!canFirstElementPicked) return knapsack(capacity, items.slice(1));

  const profitIfPicked = items[0].value + knapsack(capacity - items[0].weight, items.slice(1));
  const profitIfNotPicked = knapsack(capacity, items.slice(1));

  return Math.max(profitIfNotPicked, profitIfPicked);
};

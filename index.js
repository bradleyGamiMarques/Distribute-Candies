/**
 * Understand the problem:
 * Can I restate the problem in my own words?
 * Given an array of candies determine the max amount of candy types
 * Alice is allowed to eat. Alice can eat n / 2 types of candy.
 *
 * What are the inputs to this problem?
 * An array of size n where n is always even.
 *
 * What are the outputs that should come from the solution to this problem?
 * A number.
 *
 * How should I label the important pieces of data that are a part of the
 * problem?
 * const distributeCandy = (candyType) => {}
 *
 * Break it down:
 * Concrete examples:
 * candyType = [1, 2] => 1
 * candyType = [1, 1, 1, 1] => 1
 * candyType = [1, 1, 2, 3] => 2
 * candyType = [1, 1, 2, 2, 3, 3] => 3
 */

const distributeCandy = (candyType) => {
  const set = new Set();
  for (const candy of candyType) {
    set.add(candy);
  }
  return Math.min(set.size, candyType.length / 2);
};

console.log(distributeCandy([1, 2]));
console.log(distributeCandy([1, 1, 1, 1]));
console.log(distributeCandy([1, 1, 2, 3]));
console.log(distributeCandy([1, 1, 2, 2, 3, 3]));

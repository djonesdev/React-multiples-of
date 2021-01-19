import { getMultiplesFromList } from "../utils"

test('Utilities', () => {
  expect(getMultiplesFromList([1,2,4,5,3,6], 2)).toEqual([2, 4, 6]);
  expect(getMultiplesFromList([1,2,4,5,3,6], 5)).toEqual([5]);
  expect(getMultiplesFromList([1,2,4,5,3,6], 3)).toEqual([3, 6]);
  expect(getMultiplesFromList([1,2,4,5,3,6], 1)).toEqual([1,2,4,5,3,6]);
});

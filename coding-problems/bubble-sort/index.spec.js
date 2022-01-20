const bubbleSort = require('.');

test('', () => {
  expect(bubbleSort([100, -3, 27, 12, 9])).toEqual([-3, 9, 12, 27, 100]);
});

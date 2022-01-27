const romanToInt = require('./index');

test('', () => {
  expect(romanToInt('III')).toBe(3);
});

test('', () => {
  expect(romanToInt('LVIII')).toBe(58);
});

test('', () => {
  expect(romanToInt('MCMXCIV')).toBe(1994);
});

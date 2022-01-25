const lengthOfLastWord = require('./index');

test('', () => {
  expect(lengthOfLastWord('Hello World')).toBe(5);
});

test('', () => {
  expect(lengthOfLastWord('   fly me   to   the  moonlight  ')).toBe(9);
});

test('', () => {
  expect(lengthOfLastWord('luffy is still joyboyz')).toBe(7);
});

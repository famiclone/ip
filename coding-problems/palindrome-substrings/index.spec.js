const findAllPalindromeSubstrings = require('./index');

describe('Palindrome substrings', () => {
  it('', () => {
    expect(findAllPalindromeSubstrings('aabbbaa')).toBe(7);
  });

  it('', () => {
    expect(findAllPalindromeSubstrings('xxyyxxy')).toBe(6);
  });
});

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const chars = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && chars[s[i]] < chars[s[i + 1]]) {
      result -= chars[s[i]];
    } else {
      result += chars[s[i]];
    }
  }

  return result;
};

module.exports = romanToInt;

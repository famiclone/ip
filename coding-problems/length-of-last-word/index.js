/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const words = [];
  let word = '';

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === ' ' || i === s.length) {
      if (word !== '') {
        words.push(word);
        word = '';
      }
      continue;
    } else {
      word += s[i];
    }
  }
  return words[words.length - 1].length;
};

module.exports = lengthOfLastWord;

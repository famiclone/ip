function isPalindrome(str, i, j) {
  while (j > i) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function findAllPalindromeSubstrings(str) {
  let result = 0;

  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (isPalindrome(str, i, j)) {
        result++;
      }
    }
  }

  return result || -1;
}

module.exports = findAllPalindromeSubstrings;

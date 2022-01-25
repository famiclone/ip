var isPalindrome = function (num) {
  let x = num;
  if (x === 0) {
    return true;
  } else if (x < 0 || x % 10 === 0) {
    return false;
  }
  let reversed = 0;
  while (x !== 0) {
    const remainder = x % 10;

    x = parseInt(x / 10);

    reversed = reversed * 10 + remainder;
  }

  if (num === reversed || num === reversed / 10) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;

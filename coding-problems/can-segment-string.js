let canSegmentString = function (
  s,
  dictionary = new Set(['pie', 'pear', 'apple', 'peach']),
) {
  let start = 0;
  let end = 0;

  while (end <= s.length) {
    if (dictionary.has(s.substring(start, end))) {
      if (end === s.length) {
        return true;
      }

      return canSegmentString(s.substring(end, s.length));
    } else {
      end++;
    }
  }

  return false;
};

console.log(canSegmentString('applepiepear')); // true
console.log(canSegmentString('applepeer')); // false

function removeWhiteSpace(s) {
  let read = 0;

  while (read < s.length) {
    if (s[read] === ' ' || s[read] === '  ') {
      s = s.substring(0, read) + s.substring(read + 1, s.length);
    } else {
      read++;
    }
  }

  return s;
}

console.log(removeWhiteSpace('Hello World, Ami go     kk'));

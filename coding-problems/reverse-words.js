let strRev = function (str, start, end) {
  if (!str || str.length < 2) {
    return;
  }

  while (start < end) {
    let temp = str[start];
    str = str.substr(0, start) + str[end] + str.substr(start + str[end].length);
    str = str.substr(0, end) + temp + str.substr(end + temp.length);

    start++;
    end--;
  }

  return str;
};

let reverseWords = function (sentence) {
  if (!sentence || sentence.length === 0) {
    return;
  }
  let strLen = sentence.length;
  sentence = strRev(sentence, 0, strLen - 1);

  let start = 0;
  let end = 0;

  while (true) {
    while (sentence[start] === ' ') {
      start++;
    }
    if (start >= sentence.length) {
      break;
    }

    end = start + 1;
    while (end < sentence.length && sentence[end] != ' ') {
      end++;
    }

    sentence = strRev(sentence, start, end - 1);

    start = end;
  }
  return sentence;
};

let stringToReverse1 = 'Hello World!';
let stringToReverseResult1 = reverseWords(stringToReverse1);
let stringToReverseExpect1 = 'World! Hello';
console.log(stringToReverse1);
console.log(stringToReverseResult1);

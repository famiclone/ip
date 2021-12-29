// Simple variant
function removeDuplicatesSimple(str) {
  return Array.from(new Set(str.split(''))).join('');
}

// Loop variant
function removeDuplicatesLoop(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }

  return result;
}

// No return
function removeDuplicatesNoreturn(str) {
  const hashset = new Set();
  let writePos = 0;
  let readPos = 0;

  for (let char of str) {
    if (!hashset.has(char)) {
      hashset.add(char);
      str = str.substring(0, writePos) + char;
      writePos++;
    }
    readPos++;
  }

  return str;
}

const f = removeDuplicatesNoreturn;
let str = 'We love Javascript';

console.log(f(str));

function myBtoa(input) {
  const base64chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; // 64 chars

  let result = '';
  let index = 0;

  while (index < input.length) {
    const char1 = input.charCodeAt(index++);
    const char2 = input.charCodeAt(index++);
    const char3 = input.charCodeAt(index++);

    // 8bit to 6
    let encoded1 = char1 >> 2;
    let encoded2 = ((char1 & 3) << 4) | (char2 >> 4);
    let encoded3 = ((char2 & 15) << 2) | (char3 >> 6);
    let encoded4 = char3 & 63;

    if (isNaN(char2)) {
      encoded3 = encoded4 = 64;
    } else if (isNaN(char3)) {
      encoded4 = 64;
    }

    const s = `${base64chars.charAt(encoded1)}${base64chars.charAt(
      encoded2,
    )}${base64chars.charAt(encoded3)}${base64chars.charAt(encoded4)}`;

    result += s;
  }

  return result;
}

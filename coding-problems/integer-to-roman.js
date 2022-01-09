function romanToInteger(num) {
  let arr = num.toString().split('');
  let str = '';

  arr.reverse().map((n, i) => {
    const number = parseInt(n);
    let s = '';
    if (i === 0) {
      switch (number) {
        case 4:
          s = 'IV';
          break;
        case 5:
          s = 'V';
          break;
        case 6:
          s = 'VI';
          break;
        case 7:
          s = 'VII';
          break;
        case 8:
          s = 'VIII';
          break;
        case 9:
          s = 'IX';
          break;
        default:
          s = 'I'.repeat(number);
      }
    }
    if (i === 1) {
      switch (number) {
        case 4:
          s = 'XL';
          break;
        case 5:
          s = 'L';
          break;
        case 6:
          s = 'LX';
          break;
        case 7:
          s = 'LXX';
          break;
        case 8:
          s = 'LXXX';
          break;
        case 9:
          s = 'XC';
          break;
        default:
          s = 'X'.repeat(n);
      }
    }
    if (i === 2) {
      switch (number) {
        case 4:
          s = 'CD';
          break;
        case 5:
          s = 'D';
          break;
        case 6:
          s = 'DC';
          break;
        case 7:
          s = 'DCC';
          break;
        case 8:
          s = 'DCCC';
          break;
        case 9:
          s = 'CM';
          break;
        default:
          s = 'C'.repeat(n);
      }
    }
    if (i === 3) {
      s = 'M'.repeat(n);
    }
    str = s + str;
  });

  return str;
}
